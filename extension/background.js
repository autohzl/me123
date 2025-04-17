// 扩展安装或更新时触发
chrome.runtime.onInstalled.addListener(function() {
  console.log('标签页选择器扩展已安装');
  
  // 小红书图标固定URL
  const XIAOHONGSHU_ICON = 'https://ci.xiaohongshu.com/favicon.ico';
  const XIAOHONGSHU_BACKUP_ICON = 'https://static.xiaohongshu.com/static-icon/favicon.ico';
  
  // 保存默认的特殊网站图标
  const defaultIcons = {
    'xiaohongshu.com': XIAOHONGSHU_ICON,
    'www.xiaohongshu.com': XIAOHONGSHU_ICON,
    'xhslink.com': XIAOHONGSHU_ICON,
    'weibo.com': 'https://weibo.com/favicon.ico',
    'zhihu.com': 'https://static.zhihu.com/heifetz/favicon.ico',
    'www.zhihu.com': 'https://static.zhihu.com/heifetz/favicon.ico',
    'douyin.com': 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico'
  };
  
  // 保存到本地存储
  chrome.storage.local.set({ 
    'specialWebsiteIcons': defaultIcons,
    'xiaohongshuIcon': XIAOHONGSHU_ICON,
    'xiaohongshuBackupIcon': XIAOHONGSHU_BACKUP_ICON 
  }, function() {
    console.log('已保存特殊网站图标默认配置');
  });
  
  // 预缓存小红书图标
  cacheFavicon(XIAOHONGSHU_ICON);
  cacheFavicon(XIAOHONGSHU_BACKUP_ICON);
});

// 缓存图标
function cacheFavicon(iconUrl) {
  try {
    fetch(iconUrl, { method: 'GET', mode: 'no-cors' })
      .then(response => {
        console.log('成功预缓存图标:', iconUrl);
      })
      .catch(error => {
        console.error('预缓存图标失败:', iconUrl, error);
      });
  } catch (e) {
    console.error('尝试预缓存图标时出错:', e);
  }
}

// 监听来自内容脚本的消息
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // 处理消息
  if (message.action === 'getSelectedTab') {
    // 获取当前选中的标签页信息
    chrome.storage.local.get(['selectedTab'], function(result) {
      sendResponse({ success: true, tabInfo: result.selectedTab || null });
    });
    return true; // 异步响应，保持通信通道打开
  }
  
  if (message.action === 'saveSelectedTab') {
    // 保存选中的标签页信息
    chrome.storage.local.set({ selectedTab: message.tabInfo }, function() {
      sendResponse({ success: true });
    });
    return true; // 异步响应，保持通信通道打开
  }
  
  if (message.action === 'getSpecialIcon') {
    // 获取特定网站的图标URL
    const domain = message.domain;
    
    // 对小红书网站特殊处理
    if (domain.includes('xiaohongshu') || domain.includes('xhslink')) {
      chrome.storage.local.get(['xiaohongshuIcon', 'xiaohongshuBackupIcon'], function(result) {
        const primaryIcon = result.xiaohongshuIcon || 'https://ci.xiaohongshu.com/favicon.ico';
        const backupIcon = result.xiaohongshuBackupIcon || 'https://static.xiaohongshu.com/static-icon/favicon.ico';
        
        sendResponse({ 
          success: true, 
          iconUrl: primaryIcon,
          backupIconUrl: backupIcon,
          domain: domain,
          isXiaohongshu: true
        });
      });
      return true;
    }
    
    chrome.storage.local.get(['specialWebsiteIcons'], function(result) {
      const icons = result.specialWebsiteIcons || {};
      sendResponse({ 
        success: true, 
        iconUrl: icons[domain] || null,
        domain: domain
      });
    });
    return true; // 异步响应，保持通信通道打开
  }
  
  if (message.action === 'saveSpecialIcon') {
    // 保存特定网站的图标URL
    const domain = message.domain;
    const iconUrl = message.iconUrl;
    
    chrome.storage.local.get(['specialWebsiteIcons'], function(result) {
      const icons = result.specialWebsiteIcons || {};
      icons[domain] = iconUrl;
      
      chrome.storage.local.set({ 'specialWebsiteIcons': icons }, function() {
        console.log(`已保存网站 ${domain} 的图标: ${iconUrl}`);
        sendResponse({ success: true });
      });
    });
    return true; // 异步响应，保持通信通道打开
  }
  
  // 获取小红书图标
  if (message.action === 'getXiaohongshuIcon') {
    // 返回保存的小红书图标URL
    chrome.storage.local.get(['xiaohongshuIcon', 'xiaohongshuBackupIcon'], function(result) {
      const primaryIcon = result.xiaohongshuIcon || 'https://ci.xiaohongshu.com/favicon.ico';
      const backupIcon = result.xiaohongshuBackupIcon || 'https://static.xiaohongshu.com/static-icon/favicon.ico';
      
      // 尝试预缓存图标
      cacheFavicon(primaryIcon);
      cacheFavicon(backupIcon);
      
      sendResponse({ 
        success: true, 
        iconUrl: primaryIcon,
        backupIconUrl: backupIcon
      });
    });
    return true;
  }
  
  // 提取小红书图标
  if (message.action === 'extractXiaohongshuIcon') {
    const tab = sender.tab;
    console.log(`尝试从标签 ${tab.url} 提取小红书图标`);
    
    // 检查是否是小红书网站
    if (tab.url.includes('xiaohongshu.com')) {
      try {
        // 首先使用固定的图标URL
        const XIAOHONGSHU_ICON = 'https://ci.xiaohongshu.com/favicon.ico';
        const XIAOHONGSHU_BACKUP_ICON = 'https://static.xiaohongshu.com/static-icon/favicon.ico';
        
        // 保存到本地存储
        chrome.storage.local.set({
          'xiaohongshuIcon': XIAOHONGSHU_ICON,
          'xiaohongshuBackupIcon': XIAOHONGSHU_BACKUP_ICON,
          'lastXiaohongshuIconUpdate': new Date().getTime()
        }, function() {
          console.log('已保存小红书图标URL到本地存储');
          
          // 尝试预缓存图标
          cacheFavicon(XIAOHONGSHU_ICON);
          cacheFavicon(XIAOHONGSHU_BACKUP_ICON);
          
          sendResponse({ 
            success: true, 
            iconUrl: XIAOHONGSHU_ICON,
            backupIconUrl: XIAOHONGSHU_BACKUP_ICON
          });
        });
        
        return true;
      } catch (e) {
        console.error('处理小红书图标出错:', e);
        sendResponse({ success: false, error: e.message });
        return true;
      }
    }
  }
  
  // 检查页面权限（用于调试）
  if (message.action === 'checkContentScriptPermission') {
    sendResponse({ 
      success: true, 
      message: '内容脚本权限正常',
      timestamp: new Date().getTime()
    });
    return true;
  }
}); 