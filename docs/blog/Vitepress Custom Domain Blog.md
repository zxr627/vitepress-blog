# 使用自有域名部署 VitePress 博客到 GitHub Pages 的经验总结

最近我把自己的 VitePress 博客从 GitHub Pages 的默认地址迁移到自己购买的阿里云域名 `zxroo.top`，过程比较曲折，这里整理一下完整流程和经验，供自己回顾，也给大家参考。

---

## 一、问题背景

* 博客原始地址：`https://zxr627.github.io/vitepress-blog/`
* 希望使用自有域名 `https://zxroo.top`，以提升国内访问稳定性，并去掉仓库名路径
* 遇到的问题：

    * 自定义域访问 404
    * CNAME 文件生成权限问题
    * VitePress 的 `base` 配置影响资源路径
    * GitHub Actions 部署过程中 `_site/CNAME` 写入失败

---

## 二、关键步骤

### 1. 修改 VitePress 配置

原来 `vite.config.ts` 或 `docs/.vitepress/config.mts` 中的 base：

```ts
const base = process.env.NODE_ENV === 'production'
    ? '/vitepress-blog/'
    : '/'
```

改为根目录 `/`：

```ts
const base = process.env.NODE_ENV === 'production'
    ? '/'
    : '/'
```

并保证所有资源路径使用 `${base}`，例如：

```ts
head: [
  ['link', { rel: 'icon', href: `${base}a.jpg` }]
],
logo: `${base}a.jpg`
```

---

### 2. 修改 GitHub Actions workflow

核心问题：在 `_site` 目录写入 `CNAME` 会报权限错误。

解决方法：

* **在 VitePress 构建产物 `dist` 里生成 CNAME**，然后让 Jekyll 步骤拷贝到 `_site`。

关键步骤示例：

```yaml
- name: Build VitePress
  run: pnpm build

- name: Add CNAME
  run: echo "zxroo.top" > ./docs/.vitepress/dist/CNAME

- name: Build with Jekyll
  uses: actions/jekyll-build-pages@v1
  with:
    source: ./docs/.vitepress/dist
    destination: ./_site
```

---

### 3. 配置仓库 Pages

* 仓库 Settings → Pages → Custom domain 填写：

```
zxroo.top
```

* 勾选 **Enforce HTTPS**
* 确认 `_site/CNAME` 文件已生成，内容为 `zxroo.top`

---

### 4. 配置阿里云域名解析

| 类型    | 主机记录 | 记录值              | TTL |
| ----- | ---- | ---------------- | --- |
| CNAME | @    | zxr627.github.io | 10m |
| CNAME | www  | zxroo.top        | 10m |

> 这样根域和 `www` 子域都能访问，并实现自动跳转到根域

---

### 5. 注意事项

1. **DNS 生效需要时间**：通常 10 分钟到 1 小时
2. **base 路径一定要修改**：否则访问自定义域时样式和图片路径会错位
3. **Actions workflow 部署顺序**：

    1. 构建 VitePress → `dist`
    2. 写入 `CNAME` → `dist/CNAME`
    3. 拷贝到 `_site` 并上传 GitHub Pages
4. **避免直接写 `_site/CNAME`**，否则会报权限错误

---

## 六、最终效果

* `https://zxroo.top` 可以稳定访问
* `https://www.zxroo.top` 自动跳转到根域
* 国内访问比 `github.io` 原始路径更稳定
* 以后 push main 分支自动部署，无需手动操作

---

### 七、总结

整个流程核心是：

1. **VitePress base 配置** → 根目录 `/`
2. **CNAME 写入 dist，而非 \_site**
3. **GitHub Pages 配置 Custom domain**
4. **阿里云 DNS 配置根域和 www 子域**

掌握了这几个点，就能顺利把博客迁移到自己的域名，解决国内访问慢或 404 的问题。
