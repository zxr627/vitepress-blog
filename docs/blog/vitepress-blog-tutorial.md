

# 🚀 VitePress + GitHub Pages 搭建个人博客保姆级教程

> 记录一次从 0 到 1 搭建 VitePress 博客并自动部署到 GitHub Pages 的全过程  
> By zxr627

---

## 📌 1. 准备工作

- 已有一个 [GitHub](https://github.com) 账号
- 安装好 Node.js（建议 LTS 版本）
- 使用包管理器（我用的是 pnpm，也可以用 npm/yarn）
- 会简单使用 Git

---

## 📌 2. 初始化 VitePress 博客

```bash
pnpm create vitepress
# 或者手动：
pnpm init
pnpm add vitepress -D
```

创建一个 `docs` 文件夹，放你的内容。

---

## 📌 3. 核心配置

新建 `docs/.vitepress/config.js`，示例：

```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-cn',
  title: 'Zxr',
  description: '个人博客',
  base: '/vitepress-blog/', // 🚨 仓库名！若是 username.github.io 则不需要
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '更多',
        items: [
          { text: '归档', link: '/archive/' },
          { text: '分类', link: '/category/' }
        ]
      },
      { text: '关于我', link: 'https://github.com/zxr627' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zxr627' }
    ]
  }
})
```

---

## 📌 4. 本地调试

```bash
pnpm run dev
```

访问 `http://localhost:5173`，调试无误后进行构建：

```bash
pnpm run build
```

---

## 📌 5. GitHub 仓库准备

- 新建一个公开仓库 `vitepress-blog`
- 关联远程：

```bash
git init
git remote add origin git@github.com:你的用户名/vitepress-blog.git
git add .
git commit -m "init blog"
git push -u origin main
```

若是 SSH，需要先配置 SSH Key

---

## 📌 6. 配置 GitHub Actions 自动部署

在根目录 `.github/workflows/deploy.yml`：

```yaml
name: Deploy Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - uses: pnpm/action-setup@v4
        with:
          version: latest
          run_install: true
      - run: pnpm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 📌 7. 仓库 Pages 启用

- `Settings` → `Pages`
- Source 选 `GitHub Actions`

---

## 📌 8. 推送触发部署

往 `main` 分支 push 即可自动执行 Actions → 构建 → 部署

---

## 📌 9. 常见坑 & 解决

✅ 404：检查 `base` 配置是否写对  
✅ push 走 HTTPS：远程地址改成 `git@github.com:xxx`  
✅ Pages 无法启用：必须是公开库  
✅ 死链错误：加 `ignoreDeadLinks: true`

---

## 🎉 最终效果

地址形如：  
```
https://你的用户名.github.io/仓库名/
```

祝写博客顺利！🚀


