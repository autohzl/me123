// 初始数据
const initialLinks = {
    applications: [
        { name: 'BITWARDEN', url: 'https://bitwarden.com', icon: 'fa-lock', faviconUrl: getFaviconUrl('https://bitwarden.com') },
        { name: 'BOOKSTACK', url: 'https://www.bookstackapp.com', icon: 'fa-book', faviconUrl: getFaviconUrl('https://www.bookstackapp.com') },
        { name: 'FILEZILLA', url: 'https://filezilla-project.org', icon: 'fa-file', faviconUrl: getFaviconUrl('https://filezilla-project.org') },
        { name: 'GITHUB', url: 'https://github.com', icon: 'fa-github', faviconUrl: getFaviconUrl('https://github.com') },
        { name: 'GOOGLE', url: 'https://google.com', icon: 'fa-google', faviconUrl: getFaviconUrl('https://google.com') },
        { name: 'LYCHEE', url: 'https://lycheeorg.github.io', icon: 'fa-image', faviconUrl: getFaviconUrl('https://lycheeorg.github.io') },
        { name: 'NOTION', url: 'https://notion.so', icon: 'fa-list', faviconUrl: getFaviconUrl('https://notion.so') },
        { name: 'NEXTCLOUD', url: 'https://nextcloud.com', icon: 'fa-cloud', faviconUrl: getFaviconUrl('https://nextcloud.com') },
        { name: 'SPOTIFY', url: 'https://spotify.com', icon: 'fa-spotify', faviconUrl: getFaviconUrl('https://spotify.com') },
        { name: 'PHPMYADMIN', url: 'https://www.phpmyadmin.net', icon: 'fa-database', faviconUrl: getFaviconUrl('https://www.phpmyadmin.net') },
        { name: 'PLEX', url: 'https://www.plex.tv', icon: 'fa-play', faviconUrl: getFaviconUrl('https://www.plex.tv') },
        { name: 'QBITTORRENT', url: 'https://www.qbittorrent.org', icon: 'fa-download', faviconUrl: getFaviconUrl('https://www.qbittorrent.org') }
    ],
    cloud: [
        { name: 'Google Drive', url: 'https://drive.google.com', icon: 'fa-google-drive', faviconUrl: getFaviconUrl('https://drive.google.com') },
        { name: 'MEGA', url: 'https://mega.nz', icon: 'fa-cloud', faviconUrl: getFaviconUrl('https://mega.nz') },
        { name: 'OneDrive', url: 'https://onedrive.live.com', icon: 'fa-cloud', faviconUrl: getFaviconUrl('https://onedrive.live.com') }
    ],
    design: [
        { name: 'Awwwards', url: 'https://www.awwwards.com', icon: 'fa-trophy', faviconUrl: getFaviconUrl('https://www.awwwards.com') },
        { name: 'Dribbble', url: 'https://dribbble.com', icon: 'fa-basketball-ball', faviconUrl: getFaviconUrl('https://dribbble.com') },
        { name: 'Behance', url: 'https://www.behance.net', icon: 'fa-palette', faviconUrl: getFaviconUrl('https://www.behance.net') }
    ],
    games: [
        { name: 'GOG', url: 'https://www.gog.com', icon: 'fa-gamepad', faviconUrl: getFaviconUrl('https://www.gog.com') },
        { name: 'Steam', url: 'https://store.steampowered.com', icon: 'fa-steam', faviconUrl: getFaviconUrl('https://store.steampowered.com') },
        { name: 'Epic Games', url: 'https://www.epicgames.com', icon: 'fa-gamepad', faviconUrl: getFaviconUrl('https://www.epicgames.com') }
    ],
    media: [
        { name: 'Reddit', url: 'https://www.reddit.com', icon: 'fa-reddit', faviconUrl: getFaviconUrl('https://www.reddit.com') },
        { name: 'Twitter', url: 'https://twitter.com', icon: 'fa-twitter', faviconUrl: getFaviconUrl('https://twitter.com') },
        { name: 'YouTube', url: 'https://www.youtube.com', icon: 'fa-youtube', faviconUrl: getFaviconUrl('https://www.youtube.com') }
    ],
    music: [
        { name: 'Deezer', url: 'https://www.deezer.com', icon: 'fa-music', faviconUrl: getFaviconUrl('https://www.deezer.com') },
        { name: 'Discogs', url: 'https://www.discogs.com', icon: 'fa-record-vinyl', faviconUrl: getFaviconUrl('https://www.discogs.com') },
        { name: 'Spotify', url: 'https://www.spotify.com', icon: 'fa-spotify', faviconUrl: getFaviconUrl('https://www.spotify.com') }
    ],
    news: [
        { name: 'Google News', url: 'https://news.google.com', icon: 'fa-newspaper', faviconUrl: getFaviconUrl('https://news.google.com') },
        { name: 'Techcrunch', url: 'https://techcrunch.com', icon: 'fa-microchip', faviconUrl: getFaviconUrl('https://techcrunch.com') },
        { name: 'The Verge', url: 'https://www.theverge.com', icon: 'fa-rss', faviconUrl: getFaviconUrl('https://www.theverge.com') }
    ],
    programming: [
        { name: 'DEV', url: 'https://dev.to', icon: 'fa-code', faviconUrl: getFaviconUrl('https://dev.to') },
        { name: 'DevDocs', url: 'https://devdocs.io', icon: 'fa-book-open', faviconUrl: getFaviconUrl('https://devdocs.io') },
        { name: 'Github', url: 'https://github.com', icon: 'fa-github', faviconUrl: getFaviconUrl('https://github.com') }
    ],
    projects: [
        { name: 'Miro', url: 'https://miro.com', icon: 'fa-sticky-note', faviconUrl: getFaviconUrl('https://miro.com') },
        { name: 'Todoist', url: 'https://todoist.com', icon: 'fa-check-square', faviconUrl: getFaviconUrl('https://todoist.com') },
        { name: 'Trello', url: 'https://trello.com', icon: 'fa-trello', faviconUrl: getFaviconUrl('https://trello.com') }
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
const refreshIconsBtn = document.getElementById('refresh-icons-btn');
const fetchNameBtn = document.getElementById('fetch-name-btn');
const editFetchNameBtn = document.getElementById('edit-fetch-name-btn');
const toggleLanguageBtn = document.getElementById('toggle-language-btn');

// 获取本地存储的链接或使用初始数据
let links = JSON.parse(localStorage.getItem('navLinks')) || initialLinks;

// 当前语言设置
let currentLang = localStorage.getItem('language') || 'zh';

// 获取当前语言的文本
function getText(key) {
    return languages[currentLang][key] || key;
}

// 初始化页面
function initPage() {
    // 应用语言设置
    applyLanguage();
    
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
    refreshIconsBtn.addEventListener('click', refreshAllIcons);
    toggleLanguageBtn.addEventListener('click', toggleLanguage);
    
    // 自动获取名称按钮事件
    fetchNameBtn.addEventListener('click', handleFetchName);
    editFetchNameBtn.addEventListener('click', handleEditFetchName);
    
    // 点击其他地方关闭菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-container')) {
            dropdownMenu.classList.remove('active');
        }
    });
    
    // 添加长按事件（用于移动设备）
    setupLongPressEvents();
    
    // 设置页面标题
    document.title = getText('appTitle');
}

