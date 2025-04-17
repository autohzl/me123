// 初始数据
const initialLinks = {
    applications: [
        { name: 'BITWARDEN', url: 'https://bitwarden.example.com', icon: 'fa-lock' },
        { name: 'BOOKSTACK', url: 'https://bookstack.example.com', icon: 'fa-book' },
        { name: 'FILEZILLA', url: 'https://filezilla.example.com', icon: 'fa-file' },
        { name: 'HEDGEDOC', url: 'https://hedgedoc.example.com', icon: 'fa-sticky-note' },
        { name: 'LINKDING', url: 'https://linkding.example.com', icon: 'fa-link' },
        { name: 'LYCHEE', url: 'https://lychee.example.com', icon: 'fa-image' },
        { name: 'MEDIA INDEX', url: 'https://index.example.com', icon: 'fa-list' },
        { name: 'NEXTCLOUD', url: 'https://nextcloud.example.com', icon: 'fa-cloud' },
        { name: 'PAPERLESS', url: 'https://paperless.example.com', icon: 'fa-file-alt' },
        { name: 'PHPMYADMIN', url: 'https://pma.example.com', icon: 'fa-database' },
        { name: 'PLEX', url: 'https://plex.example.com', icon: 'fa-play' },
        { name: 'QBITTORRENT', url: 'https://qb.example.com', icon: 'fa-download' },
        { name: 'SHIORI', url: 'https://shiori.example.com', icon: 'fa-bookmark' },
        { name: 'SPEEDTEST', url: 'https://speedtest.example.com', icon: 'fa-tachometer-alt' },
        { name: 'TUBESYNC', url: 'https://tubesync.example.com', icon: 'fa-youtube' },
        { name: 'UNRAID', url: 'https://unraid.example.com', icon: 'fa-server' }
    ],
    cloud: [
        { name: 'Google Drive', url: 'https://drive.google.com', icon: 'fa-google-drive' },
        { name: 'MEGA', url: 'https://mega.nz', icon: 'fa-cloud' },
        { name: 'OneDrive', url: 'https://onedrive.live.com', icon: 'fa-cloud' }
    ],
    design: [
        { name: 'Awwwards', url: 'https://www.awwwards.com', icon: 'fa-trophy' },
        { name: 'Designinspiration', url: 'https://www.designspiration.com', icon: 'fa-palette' },
        { name: 'Dribbble', url: 'https://dribbble.com', icon: 'fa-basketball-ball' }
    ],
    games: [
        { name: 'GOG', url: 'https://www.gog.com', icon: 'fa-gamepad' },
        { name: 'Steam', url: 'https://store.steampowered.com', icon: 'fa-steam' },
        { name: 'Uplay', url: 'https://uplay.ubisoft.com', icon: 'fa-gamepad' }
    ],
    media: [
        { name: 'Reddit', url: 'https://www.reddit.com', icon: 'fa-reddit' },
        { name: 'Twitter', url: 'https://twitter.com', icon: 'fa-twitter' },
        { name: 'YouTube', url: 'https://www.youtube.com', icon: 'fa-youtube' }
    ],
    music: [
        { name: 'Deezer', url: 'https://www.deezer.com', icon: 'fa-music' },
        { name: 'Discogs', url: 'https://www.discogs.com', icon: 'fa-record-vinyl' },
        { name: 'Spotify', url: 'https://www.spotify.com', icon: 'fa-spotify' }
    ],
    news: [
        { name: 'Google News', url: 'https://news.google.com', icon: 'fa-newspaper' },
        { name: 'Techcrunch', url: 'https://techcrunch.com', icon: 'fa-microchip' },
        { name: 'The Verge', url: 'https://www.theverge.com', icon: 'fa-rss' }
    ],
    programming: [
        { name: 'DEV', url: 'https://dev.to', icon: 'fa-code' },
        { name: 'DevDocs', url: 'https://devdocs.io', icon: 'fa-book-open' },
        { name: 'Github', url: 'https://github.com', icon: 'fa-github' }
    ],
    projects: [
        { name: 'Miro', url: 'https://miro.com', icon: 'fa-sticky-note' },
        { name: 'Todoist', url: 'https://todoist.com', icon: 'fa-check-square' },
        { name: 'Trello', url: 'https://trello.com', icon: 'fa-trello' }
    ]
};

