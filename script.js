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
    ],
    // 分类顺序数组
    categoryOrder: ['cloud', 'design', 'games', 'media', 'music', 'news', 'programming', 'projects']
};

// DOM 元素
let modal = document.getElementById('add-link-modal');
let editModal = document.getElementById('edit-link-modal');
let addBtn = document.getElementById('add-link-btn');
let closeBtn = document.querySelector('.close');
let editCloseBtn = document.getElementById('edit-close');
let addLinkForm = document.getElementById('add-link-form');
let editLinkForm = document.getElementById('edit-link-form');
let dateDisplay = document.getElementById('date-display');
let greeting = document.getElementById('greeting');
let menuBtn = document.getElementById('menu-btn');
let dropdownMenu = document.querySelector('.dropdown-menu');
let exportBtn = document.getElementById('export-btn');
let importFileInput = document.getElementById('import-file');
let deleteLinkBtn = document.getElementById('delete-link-btn');
let refreshIconsBtn = document.getElementById('refresh-icons-btn');
let fetchNameBtn = document.getElementById('fetch-name-btn');
let editFetchNameBtn = document.getElementById('edit-fetch-name-btn');
let toggleLanguageBtn = document.getElementById('toggle-language-btn');
let recentUrlsBtn = document.getElementById('recent-urls-btn');
let recentUrlsDropdown = document.getElementById('recent-urls-dropdown');
let setUsernameBtn = document.getElementById('set-username-btn');
let usernameModal = document.getElementById('username-modal');
let usernameCloseBtn = document.getElementById('username-close');
let usernameForm = document.getElementById('username-form');

// 获取本地存储的链接或使用初始数据
let links = JSON.parse(localStorage.getItem('navLinks')) || initialLinks;

// 确保links中有categoryOrder数组
if (!links.categoryOrder) {
    // 如果没有分类顺序数组，则创建一个，包含所有非applications分类
    links.categoryOrder = Object.keys(links).filter(key => key !== 'applications' && key !== 'categoryOrder');
    localStorage.setItem('navLinks', JSON.stringify(links));
}

// 获取最近添加的URL历史记录
let recentUrls = JSON.parse(localStorage.getItem('recentUrls')) || [];

// 当前语言设置
let currentLang = localStorage.getItem('language') || 'zh';

// 用户信息
let userName = localStorage.getItem('userName') || '';
let pageTitle = localStorage.getItem('pageTitle') || '';

// 图标源设置：network(默认), local, chinese-api
let iconSource = localStorage.getItem('iconSource') || 'network';

// 获取当前语言的文本
function getText(key) {
    // 对于toggleLanguage键进行特殊处理，以确保始终返回正确的切换语言文本
    if (key === 'toggleLanguage') {
        return languages[currentLang]['toggleLanguage'];
    }
    
    // 如果是以cat_开头的键，需要特殊处理
    if (key && key.startsWith('cat_')) {
        // 首先检查当前语言中是否有此键的文本
        if (languages[currentLang][key]) {
            return languages[currentLang][key];
        }
        
        // 如果没有找到，尝试在所有语言中查找
        for (const lang in languages) {
            if (languages[lang][key]) {
                return languages[lang][key];
            }
        }
        
        // 尝试从本地存储的categoryNames中获取
        try {
            const categoryNames = JSON.parse(localStorage.getItem('categoryNames') || '{}');
            if (categoryNames[key]) {
                // 同时更新languages对象
                languages.zh[key] = categoryNames[key];
                languages.en[key] = categoryNames[key];
                return categoryNames[key];
            }
        } catch (e) {
            console.error("从categoryNames获取分类名称时出错:", e);
        }
        
        // 如果仍然没有找到，返回键名但去掉前缀
        return key.replace('cat_', '分类_');
    }
    
    // 正常情况下返回当前语言的文本，或者键名本身
    return languages[currentLang][key] || key;
}

// 修复分类名称显示问题
function initLanguageData() {
    console.log("初始化分类名称数据...");
    
    // 首先尝试从本地存储加载分类名称映射
    let categoryNames = {};
    try {
        categoryNames = JSON.parse(localStorage.getItem('categoryNames') || '{}');
        console.log("从本地存储加载的分类名称:", categoryNames);
    } catch (e) {
        console.error("加载分类名称时出错:", e);
        categoryNames = {};
    }
    
    // 遍历所有分类
    for (const category in links) {
        // 跳过非分类键
        if (category === 'categoryOrder' || typeof links[category] !== 'object') {
            continue;
        }
        
        console.log(`处理分类: ${category}`);
        
        // 如果是以cat_开头的分类键
        if (category.startsWith('cat_')) {
            // 如果在映射中找到了名称
            if (categoryNames[category]) {
                console.log(`找到分类 ${category} 的名称: ${categoryNames[category]}`);
                languages.zh[category] = categoryNames[category];
                languages.en[category] = categoryNames[category];
            } 
            // 如果在语言数据中没有对应的名称
            else if (!languages.zh[category] && !languages.en[category]) {
                // 创建一个临时名称
                const defaultName = '分类_' + category.substring(4);
                console.log(`为分类 ${category} 创建临时名称: ${defaultName}`);
                languages.zh[category] = defaultName;
                languages.en[category] = defaultName;
            }
        }
        // 对于非cat_开头的常规分类键（如cloud, design等）
        else {
            // 如果在语言数据中没有名称，使用key本身作为名称
            if (!languages.zh[category]) {
                languages.zh[category] = category.charAt(0).toUpperCase() + category.slice(1);
            }
            if (!languages.en[category]) {
                languages.en[category] = category.charAt(0).toUpperCase() + category.slice(1);
            }
            
            // 同时保存到categoryNames中
            categoryNames[category] = languages.zh[category];
        }
    }
    
    // 更新并保存分类名称映射
    localStorage.setItem('categoryNames', JSON.stringify(categoryNames));
    console.log("保存的分类名称映射:", categoryNames);
}

// 保存分类名称映射到本地存储
function saveCategoryNames() {
    let categoryNames = {};
    
    // 尝试从本地存储加载现有映射
    try {
        categoryNames = JSON.parse(localStorage.getItem('categoryNames') || '{}');
    } catch (e) {
        console.error("加载现有分类名称映射时出错:", e);
        categoryNames = {};
    }
    
    // 遍历所有分类
    for (const category in links) {
        // 跳过非分类键
        if (category === 'categoryOrder' || typeof links[category] !== 'object') {
            continue;
        }
        
        // 保存分类名称（优先使用当前语言的名称）
        if (languages[currentLang][category]) {
            categoryNames[category] = languages[currentLang][category];
        } else if (languages.zh[category]) {
            categoryNames[category] = languages.zh[category];
        } else if (languages.en[category]) {
            categoryNames[category] = languages.en[category];
        }
    }
    
    // 保存到本地存储
    localStorage.setItem('categoryNames', JSON.stringify(categoryNames));
    console.log("更新的分类名称映射:", categoryNames);
}

// 保存最后选择的分类到localStorage
function saveLastSelectedCategory(category) {
    localStorage.setItem('lastSelectedCategory', category);
}

// 获取最后选择的分类
function getLastSelectedCategory() {
    return localStorage.getItem('lastSelectedCategory') || 'applications'; // 默认返回 'applications'
}

// 从本地存储加载链接数据
function loadLinks() {
    try {
        // 尝试从localStorage获取导航链接数据
        const savedLinks = localStorage.getItem('navLinks');
        if (savedLinks) {
            links = JSON.parse(savedLinks);
            console.log("已从本地存储加载链接数据");
            
            // 确保links中有categoryOrder数组
            if (!links.categoryOrder) {
                // 如果没有分类顺序数组，则创建一个，包含所有非applications分类
                links.categoryOrder = Object.keys(links).filter(key => 
                    key !== 'applications' && 
                    key !== 'categoryOrder' && 
                    typeof links[key] === 'object'
                );
                localStorage.setItem('navLinks', JSON.stringify(links));
                console.log("创建了缺失的分类顺序数组");
            }
        } else {
            // 如果没有保存的数据，使用初始数据
            links = initialLinks;
            console.log("使用初始链接数据");
            
            // 保存初始数据到localStorage
            localStorage.setItem('navLinks', JSON.stringify(links));
        }
    } catch (error) {
        console.error("加载链接数据时出错:", error);
        // 出错时使用初始数据
        links = initialLinks;
        localStorage.setItem('navLinks', JSON.stringify(links));
    }
}

