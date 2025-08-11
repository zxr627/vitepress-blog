<template>
  <div>
    <pre class="code-block" @click="showModal = true">
      <code><slot /></code>
    </pre>

    <PasswordButton v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PasswordButton from './PasswordButton.vue'

const showModal = ref(false)
</script>

<style scoped>
.code-block {
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
}
.code-block:hover {
  background: #e0f0ff;
}
</style>
