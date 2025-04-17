// 当弹出窗口加载时获取所有标签页
document.addEventListener('DOMContentLoaded', function() {
  // 获取当前标签信息
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTab = tabs[0];
    
    // 在弹出窗口显示当前标签信息
    document.getElementById('tab-info').innerHTML = `
      <p><strong>标题:</strong> ${currentTab.title}</p>
      <p><strong>URL:</strong> ${currentTab.url}</p>
    `;
    
    // 检查当前页面是否为导航页
    checkCurrentPage(currentTab);
  });
  
  // 获取所有标签列表
  chrome.tabs.query({}, function(tabs) {
    const tabsList = document.getElementById('tabs-list');
    
    // 首先添加一个提示
    const tipElement = document.createElement('p');
    tipElement.className = 'tip';
    tipElement.textContent = '请先打开您的导航页，然后选择要发送的标签';
    tabsList.appendChild(tipElement);
    
    // 为每个标签创建一个列表项
    tabs.forEach(function(tab) {
      const tabElement = document.createElement('div');
      tabElement.className = 'tab-item';
      
      // 添加favicon
      const favicon = document.createElement('img');
      favicon.src = tab.favIconUrl || 'images/default-favicon.png';
      favicon.className = 'favicon';
      tabElement.appendChild(favicon);
      
      // 添加标题
      const title = document.createElement('span');
      title.textContent = tab.title;
      title.className = 'tab-title';
      // 如果标题太长，显示省略号
      title.title = tab.title;
      tabElement.appendChild(title);
      
      // 添加发送按钮
      const sendButton = document.createElement('button');
      sendButton.textContent = '发送';
      sendButton.className = 'send-button';
      sendButton.addEventListener('click', function() {
        sendToCurrentTab(tab);
      });
      tabElement.appendChild(sendButton);
      
      tabsList.appendChild(tabElement);
    });
  });
  
  // 检查当前页面是否为导航页
  function checkCurrentPage(tab) {
    const statusText = document.getElementById('status');
    
    try {
      // 向当前页面发送检测请求
      chrome.tabs.sendMessage(
        tab.id,
        { action: 'checkPage' },
        function(response) {
          // 检查是否收到响应
          if (chrome.runtime.lastError) {
            console.error('页面检测错误:', chrome.runtime.lastError);
            showPageWarning('无法与页面通信，请确保扩展有权限访问该页面');
            return;
          }
          
          if (!response) {
            console.error('未收到页面响应');
            showPageWarning('页面未响应，内容脚本可能未加载');
            return;
          }
          
          console.log('页面检测结果:', response);
          
          // 检查是否为导航页
          if (!response.isNavPage) {
            showPageWarning('当前页面不是导航页，请先打开您的导航页！');
          } else {
            hidePageWarning();
            showPageSuccess('已检测到导航页，您可以选择要发送的标签了');
          }
        }
      );
    } catch (e) {
      console.error('页面检测异常:', e);
      showPageWarning('检测页面时出错，请刷新页面后重试');
    }
  }
  
  // 显示页面警告
  function showPageWarning(message) {
    const statusText = document.getElementById('status');
    statusText.textContent = message;
    statusText.className = 'status warning';
    statusText.style.display = 'block';
  }
  
  // 显示页面成功信息
  function showPageSuccess(message) {
    const statusText = document.getElementById('status');
    statusText.textContent = message;
    statusText.className = 'status success';
    statusText.style.display = 'block';
    
    // 3秒后自动隐藏
    setTimeout(function() {
      statusText.style.display = 'none';
    }, 3000);
  }
  
  // 隐藏页面信息
  function hidePageWarning() {
    const statusText = document.getElementById('status');
    statusText.style.display = 'none';
  }
  
  // 发送所选标签信息到当前标签页
  function sendToCurrentTab(selectedTab) {
    // 获取当前活动标签
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const currentTab = tabs[0];
      const statusText = document.getElementById('status');
      statusText.style.display = 'block';
      
      // 显示加载状态
      statusText.textContent = '正在发送...';
      statusText.className = 'status loading';
      
      // 处理特殊网站图标
      processSpecialSiteIcon(selectedTab, function(processedTab) {
        // 准备要发送的标签信息
        const tabInfo = {
          url: processedTab.url,
          title: processedTab.title,
          favIconUrl: processedTab.favIconUrl
        };
        
        console.log('正在发送标签信息:', tabInfo);
        
        // 向当前标签发送消息
        try {
          chrome.tabs.sendMessage(
            currentTab.id,
            {
              action: 'sendToPage',
              tabInfo: tabInfo
            },
            function(response) {
              // 检查是否有错误
              if (chrome.runtime.lastError) {
                console.error('发送消息错误:', chrome.runtime.lastError);
                statusText.textContent = '发送失败，无法与页面通信';
                statusText.className = 'status error';
                
                showDetailedError('无法与页面通信可能是因为：<br>1. 内容脚本未加载<br>2. 页面被刷新<br>3. 扩展权限不足');
                return;
              }
              
              console.log('收到回复:', response);
              
              if (response) {
                if (response.success) {
                  // 发送成功
                  statusText.textContent = '发送成功！';
                  statusText.className = 'status success';
                  
                  // 2秒后关闭弹窗
                  setTimeout(function() {
                    window.close();
                  }, 2000);
                } else {
                  // 发送失败
                  statusText.className = 'status error';
                  
                  if (response.error === 'NOT_NAV_PAGE') {
                    statusText.textContent = '发送失败，请确保导航页已打开';
                    
                    // 显示更详细的错误信息
                    const detailsElement = document.createElement('div');
                    detailsElement.className = 'error-details';
                    
                    // 尝试提供更多信息
                    if (response.currentUrl) {
                      detailsElement.innerHTML += `<p>当前页面: ${response.currentUrl}</p>`;
                    }
                    
                    if (response.navPageDetails) {
                      detailsElement.innerHTML += `<p>页面分析: ${formatNavPageDetails(response.navPageDetails)}</p>`;
                    }
                    
                    detailsElement.innerHTML += `
                      <p class="help-text">请按照以下步骤解决:</p>
                      <ol>
                        <li>打开您的导航页</li>
                        <li>确保导航页包含添加链接的相关元素</li>
                        <li>刷新导航页后再次尝试发送</li>
                      </ol>
                    `;
                    
                    // 检查是否已经添加了详细信息
                    const existingDetails = document.querySelector('.error-details');
                    if (existingDetails) {
                      existingDetails.remove();
                    }
                    
                    // 添加到状态消息后面
                    statusText.after(detailsElement);
                  } else if (response.error === 'INPUT_NOT_FOUND') {
                    statusText.textContent = '发送失败，在导航页上找不到必要的输入框';
                    
                    // 显示输入框详细信息
                    if (response.inputSelectors) {
                      showDetailedError(`
                        找到的输入框数量: ${response.inputSelectors.allInputCount}<br>
                        请确保您的导航页面中有id为"link-url"和"link-name"的输入框<br>
                        或者有name为"url"和"name"的输入框。
                      `);
                    }
                  } else {
                    statusText.textContent = '发送失败，请重试';
                  }
                }
              } else {
                // 无响应可能是因为content script没有加载或其他错误
                statusText.textContent = '发送失败，请确保导航页已打开且扩展有权限';
                statusText.className = 'status error';
                
                showDetailedError(`
                  可能原因:<br>
                  1. 内容脚本未加载 - 请刷新页面<br>
                  2. 导航页结构不符合预期 - 请检查页面HTML<br>
                  3. 浏览器权限问题 - 请检查扩展权限
                `);
                
                console.error('发送消息无响应，可能是content script未加载或权限问题');
              }
            }
          );
        } catch (e) {
          // 捕获可能的异常
          console.error('发送消息异常:', e);
          statusText.textContent = '发送失败，出现意外错误';
          statusText.className = 'status error';
          
          showDetailedError(`
            发送时出现错误: ${e.message}<br>
            请刷新页面后重试
          `);
        }
      });
    });
  }
  
  // 格式化导航页详情
  function formatNavPageDetails(details) {
    if (!details) return '无数据';
    
    const keys = {
      hasIndexInUrl: 'URL包含index',
      hasNavigationInUrl: 'URL包含navigation',
      hasBookmarkInUrl: 'URL包含bookmark',
      hasAddLinkModal: '有添加链接模态框',
      hasLinkUrl: '有link-url输入框',
      hasLinkName: '有link-name输入框',
      hasUrlInput: '有url输入框',
      hasNameInput: '有name输入框',
      documentReady: '文档状态'
    };
    
    let text = '';
    for (const key in keys) {
      if (details[key] !== undefined) {
        text += `${keys[key]}: ${details[key] ? '是' : '否'}, `;
      }
    }
    
    return text.substr(0, text.length - 2);
  }
  
  // 显示详细错误信息
  function showDetailedError(htmlContent) {
    // 检查是否已经添加了详细信息
    const existingDetails = document.querySelector('.error-details');
    if (existingDetails) {
      existingDetails.remove();
    }
    
    // 创建新的详细信息元素
    const detailsElement = document.createElement('div');
    detailsElement.className = 'error-details';
    detailsElement.innerHTML = htmlContent;
    
    // 添加到状态消息后面
    const statusText = document.getElementById('status');
    statusText.after(detailsElement);
  }
  
  // 处理特殊网站的图标
  function processSpecialSiteIcon(tab, callback) {
    const url = tab.url;
    let domain = null;
    
    try {
      domain = new URL(url).hostname;
    } catch (e) {
      console.error('解析URL失败:', e);
      callback(tab); // 出错时直接返回原始标签
      return;
    }
    
    // 小红书图标的强制处理（始终使用固定URL）
    if (domain.includes('xiaohongshu') || domain.includes('xhslink')) {
      console.log('检测到小红书网站，使用固定图标URL');
      
      // 小红书图标固定URL
      const XIAOHONGSHU_ICON = 'https://ci.xiaohongshu.com/favicon.ico';
      const XIAOHONGSHU_BACKUP_ICON = 'https://static.xiaohongshu.com/static-icon/favicon.ico';
      
      // 创建新对象而非修改原对象
      const modifiedTab = Object.assign({}, tab);
      modifiedTab.favIconUrl = XIAOHONGSHU_ICON;
      
      // 保存图标URL到本地存储
      chrome.storage.local.set({
        'xiaohongshuIcon': XIAOHONGSHU_ICON,
        'xiaohongshuBackupIcon': XIAOHONGSHU_BACKUP_ICON,
        'lastXiaohongshuIconUpdate': new Date().getTime()
      }, function() {
        console.log('已在popup中保存小红书图标URL');
        callback(modifiedTab);
      });
      
      return; // 提前返回，避免执行后续代码
    }
    
    // 检查是否有其他特殊网站的图标
    chrome.storage.local.get(['specialWebsiteIcons'], function(result) {
      const specialIcons = result.specialWebsiteIcons || {};
      
      if (specialIcons[domain]) {
        console.log(`使用特殊网站图标 ${domain}:`, specialIcons[domain]);
        const modifiedTab = Object.assign({}, tab);
        modifiedTab.favIconUrl = specialIcons[domain];
        callback(modifiedTab);
      } else {
        // 没有特殊处理，直接返回原始标签
        callback(tab);
      }
    });
  }
  
  // 检查权限按钮
  const checkPermissionsBtn = document.getElementById('check-permissions');
  if (checkPermissionsBtn) {
    checkPermissionsBtn.addEventListener('click', function() {
      checkExtensionPermissions();
    });
  }
  
  // 重新加载扩展按钮
  const reloadExtensionBtn = document.getElementById('reload-extension');
  if (reloadExtensionBtn) {
    reloadExtensionBtn.addEventListener('click', function() {
      reloadExtension();
    });
  }
  
  // 检查扩展权限
  function checkExtensionPermissions() {
    const statusText = document.getElementById('status');
    statusText.textContent = '正在检查权限...';
    statusText.className = 'status loading';
    statusText.style.display = 'block';
    
    // 获取当前标签页
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      if (!tabs || tabs.length === 0) {
        showDetailedError('无法获取当前标签页信息');
        return;
      }
      
      const currentTab = tabs[0];
      
      // 尝试向当前页面发送消息
      chrome.tabs.sendMessage(
        currentTab.id,
        { action: 'checkPage' },
        function(response) {
          if (chrome.runtime.lastError) {
            console.error('权限检查失败:', chrome.runtime.lastError);
            statusText.textContent = '权限检查失败';
            statusText.className = 'status error';
            
            showDetailedError(`
              扩展可能没有权限访问当前页面:<br>
              1. 请确保在扩展管理页允许"读取和更改您访问的网站的所有数据"<br>
              2. 尝试刷新页面后再使用扩展<br>
              3. 检查网站是否有内容安全策略(CSP)限制
            `);
            return;
          }
          
          if (!response) {
            statusText.textContent = '页面通信失败';
            statusText.className = 'status error';
            showDetailedError('无法与当前页面通信，内容脚本可能未正确加载');
          } else {
            statusText.textContent = '权限检查通过';
            statusText.className = 'status success';
            
            setTimeout(function() {
              statusText.style.display = 'none';
            }, 3000);
          }
        }
      );
    });
  }
  
  // 重新加载扩展
  function reloadExtension() {
    const statusText = document.getElementById('status');
    statusText.textContent = '正在重新加载扩展...';
    statusText.className = 'status loading';
    statusText.style.display = 'block';
    
    // 使用chrome.runtime.reload()重新加载扩展
    try {
      chrome.runtime.reload();
    } catch (e) {
      console.error('重新加载扩展失败:', e);
      statusText.textContent = '重新加载失败，请手动刷新页面';
      statusText.className = 'status error';
    }
  }
}); 