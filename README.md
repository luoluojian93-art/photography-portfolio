# 🌟 光影 - 摄影作品集网站

> 光塑造轮廓，影赋予层次，世间所有动人的瞬间，都藏在光影交错之间。

## 📋 项目介绍

这是一个专业的摄影师个人作品展示网站，使用 HTML、CSS 和 JavaScript 构建，完全托管在 GitHub Pages 上。

### ✨ 网站特色

- 🎨 **现代优雅设计** - 黑金配色，彰显专业品味
- 📱 **完全响应式** - 完美适配手机、平板、桌面
- ⚡ **快速加载** - 静态网站，无需后端服务器
- 🖼️ **灯箱展示** - 精美的作品放大预览
- 🔍 **作品筛选** - 按类别快速浏览作品
- 💬 **联系表单** - 方便客户咨询和预约
- 🎭 **流畅动画** - 提升用户体验

### 📂 作品分类

- 👤 **人像写真** - 捕捉自然表情和气质
- 📸 **纪实抓拍** - 记录生活中的真挚瞬间
- 🛍️ **商业静物** - 产品拍摄与商业合作
- 🏞️ **环境氛围** - 营造画面情绪与故事感

---

## 🚀 快速开始

### 1️⃣ 查看网站

你的网站已发布在：
```
https://luoluojian93-art.github.io/photography-portfolio/
```

### 2️⃣ 自定义内容

编辑以下文件：

#### 修改作品照片
打开 `script.js` 文件，修改 `portfolioData` 数组中的图片 URL：

```javascript
const portfolioData = [
    {
        id: 1,
        title: '你的作品标题',
        category: 'portrait',  // 类别：portrait, documentary, commercial, landscape
        image: 'https://你的图片URL',
        description: '作品描述'
    },
    // ... 更多作品
];
```

#### 修改联系方式
编辑 `index.html` 中的联系信息部分：

```html
<div class="contact-info">
    <p>📧 邮箱：<a href="mailto:你的邮箱">你的邮箱</a></p>
    <p>📱 微信：你的微信号</p>
    <p>📍 地点：你的地点</p>
</div>
```

#### 修改社交媒体链接
编辑社交链接部分：

```html
<div class="social-links">
    <a href="你的Instagram链接" title="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="你的微博链接" title="微博"><i class="fab fa-weibo"></i></a>
    <a href="你的小红书链接" title="小红书"><i class="fas fa-book"></i></a>
</div>
```

---

## 📸 添加自己的作品照片

### 推荐方法：使用免费图片服务

1. **上传到 GitHub**（推荐）
   - 在仓库中创建 `images` 文件夹
   - 上传你的照片
   - 在 `script.js` 中引用：`images/你的照片.jpg`

2. **使用免费图片网站**
   - [Unsplash](https://unsplash.com) - 免费高质量图片
   - [Pexels](https://www.pexels.com) - 免费素材库
   - [Pixabay](https://pixabay.com) - 免费图片分享

3. **自有服务器**
   - 上传到你的服务器并获取图片 URL

---

## 🛠️ 项目结构

```
photography-portfolio/
├── index.html          # 主页面（HTML结构）
├── style.css           # 样式表（设计和布局）
├── script.js           # 脚本文件（交互功能）
├── README.md           # 本文档
└── images/             # 图片文件夹（可选）
    └── your-photo.jpg
```

---

## 🎨 自定义样式

编辑 `style.css` 中的颜色变量：

```css
:root {
    --primary-color: #1a1a1a;        /* 主色 - 深黑 */
    --secondary-color: #d4af37;      /* 辅助色 - 金色 */
    --text-color: #333;              /* 文字色 */
    --light-text: #666;              /* 浅色文字 */
    --white: #ffffff;                /* 白色 */
    --light-bg: #f8f8f8;             /* 浅色背景 */
}
```

---

## 💡 功能说明

### 🔍 作品筛选
点击筛选按钮快速查看不同类别的作品：
- 全部
- 人像写真
- 纪实抓拍
- 商业静物
- 环境氛围

### 🖼️ 灯箱展示
- 点击作品即可全屏查看
- 使用 ◀ 和 ▶ 按钮浏览
- 键盘方向键也可以导航（← 上一张，→ 下一张）
- 按 ESC 关闭灯箱

### 📧 联系表单
访客可以填写表单联系你，表单信息会显示确认提示。

**注意**：目前表单只显示提示，不会自动发送邮件。如需自动发送邮件，需要配置后端服务。

---

## 📱 移动端适配

网站在所有设备上都能完美显示：
- 📱 手机（320px+）
- 📱 平板（768px+）
- 💻 桌面（1024px+）

---

## 🚀 部署到 GitHub Pages

你的网站已自动部署！如需重新部署：

1. 推送代码到 GitHub
2. 等待几秒钟
3. 访问 `https://luoluojian93-art.github.io/photography-portfolio/`

---

## 🔧 高级定制

### 添加自定义域名
1. 在仓库 Settings → Pages
2. 添加自定义域名
3. 更新 DNS 设置

### 启用 HTTPS
GitHub Pages 自动提供 HTTPS 支持

### 添加分析
可以添加 Google Analytics 追踪访问数据

---

## 📝 修改检查清单

- [ ] 修改你的昵称和介绍
- [ ] 更新联系方式（邮箱、微信等）
- [ ] 添加你的作品照片
- [ ] 修改社交媒体链接
- [ ] 自定义颜色和样式（可选）
- [ ] 测试所有功能

---

## ❓ 常见问题

**Q: 如何添加更多作品？**
A: 在 `script.js` 的 `portfolioData` 数组中添加新的对象即可。

**Q: 如何修改网站颜色？**
A: 编辑 `style.css` 中的 CSS 变量。

**Q: 表单提交后怎么接收邮件？**
A: 需要配置后端服务，可以使用 Formspree 或 Firebase 等服务。

**Q: 如何添加自定义域名？**
A: 在仓库 Settings → Pages 中配置，然后更新你的域名 DNS 设置。

---

## 📚 学习资源

- [HTML 基础教程](https://developer.mozilla.org/zh-CN/docs/Learn/HTML)
- [CSS 基础教程](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)
- [JavaScript 基础教程](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)
- [GitHub Pages 文档](https://pages.github.com/)

---

## 📄 许可证

MIT License - 你可以自由使用和修改此项目

---

## 💌 支持

如有问题或建议，欢迎：
- 在 GitHub Issues 中反馈
- 发送邮件联系
- 提交 Pull Request

---

## 🎯 下一步建议

1. **替换所有示例图片** - 上传你自己的摄影作品
2. **完善联系信息** - 添加你的真实联系方式
3. **自定义文案** - 根据你的风格调整描述文字
4. **测试所有功能** - 确保在手机和电脑上都正常显示
5. **分享你的网站** - 在社交媒体上宣传你的作品集

---

**祝你的摄影作品被更多人看见！** 📸✨

---

*最后更新：2024年8月23日*