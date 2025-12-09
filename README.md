# 我的 VitePress 博客

这是一个基于 VitePress 构建的个人博客，自动部署到 GitHub Pages。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 `http://localhost:5173` 预览博客

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📝 写作指南

### 添加新文章

1. 在 `posts` 目录下创建新的 `.md` 文件
2. 添加 frontmatter（标题、日期、标签等）
3. 编写 Markdown 内容
4. 在 `.vitepress/config.mts` 的 sidebar 中添加链接

### Frontmatter 示例

```yaml
---
title: 文章标题
date: 2025-12-09
tags:
  - 标签1
  - 标签2
---
```

## 🔧 配置说明

### 修改网站信息

编辑 `.vitepress/config.mts` 文件：

- `title`: 网站标题
- `description`: 网站描述
- `base`: 部署的基础路径
- `themeConfig`: 主题配置（导航栏、侧边栏、社交链接等）

### 部署到 GitHub Pages

#### 方法一：使用 GitHub Actions（推荐）

1. **创建 GitHub 仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/你的仓库名.git
   git push -u origin main
   ```

2. **配置 GitHub Pages**
   - 进入仓库的 Settings > Pages
   - Source 选择 "GitHub Actions"

3. **修改配置文件**
   - 如果部署到 `https://你的用户名.github.io/`，保持 `base: '/'`
   - 如果部署到 `https://你的用户名.github.io/仓库名/`，修改为 `base: '/仓库名/'`

4. **推送代码自动部署**
   ```bash
   git push
   ```

   GitHub Actions 会自动构建并部署到 GitHub Pages

#### 方法二：手动部署

```bash
npm run build
cd .vitepress/dist
git init
git add -A
git commit -m 'Deploy'
git push -f https://github.com/你的用户名/你的仓库名.git main:gh-pages
```

然后在 GitHub 仓库设置中将 Pages 的 source 设置为 `gh-pages` 分支。

## 📂 项目结构

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 配置
├── .vitepress/
│   └── config.mts              # VitePress 配置文件
├── posts/                      # 博客文章目录
│   ├── index.md               # 文章列表页
│   ├── first-post.md          # 示例文章
│   └── vitepress-guide.md     # VitePress 指南
├── public/                     # 静态资源目录
├── index.md                    # 首页
├── about.md                    # 关于页面
├── package.json
└── README.md                   # 本文件
```

## 🎨 自定义主题

VitePress 支持自定义主题。你可以：

1. 创建 `.vitepress/theme` 目录
2. 添加自定义组件和样式
3. 扩展默认主题

详见 [VitePress 主题文档](https://vitepress.dev/guide/custom-theme)

## 📚 文档资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Vue 3 文档](https://vuejs.org/)
- [Markdown 指南](https://markdown.com.cn/)

## 📄 许可证

MIT License

---

⭐️ 如果这个项目对你有帮助，欢迎 Star！
