/**
 * Type Soul Codes 数据库初始化脚本
 */

import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcrypt';
import { CONFIG } from '../config.js';

async function initDatabase() {
  try {
    console.log('🚀 开始初始化 Type Soul Codes 数据库...');
    
    // 检查环境变量
    if (!process.env.DATABASE_URL) {
      console.error('❌ 未找到 DATABASE_URL 环境变量');
      console.log('请在 .env 文件中设置 DATABASE_URL');
      return;
    }
    
    console.log(`📊 项目前缀: ${CONFIG.PROJECT_PREFIX}`);
    console.log(`🌐 项目名称: ${CONFIG.PROJECT_NAME}`);
    
    // 连接数据库
    const sql = neon(process.env.DATABASE_URL);
    
    try {
      await sql`SELECT NOW() as current_time`;
      console.log('✅ 数据库连接成功');
    } catch (error) {
      console.error('❌ 数据库连接失败:', error.message);
      return;
    }
    
    // 1. 创建项目注册表
    console.log('\n1️⃣ 创建项目注册表...');
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
    
    // 2. 创建管理员表
    console.log('\n2️⃣ 创建管理员表...');
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
    
    // 3. 注册项目
    console.log('\n3️⃣ 注册项目...');
    await sql`
      INSERT INTO game_projects (project_id, project_name, project_type, feedback_table_name, description)
      VALUES (
        ${CONFIG.PROJECT_PREFIX}, 
        ${CONFIG.PROJECT_NAME}, 
        'guide_review', 
        ${CONFIG.PROJECT_PREFIX + '_feedback'},
        ${CONFIG.PROJECT_DESCRIPTION}
      )
      ON CONFLICT (project_id) DO UPDATE SET
        project_name = EXCLUDED.project_name,
        description = EXCLUDED.description,
        updated_at = CURRENT_TIMESTAMP,
        is_active = true
    `;
    
    // 4. 创建反馈表
    console.log('\n4️⃣ 创建反馈表...');
    const feedbackTableName = `${CONFIG.PROJECT_PREFIX}_feedback`;
    await sql(`
      CREATE TABLE IF NOT EXISTS ${feedbackTableName} (
        id SERIAL PRIMARY KEY,
        project_id VARCHAR(50) NOT NULL DEFAULT '${CONFIG.PROJECT_PREFIX}',
        guide_address_bar VARCHAR(100) NOT NULL,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100),
        text TEXT,
        rating INTEGER CHECK (rating >= 1 AND rating <= 5),
        added_by_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // 5. 创建索引
    console.log('\n5️⃣ 创建索引...');
    await sql(`
      CREATE INDEX IF NOT EXISTS idx_${CONFIG.PROJECT_PREFIX}_feedback_guide 
      ON ${feedbackTableName} (guide_address_bar)
    `);
    
    await sql(`
      CREATE INDEX IF NOT EXISTS idx_${CONFIG.PROJECT_PREFIX}_feedback_rating 
      ON ${feedbackTableName} (rating)
    `);
    
    await sql(`
      CREATE INDEX IF NOT EXISTS idx_${CONFIG.PROJECT_PREFIX}_feedback_created 
      ON ${feedbackTableName} (created_at)
    `);
    
    // 6. 创建默认管理员
    console.log('\n6️⃣ 创建默认管理员...');
    const existingAdmin = await sql`
      SELECT id FROM game_admins_users 
      WHERE username = 'admin' AND project_id = ${CONFIG.PROJECT_PREFIX}
    `;
    
    if (existingAdmin.length === 0) {
      const hashedPassword = await bcrypt.hash(CONFIG.DEFAULT_ADMIN_PASSWORD, 10);
      
      await sql`
        INSERT INTO game_admins_users (username, password, role, project_id)
        VALUES ('admin', ${hashedPassword}, 'admin', ${CONFIG.PROJECT_PREFIX})
      `;
      
      console.log('✅ 默认管理员创建成功');
      console.log(`   用户名: admin`);
      console.log(`   密码: ${CONFIG.DEFAULT_ADMIN_PASSWORD}`);
    } else {
      console.log('✅ 默认管理员已存在');
    }
    
    console.log('\n🎉 数据库初始化完成！');
    console.log('='.repeat(50));
    console.log(`🆔 项目: ${CONFIG.PROJECT_NAME}`);
    console.log(`🔧 前缀: ${CONFIG.PROJECT_PREFIX}`);
    console.log(`📊 反馈表: ${feedbackTableName}`);
    
    console.log('\n📝 下一步:');
    console.log('1. 启动API服务器: npm run dev');
    console.log('2. 测试API连接');
    console.log('3. 在前端集成评分评论功能');
    
    console.log('\n🔑 管理员登录:');
    console.log('   用户名: admin');
    console.log(`   密码: ${CONFIG.DEFAULT_ADMIN_PASSWORD}`);
    
  } catch (error) {
    console.error('❌ 数据库初始化失败:', error);
  }
}

initDatabase();

