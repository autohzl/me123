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
        toggleLanguage: "切换语言 / Language",
        
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
        dragToReorder: "拖动分类改变显示顺序"
    },
    
    en: {
        // General
        appTitle: "Personal Navigation Page",
        
        // Greetings
        morning: "Good morning!",
        afternoon: "Good afternoon!",
        evening: "Good evening!",
        
        // Date format options
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
        open: "Open Link",
        autoFetch: "Auto Fetch",
        fetching: "Fetching...",
        refreshIcons: "Refresh All Icons",
        exportLinks: "Export Links",
        importLinks: "Import Links",
        toggleLanguage: "Language / 切换语言",
        
        // Form fields
        url: "URL:",
        name: "Name:",
        category: "Category:",
        moveToCategory: "Move to:",
        
        // Add/Edit modals
        addNewLink: "Add New Link",
        editLink: "Edit Link",
        urlPlaceholder: "https://example.com",
        namePlaceholder: "Website name (optional)",
        editNamePlaceholder: "Link name",
        
        // Confirmation and prompt messages
        confirmDelete: "Are you sure you want to delete this link?",
        enterUrlFirst: "Please enter URL first",
        fetchNameFailed: "Failed to fetch website name: ",
        importSuccess: "Import successful",
        importFailed: "Import failed: Invalid JSON data",
        iconsRefreshed: "Successfully refreshed {count} icons",
        
        // History
        recentUrls: "Recently Added",
        noRecentUrls: "No recent URLs",
        clearHistory: "Clear History",
        
        // Category Management
        manageCategories: "Manage Categories",
        addCategory: "Add Category",
        editCategory: "Edit Category",
        categoryName: "Category Name:",
        newCategoryName: "New Category Name",
        confirmDeleteCategory: "Are you sure you want to delete this category?",
        cannotDeleteNonEmptyCategory: "Cannot delete a category that contains links. Please move or delete all links in this category first.",
        categoryNameRequired: "Category name is required",
        categoryOrderSaved: "Category order has been saved",
        dragToReorder: "Drag categories to change display order"
    }
}; 