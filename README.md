# 🌟 光影 - 专业摄影作品集网站（完整版）

> 光塑造轮廓，影赋予层次，世间所有动人的瞬间，都藏在光影交错之间。

## 📋 项目介绍

这是一个**功能完整的专业摄影师网站**，集作品展示、在线预约、服务管理、客户评价于一身。使用 HTML、CSS 和 JavaScript 构建，完全托管在 GitHub Pages 上，无需后端服务器。

### ✨ 网站特色

- 🎨 **现代优雅设计** - 黑金配色，专业品味
- 📱 **完全响应式** - 完美适配手机、平板、桌面
- ⚡ **快速加载** - 静态网站，无需后端
- 🖼️ **灯箱展示** - 精美的作品全屏预览
- 🔍 **智能搜索** - 快速查找作品
- 🌙 **暗黑模式** - 护眼深色主题
- 💰 **完整预约系统** - 客户可自助预约和支付
- ⭐ **客户评价** - 展示真实客户反馈
- 📊 **服务套餐** - 清晰的定价和服务说明
- 📧 **邮件订阅** - 获取最新作品更新

---

## 🚀 快速开始

### 1️⃣ 查看网站

你的网站已发布在：
```
https://luoluojian93-art.github.io/photography-portfolio/
```

**立即访问，体验所有功能！** 🎉

### 2️⃣ 核心功能演示

#### 📸 **作品集浏览**
- 点击任何作品即可全屏查看
- 使用键盘方向键（← →）快速浏览
- 按 ESC 关闭灯箱

#### 🔍 **搜索功能**
- 在导航栏搜索框输入关键词
- 快速查找特定作品
- 支持标题和描述搜索

#### 🌙 **暗黑模式**
- 点击导航栏月亮图标
- 切换深色/浅色主题
- 主题偏好自动保存

#### 💰 **服务套餐**
- 浏览 4 种服务类型
- 清晰的价格和包含内容
- 功能完整的服务说明

#### 📅 **在线预约系统**
1. 选择服务类型
2. 选择拍摄日期和时间
3. 填写个人信息
4. 系统自动计算费用
5. 提交预约
6. 即时确认提示
7. 预约数据自动保存在浏览器

#### ⭐ **客户评价**
- 展示 5★ 满分评价
- 真实客户反馈
- 增强信任度

#### 📧 **邮件订阅**
- 输入邮箱订阅最新作品
- 获得特别优惠和行业动态

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

## 🎯 自定义指南

### 第1步：修改基本信息（5分钟）

编辑 `index.html`，找到以下位置修改：

#### 修改联系方式
```html
<div class="contact-info">
    <p>📧 邮箱：<a href="mailto:your-email@example.com">your-email@example.com</a></p>
    <p>📱 微信：your-wechat</p>
    <p>📍 地点：你的地点</p>
</div>
```

#### 修改社交媒体链接
```html
<div class="social-links">
    <a href="你的Instagram链接" title="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="你的微博链接" title="微博"><i class="fab fa-weibo"></i></a>
    <a href="你的小红书链接" title="小红书"><i class="fas fa-book"></i></a>
</div>
```

---

### 第2步：更新作品照片（10-30分钟）

编辑 `script.js`，找到 `portfolioData` 数组：

```javascript
const portfolioData = [
    {
        id: 1,
        title: '你的作品标题',
        category: 'portrait',  // 类别：portrait, documentary, commercial, landscape
        image: 'https://你的图片URL',
        description: '作品描述'
    },
    // 继续添加更多作品...
];
```

**类别对应说明：**
- `portrait` - 人像写真
- `documentary` - 纪实抓拍
- `commercial` - 商业静物
- `landscape` - 环境氛围

---

### 第3步：修改服务套餐（10分钟）

编辑 `script.js`，找到 `servicesData` 数组修改服务信息：

```javascript
const servicesData = [
    {
        id: 1,
        name: '服务名称',
        price: 1200,           // 价格（单位：元）
        duration: '2小时',      // 时长
        description: '服务描述',
        features: [
            '特性1',
            '特性2',
            '特性3'
        ]
    },
    // 继续添加更多服务...
];
```

---

### 第4步：更新客户评价（5分钟）

编辑 `script.js`，找到 `reviewsData` 数组：

