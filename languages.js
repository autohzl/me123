/**
 * 多语言配置文件
 * 包含中文和英文的所有界面文本
 */

const languages = {
    zh: {
        // 通用
        appTitle: "个人导航页面",
        
        // 问候语
        morning: "早上好！",
        afternoon: "下午好！",
        evening: "晚上好！",
        morningWithName: "{name}，早上好！",
        afternoonWithName: "{name}，下午好！",
        eveningWithName: "{name}，晚上好！",
        
        // 用户名设置
        setUsername: "设置用户名",
        yourName: "您的名字:",
        pageTitle: "导航页面标题:",
        pageTitlePlaceholder: "例如：个人导航页面",
        saveSettings: "保存",
        // 日期格式化选项
        dateFormatOptions: { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' },
        
        // 分类标题
        applications: "应用程序",
        bookmarks: "书签",
        
        // 书签分类
        cloud: "云存储",
        design: "设计",
        games: "游戏",
        media: "媒体",
        music: "音乐",
        news: "新闻",
        programming: "编程",
        projects: "项目",
        
        // 按钮和操作
        add: "添加",
        edit: "编辑",
        update: "更新",
        delete: "删除",
        open: "打开链接",
        autoFetch: "自动获取",
        fetching: "获取中...",
        refreshIcons: "刷新所有图标",
        exportLinks: "导出链接",
        importLinks: "导入链接",
        toggleLanguage: "切换为英文 / Switch to English",
        
        // 表单字段
        url: "网址:",
        name: "名称:",
        category: "分类:",
        moveToCategory: "移至分类:",
        
        // 添加编辑模态窗口
        addNewLink: "添加新网址",
        editLink: "编辑网址",
        urlPlaceholder: "https://example.com",
        namePlaceholder: "网站名称 (可选)",
        editNamePlaceholder: "网址名称",
        
        // 确认和提示消息
        confirmDelete: "确定要删除此链接吗？",
        enterUrlFirst: "请先输入网址",
        fetchNameFailed: "获取网站名称失败: ",
        importSuccess: "导入成功",
        importFailed: "导入失败：无效的JSON数据",
        iconsRefreshed: "成功刷新了 {count} 个图标",
        
        // 历史记录
        recentUrls: "最近添加",
        noRecentUrls: "暂无最近添加的网址",
        clearHistory: "清除历史记录",
        
        // 分类管理
        manageCategories: "管理分类",
        addCategory: "添加分类",
        editCategory: "编辑分类",
        categoryName: "分类名称:",
        newCategoryName: "新分类名称",
        confirmDeleteCategory: "确定要删除此分类吗？",
        cannotDeleteNonEmptyCategory: "无法删除非空分类，请先移动或删除此分类中的所有链接",
        categoryNameRequired: "分类名称不能为空",
        categoryOrderSaved: "分类顺序已保存",
        dragToReorder: "拖动分类改变显示顺序",
        
        // 书签项右键菜单
        editBookmark: "编辑书签",
        deleteBookmark: "删除书签",
        
        // 导入导出
        exportSuccess: "导出成功，请保存文件",
        importError: "导入失败，请检查文件格式",
        
        // 拖拽排序提示
        dragTip: "提示：拖拽可以调整顺序，长按可以编辑",
        
        // 图标刷新
        refreshingIcons: "正在刷新图标...",
        refreshSuccess: "所有图标已刷新",
        
        // 主题
        themes: "主题设置",
        darkTheme: "深色主题",
        lightTheme: "浅色主题",
        blueTheme: "蓝色主题",
        purpleTheme: "紫色主题",
        customizeTheme: "自定义主题",
        themeDescription: "选择您喜欢的主题颜色",
        
        // 高级设置
        advancedSettings: "高级设置",
        disableNetworkIcons: "禁用网络图标",
        disableNetworkIconsDesc: "使用本地默认图标代替从网络获取的图标",
        iconSettings: "图标设置",
        useLocalIcons: "使用本地图标",
        useNetworkIcons: "使用网络图标",
        iconSettingsDesc: "选择获取网站图标的方式"
    },
    
    en: {
        // General
        appTitle: "Personal Dashboard",
        
        // Greetings
        morning: "Good morning!",
        afternoon: "Good afternoon!",
        evening: "Good evening!",
        morningWithName: "Good morning, {name}!",
        afternoonWithName: "Good afternoon, {name}!",
        eveningWithName: "Good evening, {name}!",
        
        // Username settings
        setUsername: "Set Username",
        yourName: "Your name:",
        pageTitle: "Dashboard title:",
        pageTitlePlaceholder: "e.g., Personal Dashboard",
        saveSettings: "Save",
        // Date formatting options
        dateFormatOptions: { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' },
        
        // Section titles
        applications: "APPLICATIONS",
        bookmarks: "BOOKMARKS",
        
        // Bookmark categories
        cloud: "CLOUD",
        design: "DESIGN",
        games: "GAMES",
        media: "MEDIA",
        music: "MUSIC",
        news: "NEWS",
        programming: "PROGRAMMING",
        projects: "PROJECTS",
        
        // Buttons and actions
        add: "Add",
        edit: "Edit",
        update: "Update",
        delete: "Delete",
        open: "Open link",
        autoFetch: "Auto Fetch",
        fetching: "Fetching...",
        refreshIcons: "Refresh All Icons",
        exportLinks: "Export Links",
        importLinks: "Import Links",
        toggleLanguage: "Switch to Chinese / 切换为中文",
        
        // Form fields
        url: "URL:",
        name: "Name:",
        category: "Category:",
        moveToCategory: "Move to category:",
        
        // Add/Edit modals
        addNewLink: "Add New Link",
        editLink: "Edit Link",
        urlPlaceholder: "https://example.com",
        namePlaceholder: "Website name (optional)",
        
        // Bookmark context menu
        editBookmark: "Edit Bookmark",
        deleteBookmark: "Delete Bookmark",
        
        // Category management
        manageCategories: "Manage Categories",
        newCategoryName: "Enter new category name",
        addCategory: "Add Category",
        editCategory: "Edit Category",
        deleteCategory: "Delete Category",
        categoryName: "Category name:",
        
        // Import/Export
        exportSuccess: "Export successful, please save the file",
        importSuccess: "Import successful! Added {count} links",
        importError: "Import failed, please check file format",
        
        // Drag & sort tip
        dragTip: "Tip: Drag to reorder, long press to edit",
        
        // Icon refresh
        refreshingIcons: "Refreshing icons...",
        refreshSuccess: "All icons refreshed",
        
        // Themes
        themes: "Theme Settings",
        darkTheme: "Dark Theme",
        lightTheme: "Light Theme",
        blueTheme: "Blue Theme",
        purpleTheme: "Purple Theme",
        customizeTheme: "Customize Theme",
        themeDescription: "Choose your preferred theme color",
        
        // Advanced settings
        advancedSettings: "Advanced Settings",
        disableNetworkIcons: "Disable Network Icons",
        disableNetworkIconsDesc: "Use local default icons instead of fetching from network",
        iconSettings: "Icon Settings",
        useLocalIcons: "Use Local Icons",
        useNetworkIcons: "Use Network Icons",
        iconSettingsDesc: "Choose how to retrieve website icons"
    }
}; 