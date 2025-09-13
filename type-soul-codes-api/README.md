# Type Soul Codes 评分评论API

这是为 Type Soul Codes 项目专门开发的评分评论管理系统，支持指南的评分和评论功能。

## 🚀 快速开始

### 1. 环境准备

确保您已经安装了 Node.js (版本 >= 18.0.0)。

### 2. 安装依赖

```bash
cd type-soul-codes-api
npm install
```

### 3. 配置环境变量

复制环境变量示例文件：
```bash
cp env.example .env
```

编辑 `.env` 文件，配置您的数据库连接：
```env
# 数据库连接
DATABASE_URL=postgresql://neondb_owner:npg_Av2kguKCGjI6@ep-dry-poetry-ad5zyp6m-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require

# JWT密钥
JWT_SECRET=type-soul-codes-jwt-secret-key-2024

# API配置
PROJECT_PREFIX=type_soul_codes
PORT=3001

# CORS配置
FRONTEND_URL=http://localhost:5173

# 本地开发
NODE_ENV=development
```

### 4. 初始化数据库

运行快速设置脚本：
```bash
npm run setup
```

这将自动：
- 创建数据库表结构
- 注册项目
- 创建默认管理员账户

### 5. 启动API服务器

```bash
npm run dev
```

API服务器将在 `http://localhost:3001` 启动。

## 📊 数据库结构

### 项目注册表 (game_projects)
- 存储项目基本信息
- 支持多项目数据隔离

### 管理员表 (game_admins_users)
- 存储管理员账户信息
- 支持项目级别的权限管理

### 反馈表 (type_soul_codes_feedback)
- 统一存储评论和评分数据
- 支持指南级别的反馈管理

## 🔗 API 端点

### 公开API

#### 健康检查
```
GET /health
```

#### 提交评论
```
POST /comments
Content-Type: application/json

{
  "guideId": "guide-slug",
  "name": "用户姓名",
  "email": "user@example.com", // 可选
  "text": "评论内容",
  "rating": 5 // 可选，1-5星评分
}
```

#### 获取评论
```
GET /comments?guideId=guide-slug
```

#### 提交评分
```
POST /ratings
Content-Type: application/json

{
  "guideId": "guide-slug",
  "rating": 5
}
```

#### 获取评分统计
```
GET /ratings?guideId=guide-slug
```

### 管理员API

#### 管理员登录
```
POST /admin/login
Content-Type: application/json

{
  "username": "admin",
  "password": "admin123"
}
```

#### 获取所有指南数据
```
GET /admin/feedback
Authorization: Bearer <token>
```

#### 删除反馈
```
DELETE /admin/feedback/:guideId/:feedbackId
Authorization: Bearer <token>
```

#### 手动添加反馈
```
POST /admin/feedback/manual
Authorization: Bearer <token>
Content-Type: application/json

{
  "guideId": "guide-slug",
  "name": "管理员",
  "text": "评论内容",
  "rating": 5,
  "timestamp": "2024-01-01T00:00:00.000Z" // 可选
}
```

#### 更新评分统计
```
PUT /admin/ratings/:guideId
Authorization: Bearer <token>
Content-Type: application/json

{
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 10
}
```

## 🔑 默认管理员账户

- **用户名**: admin
- **密码**: admin123

## 🎯 前端集成

前端项目已经集成了评分评论系统：

1. **API服务**: `src/services/api.js` - 提供与后端API通信的服务
2. **评分评论组件**: `src/components/CommentRatingSystem.vue` - 可复用的评分评论组件
3. **指南详情页**: `src/views/GuideDetailView.vue` - 已集成评分评论功能

### 前端环境配置

复制前端环境变量示例：
```bash
cd ../type-soul-codes
cp env.example .env.local
```

编辑 `.env.local` 文件：
```env
VITE_API_BASE_URL=http://localhost:3001
```

## 🔧 开发脚本

```bash
# 安装依赖
npm install

# 快速设置（初始化数据库）
npm run setup

# 启动开发服务器
npm run dev

# 初始化数据库（单独运行）
npm run init-db
```

## 📝 使用说明

### 1. 启动后端API
```bash
cd type-soul-codes-api
npm run dev
```

### 2. 启动前端项目
```bash
cd type-soul-codes
npm run dev
```

### 3. 访问应用
- 前端: http://localhost:5173
- API健康检查: http://localhost:3001/health
- 管理员登录: http://localhost:3001/admin/login

### 4. 测试功能
1. 访问任意指南详情页
2. 查看评分评论系统
3. 尝试提交评分和评论
4. 使用管理员账户登录管理后台

## 🛠️ 技术栈

- **后端**: Node.js, Express, Neon PostgreSQL
- **前端**: Vue 3, Vite, Vue Router
- **认证**: JWT
- **数据库**: PostgreSQL (Neon)
- **部署**: Vercel

## 📋 功能特性

- ✅ 指南评分系统（1-5星）
- ✅ 用户评论功能
- ✅ 评分统计和分布显示
- ✅ 管理员后台管理
- ✅ 数据隔离（项目前缀）
- ✅ JWT身份验证
- ✅ 响应式设计
- ✅ 实时数据更新

## 🔒 安全特性

- JWT token认证
- 密码bcrypt加密
- CORS跨域保护
- 速率限制
- SQL注入防护
- 输入验证

## 📞 支持

如果您在使用过程中遇到问题，请检查：

1. 数据库连接是否正常
2. 环境变量是否正确配置
3. 前端API地址是否指向正确的后端服务
4. 浏览器控制台是否有错误信息

## 🚀 部署

### Vercel部署

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 配置环境变量
4. 部署

### 环境变量配置

在Vercel中配置以下环境变量：
- `DATABASE_URL`
- `JWT_SECRET`
- `PROJECT_PREFIX`
- `FRONTEND_URL`