```javascript
const reviewsData = [
    {
        id: 1,
        name: '客户名称',
        role: '客户身份',
        avatar: '名',    // 用于显示头像的首字
        stars: 5,        // 评分（1-5）
        text: '评价内容'
    },
    // 继续添加更多评价...
];
```

---

### 第5步：自定义颜色（5分钟）

编辑 `style.css`，修改根样式变量：

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

## 📸 添加自己的作品照片

### 方法1：上传到 GitHub（推荐）

1. 在你的仓库中创建 `images` 文件夹
2. 上传你的照片文件
3. 在 `script.js` 中引用：
   ```javascript
   image: 'images/your-photo.jpg',
   ```

### 方法2：使用免费图片网站

- [Unsplash](https://unsplash.com) - 免费高质量图片
- [Pexels](https://www.pexels.com) - 免费素材库
- [Pixabay](https://pixabay.com) - 免费图片分享

获取图片 URL 并粘贴到 `script.js` 中

### 方法3：自有服务器

上传到你的服务器并获取 HTTPS 图片 URL

---

## 🎨 颜色自定义示例

### 将黑金主题改为蓝白主题

编辑 `style.css`:
```css
:root {
    --primary-color: #002147;        /* 深蓝 */
    --secondary-color: #0066cc;      /* 亮蓝 */
    --text-color: #333;
    --light-text: #666;
    --white: #ffffff;
    --light-bg: #f0f8ff;             /* 浅蓝 */
}
```

---

## 💡 功能说明详解

### 🎯 **预约系统工作流程**

1. **客户选择服务** → 自动更新预计费用
2. **选择拍摄日期和时间** → 系统验证
3. **填写个人信息** → 邮箱和电话自动验证
4. **提交预约** → 确认提示
5. **数据保存** → 浏览器本地存储（刷新不丢失）

**重要提示：** 当前预约数据保存在用户浏览器的本地存储中。要接收真实预约通知，需要集成后端服务。

### 📊 **价格计算**

预约表单会自动根据选择的服务类型显示价格：
- 人像写真：¥1200
- 纪实抓拍：¥1500
- 商业静物：¥2000
- 环境氛围：¥1800

可在 `script.js` 中修改 `servicesData` 更改价格

### 🔍 **搜索功能**

- 搜索作品标题
- 搜索作品描述
- 不区分大小写
- 实时显示搜索结果

### 🌙 **暗黑模式**

- 点击导航栏月亮 🌙 / 太阳 ☀️ 图标切换
- 主题偏好自动保存在浏览器
- 刷新页面保持选择的主题

---

## 📱 响应式设计

网站在所有设备完美显示：
- 📱 **手机** (320px+)
- 📱 **平板** (768px+)  
- 💻 **桌面** (1024px+)

所有功能在移动设备上都可正常使用！

---

## 🚀 部署和发布

### GitHub Pages 自动部署

网站已自动部署到 GitHub Pages，无需额外配置！

**你的网址：**
```
https://luoluojian93-art.github.io/photography-portfolio/
```

### 推送更新

修改文件后，只需 push 到 GitHub：
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

更新会在 1-2 分钟内自动生效！

---

## 🔧 高级功能（可选）

### 1️⃣ **添加自定义域名**

1. 在仓库 **Settings** → **Pages**
2. 在 "Custom domain" 中输入你的域名
3. 更新你的域名 DNS 设置指向 GitHub Pages

### 2️⃣ **启用 HTTPS**

GitHub Pages 自动提供 HTTPS 支持，无需配置

### 3️⃣ **集成 Google Analytics**

在 `index.html` 的 `<head>` 中添加：
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

替换 `GA_MEASUREMENT_ID` 为你的 Google Analytics ID

### 4️⃣ **集成在线支付（高级）**

要让预约系统支持真实支付，需要集成：
- **支付宝** - 支付宝官方 SDK
- **微信支付** - 微信支付官方 API
- **Stripe** - 国际支付

需要后端服务器支持，建议使用云服务如阿里云、腾讯云

---

## 📊 预约数据管理

### 查看保存的预约数据

1. 打开网站浏览器开发者工具 (F12)
2. 进入 **Console** 标签
3. 输入命令查看所有预约：
   ```javascript
   JSON.parse(localStorage.getItem('bookings'))
   ```

### 导出预约数据

在浏览器 Console 中运行：
```javascript
const bookings = JSON.parse(localStorage.getItem('bookings'));
console.log(JSON.stringify(bookings, null, 2));
```

---

## ❓ 常见问题

**Q: 如何添加更多作品？**
A: 在 `script.js` 的 `portfolioData` 数组中添加新对象即可。

**Q: 如何修改网站颜色？**
A: 编辑 `style.css` 中的 CSS 变量 `:root`。

**Q: 预约表单提交后客户能收到邮件吗？**
A: 目前表单只在浏览器本地保存数据。要发送邮件，需要集成后端邮件服务如 Nodemailer、SendGrid 等。

**Q: 如何添加自定义域名？**
A: 在仓库 Settings → Pages 中配置，然后更新你的域名 DNS 设置。

**Q: 如何实现真实支付功能？**
A: 需要集成支付宝、微信支付或 Stripe，通常需要后端服务器支持。

**Q: 网站访问速度慢怎么办？**
A: 
- 优化图片大小（压缩到 100-200KB）
- 使用 CDN 加速
- 启用浏览器缓存

---

## 📝 完整修改检查清单

在发布前，请逐一完成以下事项：

- [ ] 修改网站标题和描述（在 `index.html` 中的 `<title>` 和 `<meta>` 标签）
- [ ] 更新摄影师名字和介绍
- [ ] 修改所有联系方式（邮箱、微信、地址）
- [ ] 添加你的社交媒体链接（Instagram、微博、小红书等）
- [ ] 替换所有示例作品照片为你的真实作品（至少 8-12 张）
- [ ] 修改服务套餐名称和价格
- [ ] 更新或删除示例客户评价
- [ ] 自定义网站颜色和设计风格
- [ ] 在多个设备上测试所有功能
- [ ] 在搜索框测试搜索功能
- [ ] 尝试预约功能（不涉及真实支付）
- [ ] 测试暗黑模式切换
- [ ] 测试邮件订阅功能
- [ ] 分享网站链接给朋友测试

---

## 📚 学习资源

- [HTML 基础教程](https://developer.mozilla.org/zh-CN/docs/Learn/HTML)
- [CSS 基础教程](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)
- [JavaScript 基础教程](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)
- [GitHub Pages 文档](https://pages.github.com/)
- [支付宝接入文档](https://open.alipay.com/)
- [微信支付文档](https://pay.weixin.qq.com/wiki)

---

## 🎯 下一步建议

### 🎬 **立即行动**
1. 访问你的网站链接
2. 测试所有功能
3. 收集反馈意见

### 🖼️ **内容优化**（第1周）
1. 拍摄或收集 20+ 高质量作品照片
2. 编写吸引人的作品描述
3. 完善服务套餐和价格
4. 邀请客户提供评价

### 🚀 **功能扩展**（第2-4周）
1. 集成 Google Analytics 统计访问
2. 添加在线支付功能
3. 创建客户后台管理系统
4. 集成邮件通知系统

### 📢 **市场推广**（持续）
1. 在社交媒体分享网站链接
2. 参加摄影社区和论坛
3. 优化 SEO（搜索引擎优化）
4. 邀请客户点赞和评论

---

## 🤝 支持和反馈

如有问题或建议：
- 📧 发送邮件到你的邮箱
- 💬 在 GitHub Issues 中反馈
- 🐛 报告任何 Bug
- 💡 提议新功能

---

## 📄 许可证

MIT License - 你可以自由使用、修改和分发此项目

---

## 💎 一键优化技巧

### 提升转化率的设计建议

1. **信任度建设**
   - 添加更多客户评价（至少 5-10 条）
   - 展示你的专业资质和奖项
   - 发布客户案例和成功故事

2. **清晰的行动号召**
   - 在每个部分都有"立即预约"按钮
   - 简化预约流程
   - 突出你的独特卖点

3. **社交证明**
   - 显示客户数量和满意度
   - 展示明星作品
   - 发布最新动态

4. **优化加载速度**
   - 压缩所有图片
   - 使用图片懒加载
   - 启用浏览器缓存

---

**祝你的摄影事业蓬勃发展！** 📸✨

如果你觉得这个网站对你有帮助，欢迎分享给其他摄影师朋友！

---

*最后更新：2026年8月23日*
*版本：2.0 - 完整功能版*