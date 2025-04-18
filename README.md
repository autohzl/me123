# 个人导航页面 | Personal Dashboard

[中文](#中文说明) | [English](#english)

<a name="中文说明"></a>
## 中文说明

一个基于Web的个人导航页面，可以轻松管理和访问常用网址。页面布局参考了现代化的启动页UI设计，提供了简洁美观的用户体验。

### 功能特点

- 多种主题切换（深色、浅色、蓝色、紫色）
- 现代化深色主题设计
- 显示当前日期、时间和问候语
- 应用程序区域显示主要网址
- 按类别分组的书签部分
- 可以在线添加新网址
- 自动获取网址标题（模拟实现）
- 所有数据保存在本地存储中
- 支持导入/导出数据功能
- 响应式布局，适应各种屏幕尺寸
- 支持拖拽排序功能，轻松调整网址位置
- 支持跨分类拖拽移动链接
- 支持自定义分类管理（添加、重命名、删除和拖拽排序）
- 支持中英文界面切换

### 使用方法

1. 克隆或下载本项目到本地
2. 打开 `index.html` 文件即可使用
3. 点击右下角的"+"按钮添加新网址
4. 长按链接可以编辑或删除
5. 拖拽链接可以改变顺序或移动到其他分类
6. 点击右上角菜单中的"管理分类"可以添加、重命名、删除分类
7. 分类标题旁的编辑按钮可以快速修改分类名称
8. 在分类管理界面可以拖拽分类改变显示顺序
9. 通过右上角菜单中的"主题设置"选择不同的主题

### Chrome扩展使用说明

本项目提供了一个Chrome扩展，可以让您快速将当前浏览的网页添加到导航页中。

#### 主要功能

- ✅ **获取当前浏览器中所有打开的标签页**
- ✅ **自动获取网站图标（favicon）**并将其添加到导航页
- ✅ **一键发送标签页信息**到您的个人导航页面
- ✅ **自动填充**网址、标题和图标到表单中

#### 安装方法

1. 进入项目的 `extension` 目录
2. 打开Chrome浏览器，进入扩展管理页面 (`chrome://extensions/`)
3. 开启右上角的"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择 `extension` 文件夹

#### 使用方法

1. **先打开您的个人导航页面**（即index.html）
2. 确保导航页是**当前活动的标签页**
3. 点击Chrome工具栏上的扩展图标
4. 在弹出窗口中，从列表中选择您想要添加到导航页的标签
5. 点击"发送"按钮
6. 标签页的URL、标题和图标会自动填充到导航页的添加表单中

#### 特别支持

本扩展特别支持以下网站的图标获取：

- 小红书(xiaohongshu.com)
- 微博(weibo.com)
- 知乎(zhihu.com)
- 抖音(douyin.com)

#### 常见问题

如果遇到"发送失败，请确保导航页已打开"的错误，请确保：
- 导航页是当前活动的标签页
- 页面已完全加载
- 浏览器已授予扩展相应的权限

详细的故障排除方法请参见 `extension/README.md`。

### 自定义配置

您可以直接编辑 `script.js` 文件中的 `initialLinks` 对象来修改默认链接，或者使用导出功能后手动编辑JSON文件，然后导入。

#### 添加新分类

有三种方式添加新分类：

1. 点击右上角菜单中的"管理分类"，然后在表单中输入新分类名称并添加
2. 在 `index.html` 中的书签部分添加新的分类HTML结构
3. 在 `script.js` 的 `initialLinks` 对象中添加新分类的初始数据

#### 切换主题

有两种方式切换主题：

1. 点击页面顶部的主题选择器直接切换主题
2. 通过右上角菜单中的"主题设置"选择主题

### 技术栈

- HTML5
- CSS3 (Flexbox & Grid布局)
- JavaScript (ES6+)
- 本地存储 (localStorage)
- HTML5 拖放API
- 触摸设备拖拽支持
- Font Awesome 图标
- CSS变量实现主题切换

### 未来计划

- 实现真正的网站标题和图标获取
- 添加自定义背景和更多主题
- 添加天气API集成
- 提供更多个性化选项

### 国内用户使用说明

由于网络限制，中国用户可能无法正常加载谷歌托管的图标。我们已经内置了便捷的解决方案：

1. 点击右上角菜单中的"高级设置"
2. 在图标设置区域选择"使用本地图标"选项，完全禁用网络图标，使用本地Font Awesome图标替代
3. 点击"保存"按钮应用设置

这些设置会保存在本地，下次打开时自动应用。如果您是开发者，也可以在代码中修改：

```javascript
// 在script.js中修改getFaviconUrl函数
function getFaviconUrl(url) {
    // 直接返回null使用默认图标
    return null;
}
```

### Notes for Users in China

Due to network restrictions, users in China may not be able to load Google-hosted icons normally. We have built-in a convenient solution:

1. Click on "Advanced Settings" in the top right menu
2. In the Icon Settings section, select "Use Local Icons" option to completely disable network icons, using local Font Awesome icons instead
3. Click the "Save" button to apply settings

These settings will be saved locally and applied automatically next time. If you are a developer, you can also modify the code:

```javascript
// Modify the getFaviconUrl function in script.js
function getFaviconUrl(url) {
    // Return null to use default icons
    return null;
}
```

## 许可

MIT 

<a name="english"></a>
## English

A web-based personal dashboard for easy management and access to frequently used URLs. The page layout references modern start page UI designs and provides a clean and beautiful user experience.

### Features

- Multiple theme switching (Dark, Light, Blue, Purple)
- Modern dark theme design
- Current date, time, and greeting display
- Application area for main URLs
- Bookmark section grouped by categories
- Add new URLs online
- Automatic URL title retrieval (simulated implementation)
- All data saved in local storage
- Import/export data functionality
- Responsive layout, adapts to various screen sizes
- Drag and drop sorting to easily adjust URL positions
- Support for cross-category link dragging
- Custom category management (add, rename, delete, and drag sort)
- Chinese and English interface language switching

### How to Use

1. Clone or download this project locally
2. Open the `index.html` file to use
3. Click the "+" button in the bottom right corner to add a new URL
4. Long press a link to edit or delete
5. Drag links to change order or move to other categories
6. Click "Manage Categories" in the top right menu to add, rename, or delete categories
7. The edit button next to category titles allows quick modification of category names
8. Drag categories in the category management interface to change display order
9. Select different themes through "Theme Settings" in the top right menu

### Chrome Extension Guide

This project provides a Chrome extension that allows you to quickly add current web pages to your dashboard.

#### Main Features

- ✅ **Get all open tabs** in the current browser
- ✅ **Automatically retrieve website icons (favicons)** and add them to the dashboard
- ✅ **One-click send tab information** to your personal dashboard
- ✅ **Auto-fill** URL, title, and icon to the form

#### Installation

1. Go to the `extension` directory of the project
2. Open Chrome browser and navigate to the extensions management page (`chrome://extensions/`)
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked"
5. Select the `extension` folder

#### How to Use

1. **First open your personal dashboard page** (index.html)
2. Make sure the dashboard is the **current active tab**
3. Click the extension icon in the Chrome toolbar
4. In the popup window, select from the list the tab you want to add to the dashboard
5. Click the "Send" button
6. The tab's URL, title, and icon will be automatically filled into the dashboard's add form

#### Special Support

This extension specially supports icon retrieval for these websites:

- Xiaohongshu (xiaohongshu.com)
- Weibo (weibo.com)
- Zhihu (zhihu.com)
- Douyin (douyin.com)

#### Common Issues

If you encounter the error "Send failed, please make sure the dashboard is open", ensure that:
- The dashboard is the current active tab
- The page is fully loaded
- The browser has granted the necessary permissions to the extension

For detailed troubleshooting, please refer to `extension/README.md`.

### Customization

You can directly edit the `initialLinks` object in the `script.js` file to modify the default links, or use the export function to manually edit the JSON file and then import it.

#### Adding New Categories

There are three ways to add new categories:

1. Click "Manage Categories" in the top right menu, then enter a new category name in the form and add
2. Add a new category HTML structure in the bookmarks section of `index.html`
3. Add initial data for the new category in the `initialLinks` object in `script.js`

#### Switching Themes

There are two ways to switch themes:

1. Click the theme selector at the top of the page to directly switch themes
2. Select themes through "Theme Settings" in the top right menu

### Technology Stack

- HTML5
- CSS3 (Flexbox & Grid layout)
- JavaScript (ES6+)
- Local storage (localStorage)
- HTML5 Drag and Drop API
- Touch device drag support
- Font Awesome icons
- CSS variables for theme switching

### Future Plans

- Implement real website title and icon retrieval
- Add custom backgrounds and more themes
- Add weather API integration
- Provide more personalization options

### 国内用户使用说明

由于网络限制，中国用户可能无法正常加载谷歌托管的图标。我们已经内置了便捷的解决方案：

1. 点击右上角菜单中的"高级设置"
2. 在图标设置区域选择"使用本地图标"选项，完全禁用网络图标，使用本地Font Awesome图标替代
3. 点击"保存"按钮应用设置

这些设置会保存在本地，下次打开时自动应用。如果您是开发者，也可以在代码中修改：

```javascript
// 在script.js中修改getFaviconUrl函数
function getFaviconUrl(url) {
    // 直接返回null使用默认图标
    return null;
}
```

### Notes for Users in China

Due to network restrictions, users in China may not be able to load Google-hosted icons normally. We have built-in a convenient solution:

1. Click on "Advanced Settings" in the top right menu
2. In the Icon Settings section, select "Use Local Icons" option to completely disable network icons, using local Font Awesome icons instead
3. Click the "Save" button to apply settings

These settings will be saved locally and applied automatically next time. If you are a developer, you can also modify the code:

```javascript
// Modify the getFaviconUrl function in script.js
function getFaviconUrl(url) {
    // Return null to use default icons
    return null;
}
```

## License

MIT 