// 监听来自弹出窗口的消息
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'sendToPage') {
    console.log('--------- 调试信息 ---------');
    console.log('接收到sendToPage消息:', message);
    console.log('当前URL:', window.location.href);
    console.log('页面标题:', document.title);
    console.log('页面已完全加载:', document.readyState === 'complete');
    
    // 扩展检测导航页的逻辑，增加更多可能的选择器和支持自定义类名
    const isNavPage = checkIfNavPage();
    
    console.log('当前页面是否为导航页:', isNavPage);
    console.log('导航页检测详情:', getNavPageDetails());
    
    if (isNavPage) {
      // 找到导航页的输入框并填充数据
      const urlInput = document.getElementById('link-url') || 
                       document.querySelector('input[name="url"]') || 
                       document.querySelector('input[type="url"]');
      
      const nameInput = document.getElementById('link-name') || 
                        document.querySelector('input[name="name"]') || 
                        document.querySelector('input[name="title"]');
      
      console.log('找到输入框:', urlInput, nameInput);
      
      if (urlInput && nameInput) {
        // 填充URL和标题
        urlInput.value = message.tabInfo.url;
        nameInput.value = message.tabInfo.title;
        
        // 处理图标URL
        handleFaviconUrl(message.tabInfo.favIconUrl, message.tabInfo.url);
        
        // 如果有添加按钮，模拟点击打开模态窗口
        const addLinkBtn = document.getElementById('add-link-btn');
        const addLinkModal = document.getElementById('add-link-modal');
        
        if (addLinkBtn && addLinkModal && 
            window.getComputedStyle(addLinkModal).display === 'none') {
          console.log('尝试打开模态窗口');
          addLinkBtn.click();
        }
        
        // 尝试触发自定义事件
        try {
          const event = new CustomEvent('tabDataReceived', {
            detail: {
              url: message.tabInfo.url,
              title: message.tabInfo.title,
              favIconUrl: message.tabInfo.favIconUrl
            }
          });
          document.dispatchEvent(event);
          console.log('已触发tabDataReceived事件');
        } catch (e) {
          console.error('触发事件失败:', e);
        }
        
        // 发送成功响应
        console.log('发送成功响应');
        sendResponse({ success: true });
      } else {
        // 找不到输入框
        console.error('找不到输入框元素');
        sendResponse({ 
          success: false, 
          error: 'INPUT_NOT_FOUND',
          elementsFound: {
            urlInput: !!urlInput,
            nameInput: !!nameInput
          },
          inputSelectors: getInputSelectors()
        });
      }
    } else {
      // 不是导航页
      console.error('当前页面不是导航页。URL:', window.location.href);
      // 返回当前页面信息以便调试
      sendResponse({ 
        success: false, 
        error: 'NOT_NAV_PAGE',
        currentUrl: window.location.href,
        pageTitle: document.title,
        readyState: document.readyState,
        hasAddLinkModal: !!document.querySelector('#add-link-modal'),
        possibleElements: findPossibleNavElements(),
        bodyContent: document.body.innerHTML.substring(0, 300) + '...' // 返回页面更多内容用于调试
      });
    }
    console.log('------------------------');
    return true;
  }

  // 添加页面监测功能
  if (message.action === 'checkPage') {
    console.log('接收到页面检测请求');
    const pageInfo = {
      url: window.location.href,
      title: document.title,
      readyState: document.readyState,
      isNavPage: checkIfNavPage(),
      navPageDetails: getNavPageDetails(),
      possibleElements: findPossibleNavElements(),
      contentLoaded: true
    };
    console.log('页面检测结果:', pageInfo);
    sendResponse(pageInfo);
    return true;
  }
});

// 获取导航页检测详情
function getNavPageDetails() {
  return {
    hasIndexInUrl: window.location.href.includes('index.html'),
    hasNavigationInUrl: window.location.href.includes('navigation'),
    hasBookmarkInUrl: window.location.href.includes('bookmark'),
    hasAddLinkModal: !!document.querySelector('#add-link-modal'),
    hasLinkUrl: !!document.querySelector('#link-url'),
    hasLinkName: !!document.querySelector('#link-name'),
    hasAddLinkForm: !!document.querySelector('.add-link-form'),
    hasFormWithAddId: !!document.querySelector('form[id*="add"]'),
    hasFormWithLinkId: !!document.querySelector('form[id*="link"]'),
    hasUrlInput: !!document.querySelector('input[name="url"]'),
    hasNameInput: !!document.querySelector('input[name="name"]'),
    documentReady: document.readyState
  };
}

