<script setup>
import CodeWithPassword from '../.vitepress/components/CodeWithPassword.vue'
</script>

---
top: 1
---


# 测试文档
欢迎阅读这篇测试文档！这里演示了一些常用的 Markdown 格式。

## 段落示例

这是一段普通文本，你可以写**加粗文字**，也可以写*斜体文字*，还可以写`代码片段`。

## 列表示例

- 第一项
- 第二项
- 第三项

1. 有序列表第一项
2. 有序列表第二项
3. 有序列表第三项

## 代码块示例
<CodeWithPassword>
{`function greet(name) {
  console.log('Hello, ' + name);
}`}
</CodeWithPassword>

```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('VitePress');