// 初始化页面
function initPage() {
    // 初始化多语言数据
    initLanguageData();
    
    // 加载链接数据
    loadLinks();
    
    // 获取DOM元素
    dateDisplay = document.getElementById('date-display');
    greeting = document.getElementById('greeting');
    dropdownMenu = document.querySelector('.dropdown-menu');
    
    // 定期更新日期和时间
    updateDateTime();
    setInterval(updateDateTime, 60000); // 每分钟更新一次
    
    // 应用当前语言
    applyLanguage();
    
    // 确保语言切换按钮文本正确
    document.getElementById('toggle-language-btn').textContent = getText('toggleLanguage');
    
    // 渲染应用程序和书签
    renderApplications();
    renderBookmarks();
    
    // 添加连接
    document.getElementById('add-link-btn').addEventListener('click', () => {
        openModal();
    });
    
    // 添加链接表单提交
    document.getElementById('add-link-form').addEventListener('submit', handleAddLink);
    
    // 编辑链接表单提交
    document.getElementById('edit-link-form').addEventListener('submit', handleEditLink);
    
    // 删除链接按钮点击
    document.getElementById('delete-link-btn').addEventListener('click', handleDeleteLink);
    
    // 关闭模态窗口
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });
    
    // 当用户在模态窗口外点击时关闭模态窗口
    window.addEventListener('click', (e) => {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // 菜单切换
    document.getElementById('menu-btn').addEventListener('click', toggleMenu);
    document.addEventListener('click', (e) => {
        if (!e.target.matches('#menu-btn') && !e.target.closest('.dropdown-menu')) {
            dropdownMenu.classList.remove('active');
        }
    });
    
    // 导出按钮
    document.getElementById('export-btn').addEventListener('click', exportLinks);
    
    // 导入按钮
    document.getElementById('import-file').addEventListener('change', handleImportFile);
    
    // 更新下拉选项中的分类名称
    updateCategorySelectOptions();
    
    // 监听语言变化，更新下拉选项
    const observer = new MutationObserver(() => {
        updateCategorySelectOptions();
    });
    
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    
    // 添加事件监听器
    document.getElementById('manage-categories-btn').addEventListener('click', openCategoryModal);
    document.getElementById('toggle-language-btn').addEventListener('click', toggleLanguage);
    document.getElementById('refresh-icons-btn').addEventListener('click', refreshAllIcons);
    document.getElementById('set-username-btn').addEventListener('click', openUsernameModal);
    document.getElementById('themes-btn').addEventListener('click', openThemesModal);
    document.getElementById('advanced-settings-btn').addEventListener('click', openAdvancedSettingsModal);
    
    // 保存高级设置
    document.getElementById('save-advanced-settings').addEventListener('click', saveAdvancedSettings);

    // 初始化拖拽排序
    initDragSortTouch();

    // 初始化分类拖拽排序
    initCategoryDragSort();

    // 设置长按事件
    setupLongPressEvents();

    // 自动获取网址名称
    document.getElementById('fetch-name-btn').addEventListener('click', handleFetchName);
    document.getElementById('edit-fetch-name-btn').addEventListener('click', handleEditFetchName);

    // 最近添加的URL下拉菜单
    document.getElementById('recent-urls-btn').addEventListener('click', toggleRecentUrlsDropdown);
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('recent-urls-dropdown');
        const button = document.getElementById('recent-urls-btn');
        if (!dropdown.contains(e.target) && e.target !== button) {
            dropdown.classList.remove('active');
        }
    });

    // 添加分类表单提交
    document.getElementById('category-form').addEventListener('submit', handleAddCategory);

    // 编辑分类表单提交
    document.getElementById('category-edit-form').addEventListener('submit', handleEditCategory);

    // 删除分类按钮点击
    document.getElementById('delete-category-btn').addEventListener('click', handleDeleteCategory);

    // 用户名设置表单提交
    document.getElementById('username-form').addEventListener('submit', handleUsernameSubmit);
    
    // 初始化主题
    initTheme();
}

// 初始化主题
function initTheme() {
    // 从localStorage获取保存的主题
    const currentTheme = localStorage.getItem('theme') || 'default';
    
    // 应用保存的主题
    applyTheme(currentTheme);
}

// 应用主题
function applyTheme(theme) {
    // 删除之前的主题类
    document.body.classList.remove('light-theme', 'blue-theme', 'purple-theme', 'pink-theme', 'beige-theme');
    
    // 添加新的主题类
    switch (theme) {
        case 'light':
            document.body.classList.add('light-theme');
            break;
        case 'blue':
            document.body.classList.add('blue-theme');
            break;
        case 'purple':
            document.body.classList.add('purple-theme');
            break;
        case 'pink':
            document.body.classList.add('pink-theme');
            break;
        case 'beige':
            document.body.classList.add('beige-theme');
            break;
        default:
            // 默认深色主题，不需要添加类
            break;
    }
}

