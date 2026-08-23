# 🚀 快速开始指南

## ⚡ 5分钟快速上手

### 第1步：访问网站（1分钟）
```
https://luoluojian93-art.github.io/photography-portfolio/
```
✅ 网站已上线，所有功能可用

---

### 第2步：测试功能（2分钟）
- 📸 点击作品查看灯箱效果
- 🔍 在搜索框搜索作品
- 🌙 点击月亮图标切换暗黑模式
- 📅 尝试填写预约表单
- ⭐ 查看客户评价

---

### 第3步：自定义内容（2分钟）

**编辑这些文件：**

| 文件 | 修改内容 | 难度 |
|------|--------|------|
| `index.html` | 联系方式、社交链接 | ⭐ 简单 |
| `script.js` | 作品、服务、评价数据 | ⭐⭐ 中等 |
| `style.css` | 颜色、字体、布局 | ⭐⭐ 中等 |

---

## 📝 关键修改位置

### 📧 修改邮箱（index.html）
找到第 XX 行，替换：
```html
<a href="mailto:contact@example.com">contact@example.com</a>
```

### 🖼️ 替换作品照片（script.js）
找到 `portfolioData` 数组，修改 `image` 字段：
```javascript
image: 'https://你的图片URL',
```

### 💰 修改服务价格（script.js）
找到 `servicesData` 数组，修改 `price` 字段：
```javascript
price: 1200,  // 改为你的价格
```

### 🎨 修改颜色（style.css）
找到 `:root` CSS变量：
```css
--secondary-color: #d4af37;  /* 改为你喜欢的颜色 */
```

---

## 🎯 优先级任务清单

### 🥇 必做（今天）
- [ ] 修改邮箱、微信、电话
- [ ] 替换 2-3 张示例作品
- [ ] 改一次颜色看效果

### 🥈 重要（本周）
- [ ] 替换所有 8 张作品
- [ ] 修改服务套餐内容
- [ ] 添加客户评价

### 🥉 可选（后续）
- [ ] 集成在线支付
- [ ] Google Analytics 统计
- [ ] 自定义域名

---

## 🔗 关键链接

- 🌐 **网站**：https://luoluojian93-art.github.io/photography-portfolio/
- 📦 **仓库**：https://github.com/luoluojian93-art/photography-portfolio
- 📖 **详细文档**：查看 README.md

---

## ⚙️ 常用 Git 命令

**更新网站后推送：**
```bash
git add .
git commit -m "Update content"
git push origin main
```

**查看修改：**
```bash
git status
```

**查看提交历史：**
```bash
git log --oneline
```

---

## 🆘 遇到问题？

| 问题 | 解决方案 |
|------|--------|
| 网站样式混乱 | 刷新浏览器（Ctrl+Shift+R） |
| 图片加载不出来 | 检查图片 URL 是否正确 |
| 修改后网站没更新 | 等待 1-2 分钟，GitHub 需要时间部署 |
| 预约表单不工作 | 检查浏览器控制台是否有错误 |

---

## 📞 需要帮助？

1. 📖 查看完整 README.md 获取详细说明
2. 💬 查看代码注释理解工作原理
3. 🔍 使用浏览器开发者工具调试（F12）
4. 📧 发送邮件或创建 GitHub Issue

---

**让我们开始吧！** 🚀

修改内容后别忘了 push 到 GitHub！

---

*需要更多帮助？查看完整 README.md*