/**
 * Type Soul Codes 快速项目设置
 */

import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcrypt';
import { writeFileSync, existsSync } from 'fs';

async function quickSetup() {
  try {
    console.log('🚀 Type Soul Codes 快速项目设置...');
    
    // 检查环境变量
    if (!process.env.DATABASE_URL) {
      console.log('❌ 未找到 DATABASE_URL 环境变量');
      console.log('📝 请按以下步骤操作:');
      console.log('1. 复制 env.example 为 .env');
      console.log('2. 修改 .env 中的 DATABASE_URL');
      console.log('3. 重新运行 npm run setup');
      return;
    }
    
    const PROJECT_PREFIX = 'type_soul_codes';
    const PROJECT_NAME = 'Type Soul Codes 评分评论系统';
    const PROJECT_DESCRIPTION = 'Type Soul Codes 指南评分评论管理系统';
    
    console.log(`📊 项目前缀: ${PROJECT_PREFIX}`);
    console.log(`🌐 项目名称: ${PROJECT_NAME}`);
    
    // 检查数据库连接
    console.log('\n1️⃣ 测试数据库连接...');
    const sql = neon(process.env.DATABASE_URL);
    
    try {
      await sql`SELECT NOW() as current_time`;
      console.log('✅ 数据库连接成功');
    } catch (error) {
      console.error('❌ 数据库连接失败:', error.message);
      return;
    }
    
    // 初始化数据库
    console.log('\n2️⃣ 初始化数据库...');
    
    // 创建项目注册表
    await sql`
      CREATE TABLE IF NOT EXISTS game_projects (
        id SERIAL PRIMARY KEY,
        project_id VARCHAR(50) NOT NULL UNIQUE,
        project_name VARCHAR(100) NOT NULL,
        project_type VARCHAR(50) DEFAULT 'guide_review',
        feedback_table_name VARCHAR(100) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_active BOOLEAN DEFAULT TRUE
      )
    `;
    
    // 创建管理员表
    await sql`
      CREATE TABLE IF NOT EXISTS game_admins_users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(20) DEFAULT 'admin',
        project_id VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP,
        last_login_at TIMESTAMP
      )
    `;
    
    // 注册项目
    await sql`
      INSERT INTO game_projects (project_id, project_name, project_type, feedback_table_name, description)
      VALUES (
        ${PROJECT_PREFIX}, 
        ${PROJECT_NAME}, 
        'guide_review', 
        ${PROJECT_PREFIX + '_feedback'},
        ${PROJECT_DESCRIPTION}
      )
      ON CONFLICT (project_id) DO UPDATE SET
        project_name = EXCLUDED.project_name,
        description = EXCLUDED.description,
        updated_at = CURRENT_TIMESTAMP,
        is_active = true
    `;
    
    // 创建反馈表
    const feedbackTableName = `${PROJECT_PREFIX}_feedback`;
    await sql(`
      CREATE TABLE IF NOT EXISTS ${feedbackTableName} (
        id SERIAL PRIMARY KEY,
        project_id VARCHAR(50) NOT NULL DEFAULT '${PROJECT_PREFIX}',
        guide_address_bar VARCHAR(100) NOT NULL,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100),
        text TEXT,
        rating INTEGER CHECK (rating >= 1 AND rating <= 5),
        added_by_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // 创建索引
    await sql(`
      CREATE INDEX IF NOT EXISTS idx_${PROJECT_PREFIX}_feedback_guide 
      ON ${feedbackTableName} (guide_address_bar)
    `);
    
    await sql(`
      CREATE INDEX IF NOT EXISTS idx_${PROJECT_PREFIX}_feedback_rating 
      ON ${feedbackTableName} (rating)
    `);
    
    await sql(`
      CREATE INDEX IF NOT EXISTS idx_${PROJECT_PREFIX}_feedback_created 
      ON ${feedbackTableName} (created_at)
    `);
    
    console.log('✅ 数据库初始化完成');
    
    // 创建管理员
    console.log('\n3️⃣ 创建管理员...');
    const existingAdmin = await sql`
      SELECT id FROM game_admins_users 
      WHERE username = 'admin' AND project_id = ${PROJECT_PREFIX}
    `;
    
    if (existingAdmin.length === 0) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      
      await sql`
        INSERT INTO game_admins_users (username, password, role, project_id)
        VALUES ('admin', ${hashedPassword}, 'admin', ${PROJECT_PREFIX})
      `;
      
      console.log('✅ 管理员创建完成');
      console.log(`   用户名: admin`);
      console.log(`   密码: admin123`);
    } else {
      console.log('✅ 管理员已存在');
    }
    
    // 完成提示
    console.log('\n🎉 快速设置完成！');
    console.log('='.repeat(50));
    console.log(`🆔 项目: ${PROJECT_NAME}`);
    console.log(`🔧 前缀: ${PROJECT_PREFIX}`);
    console.log(`📊 反馈表: ${feedbackTableName}`);
    
    console.log('\n📝 下一步:');
    console.log('1. 启动API服务器: npm run dev');
    console.log('2. 测试API连接: http://localhost:3001/health');
    console.log('3. 在前端集成评分评论功能');
    
    console.log('\n🔑 管理员登录:');
    console.log('   用户名: admin');
    console.log(`   密码: admin123`);
    
  } catch (error) {
    console.error('❌ 快速设置失败:', error);
  }
}

quickSetup();