// DOM 元素
const modal = document.getElementById('add-link-modal');
const editModal = document.getElementById('edit-link-modal');
const addBtn = document.getElementById('add-link-btn');
const closeBtn = document.querySelector('.close');
const editCloseBtn = document.getElementById('edit-close');
const addLinkForm = document.getElementById('add-link-form');
const editLinkForm = document.getElementById('edit-link-form');
const dateDisplay = document.getElementById('date-display');
const greeting = document.getElementById('greeting');
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const exportBtn = document.getElementById('export-btn');
const importFileInput = document.getElementById('import-file');
const deleteLinkBtn = document.getElementById('delete-link-btn');

// 获取本地存储的链接或使用初始数据
let links = JSON.parse(localStorage.getItem('navLinks')) || initialLinks;

// 初始化页面
function initPage() {
    updateDateTime();
    setInterval(updateDateTime, 60000); // 每分钟更新一次日期时间
    
    renderApplications();
    renderBookmarks();
    
    // 事件监听器
    addBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    editCloseBtn.addEventListener('click', closeEditModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
        if (e.target === editModal) closeEditModal();
    });
    addLinkForm.addEventListener('submit', handleAddLink);
    editLinkForm.addEventListener('submit', handleEditLink);
    deleteLinkBtn.addEventListener('click', handleDeleteLink);
    
    // 菜单事件
    menuBtn.addEventListener('click', toggleMenu);
    exportBtn.addEventListener('click', exportLinks);
    importFileInput.addEventListener('change', handleImportFile);
    
    // 点击其他地方关闭菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-container')) {
            dropdownMenu.classList.remove('active');
        }
    });
    
    // 添加长按事件（用于移动设备）
    setupLongPressEvents();
}

// 更新日期和时间
function updateDateTime() {
    const now = new Date();
    
    // 日期格式化
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString('zh-CN', options).toUpperCase();
    
    // 更新问候语
    const hour = now.getHours();
    let greetingText = '';
    
    if (hour < 12) {
        greetingText = 'Good morning!';
    } else if (hour < 18) {
        greetingText = 'Good afternoon!';
    } else {
        greetingText = 'Good evening!';
    }
    
    greeting.textContent = greetingText;
}

// 渲染应用程序部分
function renderApplications() {
    const container = document.getElementById('applications-container');
    container.innerHTML = '';
    
    links.applications.forEach((app, index) => {
        const appItem = document.createElement('div');
        appItem.className = 'application-item';
        appItem.dataset.index = index;
        appItem.dataset.category = 'applications';
        
        appItem.innerHTML = `
            <div class="application-icon">
                <i class="fas ${app.icon}"></i>
            </div>
            <div class="application-info">
                <div class="application-name">${app.name}</div>
                <div class="application-url">${app.url.replace(/^https?:\/\//i, '')}</div>
            </div>
        `;
        
        // 点击打开链接
        appItem.addEventListener('click', () => {
            window.open(app.url, '_blank');
        });
        
        // 右键菜单
        appItem.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            showEditOptions('applications', index, e);
        });
        
        container.appendChild(appItem);
    });
}

// 渲染书签部分
function renderBookmarks() {
    const categories = ['cloud', 'design', 'games', 'media', 'music', 'news', 'programming', 'projects'];
    
    categories.forEach(category => {
        const container = document.getElementById(`${category}-links`);
        container.innerHTML = '';
        
        if (links[category]) {
            links[category].forEach((link, index) => {
                const li = document.createElement('li');
                li.dataset.index = index;
                li.dataset.category = category;
                
                const a = document.createElement('a');
                a.href = link.url;
                a.target = '_blank';
                a.innerHTML = `<i class="fas ${link.icon}"></i>${link.name}`;
                
                // 右键菜单
                li.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    showEditOptions(category, index, e);
                });
                
                li.appendChild(a);
                container.appendChild(li);
            });
        }
    });
}

