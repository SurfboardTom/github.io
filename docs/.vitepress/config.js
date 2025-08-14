import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的文档库",
  description: "使用VitePress构建的文档网站，部署在GitHub Pages",
  base: '/my-docs/', // 这里替换为你的GitHub仓库名称，如仓库地址是https://github.com/yourname/my-docs，则base为'/my-docs/'
  
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
      { text: 'API', link: '/api/' },
      { text: '示例', link: '/examples/basic' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装', link: '/guide/installation' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'API 参考', link: '/api/' }
        ]
      },
      {
        text: '示例',
        items: [
          { text: '基础示例', link: '/examples/basic' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/yourrepo' }
    ],
    
    // 底部版权信息
    footer: {
      message: '基于 MIT 许可证发布',
      copyright: 'Copyright © 2023 我的文档库'
    },
    
    // 搜索配置
    search: {
      provider: 'local'
    }
  }
})
