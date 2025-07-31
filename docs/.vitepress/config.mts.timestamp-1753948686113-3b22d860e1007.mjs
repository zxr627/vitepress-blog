// docs/.vitepress/config.mts
import { defineConfig } from "file:///C:/Users/Administrator/Desktop/myPro/blog/my-blog/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/blog-theme.ts
import { getThemeConfig } from "file:///C:/Users/Administrator/Desktop/myPro/blog/my-blog/node_modules/@sugarat/theme/node.mjs";
var blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,
  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // search: false,
  // markdown 图表支持（会增加一定的构建耗时）
  // mermaid: true
  // 主题色修改
  themeColor: "el-blue",
  // 文章默认作者
  author: "Zxr",
  // 友链
  friend: [
    // {
    //   nickname: '粥里有勺糖',
    //   des: '你的指尖用于改变世界的力量',
    //   avatar:
    //     'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
    //   url: 'https://sugarat.top',
    // },
    // {
    //   nickname: 'Vitepress',
    //   des: 'Vite & Vue Powered Static Site Generator',
    //   avatar:
    //     'https://vitepress.dev/vitepress-logo-large.webp',
    //   url: 'https://vitepress.dev/',
    // },
  ],
  // 公告
  popover: {
    title: "\u516C\u544A",
    body: [
      // { type: 'text', content: '👇公众号👇---👇 微信 👇' },
      {
        type: "text",
        content: "\u6B22\u8FCE\u5927\u5BB6\u79C1\u4FE1\u4EA4\u6D41"
      }
      // {
      //   type: 'text',
      //   content: '文章首/文尾有群二维码',
      //   style: 'padding-top:0'
      // },
      // {
      //   type: 'button',
      //   content: '作者博客',
      //   link: 'https://sugarat.top'
      // },
      // {
      //   type: 'button',
      //   content: '加群交流',
      //   props: {
      //     type: 'success'
      //   },
      //   link: 'https://theme.sugarat.top/group.html',
      // }
    ],
    duration: 0
  }
});