// 应用当前语言到界面
function applyLanguage() {
    // 更新HTML文档的语言属性
    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    
    // 设置页面标题
    document.title = pageTitle || getText('appTitle');
    
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
    
    // 更新菜单
    document.getElementById('set-username-btn').textContent = getText('setUsername');
    document.getElementById('manage-categories-btn').textContent = getText('manageCategories');
    document.getElementById('themes-btn').textContent = getText('themes');
    document.getElementById('advanced-settings-btn').textContent = getText('advancedSettings');
    
    // 确保始终更新语言切换按钮文本，无论切换多少次
    document.getElementById('toggle-language-btn').textContent = getText('toggleLanguage');
    
    document.getElementById('refresh-icons-btn').textContent = getText('refreshIcons');
    document.getElementById('export-btn').textContent = getText('exportLinks');
    document.getElementById('import-label').textContent = getText('importLinks');
    
    // 更新主题设置模态窗口
    if(document.getElementById('themes-title')) {
        document.getElementById('themes-title').textContent = getText('themes');
    }
    if(document.getElementById('theme-description')) {
        document.getElementById('theme-description').textContent = getText('themeDescription');
    }
    
    // 更新主题选项的提示文本
    document.querySelectorAll('.theme-option').forEach(option => {
        const themeType = option.getAttribute('data-theme');
        switch(themeType) {
            case 'default':
                option.setAttribute('title', getText('darkTheme'));
                break;
            case 'light':
                option.setAttribute('title', getText('lightTheme'));
                break;
            case 'blue':
                option.setAttribute('title', getText('blueTheme'));
                break;
            case 'purple':
                option.setAttribute('title', getText('purpleTheme'));
                break;
            case 'pink':
                option.setAttribute('title', getText('pinkTheme'));
                break;
            case 'beige':
                option.setAttribute('title', getText('beigeTheme'));
                break;
        }
    });
    
    // 更新分类模态窗口
    document.getElementById('category-modal-title').textContent = getText('manageCategories');
    document.getElementById('new-category-name').placeholder = getText('newCategoryName');
    document.getElementById('add-category-btn').textContent = getText('addCategory');
    
    // 更新分类编辑模态窗口
    document.getElementById('category-edit-title').textContent = getText('editCategory');
    document.getElementById('delete-category-btn').textContent = getText('deleteCategory');
    document.querySelector('#category-edit-form label[for="category-name"]').textContent = getText('categoryName');
    document.querySelector('#category-edit-form button[type="submit"]').textContent = getText('update');
    
    // 更新用户名设置模态窗口
    document.getElementById('username-title').textContent = getText('setUsername');
    
    // 更新高级设置模态窗口
    if(document.getElementById('advanced-settings-title')) {
        document.getElementById('advanced-settings-title').textContent = getText('advancedSettings');
        document.getElementById('icon-settings-title').textContent = getText('iconSettings');
        document.getElementById('icon-settings-desc').textContent = getText('iconSettingsDesc');
        document.getElementById('use-network-icons-label').textContent = getText('useNetworkIcons');
        document.getElementById('use-local-icons-label').textContent = getText('useLocalIcons');
        document.getElementById('save-advanced-settings').textContent = getText('saveSettings');
    }
    
    // 更新页脚文本
    if(document.getElementById('footer-text')) {
        document.getElementById('footer-text').textContent = getText('footerText');
    }
    if(document.getElementById('github-author')) {
        document.getElementById('github-author').textContent = getText('githubAuthor');
    }
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
    
    // 确保语言切换按钮的文本始终更新，无论切换多少次
    document.getElementById('toggle-language-btn').textContent = getText('toggleLanguage');
    
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
        greetingText = userName ? getText('morningWithName').replace('{name}', userName) : getText('morning');
    } else if (hour < 18) {
        greetingText = userName ? getText('afternoonWithName').replace('{name}', userName) : getText('afternoon');
    } else {
        greetingText = userName ? getText('eveningWithName').replace('{name}', userName) : getText('evening');
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
        
        // 添加拖拽属性
        appItem.draggable = true;
        appItem.addEventListener('dragstart', handleDragStart);
        appItem.addEventListener('dragover', handleDragOver);
        appItem.addEventListener('drop', handleDrop);
        appItem.addEventListener('dragend', handleDragEnd);
        
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
    const categoryContainer = document.querySelectorAll('.category-container');
    
    // 清空现有分类容器
    categoryContainer.forEach(container => {
        container.innerHTML = '';
    });
    
    // 获取分类排序数组
    const categoryOrder = links.categoryOrder || [];
    
    // 确保所有分类都在排序数组中
    // 获取所有非applications的分类
    const allCategories = Object.keys(links).filter(key => key !== 'applications' && key !== 'categoryOrder');
    
    // 添加任何不在排序数组中的分类
    allCategories.forEach(category => {
        if (!categoryOrder.includes(category)) {
            categoryOrder.push(category);
        }
    });
    
    // 移除排序数组中不存在的分类
    for (let i = categoryOrder.length - 1; i >= 0; i--) {
        if (!allCategories.includes(categoryOrder[i])) {
            categoryOrder.splice(i, 1);
        }
    }
    
    // 保存更新后的排序数组
    links.categoryOrder = categoryOrder;
    localStorage.setItem('navLinks', JSON.stringify(links));
    
    // 为每个分类创建HTML元素
    categoryOrder.forEach((category, index) => {
        // 创建分类元素
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.dataset.category = category;
        
        // 创建标题和操作按钮
        const titleContainer = document.createElement('div');
        titleContainer.className = 'category-title-container';
        
        // 为标题容器添加拖拽属性和事件
        titleContainer.draggable = true;
        titleContainer.dataset.category = category;
        titleContainer.addEventListener('dragstart', handleCategoryDragStart);
        titleContainer.addEventListener('dragover', handleCategoryDragOver);
        titleContainer.addEventListener('drop', handleCategoryDrop);
        titleContainer.addEventListener('dragend', handleCategoryDragEnd);
        
        const title = document.createElement('h3');
        title.id = `${category}-title`;
        title.textContent = getText(category);
        titleContainer.appendChild(title);
        
        // 添加编辑按钮
        const editButton = document.createElement('button');
        editButton.className = 'category-edit-btn';
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.addEventListener('click', () => {
            openCategoryEditModal(category);
        });
        titleContainer.appendChild(editButton);
        
        categoryDiv.appendChild(titleContainer);
        
        // 创建书签列表
        const ul = document.createElement('ul');
        ul.id = `${category}-links`;
        
        // 为列表添加拖拽事件监听器，以便可以将链接直接拖到空列表
        ul.addEventListener('dragover', handleDragOver);
        ul.addEventListener('drop', function(e) {
            // 如果列表为空且正在拖拽链接，则处理放置事件
            if (isDraggingLink && (!links[category] || links[category].length === 0)) {
                e.preventDefault();
                
                // 将链接移到这个分类，并放在末尾
                const draggedLink = links[sourceCategoryName].splice(sourceIndex, 1)[0];
                
                // 确保目标分类存在
                if (!links[category]) {
                    links[category] = [];
                }
                
                // 在新分类中插入
                links[category].push(draggedLink);
                
                // 保存到本地存储
                localStorage.setItem('navLinks', JSON.stringify(links));
                
                // 重新渲染
                renderApplications();
                renderBookmarks();
            }
        });
        
        // 添加书签
        if (links[category] && links[category].length > 0) {
            links[category].forEach((link, linkIndex) => {
                const li = document.createElement('li');
                li.dataset.index = linkIndex;
                li.dataset.category = category;
                
                // 添加拖拽属性
                li.draggable = true;
                li.addEventListener('dragstart', handleDragStart);
                li.addEventListener('dragover', handleDragOver);
                li.addEventListener('drop', handleDrop);
                li.addEventListener('dragend', handleDragEnd);
                
                const a = document.createElement('a');
                a.href = link.url;
                a.target = '_blank';
                
                // 阻止链接点击事件冒泡，避免与拖拽冲突
                a.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
                
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
                    showEditOptions(category, linkIndex, e);
                });
                
                li.appendChild(a);
                
                // 添加动态右移按钮
                const actionBtn = document.createElement('button');
                actionBtn.className = 'bookmark-action-btn';
                actionBtn.innerHTML = '<i class="fas fa-ellipsis-v"></i>';
                actionBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    showEditOptions(category, linkIndex, e);
                });
                li.appendChild(actionBtn);
                
                ul.appendChild(li);
            });
        }
        
        categoryDiv.appendChild(ul);
        
        // 根据索引决定添加到哪个容器
        const containerIndex = Math.floor(index / 4);  // 每个容器最多4个分类
        const targetContainer = categoryContainer[Math.min(containerIndex, categoryContainer.length - 1)];
        targetContainer.appendChild(categoryDiv);
    });
    
    // 更新选择菜单中的分类选项
    updateCategorySelectOptions();
}

// 更新分类选择下拉菜单
function updateCategorySelectOptions() {
    // 获取分类选择器
    const categorySelectors = [
        document.getElementById('link-category'),
        document.getElementById('edit-link-new-category')
    ];
    
    // 获取分类列表（除了applications）
    const categories = Object.keys(links).filter(key => key !== 'applications');
    
    // 更新每个选择器
    categorySelectors.forEach(selector => {
        if (!selector) return;
        
        // 保存当前选中的值
        const currentValue = selector.value;
        
        // 清除现有选项（保留applications选项）
        while (selector.options.length > 1) {
            selector.remove(1);
        }
        
        // 添加分类选项
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = getText(category);
            selector.appendChild(option);
        });
        
        // 恢复之前选中的值，如果可能的话
        if (categories.includes(currentValue)) {
            selector.value = currentValue;
        }
    });
}

// 打开模态窗口
function openModal() {
    modal.style.display = 'block';
    
    // 设置上次选择的分类
    const lastCategory = getLastSelectedCategory();
    const categorySelect = document.getElementById('link-category');
    if (categorySelect.querySelector(`option[value="${lastCategory}"]`)) {
        categorySelect.value = lastCategory;
    }
    
    // 只有在字段为空时才设置默认值，避免清空扩展填充的值
    const urlInput = document.getElementById('link-url');
    const nameInput = document.getElementById('link-name');
    
    // 如果没有值（表单是用户手动打开的），才清空这些字段
    if (!urlInput.value.trim()) {
        urlInput.value = '';
    }
    
    if (!nameInput.value.trim()) {
        nameInput.value = '';
    }
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
    
    // 保存选择的分类
    saveLastSelectedCategory(category);
    
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
    
    // 添加到最近URL历史记录
    addToRecentUrls(url, name);
    
    // 重新渲染
    if (category === 'applications') {
        renderApplications();
    } else {
        renderBookmarks();
    }
    
    closeModal();
}

// 添加URL到最近历史记录
function addToRecentUrls(url, name) {
    // 检查是否已存在相同URL
    const existingIndex = recentUrls.findIndex(item => item.url === url);
    
    // 如果存在，从数组中移除
    if (existingIndex !== -1) {
        recentUrls.splice(existingIndex, 1);
    }
    
    // 添加到数组开头
    recentUrls.unshift({
        url,
        name,
        timestamp: new Date().getTime()
    });
    
    // 限制历史记录数量为10
    if (recentUrls.length > 10) {
        recentUrls = recentUrls.slice(0, 10);
    }
    
    // 保存到本地存储
    localStorage.setItem('recentUrls', JSON.stringify(recentUrls));
}

// 切换最近URL下拉菜单显示状态
function toggleRecentUrlsDropdown() {
    // 切换显示状态
    recentUrlsDropdown.classList.toggle('active');
    
    // 如果显示，则渲染列表
    if (recentUrlsDropdown.classList.contains('active')) {
        renderRecentUrls();
    }
}

// 渲染最近添加的URL列表
function renderRecentUrls() {
    // 清空列表
    recentUrlsDropdown.innerHTML = '';
    
    // 如果没有历史记录
    if (recentUrls.length === 0) {
        const emptyItem = document.createElement('div');
        emptyItem.className = 'dropdown-item';
        emptyItem.textContent = getText('noRecentUrls');
        recentUrlsDropdown.appendChild(emptyItem);
        return;
    }
    
    // 添加清除历史记录选项
    const clearItem = document.createElement('div');
    clearItem.className = 'dropdown-item';
    clearItem.textContent = getText('clearHistory');
    clearItem.style.color = '#f44336';
    clearItem.addEventListener('click', clearRecentUrls);
    recentUrlsDropdown.appendChild(clearItem);
    
    // 添加分隔线
    const divider = document.createElement('div');
    divider.className = 'dropdown-item-divider';
    recentUrlsDropdown.appendChild(divider);
    
    // 遍历并添加历史记录
    recentUrls.forEach(item => {
        const dropdownItem = document.createElement('div');
        dropdownItem.className = 'dropdown-item';
        
        const nameElement = document.createElement('div');
        nameElement.className = 'name';
        nameElement.textContent = item.name;
        
        const urlElement = document.createElement('div');
        urlElement.className = 'url';
        urlElement.textContent = item.url;
        
        dropdownItem.appendChild(nameElement);
        dropdownItem.appendChild(urlElement);
        
        // 点击事件
        dropdownItem.addEventListener('click', () => {
            document.getElementById('link-url').value = item.url;
            document.getElementById('link-name').value = item.name;
            recentUrlsDropdown.classList.remove('active');
        });
        
        recentUrlsDropdown.appendChild(dropdownItem);
    });
}