// 打开模态窗口
function openModal() {
    modal.style.display = 'block';
    document.getElementById('link-url').focus();
}

// 关闭模态窗口
function closeModal() {
    modal.style.display = 'none';
    addLinkForm.reset();
}

// 打开编辑模态窗口
function openEditModal(category, index) {
    const link = links[category][index];
    
    document.getElementById('edit-link-index').value = index;
    document.getElementById('edit-link-category').value = category;
    document.getElementById('edit-link-url').value = link.url;
    document.getElementById('edit-link-name').value = link.name;
    document.getElementById('edit-link-new-category').value = category;
    
    editModal.style.display = 'block';
}

// 关闭编辑模态窗口
function closeEditModal() {
    editModal.style.display = 'none';
    editLinkForm.reset();
}

// 处理添加链接表单提交
async function handleAddLink(e) {
    e.preventDefault();
    
    const url = document.getElementById('link-url').value;
    let name = document.getElementById('link-name').value;
    const category = document.getElementById('link-category').value;
    
    // 如果未提供名称，尝试从URL获取
    if (!name) {
        try {
            name = await fetchSiteName(url);
        } catch (error) {
            // 如果无法获取网站名称，使用域名作为后备
            const domain = new URL(url).hostname.replace('www.', '');
            name = domain.charAt(0).toUpperCase() + domain.slice(1);
        }
    }
    
    // 确定图标 - 在真实实现中，这里会尝试获取网站的favicon
    // 这里我们使用一个简单的后备图标
    let icon = 'fa-globe';
    
    // 添加新链接
    if (!links[category]) {
        links[category] = [];
    }
    
    links[category].push({ name, url, icon });
    
    // 保存到本地存储
    localStorage.setItem('navLinks', JSON.stringify(links));
    
    // 重新渲染
    if (category === 'applications') {
        renderApplications();
    } else {
        renderBookmarks();
    }
    
    closeModal();
}

// 处理编辑链接表单提交
function handleEditLink(e) {
    e.preventDefault();
    
    const index = parseInt(document.getElementById('edit-link-index').value);
    const oldCategory = document.getElementById('edit-link-category').value;
    const newCategory = document.getElementById('edit-link-new-category').value;
    
    const url = document.getElementById('edit-link-url').value;
    const name = document.getElementById('edit-link-name').value;
    
    // 保留原来的图标
    const icon = links[oldCategory][index].icon;
    
    // 如果分类改变
    if (oldCategory !== newCategory) {
        // 从旧分类中删除
        const linkToMove = links[oldCategory].splice(index, 1)[0];
        
        // 更新链接数据
        linkToMove.url = url;
        linkToMove.name = name;
        
        // 添加到新分类
        if (!links[newCategory]) {
            links[newCategory] = [];
        }
        links[newCategory].push(linkToMove);
    } else {
        // 直接在原位置更新
        links[oldCategory][index].url = url;
        links[oldCategory][index].name = name;
    }
    
    // 保存到本地存储
    localStorage.setItem('navLinks', JSON.stringify(links));
    
    // 重新渲染
    renderApplications();
    renderBookmarks();
    
    closeEditModal();
}

// 处理删除链接
function handleDeleteLink() {
    const index = parseInt(document.getElementById('edit-link-index').value);
    const category = document.getElementById('edit-link-category').value;
    
    // 从数组中删除
    links[category].splice(index, 1);
    
    // 保存到本地存储
    localStorage.setItem('navLinks', JSON.stringify(links));
    
    // 重新渲染
    renderApplications();
    renderBookmarks();
    
    closeEditModal();
}

