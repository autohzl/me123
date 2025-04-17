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
      favicon.src = tab.favIconUrl || 'icons/default-favicon.png';
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
  
  // 发送所选标签信息到当前标签页
  function sendToCurrentTab(selectedTab) {
    // 获取当前活动标签
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const currentTab = tabs[0];
      const statusText = document.getElementById('status');
      
      // 显示加载状态
      statusText.textContent = '正在发送...';
      statusText.className = 'status loading';
      
      // 准备要发送的标签信息
      const tabInfo = {
        url: selectedTab.url,
        title: selectedTab.title,
        favIconUrl: selectedTab.favIconUrl
      };
      
      console.log('正在发送标签信息:', tabInfo);
      
      // 向当前标签发送消息
      chrome.tabs.sendMessage(
        currentTab.id,
        {
          action: 'sendToPage',
          tabInfo: tabInfo
        },
        function(response) {
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
                
                detailsElement.innerHTML += `
                  <p class="help-text">请按照以下步骤解决:</p>
                  <ol>
                    <li>打开您的导航页</li>
                    <li>确保导航页包含添加链接的相关元素</li>
                    <li>再次尝试发送</li>
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
              } else {
                statusText.textContent = '发送失败，请重试';
              }
            }
          } else {
            // 无响应可能是因为content script没有加载或其他错误
            statusText.textContent = '发送失败，请确保导航页已打开且扩展有权限';
            statusText.className = 'status error';
            
            console.error('发送消息无响应，可能是content script未加载或权限问题');
          }
        }
      );
    });
  }
}); 