// 清除最近URL历史记录
function clearRecentUrls() {
    // 确认是否清除
    if (confirm(getText('clearHistory') + '?')) {
        // 清空数组
        recentUrls = [];
        
        // 更新本地存储
        localStorage.removeItem('recentUrls');
        
        // 重新渲染并关闭下拉菜单
        renderRecentUrls();
        recentUrlsDropdown.classList.remove('active');
    }
}

// 处理编辑链接表单提交
function handleEditLink(e) {
    e.preventDefault();
    
    const index = parseInt(document.getElementById('edit-link-index').value);
    const oldCategory = document.getElementById('edit-link-category').value;
    const newCategory = document.getElementById('edit-link-new-category').value;
    
    // 保存选择的分类
    saveLastSelectedCategory(newCategory);
    
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
        let faviconUrl;
        
        // 根据图标源设置选择获取方式
        switch(iconSource) {
            case 'local':
                // 使用默认的Font Awesome图标代替
                return null; // 返回null会使应用程序使用默认图标
                
            case 'network':
            default:
                // 使用Google的favicon服务
                faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
                break;
        }
        
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
    editBtn.textContent = getText('edit');
    editBtn.addEventListener('click', () => {
        openEditModal(category, index);
        contextMenu.remove();
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = getText('delete');
    deleteBtn.addEventListener('click', () => {
        if (confirm(getText('confirmDelete'))) {
            links[category].splice(index, 1);
            localStorage.setItem('navLinks', JSON.stringify(links));
            renderApplications();
            renderBookmarks();
        }
        contextMenu.remove();
    });
    
    const openBtn = document.createElement('button');
    openBtn.textContent = getText('open');
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
    console.log("开始导出数据...");
    
    // 准备导出数据，包括links和categoryNames以及用户信息
    const exportData = {
        links: links,
        categoryNames: {},
        userSettings: {
            userName: userName,
            pageTitle: pageTitle
        }
    };
    
    // 加载分类名称映射
    try {
        const categoryNames = JSON.parse(localStorage.getItem('categoryNames') || '{}');
        exportData.categoryNames = categoryNames;
        console.log("导出包含分类名称映射:", categoryNames);
    } catch (e) {
        console.error("导出时加载分类名称出错:", e);
    }
    
    // 转换为JSON字符串
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'nav-links.json';
    
    // 创建下载链接
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    // 关闭菜单
    dropdownMenu.classList.remove('active');
    
    console.log("数据导出完成");
}

// 处理导入文件
function handleImportFile(e) {
    console.log("开始导入数据...");
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            // 解析导入的JSON数据
            const importedData = JSON.parse(event.target.result);
            
            // 检查是否是新格式（包含categoryNames和用户设置）
            if (importedData.links) {
                console.log("导入数据格式有效");
                links = importedData.links;
                
                // 处理分类名称
                if (importedData.categoryNames) {
                    console.log("导入分类名称映射");
                    localStorage.setItem('categoryNames', JSON.stringify(importedData.categoryNames));
                    
                    // 更新languages对象，以便正确显示分类名称
                    for (const category in importedData.categoryNames) {
                        const name = importedData.categoryNames[category];
                        languages.zh[category] = name;
                        languages.en[category] = name;
                        console.log(`导入分类名称: ${category} -> ${name}`);
                    }
                }
                
                // 导入用户设置（如果有）
                if (importedData.userSettings) {
                    if (importedData.userSettings.userName !== undefined) {
                        userName = importedData.userSettings.userName;
                        localStorage.setItem('userName', userName);
                        console.log("导入用户名:", userName);
                    }
                    
                    if (importedData.userSettings.pageTitle !== undefined) {
                        pageTitle = importedData.userSettings.pageTitle;
                        localStorage.setItem('pageTitle', pageTitle);
                        console.log("导入页面标题:", pageTitle);
                    }
                }
            }
            // 兼容旧格式（直接是links对象）
            else {
                console.log("导入旧格式数据，无分类名称映射");
                links = importedData;
                
                // 尝试为cat_开头的分类创建默认名称
                const categoryNames = {};
                for (const category in links) {
                    if (category === 'categoryOrder' || typeof links[category] !== 'object') {
                        continue;
                    }
                    
                    if (category.startsWith('cat_')) {
                        const defaultName = '分类_' + category.substring(4);
                        categoryNames[category] = defaultName;
                        languages.zh[category] = defaultName;
                        languages.en[category] = defaultName;
                        console.log(`为导入的分类创建默认名称: ${category} -> ${defaultName}`);
                    }
                }
                
                // 保存新创建的分类名称映射
                if (Object.keys(categoryNames).length > 0) {
                    localStorage.setItem('categoryNames', JSON.stringify(categoryNames));
                }
            }
            
            // 保存到本地存储
            localStorage.setItem('navLinks', JSON.stringify(links));
            
            // 重新初始化分类名称数据
            initLanguageData();
            
            // 更新页面标题和问候语
            document.title = pageTitle || getText('appTitle');
            updateGreeting();
            
            // 重新渲染
            renderApplications();
            renderBookmarks();
            
            alert(getText('importSuccess'));
            console.log("数据导入成功");
        } catch (error) {
            console.error("导入失败:", error);
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

// 处理拖拽开始事件
let draggedItem = null;
let sourceCategoryName = '';
let sourceIndex = 0;
let isDraggingLink = false; // 新增：标记是否在拖拽链接而不是分类

function handleDragStart(e) {
    // 设置拖拽效果和数据
    e.dataTransfer.effectAllowed = 'move';
    
    // 存储拖拽的项目信息
    draggedItem = this;
    sourceCategoryName = this.dataset.category;
    sourceIndex = parseInt(this.dataset.index);
    isDraggingLink = true; // 设置为正在拖拽链接
    
    // 添加一个类以改变拖拽元素的外观
    setTimeout(() => {
        this.classList.add('dragging');
    }, 0);
    
    // 添加一个自定义数据类型以区分拖动的是链接还是分类
    e.dataTransfer.setData('application/x-item-type', 'link');
}

// 处理拖拽经过事件
function handleDragOver(e) {
    // 阻止默认行为以允许放置
    e.preventDefault();
    
    // 设置放置效果
    e.dataTransfer.dropEffect = 'move';
    
    // 只有在拖拽链接时才添加视觉效果
    if (isDraggingLink && draggedItem !== this) {
        this.classList.add('drag-over');
    }
    
    return false;
}

// 处理放置事件
function handleDrop(e) {
    e.preventDefault();
    
    // 移除拖拽经过的视觉效果
    this.classList.remove('drag-over');
    
    // 如果拖放在自己身上，不做任何操作
    if (draggedItem === this) {
        return false;
    }
    
    // 只处理链接拖拽，不处理分类拖拽
    if (isDraggingLink) {
        // 获取目标元素的位置信息
        const targetCategoryName = this.dataset.category;
        const targetIndex = parseInt(this.dataset.index);
        
        // 在相同分类内重新排序
        if (sourceCategoryName === targetCategoryName) {
            // 获取拖拽的链接对象
            const draggedLink = links[sourceCategoryName].splice(sourceIndex, 1)[0];
            
            // 在新位置插入
            links[targetCategoryName].splice(targetIndex, 0, draggedLink);
        } else {
            // 跨分类移动（如果允许）
            const draggedLink = links[sourceCategoryName].splice(sourceIndex, 1)[0];
            
            // 确保目标分类存在
            if (!links[targetCategoryName]) {
                links[targetCategoryName] = [];
            }
            
            // 在新分类中插入
            links[targetCategoryName].splice(targetIndex, 0, draggedLink);
        }
        
        // 保存到本地存储
        localStorage.setItem('navLinks', JSON.stringify(links));
        
        // 重新渲染
        renderApplications();
        renderBookmarks();
    }
    
    return false;
}

// 处理拖拽结束事件
function handleDragEnd() {
    // 移除拖拽中的视觉效果
    this.classList.remove('dragging');
    
    // 移除所有元素上的拖拽经过效果
    document.querySelectorAll('.application-item, .category li').forEach(item => {
        item.classList.remove('drag-over');
    });
    
    // 重置拖拽状态
    draggedItem = null;
    isDraggingLink = false;
}

// 为触摸设备初始化拖拽排序
function initDragSortTouch() {
    // 处理触摸设备上的拖拽
    let touchTimeout;
    let touchStartX, touchStartY;
    let touchMoving = false;
    let touchTarget = null;
    let ghostElement = null;
    let isTouchDraggingLink = false;
    let isTouchDraggingCategory = false;
    
    // 创建触摸拖拽的幽灵元素
    function createGhostElement(element) {
        const ghost = element.cloneNode(true);
        ghost.style.position = 'absolute';
        ghost.style.opacity = '0.7';
        ghost.style.pointerEvents = 'none';
        ghost.style.zIndex = '1000';
        document.body.appendChild(ghost);
        return ghost;
    }
    
    // 监听触摸开始事件 - 链接
    document.addEventListener('touchstart', (e) => {
        const linkTarget = e.target.closest('.application-item, .category li');
        const categoryTarget = e.target.closest('.category-title-container');
        
        // 优先处理链接拖拽
        if (linkTarget) {
            touchTarget = linkTarget;
            isTouchDraggingLink = true;
            isTouchDraggingCategory = false;
        } 
        // 如果不是链接且是分类标题，则处理分类拖拽
        else if (categoryTarget) {
            touchTarget = categoryTarget;
            isTouchDraggingCategory = true;
            isTouchDraggingLink = false;
        } else {
            return; // 不是可拖拽元素
        }
        
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        
        // 长按后才触发拖拽
        touchTimeout = setTimeout(() => {
            // 创建幽灵元素
            ghostElement = createGhostElement(touchTarget);
            updateGhostPosition(e.touches[0].clientX, e.touches[0].clientY);
            
            touchTarget.classList.add('dragging');
            
            if (isTouchDraggingLink) {
                sourceCategoryName = touchTarget.dataset.category;
                sourceIndex = parseInt(touchTarget.dataset.index);
                isDraggingLink = true;
            } else if (isTouchDraggingCategory) {
                draggedCategory = touchTarget;
                isDraggingCategory = true;
            }
        }, 300);
    });
    
    // 更新幽灵元素位置
    function updateGhostPosition(x, y) {
        if (!ghostElement) return;
        ghostElement.style.left = `${x - ghostElement.offsetWidth / 2}px`;
        ghostElement.style.top = `${y - ghostElement.offsetHeight / 2}px`;
    }
    
    // 监听触摸移动事件
    document.addEventListener('touchmove', (e) => {
        if (!touchTarget) return;
        
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        
        // 判断是否是拖拽意图（移动距离超过10像素）
        const moveX = Math.abs(touchX - touchStartX);
        const moveY = Math.abs(touchY - touchStartY);
        
        if (moveX > 10 || moveY > 10) {
            touchMoving = true;
            clearTimeout(touchTimeout);
            
            // 更新幽灵元素位置
            if (ghostElement) {
                updateGhostPosition(touchX, touchY);
                
                // 寻找可放置的目标
                const elementsAtPoint = document.elementsFromPoint(touchX, touchY);
                
                // 移除所有drag-over效果
                document.querySelectorAll('.drag-over').forEach(el => {
                    el.classList.remove('drag-over');
                });
                
                if (isTouchDraggingLink) {
                    const dropTarget = elementsAtPoint.find(el => 
                        (el.classList.contains('application-item') || 
                         el.closest('.category li')) && 
                        el !== touchTarget
                    );
                    
                    // 为当前悬停的链接元素添加效果
                    if (dropTarget) {
                        dropTarget.classList.add('drag-over');
                    }
                } else if (isTouchDraggingCategory) {
                    const dropTarget = elementsAtPoint.find(el => 
                        el.classList.contains('category-title-container') && 
                        el !== touchTarget
                    );
                    
                    // 为当前悬停的分类标题元素添加效果
                    if (dropTarget) {
                        dropTarget.classList.add('drag-over');
                    }
                }
            }
        }
    });
    
    // 监听触摸结束事件
    document.addEventListener('touchend', (e) => {
        clearTimeout(touchTimeout);
        
        // 如果存在幽灵元素，处理放置逻辑
        if (ghostElement) {
            const touchX = e.changedTouches[0].clientX;
            const touchY = e.changedTouches[0].clientY;
            
            // 寻找放置目标
            const elementsAtPoint = document.elementsFromPoint(touchX, touchY);
            
            if (isTouchDraggingLink) {
                const dropTarget = elementsAtPoint.find(el => 
                    (el.classList.contains('application-item') || 
                     el.closest('.category li')) && 
                    el !== touchTarget
                );
                
                // 如果找到放置目标，处理链接移动
                if (dropTarget) {
                    const targetCategoryName = dropTarget.dataset.category;
                    const targetIndex = parseInt(dropTarget.dataset.index);
                    
                    // 处理排序逻辑
                    if (sourceCategoryName === targetCategoryName) {
                        // 获取拖拽的链接对象
                        const draggedLink = links[sourceCategoryName].splice(sourceIndex, 1)[0];
                        
                        // 在新位置插入
                        links[targetCategoryName].splice(targetIndex, 0, draggedLink);
                    } else {
                        // 跨分类移动
                        const draggedLink = links[sourceCategoryName].splice(sourceIndex, 1)[0];
                        
                        // 确保目标分类存在
                        if (!links[targetCategoryName]) {
                            links[targetCategoryName] = [];
                        }
                        
                        // 在新分类中插入
                        links[targetCategoryName].splice(targetIndex, 0, draggedLink);
                    }
                    
                    // 保存到本地存储
                    localStorage.setItem('navLinks', JSON.stringify(links));
                    
                    // 重新渲染
                    renderApplications();
                    renderBookmarks();
                }
            } else if (isTouchDraggingCategory) {
                const dropTarget = elementsAtPoint.find(el => 
                    el.classList.contains('category-title-container') && 
                    el !== touchTarget
                );
                
                // 如果找到放置目标，处理分类移动
                if (dropTarget) {
                    const targetCategory = dropTarget.dataset.category;
                    const sourceCategory = touchTarget.dataset.category;
                    
                    // 在分类顺序数组中交换位置
                    const sourceIndex = links.categoryOrder.indexOf(sourceCategory);
                    const targetIndex = links.categoryOrder.indexOf(targetCategory);
                    
                    if (sourceIndex !== -1 && targetIndex !== -1) {
                        // 从源位置移除
                        links.categoryOrder.splice(sourceIndex, 1);
                        
                        // 插入到目标位置
                        links.categoryOrder.splice(targetIndex, 0, sourceCategory);
                        
                        // 保存更新后的顺序
                        localStorage.setItem('navLinks', JSON.stringify(links));
                        
                        // 重新渲染书签区域
                        renderBookmarks();
                    }
                }
            }
            
            // 移除幽灵元素
            document.body.removeChild(ghostElement);
            ghostElement = null;
        }
        
        // 清理状态
        if (touchTarget) {
            touchTarget.classList.remove('dragging');
        }
        
        document.querySelectorAll('.drag-over').forEach(el => {
            el.classList.remove('drag-over');
        });
        
        touchTarget = null;
        touchMoving = false;
        isDraggingLink = false;
        isDraggingCategory = false;
        isTouchDraggingLink = false;
        isTouchDraggingCategory = false;
    });
}

// 分类拖拽排序相关变量
let draggedCategory = null;
let isDraggingCategory = false; // 新增：标记是否在拖拽分类而不是链接

// 处理分类拖拽开始事件
function handleCategoryDragStart(e) {
    // 设置拖拽效果和数据
    e.dataTransfer.effectAllowed = 'move';
    
    // 存储拖拽的分类信息
    draggedCategory = this;
    isDraggingCategory = true; // 设置为正在拖拽分类
    
    // 添加拖拽中的视觉效果
    setTimeout(() => {
        this.classList.add('dragging');
    }, 0);
    
    // 添加一个自定义数据类型以区分拖动的是链接还是分类
    e.dataTransfer.setData('application/x-item-type', 'category');
}

// 处理分类拖拽经过事件
function handleCategoryDragOver(e) {
    // 阻止默认行为以允许放置
    e.preventDefault();
    
    // 设置放置效果
    e.dataTransfer.dropEffect = 'move';
    
    // 如果是不同的分类标题，且当前正在拖拽的是分类，添加拖拽经过的视觉效果
    if (isDraggingCategory && draggedCategory !== this && this.classList.contains('category-title-container')) {
        this.classList.add('drag-over');
    }
    
    return false;
}

// 处理分类放置事件
function handleCategoryDrop(e) {
    e.preventDefault();
    
    // 移除拖拽经过的视觉效果
    this.classList.remove('drag-over');
    
    // 如果拖放在自己身上，不做任何操作
    if (draggedCategory === this) {
        return false;
    }
    
    // 只处理分类拖拽，不处理链接拖拽
    if (isDraggingCategory) {
        // 获取目标元素和源元素的分类键
        const targetCategory = this.dataset.category;
        const sourceCategory = draggedCategory.dataset.category;
        
        // 在分类顺序数组中交换位置
        const sourceIndex = links.categoryOrder.indexOf(sourceCategory);
        const targetIndex = links.categoryOrder.indexOf(targetCategory);
        
        if (sourceIndex !== -1 && targetIndex !== -1) {
            // 从源位置移除
            links.categoryOrder.splice(sourceIndex, 1);
            
            // 插入到目标位置
            links.categoryOrder.splice(targetIndex, 0, sourceCategory);
            
            // 保存更新后的顺序
            localStorage.setItem('navLinks', JSON.stringify(links));
            
            // 重新渲染书签区域
            renderBookmarks();
        }
    }
    
    return false;
}

// 处理分类拖拽结束事件
function handleCategoryDragEnd() {
    // 移除拖拽中的视觉效果
    this.classList.remove('dragging');
    
    // 移除所有分类元素上的拖拽经过效果
    document.querySelectorAll('.category').forEach(item => {
        item.classList.remove('drag-over');
    });
    
    // 重置拖拽状态
    draggedCategory = null;
    isDraggingCategory = false;
}

// 添加分类管理模态窗口的DOM元素引用
const categoryModal = document.getElementById('category-modal');
const categoryCloseBtn = document.getElementById('category-close');
const categoryForm = document.getElementById('category-form');
const categoryList = document.getElementById('category-list');
const addCategoryBtn = document.getElementById('add-category-btn');
const manageCategoriesBtn = document.getElementById('manage-categories-btn');

// 分类编辑模态窗口的DOM元素引用
const categoryEditModal = document.getElementById('category-edit-modal');
const categoryEditCloseBtn = document.getElementById('category-edit-close');
const categoryEditForm = document.getElementById('category-edit-form');
const categoryNameInput = document.getElementById('category-name');
const categoryKeyInput = document.getElementById('category-key');
const deleteCategoryBtn = document.getElementById('delete-category-btn');

// 打开分类管理模态窗口
function openCategoryModal() {
    renderCategoryList();
    categoryModal.style.display = 'block';
    dropdownMenu.classList.remove('active'); // 关闭主菜单
}

// 关闭分类管理模态窗口
function closeCategoryModal() {
    categoryModal.style.display = 'none';
}

// 渲染分类列表
function renderCategoryList() {
    categoryList.innerHTML = '';
    
    // 使用分类排序数组
    const categoryOrder = links.categoryOrder || [];
    
    // 添加提示信息
    const tipEl = document.createElement('div');
    tipEl.className = 'category-tip';
    tipEl.innerHTML = `<i class="fas fa-info-circle"></i> ${getText('dragToReorder')}`;
    categoryList.appendChild(tipEl);
    
    categoryOrder.forEach(category => {
        const itemEl = document.createElement('div');
        itemEl.className = 'category-list-item';
        itemEl.dataset.category = category;
        
        // 创建拖拽手柄，只让手柄可拖拽
        const dragHandleEl = document.createElement('div');
        dragHandleEl.className = 'category-list-drag-handle';
        dragHandleEl.innerHTML = '<i class="fas fa-grip-vertical"></i>';
        dragHandleEl.dataset.category = category;
        dragHandleEl.draggable = true;
        
        // 添加拖拽事件处理
        dragHandleEl.addEventListener('dragstart', handleCategoryListDragStart);
        dragHandleEl.addEventListener('dragover', handleCategoryListDragOver);
        dragHandleEl.addEventListener('drop', handleCategoryListDrop);
        dragHandleEl.addEventListener('dragend', handleCategoryListDragEnd);
        
        // 创建分类名称和图标数量
        const nameEl = document.createElement('div');
        nameEl.className = 'category-list-name';
        nameEl.textContent = getText(category);
        
        const countEl = document.createElement('div');
        countEl.className = 'category-list-count';
        countEl.textContent = links[category] ? links[category].length : 0;
        
        const btnContainer = document.createElement('div');
        btnContainer.className = 'category-list-buttons';
        
        // 编辑按钮
        const editBtn = document.createElement('button');
        editBtn.className = 'category-edit-btn';
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.addEventListener('click', () => {
            openCategoryEditModal(category);
        });
        
        btnContainer.appendChild(editBtn);
        
        // 只有当分类为空时才允许删除
        if (!links[category] || links[category].length === 0) {
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'category-delete-btn';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.addEventListener('click', () => {
                if (confirm(getText('confirmDeleteCategory'))) {
                    deleteCategory(category);
                }
            });
            btnContainer.appendChild(deleteBtn);
        }
        
        itemEl.appendChild(dragHandleEl);
        itemEl.appendChild(nameEl);
        itemEl.appendChild(countEl);
        itemEl.appendChild(btnContainer);
        
        categoryList.appendChild(itemEl);
    });
}

// 分类列表拖拽相关
let draggedCategoryListItem = null;

// 处理分类列表拖拽开始事件
function handleCategoryListDragStart(e) {
    // 设置拖拽效果和数据
    e.dataTransfer.effectAllowed = 'move';
    
    // 存储拖拽的分类信息（使用父元素，即分类项）
    draggedCategoryListItem = this.closest('.category-list-item');
    
    // 添加拖拽中的视觉效果
    setTimeout(() => {
        draggedCategoryListItem.classList.add('dragging');
    }, 0);
}

// 处理分类列表拖拽经过事件
function handleCategoryListDragOver(e) {
    // 阻止默认行为以允许放置
    e.preventDefault();
    
    // 设置放置效果
    e.dataTransfer.dropEffect = 'move';
    
    // 找到最近的分类项
    const listItem = this.closest('.category-list-item');
    
    // 如果是不同的分类项，添加拖拽经过的视觉效果
    if (draggedCategoryListItem !== listItem && listItem) {
        listItem.classList.add('drag-over');
    }
    
    return false;
}

// 处理分类列表放置事件
function handleCategoryListDrop(e) {
    e.preventDefault();
    
    // 找到最近的分类项
    const listItem = this.closest('.category-list-item');
    if (!listItem) return false;
    
    // 移除拖拽经过的视觉效果
    listItem.classList.remove('drag-over');
    
    // 如果拖放在自己身上，不做任何操作
    if (draggedCategoryListItem === listItem) {
        return false;
    }
    
    // 获取源分类和目标分类
    const sourceCategory = draggedCategoryListItem.dataset.category;
    const targetCategory = listItem.dataset.category;
    
    // 在分类顺序数组中移动位置
    const sourceIndex = links.categoryOrder.indexOf(sourceCategory);
    const targetIndex = links.categoryOrder.indexOf(targetCategory);
    
    if (sourceIndex !== -1 && targetIndex !== -1) {
        // 从源位置移除
        links.categoryOrder.splice(sourceIndex, 1);
        
        // 插入到目标位置
        links.categoryOrder.splice(targetIndex, 0, sourceCategory);
        
        // 保存更新后的顺序
        localStorage.setItem('navLinks', JSON.stringify(links));
        
        // 重新渲染分类列表和书签区域
        renderCategoryList();
        renderBookmarks();
    }
    
    return false;
}

// 处理分类列表拖拽结束事件
function handleCategoryListDragEnd() {
    // 移除拖拽中的视觉效果
    if (draggedCategoryListItem) {
        draggedCategoryListItem.classList.remove('dragging');
    }
    
    // 移除所有分类列表项上的拖拽经过效果
    document.querySelectorAll('.category-list-item').forEach(item => {
        item.classList.remove('drag-over');
    });
    
    // 重置拖拽状态
    draggedCategoryListItem = null;
}

// 初始化分类拖拽功能
function initCategoryDragSort() {
    // 分类级别的拖拽功能已经在renderBookmarks中实现
    
    // 为分类管理设置事件监听
    categoryForm.addEventListener('submit', handleAddCategory);
    categoryEditForm.addEventListener('submit', handleEditCategory);
    categoryCloseBtn.addEventListener('click', closeCategoryModal);
    categoryEditCloseBtn.addEventListener('click', closeCategoryEditModal);
    deleteCategoryBtn.addEventListener('click', handleDeleteCategory);
}

// 添加新分类
function addNewCategory(name, key) {
    console.log(`添加新分类: ${name}`);
    
    // 如果没有提供key，从name生成
    if (!key) {
        // 修改key生成逻辑，支持中文和其他非ASCII字符
        // 使用唯一前缀+名称的MD5散列值截取生成key
        const prefix = 'cat_';
        
        // 如果名称是纯英文和数字，则保持原来的处理方式
        if (/^[a-zA-Z0-9\s_]+$/.test(name)) {
            key = name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
        } else {
            // 对于中文或其他非ASCII字符，使用字符串的hashCode
            key = prefix + generateSimpleHash(name);
        }
        
        console.log(`为 "${name}" 生成的key: ${key}`);
    }
    
    // 确保key是唯一的
    if (links[key]) {
        let counter = 1;
        let newKey = `${key}_${counter}`;
        while (links[newKey]) {
            counter++;
            newKey = `${key}_${counter}`;
        }
        key = newKey;
        console.log(`调整key以确保唯一: ${key}`);
    }
    
    // 添加到languages，以便getText可以使用
    languages.zh[key] = name;
    languages.en[key] = name; // 同样添加到英文版
    
    // 在links中创建新分类
    links[key] = [];
    
    // 将新分类添加到分类顺序数组中
    if (!links.categoryOrder) {
        links.categoryOrder = [];
    }
    links.categoryOrder.push(key);
    
    // 保存分类名称映射
    saveCategoryNames();
    
    // 保存到本地存储
    localStorage.setItem('navLinks', JSON.stringify(links));
    
    console.log(`分类 "${name}" (${key}) 添加完成`);
    
    // 重新渲染书签区域
    renderBookmarks();
    
    return key;
}

// 生成简单的字符串哈希值，用于中文等非ASCII字符的分类key
function generateSimpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        // 使用字符的Unicode码点
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash = hash & hash; // 转换为32位整数
    }
    // 返回正整数的字符串表示
    return Math.abs(hash).toString(36).substring(0, 8);
}

// 重命名分类
function renameCategory(oldKey, newName, newKey) {
    console.log(`重命名分类: ${oldKey} -> ${newName}`);
    
    // 如果没有提供新key，从新名称生成
    if (!newKey) {
        // 修改key生成逻辑，支持中文和其他非ASCII字符
        const prefix = 'cat_';
        
        // 如果名称是纯英文和数字，则保持原来的处理方式
        if (/^[a-zA-Z0-9\s_]+$/.test(newName)) {
            newKey = newName.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
        } else {
            // 对于中文或其他非ASCII字符，使用字符串的hashCode
            newKey = prefix + generateSimpleHash(newName);
        }
        
        console.log(`为 "${newName}" 生成的key: ${newKey}`);
    }
    
    // 确保新key是唯一的，如果和旧key不同
    if (oldKey !== newKey && links[newKey]) {
        let counter = 1;
        let tempKey = `${newKey}_${counter}`;
        while (links[tempKey]) {
            counter++;
            tempKey = `${newKey}_${counter}`;
        }
        newKey = tempKey;
        console.log(`调整key以确保唯一: ${newKey}`);
    }
    
    // 更新languages
    languages.zh[newKey] = newName;
    languages.en[newKey] = newName; // 同样更新英文版
    
    // 如果key改变了，需要移动数据
    if (oldKey !== newKey) {
        links[newKey] = links[oldKey];
        delete links[oldKey];
        
        // 删除旧的language条目
        delete languages.zh[oldKey];
        delete languages.en[oldKey];
        
        // 在分类顺序数组中更新key
        const index = links.categoryOrder.indexOf(oldKey);
        if (index !== -1) {
            links.categoryOrder[index] = newKey;
        }
        
        // 从categoryNames中移除旧key
        try {
            const categoryNames = JSON.parse(localStorage.getItem('categoryNames') || '{}');
            if (categoryNames[oldKey]) {
                delete categoryNames[oldKey];
                localStorage.setItem('categoryNames', JSON.stringify(categoryNames));
            }
        } catch (e) {
            console.error("更新categoryNames时出错:", e);
        }
    }
    
    // 保存分类名称映射
    saveCategoryNames();
    
    // 更新本地存储
    localStorage.setItem('navLinks', JSON.stringify(links));
    
    console.log(`分类重命名完成: ${oldKey} -> ${newKey} (${newName})`);
    
    // 重新渲染书签区域
    renderBookmarks();
    renderCategoryList();
    
    return newKey;
}

// 删除分类
function deleteCategory(key) {
    // 只有当分类为空时才允许删除
    if (links[key] && links[key].length > 0) {
        alert(getText('cannotDeleteNonEmptyCategory'));
        return false;
    }
    
    // 从links中删除分类
    delete links[key];
    
    // 从分类顺序数组中移除
    const index = links.categoryOrder.indexOf(key);
    if (index !== -1) {
        links.categoryOrder.splice(index, 1);
    }
    
    // 保存到本地存储
    localStorage.setItem('navLinks', JSON.stringify(links));
    
    // 重新渲染
    renderBookmarks();
    renderCategoryList();
    
    return true;
}

// 打开分类编辑模态窗口
function openCategoryEditModal(category) {
    // 设置当前分类信息
    categoryNameInput.value = getText(category);
    categoryKeyInput.value = category;
    
    // 更新模态窗口中的文本
    document.getElementById('category-edit-title').textContent = getText('editCategory');
    document.querySelector('#category-edit-form label[for="category-name"]').textContent = getText('categoryName');
    document.querySelector('#category-edit-form button[type="submit"]').textContent = getText('update');
    document.getElementById('delete-category-btn').textContent = getText('deleteCategory');
    
    // 显示模态窗口
    categoryEditModal.style.display = 'block';
}

// 关闭分类编辑模态窗口
function closeCategoryEditModal() {
    categoryEditModal.style.display = 'none';
    categoryEditForm.reset();
}

// 处理添加分类表单提交
function handleAddCategory(e) {
    e.preventDefault();
    
    const name = document.getElementById('new-category-name').value.trim();
    
    if (!name) {
        alert(getText('categoryNameRequired'));
        return;
    }
    
    // 添加新分类
    addNewCategory(name);
    
    // 重新渲染分类列表
    renderCategoryList();
    
    // 重置表单
    document.getElementById('new-category-name').value = '';
}

// 处理分类编辑表单提交
function handleEditCategory(e) {
    e.preventDefault();
    
    const oldKey = categoryKeyInput.value;
    const newName = categoryNameInput.value.trim();
    
    if (!newName) {
        alert(getText('categoryNameRequired'));
        return;
    }
    
    // 重命名分类
    renameCategory(oldKey, newName);
    
    // 关闭模态窗口
    closeCategoryEditModal();
}

// 处理分类删除按钮点击
function handleDeleteCategory() {
    const category = categoryKeyInput.value;
    
    if (confirm(getText('confirmDeleteCategory'))) {
        if (deleteCategory(category)) {
            closeCategoryEditModal();
        }
    }
}

// 打开用户名设置模态窗口
function openUsernameModal() {
    // 填充现有值
    document.getElementById('username-input').value = userName;
    document.getElementById('page-title-input').value = pageTitle || getText('appTitle');
    
    // 更新模态窗口文本
    document.getElementById('username-title').textContent = getText('setUsername');
    document.querySelector('#username-form label[for="username-input"]').textContent = getText('yourName');
    document.querySelector('#username-form label[for="page-title-input"]').textContent = getText('pageTitle');
    document.querySelector('#username-form button[type="submit"]').textContent = getText('saveSettings');
    document.getElementById('page-title-input').placeholder = getText('pageTitlePlaceholder');
    
    // 显示模态窗口
    usernameModal.style.display = 'block';
    
    // 关闭菜单
    dropdownMenu.classList.remove('active');
}

// 关闭用户名设置模态窗口
function closeUsernameModal() {
    usernameModal.style.display = 'none';
}

// 处理用户名表单提交
function handleUsernameSubmit(e) {
    e.preventDefault();
    
    // 获取表单值
    userName = document.getElementById('username-input').value.trim();
    pageTitle = document.getElementById('page-title-input').value.trim();
    
    // 保存到本地存储
    localStorage.setItem('userName', userName);
    localStorage.setItem('pageTitle', pageTitle);
    
    // 更新页面标题和问候语
    document.title = pageTitle || getText('appTitle');
    updateGreeting();
    
    // 关闭模态窗口
    closeUsernameModal();
}

// 存储扩展发送的信息队列
const extensionDataQueue = [];

// 处理扩展发送的数据，创建新的模态窗口而不是只用一个
function processExtensionData(tabInfo) {
    console.log('处理扩展发送的数据:', tabInfo);
    
    // 创建临时模态窗口
    const tempModalId = 'temp-modal-' + Date.now();
    const tempModal = createTempModal(tempModalId, tabInfo);
    document.body.appendChild(tempModal);
    
    // 显示模态窗口
    tempModal.style.display = 'block';
    
    // 添加到队列中
    extensionDataQueue.push({
        id: tempModalId,
        tabInfo: tabInfo,
        modal: tempModal
    });
    
    return tempModalId;
}

// 创建临时模态窗口
function createTempModal(modalId, tabInfo) {
    // 创建模态窗口容器
    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'modal extension-modal';
    
    // 创建模态窗口内容
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // 添加关闭按钮
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        // 从队列中移除
        const index = extensionDataQueue.findIndex(item => item.id === modalId);
        if (index !== -1) {
            extensionDataQueue.splice(index, 1);
        }
        // 从DOM中移除
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 500);
    });
    
    // 添加标题
    const title = document.createElement('h2');
    title.textContent = getText('addNewLink');
    
    // 创建表单
    const form = document.createElement('form');
    form.className = 'temp-form';
    
    // URL输入字段
    const urlGroup = document.createElement('div');
    urlGroup.className = 'form-group';
    
    const urlLabel = document.createElement('label');
    urlLabel.textContent = getText('url');
    
    const urlInput = document.createElement('input');
    urlInput.type = 'url';
    urlInput.value = tabInfo.url || '';
    urlInput.required = true;
    
    urlGroup.appendChild(urlLabel);
    urlGroup.appendChild(urlInput);
    
    // 名称输入字段
    const nameGroup = document.createElement('div');
    nameGroup.className = 'form-group';
    
    const nameLabel = document.createElement('label');
    nameLabel.textContent = getText('name');
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = tabInfo.title || '';
    
    nameGroup.appendChild(nameLabel);
    nameGroup.appendChild(nameInput);
    
    // 分类选择字段
    const categoryGroup = document.createElement('div');
    categoryGroup.className = 'form-group';
    
    const categoryLabel = document.createElement('label');
    categoryLabel.textContent = getText('category');
    
    const categorySelect = document.createElement('select');
    categorySelect.required = true;
    
    // 添加分类选项
    const categories = Object.keys(links).filter(key => key !== 'categoryOrder');
    
    // 设置默认分类为上次选择的分类
    const lastCategory = getLastSelectedCategory();
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = getText(category);
        if (category === lastCategory) {
            option.selected = true;
        }
        categorySelect.appendChild(option);
    });
    
    categoryGroup.appendChild(categoryLabel);
    categoryGroup.appendChild(categorySelect);
    
    // 添加按钮
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = getText('add');
    
    // 处理表单提交
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const url = urlInput.value;
        const name = nameInput.value;
        const category = categorySelect.value;
        
        // 保存最后选择的分类
        saveLastSelectedCategory(category);
        
        // 获取网站图标URL
        const faviconUrl = tabInfo.favIconUrl || getFaviconUrl(url);
        
        // 创建新链接对象
        const newLink = { 
            name, 
            url, 
            icon: 'fa-globe', // 默认图标作为后备
            faviconUrl: faviconUrl
        };
        
        // 添加新链接
        if (!links[category]) {
            links[category] = [];
        }
        
        links[category].push(newLink);
        
        // 保存到本地存储
        localStorage.setItem('navLinks', JSON.stringify(links));
        
        // 添加到最近URL历史记录
        addToRecentUrls(url, name);
        
        // 重新渲染
        if (category === 'applications') {
            renderApplications();
        } else {
            renderBookmarks();
        }
        
        // 关闭模态窗口
        modal.style.display = 'none';
        
        // 从队列中移除
        const index = extensionDataQueue.findIndex(item => item.id === modalId);
        if (index !== -1) {
            extensionDataQueue.splice(index, 1);
        }
        
        // 从DOM中移除
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 500);
    });
    
    // 组装表单
    form.appendChild(urlGroup);
    form.appendChild(nameGroup);
    form.appendChild(categoryGroup);
    form.appendChild(submitBtn);
    
    // 组装模态窗口
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(title);
    modalContent.appendChild(form);
    modal.appendChild(modalContent);
    
    return modal;
}

