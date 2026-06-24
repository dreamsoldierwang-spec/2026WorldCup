#!/bin/bash
# ============================================================
# 2026世界杯网站自动化更新脚本
# 功能：拉取最新代码 → 更新数据 → 构建 → 部署到 GitHub Pages
# ============================================================

set -e

# 项目路径
PROJECT_DIR="/Users/dreamsoldier/WorkSpace_TraeWork/v2026-6-23_WorldCup"
LOG_FILE="/Users/dreamsoldier/WorkSpace_TraeWork/v2026-6-23_WorldCup/update.log"

# 日志函数
log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "========== 开始自动化更新 =========="

# 1. 进入项目目录
cd "$PROJECT_DIR"

# 2. 拉取最新代码
log "拉取最新代码..."
git pull origin main || {
  log "拉取代码失败，跳过（可能是本地有未提交的更改）"
}

# 3. 安装依赖（如果需要）
log "检查依赖..."
npm install --silent 2>&1 | tail -1

# 4. 构建项目
log "构建项目..."
npm run build 2>&1 | tail -3

# 5. 部署到 gh-pages
log "部署到 GitHub Pages..."
npx gh-pages -d dist 2>&1 | tail -1

log "========== 更新完成 =========="
log ""
