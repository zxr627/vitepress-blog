import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// ✅ 设置 base：生产环境才用仓库名，开发用 '/'
const base = process.env.NODE_ENV === 'production'
    ? '/vitepress-blog/'
    : '/'

// Vitepress 默认配置
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,

  base, // 👈 用这里

  lang: 'zh-cn',
  title: 'Zxr',
  description: '',
  lastUpdated: true,

  head: [
    // 使用 base 路径保证正确
    ['link', { rel: 'icon', href: `${base}favicon.ico` }]
  ],

  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置 logo 路径也用 base
    logo: `${base}logo.png`,

    nav: [
      { text: '首页', link: '/' },
      {
        text: '更多',
        items: [
          { text: '归档', link: '/about1/' },
          { text: '分类', link: '/about/' }
        ]
      },
      { text: '关于作者', link: 'https://github.com/zxr627?tab=projects' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zxr627?tab=projects'
      }
    ]
  }
})
