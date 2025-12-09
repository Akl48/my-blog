import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的博客",
  description: "基于 VitePress 构建的个人博客",
  
  // GitHub Pages 部署配置
  // 如果部署到 https://<USERNAME>.github.io/ 则 base 为 '/'
  // 如果部署到 https://<USERNAME>.github.io/<REPO>/ 则 base 为 '/<REPO>/'
  base: '/my-blog/',
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '博客文章',
          items: [
            { text: '我的第一篇博客', link: '/posts/first-post' },
            { text: 'VitePress 使用指南', link: '/posts/vitepress-guide' },
            { text: 'Vue 组件示例', link: '/posts/vue-components' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Akl48/my-blog' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present'
    },

    // 搜索功能
    search: {
      provider: 'local'
    },

    // 编辑链接
    editLink: {
      pattern: 'https://github.com/Akl48/my-blog/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },

  // Markdown 配置
  markdown: {
    lineNumbers: true
  }
})