// 获取页面上的输入选择器信息
function getInputSelectors() {
  // 查找页面中所有输入框
  const allInputs = Array.from(document.querySelectorAll('input'));
  return {
    allInputCount: allInputs.length,
    inputDetails: allInputs.slice(0, 10).map(input => ({
      id: input.id,
      name: input.name,
      type: input.type,
      class: input.className,
      value: input.value ? '有值' : '无值'
    }))
  };
}

// 检查当前页面是否为导航页
function checkIfNavPage() {
  // 基于URL检查
  const isNavURL = 
    window.location.href.includes('index.html') || 
    window.location.href.includes('navigation') ||
    window.location.href.includes('bookmark');
  
  // 基于DOM元素检查
  const hasNavElements = 
    document.querySelector('#add-link-modal') ||
    document.querySelector('#link-url') || 
    document.querySelector('#link-name') ||
    document.querySelector('.add-link-form') ||
    document.querySelector('form[id*="add"]') ||
    document.querySelector('form[id*="link"]') ||
    document.querySelector('form[class*="add"]') ||
    document.querySelector('input[name="url"]') ||
    (document.querySelector('input[type="url"]') && document.querySelector('input[name="name"]'));
  
  // 返回是否为导航页的判断结果
  return isNavURL || hasNavElements;
}

// 查找可能的导航页元素
function findPossibleNavElements() {
  const elements = {
    forms: [],
    inputs: [],
    modals: []
  };
  
  // 查找表单
  document.querySelectorAll('form').forEach(form => {
    elements.forms.push({
      id: form.id,
      className: form.className
    });
  });
  
  // 查找输入框
  document.querySelectorAll('input[type="url"], input[type="text"]').forEach(input => {
    elements.inputs.push({
      id: input.id,
      name: input.name,
      type: input.type
    });
  });
  
  // 查找模态窗口
  document.querySelectorAll('div[class*="modal"], div[id*="modal"]').forEach(modal => {
    elements.modals.push({
      id: modal.id,
      className: modal.className
    });
  });
  
  return elements;
}

// 处理图标URL
function handleFaviconUrl(favIconUrl, pageUrl) {
  try {
    console.log('处理图标URL，原始favicon:', favIconUrl);
    
    // 优化的小红书图标URL，确保100%能获取到
    const XIAOHONGSHU_ICON = 'https://ci.xiaohongshu.com/favicon.ico';
    // 备用的小红书图标URL，防止主URL失效
    const XIAOHONGSHU_BACKUP_ICON = 'https://static.xiaohongshu.com/static-icon/favicon.ico';
    // 第三个备选的小红书图标URL
    const XIAOHONGSHU_THIRD_ICON = 'https://www.xiaohongshu.com/favicon.ico';
    
    // 特殊网站图标处理
    const specialFavicons = {
      'xiaohongshu.com': XIAOHONGSHU_ICON,
      'www.xiaohongshu.com': XIAOHONGSHU_ICON,
      'xhslink.com': XIAOHONGSHU_ICON,
      'weibo.com': 'https://weibo.com/favicon.ico',
      'zhihu.com': 'https://static.zhihu.com/heifetz/favicon.ico',
      'www.zhihu.com': 'https://static.zhihu.com/heifetz/favicon.ico',
      'douyin.com': 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico'
    };
    
    // 解析URL获取域名
    const domain = new URL(pageUrl).hostname;
    console.log('URL域名:', domain);
    
    // 确定最终的图标URL
    let finalFaviconUrl = favIconUrl;
    
    // 对于小红书网站，强制使用预设图标
    if (domain.includes('xiaohongshu') || domain.includes('xhslink')) {
      console.log('检测到小红书网站，使用预设图标');
      
      // 保存所有小红书图标URL到本地存储
      chrome.storage.local.set({
        'xiaohongshuIcon': XIAOHONGSHU_ICON,
        'xiaohongshuBackupIcon': XIAOHONGSHU_BACKUP_ICON,
        'xiaohongshuThirdIcon': XIAOHONGSHU_THIRD_ICON,
        'lastXiaohongshuIconUpdate': new Date().getTime()
      }, function() {
        console.log('已保存小红书图标到本地存储');
      });
      
      // 尝试使用主图标，如果失败则使用备用图标
      const img = new Image();
      let retryCount = 0;
      
      img.onerror = function() {
        retryCount++;
        console.log(`图标加载失败，重试次数: ${retryCount}`);
        
        if (retryCount === 1) {
          console.log('尝试使用备用图标');
          img.src = XIAOHONGSHU_BACKUP_ICON;
        } else if (retryCount === 2) {
          console.log('尝试使用第三个备选图标');
          img.src = XIAOHONGSHU_THIRD_ICON;
        } else {
          console.log('所有图标URL都加载失败，使用默认图标');
          updateFaviconInDOM('https://www.google.com/favicon.ico');
        }
      };
      
      img.onload = function() {
        console.log('图标加载成功');
        updateFaviconInDOM(img.src);
        
        // 保存成功加载的图标URL
        chrome.storage.local.set({
          'lastSuccessfulIcon': img.src,
          'lastIconUpdateTime': new Date().getTime()
        });
      };
      
      img.src = XIAOHONGSHU_ICON;
      
      return XIAOHONGSHU_ICON;
    }
    // 对于其他特定网站使用预设的图标URL
    else if (specialFavicons[domain]) {
      console.log('使用特定网站预设图标:', specialFavicons[domain]);
      finalFaviconUrl = specialFavicons[domain];
    } 
    // 无图标或使用Google默认图标时尝试备用方案
    else if (!finalFaviconUrl || finalFaviconUrl.includes('s2.googleusercontent.com')) {
      // 尝试推测favicon位置
      const urlObj = new URL(pageUrl);
      const potentialFavicons = [
        `${urlObj.origin}/favicon.ico`,
        `${urlObj.origin}/favicon.png`,
        `${urlObj.origin}/apple-touch-icon.png`,
        `${urlObj.origin}/apple-touch-icon-precomposed.png`
      ];
      
      console.log('尝试推测favicon位置:', potentialFavicons[0]);
      
      // 使用Google的favicon服务作为最后的备份
      finalFaviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
      console.log('使用Google图标服务作为备份:', finalFaviconUrl);
    }
    
    // 更新DOM中的图标元素
    updateFaviconInDOM(finalFaviconUrl);
    
    return finalFaviconUrl;
  } catch (e) {
    console.error('处理图标URL出错:', e);
    return favIconUrl || '';
  }
}

