# GitHub 上传指南

## 🚨 重要提醒

在上传到 GitHub 之前，请确保以下敏感文件**不会**被上传：

### 后端 API 项目 (type-soul-codes-api)

#### ❌ 不要上传的文件：
- `.env` - 包含数据库连接字符串和JWT密钥
- `config.js` - 包含项目配置和敏感信息
- `node_modules/` - 依赖包（已通过.gitignore忽略）
- `.env.local` - 本地环境变量
- 任何包含数据库凭据的文件

#### ✅ 可以上传的文件：
- `env.example` - 环境变量模板
- `package.json` - 项目依赖配置
- `api/` - API源代码
- `scripts/` - 数据库初始化脚本
- `README.md` - 项目说明文档

### 前端项目 (type-soul-codes)

#### ❌ 不要上传的文件：
- `.env` - 包含API URL等配置
- `.env.local` - 本地环境变量
- `node_modules/` - 依赖包（已通过.gitignore忽略）
- `dist/` - 构建输出文件（已通过.gitignore忽略）

#### ✅ 可以上传的文件：
- `env.example` - 环境变量模板
- `src/` - 源代码
- `public/` - 静态资源
- `package.json` - 项目依赖配置
- `vite.config.js` - 构建配置
- `vercel.json` - 部署配置

## 📝 上传前的检查清单

### 1. 检查敏感信息
```bash
# 检查是否包含敏感信息
grep -r "postgresql://" . --exclude-dir=node_modules
grep -r "JWT_SECRET" . --exclude-dir=node_modules
grep -r "DATABASE_URL" . --exclude-dir=node_modules
```

### 2. 确认 .gitignore 生效
```bash
# 检查被忽略的文件
git status --ignored
```

### 3. 检查要上传的文件
```bash
# 查看将要上传的文件
git add .
git status
```

## 🔧 环境变量设置

### 后端 (.env)
```env
DATABASE_URL=postgresql://username:password@host:port/database
JWT_SECRET=your-secret-key
PROJECT_PREFIX=type_soul_codes
PROJECT_NAME=Type Soul Codes 评分评论系统
LOCAL_API_PORT=3001
```

### 前端 (.env.local)
```env
VITE_API_BASE_URL=http://localhost:3001
VITE_SITE_NAME=Type Soul Codes
VITE_SITE_DESCRIPTION=Type Soul游戏代码和指南
VITE_LOCAL_API_URL=http://localhost:3001
```

## 🚀 部署到 GitHub

1. 初始化 Git 仓库
2. 添加远程仓库
3. 提交代码
4. 推送到 GitHub

```bash
# 在项目根目录
git init
git add .
git commit -m "Initial commit: Type Soul Codes with rating system"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

## 📋 项目结构

```
type-soul-codes/
├── type-soul-codes/          # 前端项目
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .gitignore
└── type-soul-codes-api/      # 后端API项目
    ├── api/
    ├── scripts/
    ├── package.json
    └── .gitignore
```

## ⚠️ 安全提醒

- 永远不要提交包含真实数据库凭据的文件
- 使用 `env.example` 作为环境变量模板
- 在生产环境中使用环境变量而不是硬编码配置
- 定期检查 `.gitignore` 文件确保敏感信息被正确忽略