// 尝试获取网站标题
async function fetchSiteName(url) {
    try {
        // 在实际应用中，这里应该使用服务器端代理或CORS解决方案
        // 这里我们假设有一个API端点来获取网站标题
        // 这是一个模拟实现
        return url.split('//')[1].split('.')[0].toUpperCase();
    } catch (error) {
        throw new Error('无法获取网站标题');
    }
}

// 显示编辑选项
function showEditOptions(category, index, event) {
    // 检查是否已存在上下文菜单，如果存在则移除
    let contextMenu = document.querySelector('.context-menu');
    if (contextMenu) {
        contextMenu.remove();
    }
    
    // 创建新的上下文菜单
    contextMenu = document.createElement('div');
    contextMenu.className = 'context-menu';
    
    // 添加菜单选项
    const editBtn = document.createElement('button');
    editBtn.textContent = '编辑';
    editBtn.addEventListener('click', () => {
        openEditModal(category, index);
        contextMenu.remove();
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '删除';
    deleteBtn.addEventListener('click', () => {
        if (confirm('确定要删除此链接吗？')) {
            links[category].splice(index, 1);
            localStorage.setItem('navLinks', JSON.stringify(links));
            renderApplications();
            renderBookmarks();
        }
        contextMenu.remove();
    });
    
    const openBtn = document.createElement('button');
    openBtn.textContent = '打开链接';
    openBtn.addEventListener('click', () => {
        window.open(links[category][index].url, '_blank');
        contextMenu.remove();
    });
    
    contextMenu.appendChild(editBtn);
    contextMenu.appendChild(deleteBtn);
    contextMenu.appendChild(openBtn);
    
    // 将菜单添加到页面
    document.body.appendChild(contextMenu);
    
    // 定位菜单
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;
    contextMenu.style.display = 'block';
    
    // 点击其他区域关闭菜单
    document.addEventListener('click', function closeMenu(e) {
        if (!contextMenu.contains(e.target)) {
            contextMenu.remove();
            document.removeEventListener('click', closeMenu);
        }
    });
}

// 设置长按事件（用于移动设备）
function setupLongPressEvents() {
    const appItems = document.querySelectorAll('.application-item');
    const bookmarkItems = document.querySelectorAll('.category li');
    
    const handleLongPress = (element, timeout = 500) => {
        let timer;
        let touchDuration = 0;
        
        element.addEventListener('touchstart', () => {
            timer = setTimeout(() => {
                const category = element.dataset.category;
                const index = parseInt(element.dataset.index);
                
                // 显示编辑菜单
                openEditModal(category, index);
            }, timeout);
        });
        
        element.addEventListener('touchend', () => {
            clearTimeout(timer);
        });
        
        element.addEventListener('touchmove', () => {
            clearTimeout(timer);
        });
    };
    
    // 为所有应用项添加长按事件
    appItems.forEach(item => {
        handleLongPress(item);
    });
    
    // 为所有书签项添加长按事件
    bookmarkItems.forEach(item => {
        handleLongPress(item);
    });
}

// 切换菜单显示
function toggleMenu() {
    dropdownMenu.classList.toggle('active');
}

// 导出链接数据为JSON文件
function exportLinks() {
    const dataStr = JSON.stringify(links, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'nav-links.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    // 关闭菜单
    dropdownMenu.classList.remove('active');
}

// 处理导入文件
function handleImportFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const importedLinks = JSON.parse(event.target.result);
            links = importedLinks;
            localStorage.setItem('navLinks', JSON.stringify(links));
            renderApplications();
            renderBookmarks();
            alert('导入成功');
        } catch (error) {
            alert('导入失败：无效的JSON数据');
        }
    };
    reader.readAsText(file);
    
    // 重置文件输入并关闭菜单
    e.target.value = '';
    dropdownMenu.classList.remove('active');
}

// 初始化页面
document.addEventListener('DOMContentLoaded', initPage); 