// 应用当前语言到界面
function applyLanguage() {
    // 更新HTML文档的语言属性
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    
    // 设置页面标题
    document.title = getText('appTitle');
    
    // 更新分类标题
    document.getElementById('applications-title').textContent = getText('applications');
    document.getElementById('bookmarks-title').textContent = getText('bookmarks');
    
    // 更新分类名称
    document.getElementById('cloud-title').textContent = getText('cloud');
    document.getElementById('design-title').textContent = getText('design');
    document.getElementById('games-title').textContent = getText('games');
    document.getElementById('media-title').textContent = getText('media');
    document.getElementById('music-title').textContent = getText('music');
    document.getElementById('news-title').textContent = getText('news');
    document.getElementById('programming-title').textContent = getText('programming');
    document.getElementById('projects-title').textContent = getText('projects');
    
    // 更新添加链接模态窗口
    document.getElementById('add-modal-title').textContent = getText('addNewLink');
    document.getElementById('url-label').textContent = getText('url');
    document.getElementById('name-label').textContent = getText('name');
    document.getElementById('category-label').textContent = getText('category');
    document.getElementById('add-btn').textContent = getText('add');
    document.getElementById('fetch-name-btn').textContent = getText('autoFetch');
    
    // 更新编辑链接模态窗口
    document.getElementById('edit-modal-title').textContent = getText('editLink');
    document.getElementById('edit-url-label').textContent = getText('url');
    document.getElementById('edit-name-label').textContent = getText('name');
    document.getElementById('move-category-label').textContent = getText('moveToCategory');
    document.getElementById('update-btn').textContent = getText('update');
    document.getElementById('delete-link-btn').textContent = getText('delete');
    document.getElementById('edit-fetch-name-btn').textContent = getText('autoFetch');
    
    // 更新菜单项
    document.getElementById('toggle-language-btn').textContent = getText('toggleLanguage');
    document.getElementById('refresh-icons-btn').textContent = getText('refreshIcons');
    document.getElementById('export-btn').textContent = getText('exportLinks');
    document.getElementById('import-label').textContent = getText('importLinks');
    
    // 更新分类下拉菜单选项
    updateCategoryOptions('link-category');
    updateCategoryOptions('edit-link-new-category');
    
    // 更新问候语
    updateGreeting();
}

