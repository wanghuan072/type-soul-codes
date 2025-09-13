<template>
  <div class="comment-rating-system">
    <!-- 评分显示区域 -->
    <div class="rating-section" v-if="ratingStats.count > 0">
      <h3 class="section-title">
        <span class="star-icon">★</span>
        Guide Rating
      </h3>
      
      <!-- 评分显示 -->
      <div class="rating-display">
        <div class="rating-summary">
          <div class="average-rating">
            <span class="rating-number">{{ ratingStats.average }}</span>
            <div class="stars-display">
              <span 
                v-for="star in 5" 
                :key="star"
                class="star-symbol"
                :class="{ 'filled': star <= Math.round(ratingStats.average) }"
              >★</span>
            </div>
            <span class="rating-count">({{ ratingStats.count }} ratings)</span>
          </div>
        </div>
        
        <!-- 评分分布 -->
        <div class="rating-breakdown">
          <div 
            v-for="rating in [5, 4, 3, 2, 1]" 
            :key="rating"
            class="rating-bar-item"
          >
            <span class="rating-label">{{ rating }}★</span>
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
    </div>

    <!-- 评论区域 -->
    <div class="comments-section">
      <h3 class="section-title">
        <span class="comment-icon">💬</span>
        User Comments ({{ comments.length }})
      </h3>
      
      <!-- 评论表单 -->
      <div class="comment-form">
        <div class="form-row">
          <input
            v-model="commentForm.name"
            type="text"
            placeholder="Your Name *"
            class="form-input"
            :disabled="isSubmitting"
            required
          />
          <input
            v-model="commentForm.email"
            type="email"
            placeholder="Email (Optional)"
            class="form-input"
            :disabled="isSubmitting"
          />
        </div>
        <div class="form-row">
          <textarea
            v-model="commentForm.text"
            placeholder="Share your experience... *"
            class="form-textarea"
            :disabled="isSubmitting"
            rows="4"
            required
          ></textarea>
        </div>
        <div class="form-row">
          <div class="comment-rating">
            <span>Rate this guide:</span>
            <div class="star-input" @mouseleave="clearHoverRating">
              <button
                v-for="star in 5"
                :key="star"
                type="button"
                class="star-button"
                :class="{ 
                  'active': star <= commentForm.rating,
                  'hover': star <= hoverRating 
                }"
                @click="commentForm.rating = star"
                @mouseenter="setHoverRating(star)"
                :disabled="isSubmitting"
              >
                <span class="star-symbol">★</span>
              </button>
            </div>
          </div>
        </div>
        <div class="form-row">
          <button 
            @click="submitComment"
            :disabled="isSubmitting || !commentForm.name.trim() || !commentForm.text.trim()"
            class="submit-comment-btn"
          >
            <span v-if="!isSubmitting">📤</span>
            <span v-else class="spinner">⟳</span>
            {{ isSubmitting ? 'Submitting...' : 'Post Comment' }}
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
              <span class="user-icon">👤</span>
              <span class="user-name">{{ comment.name }}</span>
              <span v-if="comment.rating" class="comment-rating-display">
                <span 
                  v-for="star in 5"
                  :key="star"
                  class="star-symbol"
                  :class="{ 'filled': star <= comment.rating }"
                >★</span>
              </span>
            </div>
            <span class="comment-time">{{ formatTime(comment.timestamp) }}</span>
          </div>
          <div class="comment-content">{{ comment.text }}</div>
        </div>
      </div>
      
      <!-- 空状态 -->
      <div v-else class="empty-comments">
        <span class="empty-icon">💭</span>
        <p>No comments yet, be the first to comment!</p>
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
      hoverRating: 0,
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
        this.$emit('error', 'Failed to load rating and comment data');
      }
    },
    
    setHoverRating(rating) {
      this.hoverRating = rating;
    },
    
    clearHoverRating() {
      this.hoverRating = 0;
    },
    
    async submitComment() {
      if (!this.commentForm.name.trim() || !this.commentForm.text.trim()) {
        this.$emit('error', 'Please fill in name and comment content');
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
        this.$emit('success', 'Comment posted successfully!');
      } catch (error) {
        console.error('提交评论失败:', error);
        this.$emit('error', 'Failed to post comment, please try again');
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
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 1px solid #9b59b6;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

.comment-rating-system::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(155, 89, 182, 0.05) 50%, transparent 70%);
  pointer-events: none;
  z-index: 1;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(45deg, #9b59b6, #ff6b9d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 2;
}

.star-icon, .comment-icon {
  color: #9b59b6;
  font-size: 20px;
  margin-right: 8px;
}

/* 评分区域 */
.rating-section {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(155, 89, 182, 0.3);
  position: relative;
  z-index: 2;
  line-height: 1.5;
}

.average-rating {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.rating-number {
  font-size: 26px;
  font-weight: bold;
  color: #ff6b9d;
  text-shadow: 0 0 10px rgba(255, 107, 157, 0.3);
}

.stars-display {
  display: flex;
  gap: 5px;
}

.star-symbol {
  color: #999;
  font-size: 16px;
  transition: color 0.3s ease;
  display: inline-block;
}

.star-symbol.filled {
  color: #ffd700;
  text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
}

.rating-count {
  color: #b0b0b0;
  font-size: 14px;
}

.rating-breakdown {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.rating-bar-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
}

.rating-label {
  width: 50px;
  color: #b0b0b0;
  font-weight: 500;
}

.rating-bar {
  flex: 1;
  height: 12px;
  background: #333;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #444;
}

.rating-fill {
  height: 100%;
  background: linear-gradient(45deg, #9b59b6, #ff6b9d);
  transition: width 0.3s ease;
  border-radius: 5px;
}

/* 星星输入样式 */
.star-input {
  display: flex;
  gap: 5px;
}

.star-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  color: #ccc;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.star-button:hover:not(:disabled) {
  transform: scale(1.1);
}

.star-button:hover:not(:disabled) .star-symbol {
  color: #ffd700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.star-button.active .star-symbol {
  color: #ffd700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.star-button.hover .star-symbol {
  color: #ffd700;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.star-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* 评论区域 */
.comments-section {
  position: relative;
  z-index: 2;
}

.comment-form {
  margin-bottom: 20px;
  padding: 20px;
  background: rgba(42, 42, 42, 0.8);
  border-radius: 15px;
  border: 1px solid rgba(155, 89, 182, 0.3);
  backdrop-filter: blur(10px);
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 10px;
  font-size: 14px;
  background: #2a2a2a;
  color: #ffffff;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.form-input:focus {
  outline: none;
  border-color: #9b59b6;
  box-shadow: 0 0 10px rgba(155, 89, 182, 0.3);
}

.form-input::placeholder {
  color: #888;
}

.form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 10px;
  font-size: 14px;
  resize: vertical;
  font-family: inherit;
  background: #2a2a2a;
  color: #ffffff;
  transition: all 0.3s ease;
}

.form-textarea:focus {
  outline: none;
  border-color: #9b59b6;
  box-shadow: 0 0 10px rgba(155, 89, 182, 0.3);
}

.form-textarea::placeholder {
  color: #888;
}

.comment-rating {
  color: #b0b0b0;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
}

.comment-rating .star-input.small .star-button {
  font-size: 18px;
  padding: 4px;
}

.comment-rating .star-input.small .star-symbol {
  font-size: 16px;
}

.user-icon {
  color: #9b59b6;
  font-size: 16px;
}

.spinner {
  animation: spin 1s linear infinite;
  display: inline-block;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 15px;
  color: #9b59b6;
  opacity: 0.7;
  display: block;
}

.submit-comment-btn {
  background: linear-gradient(45deg, #4ecdc4, #44a08d);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
  width: 100%;
  max-width: 200px;
  display: block;
}

.submit-comment-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(78, 205, 196, 0.4);
}

.submit-comment-btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  transform: none;
}

/* 评论列表 */
.comments-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.comment-item {
  padding: 10px;
  background: rgba(42, 42, 42, 0.8);
  border-radius: 15px;
  border-left: 4px solid #9b59b6;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.comment-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 10px;
}

.comment-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.comment-user i {
  color: #9b59b6;
  font-size: 16px;
}

.user-name {
  font-weight: 600;
  color: #ffffff;
  font-size: 16px;
}

.comment-rating-display {
  display: flex;
  gap: 2px;
}

.comment-rating-display .star-symbol {
  color: #999;
  font-size: 12px;
}

.comment-rating-display .star-symbol.filled {
  color: #ffd700;
  text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
}

.comment-time {
  color: #b0b0b0;
  font-size: 12px;
  font-weight: 500;
}

.comment-content {
  color: #e0e0e0;
  line-height: 1.6;
  font-size: 14px;
}

/* 空状态 */
.empty-comments {
  text-align: center;
  padding: 40px;
  color: #b0b0b0;
}

/* 空状态图标样式已在上面定义 */

.empty-comments p {
  font-size: 16px;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .comment-rating-system {
    padding: 10px;
  }
  
  .section-title {
    font-size: 18px;
  }
  
  .rating-number {
    font-size: 28px;
  }
  
  .stars-display .fas {
    font-size: 16px;
  }
  
  .star-button {
    font-size: 20px;
    padding: 6px;
  }
  
  .form-row {
    flex-direction: column;
    gap: 15px;
  }
  
  .comment-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .rating-number{
    font-size: 20px;
  }

  .rating-section{
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  
  .comment-form {
    padding: 10px;
  }
  
  .comment-item {
    padding: 10px;
  }
}
</style>

