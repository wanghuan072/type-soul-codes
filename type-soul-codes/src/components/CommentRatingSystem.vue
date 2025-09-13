<template>
  <div class="comment-rating-system">
    <!-- 评分区域 -->
    <div class="rating-section">
      <h3 class="section-title">
        <i class="fas fa-star"></i>
        指南评分
      </h3>
      
      <!-- 评分显示 -->
      <div class="rating-display" v-if="ratingStats.count > 0">
        <div class="rating-summary">
          <div class="average-rating">
            <span class="rating-number">{{ ratingStats.average }}</span>
            <div class="stars-display">
              <i 
                v-for="star in 5" 
                :key="star"
                class="fas fa-star"
                :class="{ 'filled': star <= Math.round(ratingStats.average) }"
              ></i>
            </div>
            <span class="rating-count">({{ ratingStats.count }} 人评分)</span>
          </div>
        </div>
        
        <!-- 评分分布 -->
        <div class="rating-breakdown">
          <div 
            v-for="rating in [5, 4, 3, 2, 1]" 
            :key="rating"
            class="rating-bar-item"
          >
            <span class="rating-label">{{ rating }}星</span>
            <div class="rating-bar">
              <div 
                class="rating-fill"
                :style="{ width: getRatingPercentage(rating) + '%' }"
              ></div>
            </div>
            <span class="rating-count">{{ ratingStats.ratings[rating] || 0 }}</span>
          </div>
        </div>
      </div>
      
      <!-- 评分输入 -->
      <div class="rating-input">
        <p class="input-label">为这个指南评分：</p>
        <div class="star-input">
          <button
            v-for="star in 5"
            :key="star"
            type="button"
            class="star-button"
            :class="{ 'active': star <= userRating }"
            @click="selectRating(star)"
            :disabled="isSubmitting"
          >
            <i class="fas fa-star"></i>
          </button>
        </div>
        <button 
          v-if="userRating > 0"
          @click="submitRating"
          :disabled="isSubmitting"
          class="submit-rating-btn"
        >
          <i class="fas fa-check" v-if="!isSubmitting"></i>
          <i class="fas fa-spinner fa-spin" v-else></i>
          {{ isSubmitting ? '提交中...' : '提交评分' }}
        </button>
      </div>
    </div>

    <!-- 评论区域 -->
    <div class="comments-section">
      <h3 class="section-title">
        <i class="fas fa-comments"></i>
        用户评论 ({{ comments.length }})
      </h3>
      
      <!-- 评论表单 -->
      <div class="comment-form">
        <div class="form-row">
          <input
            v-model="commentForm.name"
            type="text"
            placeholder="您的姓名 *"
            class="form-input"
            :disabled="isSubmitting"
            required
          />
          <input
            v-model="commentForm.email"
            type="email"
            placeholder="邮箱地址（可选）"
            class="form-input"
            :disabled="isSubmitting"
          />
        </div>
        <div class="form-row">
          <textarea
            v-model="commentForm.text"
            placeholder="分享您的使用体验... *"
            class="form-textarea"
            :disabled="isSubmitting"
            rows="4"
            required
          ></textarea>
        </div>
        <div class="form-row">
          <div class="comment-rating">
            <span>同时评分：</span>
            <div class="star-input small">
              <button
                v-for="star in 5"
                :key="star"
                type="button"
                class="star-button"
                :class="{ 'active': star <= commentForm.rating }"
                @click="commentForm.rating = star"
                :disabled="isSubmitting"
              >
                <i class="fas fa-star"></i>
              </button>
            </div>
          </div>
          <button 
            @click="submitComment"
            :disabled="isSubmitting || !commentForm.name.trim() || !commentForm.text.trim()"
            class="submit-comment-btn"
          >
            <i class="fas fa-paper-plane" v-if="!isSubmitting"></i>
            <i class="fas fa-spinner fa-spin" v-else></i>
            {{ isSubmitting ? '提交中...' : '发表评论' }}
          </button>
        </div>
      </div>
      
      <!-- 评论列表 -->
      <div class="comments-list" v-if="comments.length > 0">
        <div 
          v-for="comment in comments" 
          :key="comment.id"
          class="comment-item"
        >
          <div class="comment-header">
            <div class="comment-user">
              <i class="fas fa-user"></i>
              <span class="user-name">{{ comment.name }}</span>
              <span v-if="comment.rating" class="comment-rating-display">
                <i 
                  v-for="star in 5"
                  :key="star"
                  class="fas fa-star"
                  :class="{ 'filled': star <= comment.rating }"
                ></i>
              </span>
            </div>
            <span class="comment-time">{{ formatTime(comment.timestamp) }}</span>
          </div>
          <div class="comment-content">{{ comment.text }}</div>
        </div>
      </div>
      
      <!-- 空状态 -->
      <div v-else class="empty-comments">
        <i class="fas fa-comment-slash"></i>
        <p>还没有评论，来发表第一个评论吧！</p>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/api.js';

