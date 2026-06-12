# ⚽ 2026 FIFA World Cup Fan Site

2026年美加墨世界杯球迷信息网站 — 48支球队、104场比赛、完整赛程、球星介绍、历史纪录、球迷留言板。

**在线预览：** `http://localhost:4173`（启动服务器后）

---

## 🚀 功能

| 模块 | 说明 |
|------|------|
| 🏠 **首页** | 赛事概览、倒计时、十大看点 |
| 📋 **分组情况** | 12个小组(A-L)、积分榜、小组赛程 |
| ⚽ **参赛球队** | 48队完整信息：国旗、教练、球星、近3届战绩 |
| 📅 **赛程安排** | 日历视图+列表视图、阶段/日期筛选、104场比赛 |
| ⭐ **球星介绍** | 25+顶级球星：梅西、C罗、姆巴佩、哈兰德等 |
| 🏆 **历史纪录** | 射手王、助攻王、夺冠次数、趣味纪录 |
| 🏟️ **主办城市** | 16座球场、3个国家、容量/场次统计 |
| 💬 **球迷专区** | 留言板(无登录)、表情选择、球队支持排行 |

## 🛠 技术栈

- **前端**：React 19 + TypeScript + Vite
- **样式**：Tailwind CSS 3 + 暗色模式
- **路由**：React Router v7 (Hash)
- **后端**：Express.js（静态服务 + 留言API）
- **存储**：JSON 文件持久化（原子写入 + 写锁保护）

## 📦 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 构建前端
npm run build

# 3. 启动服务器（端口 4173）
npm run serve
```

浏览器打开 `http://localhost:4173`

## 📊 数据更新

比赛结果更新方式：

1. 编辑 `src/data/schedule.ts` — 修改比赛状态和比分
2. 编辑 `src/data/standings.ts` — 更新小组积分榜
3. 编辑 `src/data/matchResults.ts` — 记录完赛比分
4. 重新构建：`npm run build`
5. 重启服务器：`npm run serve`

## 📁 项目结构

```
worldcup-website/
├── server.cjs              # Express 服务器
├── src/
│   ├── data/               # 数据层（8个TS文件）
│   │   ├── teams.ts        # 48支球队
│   │   ├── groups.ts       # 12个分组
│   │   ├── schedule.ts     # 104场比赛
│   │   ├── stars.ts        # 25+球星
│   │   ├── records.ts      # 历史纪录
│   │   ├── stadiums.ts     # 16座球场
│   │   ├── standings.ts    # 积分榜
│   │   └── matchResults.ts # 比赛结果
│   ├── pages/              # 页面组件（10个）
│   ├── components/         # 通用组件
│   ├── hooks/              # 自定义Hook
│   └── types/              # TypeScript类型定义
├── data/                   # 运行时数据（留言存储）
│   └── messages.json
└── dist/                   # 构建产物
```

## ⚠️ 注意

- Token、密码等敏感信息**绝不**上传到仓库
- 构建产物 `dist/` 和留言数据 `data/messages.json` 已加入 `.gitignore`
- 留言板数据存储在服务器端 `data/messages.json`，使用了原子写入防止并发冲突
