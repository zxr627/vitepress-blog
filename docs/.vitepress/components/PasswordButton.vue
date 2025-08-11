<template>
  <div class="modal-overlay" @click.self="handleClose">
    <div class="password-wrapper">
      <h3 class="modal-title">请输入密码</h3>
      <div class="input-group">
        <input
            v-model="password"
            type="password"
            placeholder="请输入密码"
            class="password-input"
            @keydown.enter="checkPassword"
        />
        <button class="submit-btn" @click="checkPassword">提交</button>
      </div>
      <p v-if="errorMsg" class="error-msg">{{ errorMsg }}</p>
      <button class="cancel-btn" @click="handleClose">取消</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const password = ref('')
const errorMsg = ref('')

function checkPassword() {
  if (password.value === 'qwer1234') {
    window.location.href = '/blog/personal.html'
  } else {
    errorMsg.value = '密码错误'
  }
}

function handleClose() {
  emit('close')
  password.value = ''
  errorMsg.value = ''
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.password-wrapper {
  width: 360px;
  background: #fff;
  padding: 24px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.modal-title {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
}

.password-input {
  flex: 1;
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-right: none;
  border-radius: 6px 0 0 6px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.password-input:focus {
  border-color: #409eff;
  box-shadow: 0 0 6px rgba(64, 158, 255, 0.4);
}

.submit-btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 0 6px 6px 0;
  background-color: #409eff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #66b1ff;
}

.cancel-btn {
  margin-top: 20px;
  width: 50%;
  padding: 10px 0;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  background: #bbb;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cancel-btn:hover {
  background: #999;
}

.error-msg {
  margin-top: 12px;
  color: #f56c6c;
  font-weight: 600;
  user-select: none;
}
</style>