// 向页面添加接收扩展消息的功能
document.addEventListener('DOMContentLoaded', function() {
    console.log('添加扩展消息接收功能');
    
    // 添加特定的事件监听器以接收扩展发送的数据
    document.addEventListener('tabDataReceived', function(e) {
        console.log('接收到tabDataReceived事件', e.detail);
        processExtensionData(e.detail);
    });
    
    // 为window添加接收方法，方便扩展调用
    window.receiveTabInfo = function(tabInfo) {
        return processExtensionData(tabInfo);
    };
});

// 打开主题设置模态窗口
function openThemesModal() {
    const modal = document.getElementById('themes-modal');
    modal.style.display = 'block';
    
    // 更新模态窗口中的主题选择器，标记当前主题
    const currentTheme = localStorage.getItem('theme') || 'default';
    document.querySelectorAll('#themes-modal .theme-option').forEach(option => {
        if (option.getAttribute('data-theme') === currentTheme) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
        
        // 更新主题选项的提示文字为当前语言
        const themeType = option.getAttribute('data-theme');
        switch(themeType) {
            case 'default':
                option.setAttribute('title', getText('darkTheme'));
                break;
            case 'light':
                option.setAttribute('title', getText('lightTheme'));
                break;
            case 'blue':
                option.setAttribute('title', getText('blueTheme'));
                break;
            case 'purple':
                option.setAttribute('title', getText('purpleTheme'));
                break;
            case 'pink':
                option.setAttribute('title', getText('pinkTheme'));
                break;
            case 'beige':
                option.setAttribute('title', getText('beigeTheme'));
                break;
        }
    });
    
    // 为模态窗口中的主题选项添加点击事件
    document.querySelectorAll('#themes-modal .theme-option').forEach(option => {
        // 移除旧的事件监听器，避免重复绑定
        const oldOption = option.cloneNode(true);
        option.parentNode.replaceChild(oldOption, option);
        
        oldOption.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            applyTheme(theme);
            
            // 更新所有主题选择器的活动状态
            document.querySelectorAll('.theme-option').forEach(opt => {
                if (opt.getAttribute('data-theme') === theme) {
                    opt.classList.add('active');
                } else {
                    opt.classList.remove('active');
                }
            });
            
            // 保存主题设置到localStorage
            localStorage.setItem('theme', theme);
        });
    });
    
    // 更新主题设置模态窗口标题和描述文字
    document.getElementById('themes-title').textContent = getText('themes');
    document.getElementById('theme-description').textContent = getText('themeDescription');
}