// 更新DOM中的图标元素
function updateFaviconInDOM(iconUrl) {
  if (!iconUrl) return;
  
  // 查找可能的图标输入字段
  const faviconInput = document.getElementById('link-icon') || 
                      document.querySelector('input[name="icon"]') ||
                      document.querySelector('input[name="favicon"]');
  
  // 查找可能的图标预览元素
  const faviconPreview = document.querySelector('.icon-preview img') ||
                        document.querySelector('.favicon-preview');
  
  if (faviconInput) {
    // 如果找到图标输入字段，填充图标URL
    console.log('找到图标输入字段，填充图标URL:', iconUrl);
    faviconInput.value = iconUrl;
  }
  
  if (faviconPreview) {
    // 如果找到图标预览元素，更新预览图
    console.log('找到图标预览元素，更新预览图:', iconUrl);
    faviconPreview.src = iconUrl;
  }
  
  // 尝试查找图标选择器下拉菜单并选择favicon选项
  const iconSelectors = document.querySelectorAll('select[id*="icon"], select[name*="icon"]');
  iconSelectors.forEach(selector => {
    const faviconOption = Array.from(selector.options).find(option => 
      option.text.toLowerCase().includes('favicon') || 
      option.value.toLowerCase().includes('favicon')
    );
    
    if (faviconOption) {
      console.log('找到图标选择器，选择favicon选项');
      selector.value = faviconOption.value;
      
      // 触发change事件
      const event = new Event('change', { bubbles: true });
      selector.dispatchEvent(event);
    }
  });
  
  // 将favicon URL存储到window对象，方便导航页脚本获取
  window.lastFaviconUrl = iconUrl;
}

