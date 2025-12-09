---
title: Vue 组件示例
date: 2025-12-09
tags:
  - VitePress
  - Vue 组件
---

# Vue 组件示例

VitePress 支持在 Markdown 中使用 Vue 组件来创建丰富的内容块。

## 1. 内置容器

### 提示框
::: tip 💡 提示
这是一个提示框，适合强调重要信息
:::

### 信息框
::: info ℹ️ 信息
这是一个信息框，用于提供额外信息
:::

### 警告框
::: warning ⚠️ 警告
这是一个警告框，用于提醒注意事项
:::

### 危险框
::: danger 🔥 危险
这是一个危险框，用于强调重要警告
:::

### 详情框
::: details 📖 详情（点击展开）
这是一个可折叠的详情框，适合隐藏冗长的内容
:::

## 2. 特性卡片（GridContainer + FeatureCard）

<GridContainer>
  <FeatureCard 
    icon="🚀"
    title="快速启动"
    description="基于 Vite，开发体验极佳"
  />
  <FeatureCard 
    icon="🎨"
    title="简洁美观"
    description="默认主题现代化且专业"
  />
  <FeatureCard 
    icon="📝"
    title="Markdown 优先"
    description="专注于内容创作"
  />
  <FeatureCard 
    icon="🔧"
    title="高度可定制"
    description="可以自由定制主题和功能"
  />
</GridContainer>

## 3. 时间线（Timeline）

<Timeline :items="[
  {
    title: '第一步',
    description: '安装 VitePress 和项目依赖'
  },
  {
    title: '第二步',
    description: '创建博客内容，编写 Markdown 文章'
  },
  {
    title: '第三步',
    description: '本地预览和调试'
  },
  {
    title: '第四步',
    description: '推送到 GitHub，自动部署'
  }
]" />

## 4. 按钮组（ButtonGroup）

<ButtonGroup :buttons="[
  {
    label: '访问 GitHub',
    color: '#333',
    action: () => window.open('https://github.com/Akl48/my-blog')
  },
  {
    label: '查看文档',
    color: '#667eea',
    action: () => window.open('https://vitepress.dev/')
  },
  {
    label: '返回首页',
    color: '#764ba2',
    action: () => window.location.href = '/my-blog/'
  }
]" />

## 5. HTML 块

<div style="border: 2px solid #667eea; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h3 style="color: #667eea; margin-top: 0;">自定义 HTML 块</h3>
  <p>你可以在 Markdown 中直接嵌入 HTML 代码来创建更复杂的布局。</p>
  <ul>
    <li>完全自由的样式控制</li>
    <li>支持 CSS 内联样式</li>
    <li>可以嵌套多个元素</li>
  </ul>
</div>

## 6. 表格

| 组件 | 用途 | 难度 |
|------|------|------|
| 内置容器 | 提示/警告/信息 | ⭐ |
| HTML | 自定义块 | ⭐⭐ |
| FeatureCard | 特性展示 | ⭐⭐ |
| Timeline | 时间线 | ⭐⭐⭐ |
| ButtonGroup | 交互按钮 | ⭐⭐⭐ |

## 7. 代码块

```vue
<!-- 在 Markdown 中使用 Vue 组件 -->
<GridContainer>
  <FeatureCard 
    icon="✨"
    title="标题"
    description="描述"
  />
</GridContainer>
```

---

## 使用指南

### 内置容器
```markdown
::: tip 标题
内容
:::
```

### 自定义组件
```markdown
<FeatureCard 
  icon="🚀"
  title="标题"
  description="描述"
/>
```

### HTML 块
```html
<div style="color: #667eea;">
  自定义内容
</div>
```

---

现在你可以在你的博客中使用这些组件创建丰富多彩的内容！🎉
