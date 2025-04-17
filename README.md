# 个人导航页面

一个基于Web的个人导航页面，可以轻松管理和访问常用网址。页面布局参考了现代化的启动页UI设计，提供了简洁美观的用户体验。

## 功能特点

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

## 使用方法

1. 克隆或下载本项目到本地
2. 打开 `index.html` 文件即可使用
3. 点击右下角的"+"按钮添加新网址
4. 长按链接可以编辑或删除
5. 拖拽链接可以改变顺序或移动到其他分类
6. 点击右上角菜单中的"管理分类"可以添加、重命名、删除分类
7. 分类标题旁的编辑按钮可以快速修改分类名称
8. 在分类管理界面可以拖拽分类改变显示顺序

## 自定义配置

### 修改存储文件

您可以直接编辑 `script.js` 文件中的 `initialLinks` 对象来修改默认链接，或者使用导出功能后手动编辑JSON文件，然后导入。

### 添加新分类

有三种方式添加新分类：

1. 点击右上角菜单中的"管理分类"，然后在表单中输入新分类名称并添加
2. 在 `index.html` 中的书签部分添加新的分类HTML结构
3. 在 `script.js` 的 `initialLinks` 对象中添加新分类的初始数据

## 技术栈

- HTML5
- CSS3 (Flexbox & Grid布局)
- JavaScript (ES6+)
- 本地存储 (localStorage)
- HTML5 拖放API
- 触摸设备拖拽支持
- Font Awesome 图标

## 未来计划

- 实现真正的网站标题和图标获取
- 添加自定义背景和主题
- 添加天气API集成

## 许可

MIT 