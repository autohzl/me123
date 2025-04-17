// 扩展安装或更新时触发
chrome.runtime.onInstalled.addListener(function() {
  console.log('标签页选择器扩展已安装');
});

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
}); 