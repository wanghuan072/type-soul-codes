/**
 * 消息提示工具函数
 */

/**
 * 显示消息提示
 * @param {string} message - 消息内容
 * @param {string} type - 消息类型: 'success', 'error', 'warning', 'info'
 */
export function showMessage(message, type = 'info') {
  // 创建消息元素
  const messageEl = document.createElement('div');
  messageEl.className = `message-toast message-${type}`;
  messageEl.textContent = message;
  
  // 添加样式
  messageEl.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    padding: 12px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    font-size: 14px;
    max-width: 400px;
    word-wrap: break-word;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  `;
  
  // 设置不同类型的消息样式
  switch (type) {
    case 'success':
      messageEl.style.backgroundColor = '#27ae60';
      break;
    case 'error':
      messageEl.style.backgroundColor = '#e74c3c';
      break;
    case 'warning':
      messageEl.style.backgroundColor = '#f39c12';
      break;
    case 'info':
    default:
      messageEl.style.backgroundColor = '#3498db';
      break;
  }
  
  // 添加到页面
  document.body.appendChild(messageEl);
  
  // 触发动画
  setTimeout(() => {
    messageEl.style.transform = 'translateX(0)';
  }, 100);
  
  // 自动移除
  setTimeout(() => {
    messageEl.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (messageEl.parentNode) {
        messageEl.parentNode.removeChild(messageEl);
      }
    }, 300);
  }, 3000);
}

/**
 * 显示成功消息
 */
export function showSuccess(message) {
  showMessage(message, 'success');
}

/**
 * 显示错误消息
 */
export function showError(message) {
  showMessage(message, 'error');
}

/**
 * 显示警告消息
 */
export function showWarning(message) {
  showMessage(message, 'warning');
}

/**
 * 显示信息消息
 */
export function showInfo(message) {
  showMessage(message, 'info');
}