// 关闭主题设置模态窗口
function closeThemesModal() {
    document.getElementById('themes-modal').style.display = 'none';
}

// 打开高级设置模态窗口
function openAdvancedSettingsModal() {
    const modal = document.getElementById('advanced-settings-modal');
    
    // 更新模态窗口中的文本
    document.getElementById('advanced-settings-title').textContent = getText('advancedSettings');
    document.getElementById('icon-settings-title').textContent = getText('iconSettings');
    document.getElementById('icon-settings-desc').textContent = getText('iconSettingsDesc');
    document.getElementById('use-network-icons-label').textContent = getText('useNetworkIcons');
    document.getElementById('use-local-icons-label').textContent = getText('useLocalIcons');
    document.getElementById('save-advanced-settings').textContent = getText('saveSettings');
    
    // 设置当前选中的图标源
    const radioButtons = document.getElementsByName('icon-source');
    for(let i = 0; i < radioButtons.length; i++) {
        if(radioButtons[i].value === iconSource) {
            radioButtons[i].checked = true;
        }
    }
    
    // 显示模态窗口
    modal.style.display = 'block';
    
    // 关闭菜单
    dropdownMenu.classList.remove('active');
}

// 保存高级设置
function saveAdvancedSettings() {
    // 获取选中的图标源
    const radioButtons = document.getElementsByName('icon-source');
    let selectedIconSource = 'network'; // 默认值
    
    for(let i = 0; i < radioButtons.length; i++) {
        if(radioButtons[i].checked) {
            selectedIconSource = radioButtons[i].value;
            break;
        }
    }
    
    // 如果设置有变化
    if(selectedIconSource !== iconSource) {
        // 更新设置
        iconSource = selectedIconSource;
        localStorage.setItem('iconSource', iconSource);
        
        // 刷新所有图标
        refreshAllIcons();
    }
    
    // 关闭模态窗口
    document.getElementById('advanced-settings-modal').style.display = 'none';
}

// 关闭高级设置模态窗口
function closeAdvancedSettingsModal() {
    document.getElementById('advanced-settings-modal').style.display = 'none';
}

// 初始化页面
document.addEventListener('DOMContentLoaded', initPage); 