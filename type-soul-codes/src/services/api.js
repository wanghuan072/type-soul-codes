/**
 * Type Soul Codes API 服务
 * 用于与后端评分评论系统通信
 */

// 自动检测环境并设置API基础URL
const getApiBaseUrl = () => {
  // 如果设置了环境变量，优先使用
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // 自动检测环境
  if (import.meta.env.PROD) {
    // 生产环境 - 使用Vercel后端
    return 'https://type-soul-codes-api.vercel.app';
  } else {
    // 开发环境 - 使用本地后端
    return 'http://localhost:3001';
  }
};

const API_BASE_URL = getApiBaseUrl();

// 开发环境下输出API URL用于调试
if (import.meta.env.DEV) {
  console.log('🔗 API Base URL:', API_BASE_URL);
}

/**
 * API 请求封装
 */
class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  /**
   * 发送请求
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const config = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API请求失败 [${endpoint}]:`, error);
      throw error;
    }
  }

  /**
   * 获取健康状态
   */
  async getHealth() {
    return this.request('/health');
  }

  /**
   * 提交评论
   */
  async submitComment(guideId, commentData) {
    return this.request('/comments', {
      method: 'POST',
      body: JSON.stringify({
        guideId,
        name: commentData.name,
        email: commentData.email,
        text: commentData.text,
        rating: commentData.rating
      }),
    });
  }

  /**
   * 获取评论列表
   */
  async getComments(guideId) {
    return this.request(`/comments?guideId=${encodeURIComponent(guideId)}`);
  }

  /**
   * 提交评分
   */
  async submitRating(guideId, rating) {
    return this.request('/ratings', {
      method: 'POST',
      body: JSON.stringify({
        guideId,
        rating
      }),
    });
  }

  /**
   * 获取评分统计
   */
  async getRatings(guideId) {
    return this.request(`/ratings?guideId=${encodeURIComponent(guideId)}`);
  }

  /**
   * 管理员登录
   */
  async adminLogin(username, password) {
    return this.request('/admin/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
    });
  }

  /**
   * 获取所有指南数据（管理员）
   */
  async getAllGuideData(token) {
    return this.request('/admin/feedback', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  /**
   * 删除反馈（管理员）
   */
  async deleteFeedback(guideId, feedbackId, token) {
    return this.request(`/admin/feedback/${encodeURIComponent(guideId)}/${feedbackId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  /**
   * 手动添加反馈（管理员）
   */
  async addManualFeedback(feedbackData, token) {
    return this.request('/admin/feedback/manual', {
      method: 'POST',
      body: JSON.stringify(feedbackData),
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  /**
   * 更新反馈（管理员）
   */
  async updateFeedback(guideId, feedbackId, feedbackData, token) {
    return this.request(`/admin/feedback/${encodeURIComponent(guideId)}/${feedbackId}`, {
      method: 'PUT',
      body: JSON.stringify(feedbackData),
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  /**
   * 更新评分统计（管理员）
   */
  async updateRatings(guideId, ratings, token) {
    return this.request(`/admin/ratings/${encodeURIComponent(guideId)}`, {
      method: 'PUT',
      body: JSON.stringify(ratings),
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}

// 创建API服务实例
const apiService = new ApiService();

export default apiService;