export default {
  name: 'CommentRatingSystem',
  props: {
    guideId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      ratingStats: {
        count: 0,
        average: 0,
        ratings: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }
      },
      comments: [],
      userRating: 0,
      isSubmitting: false,
      commentForm: {
        name: '',
        email: '',
        text: '',
        rating: 0
      }
    };
  },
  async mounted() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      try {
        // 并行加载评分和评论数据
        const [ratingData, commentData] = await Promise.all([
          apiService.getRatings(this.guideId),
          apiService.getComments(this.guideId)
        ]);
        
        this.ratingStats = ratingData;
        this.comments = commentData;
      } catch (error) {
        console.error('加载数据失败:', error);
        this.$emit('error', '加载评分和评论数据失败');
      }
    },
    
    selectRating(rating) {
      this.userRating = rating;
    },
    
    async submitRating() {
      if (this.userRating === 0) return;
      
      this.isSubmitting = true;
      try {
        await apiService.submitRating(this.guideId, this.userRating);
        this.userRating = 0;
        await this.loadData();
        this.$emit('success', '评分提交成功！');
      } catch (error) {
        console.error('提交评分失败:', error);
        this.$emit('error', '评分提交失败，请重试');
      } finally {
        this.isSubmitting = false;
      }
    },
    
    async submitComment() {
      if (!this.commentForm.name.trim() || !this.commentForm.text.trim()) {
        this.$emit('error', '请填写姓名和评论内容');
        return;
      }
      
      this.isSubmitting = true;
      try {
        await apiService.submitComment(this.guideId, {
          name: this.commentForm.name.trim(),
          email: this.commentForm.email.trim() || null,
          text: this.commentForm.text.trim(),
          rating: this.commentForm.rating || null
        });
        
        // 清空表单
        this.commentForm = {
          name: '',
          email: '',
          text: '',
          rating: 0
        };
        
        await this.loadData();
        this.$emit('success', '评论发表成功！');
      } catch (error) {
        console.error('提交评论失败:', error);
        this.$emit('error', '评论发表失败，请重试');
      } finally {
        this.isSubmitting = false;
      }
    },
    
    getRatingPercentage(rating) {
      if (this.ratingStats.count === 0) return 0;
      return Math.round((this.ratingStats.ratings[rating] / this.ratingStats.count) * 100);
    },
    
    formatTime(timestamp) {
      try {
        return new Date(timestamp).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      } catch (e) {
        return timestamp
      }
    }
  }
};
</script>

<style scoped>
.comment-rating-system {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-size: 1.25rem;
  font-weight: 600;
}

.section-title i {
  color: #3498db;
}

/* 评分区域 */
.rating-section {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
}

.rating-display {
  margin-bottom: 1rem;
}

.rating-summary {
  margin-bottom: 1rem;
}

.average-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.rating-number {
  font-size: 2rem;
  font-weight: bold;
  color: #f39c12;
}

.stars-display {
  display: flex;
  gap: 0.25rem;
}

.stars-display .fas {
  color: #ddd;
  font-size: 1.2rem;
}

.stars-display .fas.filled {
  color: #f39c12;
}

.rating-count {
  color: #666;
  font-size: 0.9rem;
}

.rating-breakdown {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.rating-bar-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
}

.rating-label {
  width: 3rem;
  color: #666;
}

.rating-bar {
  flex: 1;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.rating-fill {
  height: 100%;
  background: #f39c12;
  transition: width 0.3s ease;
}

/* 评分输入 */
.rating-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-label {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.star-input {
  display: flex;
  gap: 0.25rem;
}

.star-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  font-size: 1.5rem;
  color: #ddd;
  transition: color 0.2s ease;
}

.star-button:hover:not(:disabled) {
  color: #f39c12;
}

.star-button.active {
  color: #f39c12;
}

.star-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.submit-rating-btn {
  align-self: flex-start;
  background: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s ease;
}

.submit-rating-btn:hover:not(:disabled) {
  background: #2980b9;
}

.submit-rating-btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* 评论区域 */
.comments-section {
  margin-top: 2rem;
}

.comment-form {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-row:last-child {
  margin-bottom: 0;
}

.form-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #3498db;
}

.form-textarea {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;
}

.form-textarea:focus {
  outline: none;
  border-color: #3498db;
}

.comment-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;
}

.comment-rating .star-input.small .star-button {
  font-size: 1rem;
}

.submit-comment-btn {
  background: #27ae60;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s ease;
}

.submit-comment-btn:hover:not(:disabled) {
  background: #229954;
}

.submit-comment-btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* 评论列表 */
.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.comment-item {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 3px solid #3498db;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.comment-user {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.comment-user i {
  color: #3498db;
}

.user-name {
  font-weight: 600;
  color: #2c3e50;
}

.comment-rating-display {
  display: flex;
  gap: 0.1rem;
}

.comment-rating-display .fas {
  color: #ddd;
  font-size: 0.8rem;
}

.comment-rating-display .fas.filled {
  color: #f39c12;
}

.comment-time {
  color: #666;
  font-size: 0.8rem;
}

.comment-content {
  color: #444;
  line-height: 1.5;
}

/* 空状态 */
.empty-comments {
  text-align: center;
  padding: 2rem;
  color: #666;
}

.empty-comments i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #bdc3c7;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .comment-rating-system {
    padding: 1rem;
  }
  
  .form-row {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .comment-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .average-rating {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>

