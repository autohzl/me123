// 监听来自弹出窗口的消息
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'sendToPage') {
    console.log('接收到sendToPage消息:', message);
    
    // 扩展检测导航页的逻辑，增加更多可能的选择器和支持自定义类名
    const isNavPage = checkIfNavPage();
    
    console.log('当前页面是否为导航页:', isNavPage);
    
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
          }
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
        hasAddLinkModal: !!document.querySelector('#add-link-modal'),
        possibleElements: findPossibleNavElements(),
        bodyContent: document.body.innerHTML.substring(0, 200) + '...' // 返回页面部分内容用于调试
      });
    }
    
    return true;
  }
});

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
  // 查找可能的图标输入字段
  const faviconInput = document.getElementById('link-icon') || 
                       document.querySelector('input[name="icon"]') ||
                       document.querySelector('input[name="favicon"]');
  
  // 查找可能的图标预览元素
  const faviconPreview = document.querySelector('.icon-preview img') ||
                        document.querySelector('.favicon-preview');
  
  if (faviconInput) {
    // 如果找到图标输入字段，填充图标URL
    console.log('找到图标输入字段，填充图标URL:', favIconUrl);
    faviconInput.value = favIconUrl || getFallbackFaviconUrl(pageUrl);
  }
  
  if (faviconPreview) {
    // 如果找到图标预览元素，更新预览图
    console.log('找到图标预览元素，更新预览图:', favIconUrl);
    faviconPreview.src = favIconUrl || getFallbackFaviconUrl(pageUrl);
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
  window.lastFaviconUrl = favIconUrl || getFallbackFaviconUrl(pageUrl);
}

// 获取备用图标URL
function getFallbackFaviconUrl(url) {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch (e) {
    console.error('无法解析URL获取备用图标:', e);
    return '';
  }
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