// 更新分类下拉菜单选项的文本
function updateCategoryOptions(selectId) {
    const select = document.getElementById(selectId);
    const options = select.options;
    
    for (let i = 0; i < options.length; i++) {
        const category = options[i].value;
        options[i].textContent = getText(category);
    }
}

// 切换语言
function toggleLanguage() {
    // 切换语言
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    
    // 保存语言设置到本地存储
    localStorage.setItem('language', currentLang);
    
    // 应用新语言
    applyLanguage();
    
    // 重新渲染，以更新书签和应用列表中的文本
    renderApplications();
    renderBookmarks();
    
    // 关闭菜单
    dropdownMenu.classList.remove('active');
}

// 更新日期和时间
function updateDateTime() {
    const now = new Date();
    
    // 日期格式化
    const options = languages[currentLang].dateFormatOptions;
    dateDisplay.textContent = now.toLocaleDateString(currentLang === 'zh' ? 'zh-CN' : 'en-US', options).toUpperCase();
    
    // 更新问候语
    updateGreeting();
}

// 更新问候语
function updateGreeting() {
    const hour = new Date().getHours();
    let greetingText = '';
    
    if (hour < 12) {
        greetingText = getText('morning');
    } else if (hour < 18) {
        greetingText = getText('afternoon');
    } else {
        greetingText = getText('evening');
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
        
        // 检查是否有favicon URL
        let iconHtml = '';
        if (app.faviconUrl) {
            iconHtml = `<img src="${app.faviconUrl}" alt="${app.name}" class="favicon-img">`;
        } else {
            iconHtml = `<i class="fas ${app.icon}"></i>`;
        }
        
        appItem.innerHTML = `
            <div class="application-icon">
                ${iconHtml}
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
                
                // 检查是否有favicon URL
                let iconHtml = '';
                if (link.faviconUrl) {
                    iconHtml = `<img src="${link.faviconUrl}" alt="${link.name}" class="favicon-img">`;
                } else {
                    iconHtml = `<i class="fas ${link.icon}"></i>`;
                }
                
                a.innerHTML = `${iconHtml}${link.name}`;
                
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
            name = await fetchSiteNameAndTitle(url);
        } catch (error) {
            // 如果无法获取网站名称，使用域名作为后备
            const domain = new URL(url).hostname.replace('www.', '');
            name = domain.charAt(0).toUpperCase() + domain.slice(1);
        }
    }
    
    // 获取网站图标URL
    const faviconUrl = getFaviconUrl(url);
    
    // 创建新链接对象，包含favicon URL
    const newLink = { 
        name, 
        url, 
        icon: 'fa-globe', // 默认图标作为后备
        faviconUrl: faviconUrl // 添加favicon URL属性
    };
    
    // 添加新链接
    if (!links[category]) {
        links[category] = [];
    }
    
    links[category].push(newLink);
    
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
    
    // 获取原始链接对象
    const originalLink = links[oldCategory][index];
    
    // 如果URL发生变化，需要更新favicon
    let faviconUrl = originalLink.faviconUrl;
    if (url !== originalLink.url) {
        faviconUrl = getFaviconUrl(url);
    }
    
    // 如果分类改变
    if (oldCategory !== newCategory) {
        // 从旧分类中删除
        const linkToMove = links[oldCategory].splice(index, 1)[0];
        
        // 更新链接数据
        linkToMove.url = url;
        linkToMove.name = name;
        linkToMove.faviconUrl = faviconUrl;
        
        // 添加到新分类
        if (!links[newCategory]) {
            links[newCategory] = [];
        }
        links[newCategory].push(linkToMove);
    } else {
        // 直接在原位置更新
        links[oldCategory][index].url = url;
        links[oldCategory][index].name = name;
        links[oldCategory][index].faviconUrl = faviconUrl;
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
    
    // 确认删除
    if (confirm(getText('confirmDelete'))) {
        // 从数组中删除
        links[category].splice(index, 1);
        
        // 保存到本地存储
        localStorage.setItem('navLinks', JSON.stringify(links));
        
        // 重新渲染
        renderApplications();
        renderBookmarks();
        
        closeEditModal();
    }
}

// 获取网站favicon图标
function getFaviconUrl(url, forceRefresh = false) {
    try {
        const urlObj = new URL(url);
        const domain = urlObj.hostname;
        
        // 使用Google的favicon服务（此服务公开可用）
        let faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
        
        // 如果是强制刷新，添加时间戳参数避免缓存
        if (forceRefresh) {
            faviconUrl += `&t=${new Date().getTime()}`;
        }
        
        return faviconUrl;
    } catch (error) {
        console.error('无法解析URL:', error);
        return null;
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
            alert(getText('importSuccess'));
        } catch (error) {
            alert(getText('importFailed'));
        }
    };
    reader.readAsText(file);
    
    // 重置文件输入并关闭菜单
    e.target.value = '';
    dropdownMenu.classList.remove('active');
}

// 刷新所有网站图标
function refreshAllIcons() {
    const categories = Object.keys(links);
    let refreshCount = 0;
    
    categories.forEach(category => {
        if (Array.isArray(links[category])) {
            links[category].forEach((link, index) => {
                if (link.url) {
                    // 重新获取favicon
                    links[category][index].faviconUrl = getFaviconUrl(link.url, true);
                    refreshCount++;
                }
            });
        }
    });
    
    // 保存到本地存储
    localStorage.setItem('navLinks', JSON.stringify(links));
    
    // 重新渲染
    renderApplications();
    renderBookmarks();
    
    // 关闭菜单
    dropdownMenu.classList.remove('active');
    
    // 显示刷新成功的消息
    alert(getText('iconsRefreshed').replace('{count}', refreshCount));
}

// 处理自动获取名称 - 添加表单
async function handleFetchName() {
    const urlInput = document.getElementById('link-url');
    const nameInput = document.getElementById('link-name');
    
    if (!urlInput.value) {
        alert(getText('enterUrlFirst'));
        urlInput.focus();
        return;
    }
    
    // 修改按钮状态，表示正在获取
    const fetchBtn = document.getElementById('fetch-name-btn');
    const originalText = fetchBtn.textContent;
    fetchBtn.textContent = getText('fetching');
    fetchBtn.disabled = true;
    
    try {
        // 获取网站名称
        const name = await fetchSiteNameAndTitle(urlInput.value);
        nameInput.value = name;
    } catch (error) {
        alert(getText('fetchNameFailed') + error.message);
    } finally {
        // 恢复按钮状态
        fetchBtn.textContent = originalText;
        fetchBtn.disabled = false;
    }
}

// 处理自动获取名称 - 编辑表单
async function handleEditFetchName() {
    const urlInput = document.getElementById('edit-link-url');
    const nameInput = document.getElementById('edit-link-name');
    
    if (!urlInput.value) {
        alert(getText('enterUrlFirst'));
        urlInput.focus();
        return;
    }
    
    // 修改按钮状态，表示正在获取
    const fetchBtn = document.getElementById('edit-fetch-name-btn');
    const originalText = fetchBtn.textContent;
    fetchBtn.textContent = getText('fetching');
    fetchBtn.disabled = true;
    
    try {
        // 获取网站名称
        const name = await fetchSiteNameAndTitle(urlInput.value);
        nameInput.value = name;
    } catch (error) {
        alert(getText('fetchNameFailed') + error.message);
    } finally {
        // 恢复按钮状态
        fetchBtn.textContent = originalText;
        fetchBtn.disabled = false;
    }
}

// 尝试获取网站标题和名称
async function fetchSiteNameAndTitle(url) {
    try {
        // 这里我们模拟一个API请求来获取网站标题
        // 在实际应用中，你需要一个服务器端代理来获取网站标题
        // 由于浏览器的跨域安全限制，直接从前端请求其他网站的内容会被阻止
        
        // 模拟API请求延迟
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 使用URL的域名部分作为后备名称
        const domain = new URL(url).hostname;
        
        // 去除www前缀并转换为标题格式
        let siteName = domain.replace(/^www\./, '').split('.')[0];
        
        // 首字母大写其余小写
        siteName = siteName.charAt(0).toUpperCase() + siteName.slice(1).toLowerCase();
        
        // 如果域名包含单词分隔符（如连字符或点），将其转换为空格并标题格式化
        if (siteName.includes('-') || siteName.includes('_')) {
            siteName = siteName.replace(/[-_]/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
        }
        
        return siteName;
    } catch (error) {
        console.error('获取网站标题失败:', error);
        throw new Error('无法获取网站标题');
    }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', initPage); 