// 向页面添加接收标签信息的功能
document.addEventListener('DOMContentLoaded', function() {
  console.log('导航页内容脚本已加载');
  
  // 创建一个隐藏的辅助元素，用于存储标签信息
  const helper = document.createElement('div');
  helper.id = 'tab-info-helper';
  helper.style.display = 'none';
  document.body.appendChild(helper);
  
  // 添加多个自定义事件监听器以增加兼容性
  window.addEventListener('tabInfoReceived', function(e) {
    console.log('接收到tabInfoReceived事件', e.detail);
    fillFormWithTabInfo(e.detail);
  });
  
  document.addEventListener('tabDataReceived', function(e) {
    console.log('接收到tabDataReceived事件', e.detail);
    fillFormWithTabInfo(e.detail);
  });
  
  // 提取填充表单的函数
  function fillFormWithTabInfo(tabInfo) {
    // 填充表单
    const urlInput = document.getElementById('link-url') || 
                     document.querySelector('input[name="url"]') || 
                     document.querySelector('input[type="url"]');
    
    const nameInput = document.getElementById('link-name') || 
                      document.querySelector('input[name="name"]') || 
                      document.querySelector('input[name="title"]');
    
    if (urlInput && nameInput) {
      urlInput.value = tabInfo.url;
      nameInput.value = tabInfo.title;
      
      // 处理图标
      if (tabInfo.favIconUrl) {
        handleFaviconUrl(tabInfo.favIconUrl, tabInfo.url);
      }
      
      console.log('表单已填充:', tabInfo.url, tabInfo.title);
    } else {
      console.error('表单填充失败，找不到输入框元素');
    }
  }
  
  // 暴露一个全局函数，以便于调试
  window.receiveTabInfo = fillFormWithTabInfo;
  
  // 检查页面是否为导航页
  if (checkIfNavPage()) {
    console.log('检测到当前页面是导航页');
    
    // 添加一个小提示，通知用户可以使用扩展
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'rgba(30, 144, 255, 0.8)';
    notification.style.color = 'white';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.style.zIndex = '9999';
    notification.style.fontSize = '14px';
    notification.style.maxWidth = '300px';
    notification.style.transition = 'opacity 0.5s ease-in-out';
    notification.style.opacity = '0';
    notification.textContent = '可以使用"标签页选择器"扩展快速添加其他标签页';
    
    // 添加关闭按钮
    const closeBtn = document.createElement('span');
    closeBtn.textContent = '×';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '5px';
    closeBtn.style.right = '8px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontSize = '16px';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.addEventListener('click', function() {
      document.body.removeChild(notification);
    });
    
    notification.appendChild(closeBtn);
    document.body.appendChild(notification);
    
    // 淡入效果
    setTimeout(function() {
      notification.style.opacity = '1';
    }, 500);
    
    // 5秒后自动淡出
    setTimeout(function() {
      notification.style.opacity = '0';
      
      // 完全淡出后移除元素
      setTimeout(function() {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 500);
    }, 5000);
  }
});

// 页面加载完成时
window.addEventListener('load', function() {
  // 如果当前页面是小红书网站
  if (window.location.hostname.includes('xiaohongshu.com')) {
    console.log('检测到小红书网站，准备提取图标信息');
    
    // 向后台脚本发送提取图标的请求
    chrome.runtime.sendMessage({
      action: 'extractXiaohongshuIcon'
    }, function(response) {
      console.log('收到小红书图标提取响应:', response);
      
      if (response && response.success && response.iconUrl) {
        console.log('成功提取小红书图标:', response.iconUrl);
        
        // 保存提取到的图标
        chrome.storage.local.set({
          'xiaohongshuIcon': response.iconUrl,
          'lastXiaohongshuIconUpdate': new Date().getTime()
        }, function() {
          console.log('已保存小红书图标到本地存储');
        });
      }
    });
    
    // 自行提取页面中的图标（备用方法）
    setTimeout(function() {
      try {
        // 尝试从页面提取图标信息
        const allLinks = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
        console.log('页面中找到图标链接数量:', allLinks.length);
        
        allLinks.forEach(link => {
          if (link.href) {
            console.log('找到小红书图标链接:', link.href);
            // 将找到的图标信息存储到本地存储中
            chrome.storage.local.set({
              'xiaohongshuIcon': link.href,
              'lastXiaohongshuIconUpdate': new Date().getTime()
            }, function() {
              console.log('成功保存小红书图标链接:', link.href);
            });
          }
        });
        
        // 如果找不到标准图标链接，尝试其他方法
        if (allLinks.length === 0) {
          console.log('使用预设小红书图标');
          chrome.storage.local.set({
            'xiaohongshuIcon': 'https://ci.xiaohongshu.com/favicon.ico',
            'lastXiaohongshuIconUpdate': new Date().getTime()
          });
        }
      } catch (e) {
        console.error('提取小红书图标时出错:', e);
      }
    }, 1000); // 延迟1秒执行，确保页面加载完成
  }
}); 