// docs/.vitepress/config.mts
var base = process.env.NODE_ENV === "production" ? "/vitepress-blog/" : "/";
var config_default = defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base,
  // 👈 用这里
  lang: "zh-cn",
  title: "Zxr",
  description: "",
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    // 使用 base 路径保证正确
    ["link", { rel: "icon", href: `${base}favicon.ico` }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "\u76EE\u5F55"
    },
    // 默认文案修改
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u76F8\u5173\u6587\u7AE0",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u4E8E",
    // 设置 logo 路径也用 base
    logo: "logo.png",
    nav: [
      { text: "\u9996\u9875", link: "/" },
      {
        text: "\u66F4\u591A",
        items: [
          { text: "\u5F52\u6863", link: "/about1/" },
          { text: "\u5206\u7C7B", link: "/about/" }
        ]
      },
      { text: "\u5173\u4E8E\u4F5C\u8005", link: "https://github.com/zxr627?tab=repositories" }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/zxr627?tab=projects"
      }
    ]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL2Jsb2ctdGhlbWUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcbXlQcm9cXFxcYmxvZ1xcXFxteS1ibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXG15UHJvXFxcXGJsb2dcXFxcbXktYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL215UHJvL2Jsb2cvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLm10c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuXHJcbi8vIFx1NUJGQ1x1NTE2NVx1NEUzQlx1OTg5OFx1NzY4NFx1OTE0RFx1N0Y2RVxyXG5pbXBvcnQgeyBibG9nVGhlbWUgfSBmcm9tICcuL2Jsb2ctdGhlbWUnXHJcblxyXG4vLyBcdTI3MDUgXHU4QkJFXHU3RjZFIGJhc2VcdUZGMUFcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTYyNERcdTc1MjhcdTRFRDNcdTVFOTNcdTU0MERcdUZGMENcdTVGMDBcdTUzRDFcdTc1MjggJy8nXHJcbmNvbnN0IGJhc2UgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/ICcvdml0ZXByZXNzLWJsb2cvJ1xyXG4gICAgOiAnLydcclxuXHJcbi8vIFZpdGVwcmVzcyBcdTlFRDhcdThCQTRcdTkxNERcdTdGNkVcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAvLyBcdTdFRTdcdTYyN0ZcdTUzNUFcdTVCQTJcdTRFM0JcdTk4OTgoQHN1Z2FyYXQvdGhlbWUpXHJcbiAgZXh0ZW5kczogYmxvZ1RoZW1lLFxyXG5cclxuICBiYXNlLCAvLyBcdUQ4M0RcdURDNDggXHU3NTI4XHU4RkQ5XHU5MUNDXHJcblxyXG4gIGxhbmc6ICd6aC1jbicsXHJcbiAgdGl0bGU6ICdaeHInLFxyXG4gIGRlc2NyaXB0aW9uOiAnJyxcclxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuICBpZ25vcmVEZWFkTGlua3M6IHRydWUsXHJcbiAgaGVhZDogW1xyXG4gICAgLy8gXHU0RjdGXHU3NTI4IGJhc2UgXHU4REVGXHU1Rjg0XHU0RkREXHU4QkMxXHU2QjYzXHU3ODZFXHJcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiBgJHtiYXNlfWZhdmljb24uaWNvYCB9XVxyXG4gIF0sXHJcblxyXG4gIHRoZW1lQ29uZmlnOiB7XHJcbiAgICAvLyBcdTVDNTVcdTc5M0EgMiwzIFx1N0VBN1x1NjgwN1x1OTg5OFx1NTcyOFx1NzZFRVx1NUY1NVx1NEUyRFxyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBsZXZlbDogWzIsIDNdLFxyXG4gICAgICBsYWJlbDogJ1x1NzZFRVx1NUY1NSdcclxuICAgIH0sXHJcbiAgICAvLyBcdTlFRDhcdThCQTRcdTY1ODdcdTY4NDhcdTRGRUVcdTY1MzlcclxuICAgIHJldHVyblRvVG9wTGFiZWw6ICdcdTU2REVcdTUyMzBcdTk4NzZcdTkwRTgnLFxyXG4gICAgc2lkZWJhck1lbnVMYWJlbDogJ1x1NzZGOFx1NTE3M1x1NjU4N1x1N0FFMCcsXHJcbiAgICBsYXN0VXBkYXRlZFRleHQ6ICdcdTRFMEFcdTZCMjFcdTY2RjRcdTY1QjBcdTRFOEUnLFxyXG5cclxuICAgIC8vIFx1OEJCRVx1N0Y2RSBsb2dvIFx1OERFRlx1NUY4NFx1NEU1Rlx1NzUyOCBiYXNlXHJcbiAgICBsb2dvOiAnbG9nby5wbmcnLFxyXG4gICAgbmF2OiBbXHJcbiAgICAgIHsgdGV4dDogJ1x1OTk5Nlx1OTg3NScsIGxpbms6ICcvJyB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ1x1NjZGNFx1NTkxQScsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NUY1Mlx1Njg2MycsIGxpbms6ICcvYWJvdXQxLycgfSxcclxuICAgICAgICAgIHsgdGV4dDogJ1x1NTIwNlx1N0M3QicsIGxpbms6ICcvYWJvdXQvJyB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTUxNzNcdTRFOEVcdTRGNUNcdTgwMDUnLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3p4cjYyNz90YWI9cmVwb3NpdG9yaWVzJyB9XHJcbiAgICBdLFxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIGljb246ICdnaXRodWInLFxyXG4gICAgICAgIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20venhyNjI3P3RhYj1wcm9qZWN0cydcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcbXlQcm9cXFxcYmxvZ1xcXFxteS1ibG9nXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXG15UHJvXFxcXGJsb2dcXFxcbXktYmxvZ1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcYmxvZy10aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9EZXNrdG9wL215UHJvL2Jsb2cvbXktYmxvZy9kb2NzLy52aXRlcHJlc3MvYmxvZy10aGVtZS50c1wiOy8vIFx1NEUzQlx1OTg5OFx1NzJFQ1x1NjcwOVx1OTE0RFx1N0Y2RVxyXG5pbXBvcnQgeyBnZXRUaGVtZUNvbmZpZyB9IGZyb20gJ0BzdWdhcmF0L3RoZW1lL25vZGUnXHJcblxyXG4vLyBcdTVGMDBcdTU0MkZSU1NcdTY1MkZcdTYzMDFcdUZGMDhSU1NcdTkxNERcdTdGNkVcdUZGMDlcclxuLy8gaW1wb3J0IHR5cGUgeyBUaGVtZSB9IGZyb20gJ0BzdWdhcmF0L3RoZW1lJ1xyXG5cclxuLy8gY29uc3QgYmFzZVVybCA9ICdodHRwczovL3N1Z2FyYXQudG9wJ1xyXG4vLyBjb25zdCBSU1M6IFRoZW1lLlJTU09wdGlvbnMgPSB7XHJcbi8vICAgdGl0bGU6ICdcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxyXG4vLyAgIGJhc2VVcmwsXHJcbi8vICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IChjKSAyMDE4LXByZXNlbnQsIFx1N0NBNVx1OTFDQ1x1NjcwOVx1NTJGQVx1N0NENicsXHJcbi8vICAgZGVzY3JpcHRpb246ICdcdTRGNjBcdTc2ODRcdTYzMDdcdTVDMTYsXHU2MkU1XHU2NzA5XHU2NTM5XHU1M0Q4XHU0RTE2XHU3NTRDXHU3Njg0XHU1MjlCXHU5MUNGXHVGRjA4XHU1OTI3XHU1MjREXHU3QUVGXHU3NkY4XHU1MTczXHU2MjgwXHU2NzJGXHU1MjA2XHU0RUFCXHVGRjA5JyxcclxuLy8gICBsYW5ndWFnZTogJ3poLWNuJyxcclxuLy8gICBpbWFnZTogJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFkzTkRrNU5URTJOekF6TUE9PTY3NDk5NTE2NzAzMCcsXHJcbi8vICAgZmF2aWNvbjogJ2h0dHBzOi8vc3VnYXJhdC50b3AvZmF2aWNvbi5pY28nLFxyXG4vLyB9XHJcblxyXG4vLyBcdTYyNDBcdTY3MDlcdTkxNERcdTdGNkVcdTk4NzlcdUZGMENcdThCRTZcdTg5QzFcdTY1ODdcdTY4NjM6IGh0dHBzOi8vdGhlbWUuc3VnYXJhdC50b3AvXHJcbmNvbnN0IGJsb2dUaGVtZSA9IGdldFRoZW1lQ29uZmlnKHtcclxuICAvLyBcdTVGMDBcdTU0MkZSU1NcdTY1MkZcdTYzMDFcclxuICAvLyBSU1MsXHJcblxyXG4gIC8vIFx1NjQxQ1x1N0QyMlxyXG4gIC8vIFx1OUVEOFx1OEJBNFx1NUYwMFx1NTQyRnBhZ2VmaW5kXHU3OUJCXHU3RUJGXHU3Njg0XHU1MTY4XHU2NTg3XHU2NDFDXHU3RDIyXHU2NTJGXHU2MzAxXHVGRjA4XHU1OTgyXHU0RjdGXHU3NTI4XHU1MTc2XHU1QjgzXHU3Njg0XHU1M0VGXHU0RUU1XHU4QkJFXHU3RjZFXHU0RTNBZmFsc2VcdUZGMDlcclxuICAvLyBzZWFyY2g6IGZhbHNlLFxyXG5cclxuICAvLyBtYXJrZG93biBcdTU2RkVcdTg4NjhcdTY1MkZcdTYzMDFcdUZGMDhcdTRGMUFcdTU4OUVcdTUyQTBcdTRFMDBcdTVCOUFcdTc2ODRcdTY3ODRcdTVFRkFcdTgwMTdcdTY1RjZcdUZGMDlcclxuICAvLyBtZXJtYWlkOiB0cnVlXHJcblxyXG5cclxuXHJcbiAgLy8gXHU0RTNCXHU5ODk4XHU4MjcyXHU0RkVFXHU2NTM5XHJcbiAgdGhlbWVDb2xvcjogJ2VsLWJsdWUnLFxyXG5cclxuICAvLyBcdTY1ODdcdTdBRTBcdTlFRDhcdThCQTRcdTRGNUNcdTgwMDVcclxuICBhdXRob3I6ICdaeHInLFxyXG5cclxuICAvLyBcdTUzQ0JcdTk0RkVcclxuICBmcmllbmQ6IFtcclxuICAgIC8vIHtcclxuICAgIC8vICAgbmlja25hbWU6ICdcdTdDQTVcdTkxQ0NcdTY3MDlcdTUyRkFcdTdDRDYnLFxyXG4gICAgLy8gICBkZXM6ICdcdTRGNjBcdTc2ODRcdTYzMDdcdTVDMTZcdTc1MjhcdTRFOEVcdTY1MzlcdTUzRDhcdTRFMTZcdTc1NENcdTc2ODRcdTUyOUJcdTkxQ0YnLFxyXG4gICAgLy8gICBhdmF0YXI6XHJcbiAgICAvLyAgICAgJ2h0dHBzOi8vaW1nLmNkbi5zdWdhcmF0LnRvcC9tZEltZy9NVFkzTkRrNU5URTJOekF6TUE9PTY3NDk5NTE2NzAzMCcsXHJcbiAgICAvLyAgIHVybDogJ2h0dHBzOi8vc3VnYXJhdC50b3AnLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgbmlja25hbWU6ICdWaXRlcHJlc3MnLFxyXG4gICAgLy8gICBkZXM6ICdWaXRlICYgVnVlIFBvd2VyZWQgU3RhdGljIFNpdGUgR2VuZXJhdG9yJyxcclxuICAgIC8vICAgYXZhdGFyOlxyXG4gICAgLy8gICAgICdodHRwczovL3ZpdGVwcmVzcy5kZXYvdml0ZXByZXNzLWxvZ28tbGFyZ2Uud2VicCcsXHJcbiAgICAvLyAgIHVybDogJ2h0dHBzOi8vdml0ZXByZXNzLmRldi8nLFxyXG4gICAgLy8gfSxcclxuICBdLFxyXG5cclxuICAvLyBcdTUxNkNcdTU0NEFcclxuICBwb3BvdmVyOiB7XHJcbiAgICB0aXRsZTogJ1x1NTE2Q1x1NTQ0QScsXHJcbiAgICBib2R5OiBbXHJcbiAgICAgIC8vIHsgdHlwZTogJ3RleHQnLCBjb250ZW50OiAnXHVEODNEXHVEQzQ3XHU1MTZDXHU0RjE3XHU1M0Y3XHVEODNEXHVEQzQ3LS0tXHVEODNEXHVEQzQ3IFx1NUZBRVx1NEZFMSBcdUQ4M0RcdURDNDcnIH0sXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICdcdTZCMjJcdThGQ0VcdTU5MjdcdTVCQjZcdTc5QzFcdTRGRTFcdTRFQTRcdTZENDEnXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIHtcclxuICAgICAgLy8gICB0eXBlOiAndGV4dCcsXHJcbiAgICAgIC8vICAgY29udGVudDogJ1x1NjU4N1x1N0FFMFx1OTk5Ni9cdTY1ODdcdTVDM0VcdTY3MDlcdTdGQTRcdTRFOENcdTdFRjRcdTc4MDEnLFxyXG4gICAgICAvLyAgIHN0eWxlOiAncGFkZGluZy10b3A6MCdcclxuICAgICAgLy8gfSxcclxuICAgICAgLy8ge1xyXG4gICAgICAvLyAgIHR5cGU6ICdidXR0b24nLFxyXG4gICAgICAvLyAgIGNvbnRlbnQ6ICdcdTRGNUNcdTgwMDVcdTUzNUFcdTVCQTInLFxyXG4gICAgICAvLyAgIGxpbms6ICdodHRwczovL3N1Z2FyYXQudG9wJ1xyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyB7XHJcbiAgICAgIC8vICAgdHlwZTogJ2J1dHRvbicsXHJcbiAgICAgIC8vICAgY29udGVudDogJ1x1NTJBMFx1N0ZBNFx1NEVBNFx1NkQ0MScsXHJcbiAgICAgIC8vICAgcHJvcHM6IHtcclxuICAgICAgLy8gICAgIHR5cGU6ICdzdWNjZXNzJ1xyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgbGluazogJ2h0dHBzOi8vdGhlbWUuc3VnYXJhdC50b3AvZ3JvdXAuaHRtbCcsXHJcbiAgICAgIC8vIH1cclxuICAgIF0sXHJcbiAgICBkdXJhdGlvbjogMFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgeyBibG9nVGhlbWUgfVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQStYLFNBQVMsb0JBQW9COzs7QUNDNVosU0FBUyxzQkFBc0I7QUFpQi9CLElBQU0sWUFBWSxlQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBYy9CLFlBQVk7QUFBQTtBQUFBLEVBR1osUUFBUTtBQUFBO0FBQUEsRUFHUixRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZVI7QUFBQTtBQUFBLEVBR0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsTUFHSjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW1CRjtBQUFBLElBQ0EsVUFBVTtBQUFBLEVBQ1o7QUFDRixDQUFDOzs7QURoRkQsSUFBTSxPQUFPLFFBQVEsSUFBSSxhQUFhLGVBQ2hDLHFCQUNBO0FBR04sSUFBTyxpQkFBUSxhQUFhO0FBQUE7QUFBQSxFQUUxQixTQUFTO0FBQUEsRUFFVDtBQUFBO0FBQUEsRUFFQSxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixhQUFhO0FBQUEsRUFDYixpQkFBaUI7QUFBQSxFQUNqQixNQUFNO0FBQUE7QUFBQSxJQUVKLENBQUMsUUFBUSxFQUFFLEtBQUssUUFBUSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUM7QUFBQSxFQUN0RDtBQUFBLEVBRUEsYUFBYTtBQUFBO0FBQUEsSUFFWCxTQUFTO0FBQUEsTUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFDWixPQUFPO0FBQUEsSUFDVDtBQUFBO0FBQUEsSUFFQSxrQkFBa0I7QUFBQSxJQUNsQixrQkFBa0I7QUFBQSxJQUNsQixpQkFBaUI7QUFBQTtBQUFBLElBR2pCLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxnQkFBTSxNQUFNLElBQUk7QUFBQSxNQUN4QjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLGdCQUFNLE1BQU0sV0FBVztBQUFBLFVBQy9CLEVBQUUsTUFBTSxnQkFBTSxNQUFNLFVBQVU7QUFBQSxRQUNoQztBQUFBLE1BQ0Y7QUFBQSxNQUNBLEVBQUUsTUFBTSw0QkFBUSxNQUFNLDZDQUE2QztBQUFBLElBQ3JFO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
