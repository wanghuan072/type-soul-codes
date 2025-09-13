<template>
  <div class="admin-login-page">
    <!-- Header Component -->
    <HeaderComponent />
    
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h1 class="login-title">
            <i class="fas fa-shield-alt"></i>
            管理员登录
          </h1>
          <p class="login-subtitle">Type Soul Codes 评分评论管理系统</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="username" class="form-label">
              <i class="fas fa-user"></i>
              用户名
            </label>
            <input
              id="username"
              v-model="loginForm.username"
              type="text"
              class="form-input"
              placeholder="请输入用户名"
              required
              :disabled="isLoading"
            />
          </div>
          
          <div class="form-group">
            <label for="password" class="form-label">
              <i class="fas fa-lock"></i>
              密码
            </label>
            <input
              id="password"
              v-model="loginForm.password"
              type="password"
              class="form-input"
              placeholder="请输入密码"
              required
              :disabled="isLoading"
            />
          </div>
          
          <button 
            type="submit" 
            class="login-button"
            :disabled="isLoading || !loginForm.username || !loginForm.password"
          >
            <i class="fas fa-sign-in-alt" v-if="!isLoading"></i>
            <i class="fas fa-spinner fa-spin" v-else></i>
            {{ isLoading ? '登录中...' : '登录' }}
          </button>
        </form>
        
        <div class="login-footer">
          <p class="default-credentials">
            <i class="fas fa-info-circle"></i>
            默认账户: admin / admin123
          </p>
        </div>
      </div>
    </div>
    
    <!-- Footer Component -->
    <FooterComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import apiService from '@/services/api.js'
import { showSuccess, showError } from '@/utils/message.js'

const router = useRouter()

// 响应式数据
const isLoading = ref(false)
const loginForm = ref({
  username: '',
  password: ''
})

// 登录处理
const handleLogin = async () => {
  if (!loginForm.value.username || !loginForm.value.password) {
    showError('请填写用户名和密码')
    return
  }
  
  isLoading.value = true
  
  try {
    const response = await apiService.adminLogin(loginForm.value.username, loginForm.value.password)
    
    // 存储token和用户信息
    localStorage.setItem('admin_token', response.token)
    localStorage.setItem('admin_user', JSON.stringify(response.user))
    
    showSuccess('登录成功！')
    
    // 跳转到管理后台
    router.push('/admin/feedback')
    
  } catch (error) {
    console.error('登录失败:', error)
    showError(error.message || '登录失败，请检查用户名和密码')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.admin-login-page {
  background: #0a0a0a;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 2rem;
}

.login-card {
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border-radius: 20px;
  padding: 3rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid #333;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-title i {
  color: #9b59b6;
}

.login-subtitle {
  color: #b0b0b0;
  font-size: 1rem;
  margin: 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e0e0e0;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-label i {
  color: #9b59b6;
  width: 16px;
}

.form-input {
  padding: 1rem;
  background: #2a2a2a;
  border: 2px solid #444;
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #9b59b6;
  box-shadow: 0 0 0 3px rgba(155, 89, 182, 0.1);
}

.form-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.login-button {
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.login-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(155, 89, 182, 0.3);
}

.login-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.login-footer {
  margin-top: 2rem;
  text-align: center;
}

.default-credentials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
  margin: 0;
  padding: 1rem;
  background: rgba(155, 89, 182, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(155, 89, 182, 0.2);
}

.default-credentials i {
  color: #9b59b6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .login-container {
    padding: 1rem;
  }
  
  .login-card {
    padding: 2rem;
  }
  
  .login-title {
    font-size: 1.5rem;
  }
}
</style>
