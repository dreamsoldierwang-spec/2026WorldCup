import { useEffect, useState } from 'react';
import { teams } from '../data/teams';
import FlagImg from '../components/FlagImg';

// ===== 团队数据 =====
const france = teams.find(t => t.id === 'fra')!;
const england = teams.find(t => t.id === 'eng')!;

// ===== 核心球员对位 =====
const playerMatchups = [
  {
    france: { name: '姆巴佩', stats: '10球3助', emoji: '⚡' },
    england: { name: '凯恩', stats: '7球1助', emoji: '🎯' },
    label: '金靴之争',
    gradient: 'from-amber-900/25 to-blue-950/25',
    borderColor: 'border-amber-700/25',
  },
  {
    france: { name: '登贝莱', stats: '7球2助', emoji: '🔥' },
    england: { name: '贝林厄姆', stats: '5球3助', emoji: '💎' },
    label: '边路之王',
    gradient: 'from-blue-900/25 to-slate-900/25',
    borderColor: 'border-blue-700/25',
  },
  {
    france: { name: '奥利塞', stats: '2球11助', emoji: '🎨' },
    england: { name: '戈登', stats: '1球18助', emoji: '⚙️' },
    label: '隐形发动机',
    gradient: 'from-indigo-900/25 to-blue-950/25',
    borderColor: 'border-indigo-700/25',
  },
  {
    france: { name: '迈尼昂', stats: '仅失2球', emoji: '🧤' },
    england: { name: '皮克福德', stats: '7场首发', emoji: '🧱' },
    label: '门将对决',
    gradient: 'from-emerald-900/20 to-slate-900/25',
    borderColor: 'border-emerald-700/25',
  },
];

// ===== 法国特色标签 =====
const franceTags = ['德尚谢幕', '姆巴佩冲靴', '铁血防守', '大赛经验'];
const englandTags = ['图赫尔重塑', '三狮韧性', '青春风暴', '攻守转换'];

// ===== 关键看点 =====
const keyStorylines = [
  {
    icon: '🎤',
    title: '德尚14年谢幕演出',
    description: '2012年接手至今，率队夺得2018世界杯冠军、2022世界杯亚军。这场季军赛是他执教法国队的最后一战，一个时代的终结。',
  },
  {
    icon: '👟',
    title: '姆巴佩冲击金靴',
    description: '国家队生涯已攻入20球，本届赛事10球3助领跑射手榜。若再进球将巩固金靴地位，带伤作战更显英雄本色。',
  },
  {
    icon: '🦁',
    title: '英格兰创60年最佳排名机会',
    description: '1966年夺冠以来，英格兰从未在世界杯取得过前三名。此役若胜，将创造60年来的最佳战绩，为年轻一代正名。',
  },
  {
    icon: '🤔',
    title: '季军赛是否有意义？',
    description: '关于季军赛存废的争论从未停歇。有人认为是"失意者的安慰奖"，也有人视作"尊严的最后一战"。两位主帅的态度截然不同。',
  },
];

// ===== 主组件 =====
export default function ThirdPlacePage() {
  const [shimmerKey, setShimmerKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setShimmerKey(k => k + 1), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-[#0a0f2a] to-slate-950 text-white overflow-x-hidden">
      {/* ===== CSS 动画样式注入 ===== */}
      <style>{`
        @keyframes shimmer-copper {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-copper {
          0%, 100% { box-shadow: 0 0 20px rgba(217, 119, 6, 0.3), 0 0 40px rgba(217, 119, 6, 0.1); transform: scale(1); }
          50% { box-shadow: 0 0 35px rgba(217, 119, 6, 0.5), 0 0 70px rgba(217, 119, 6, 0.2); transform: scale(1.03); }
        }
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes glow-border {
          0%, 100% { border-color: rgba(217, 119, 6, 0.2); }
          50% { border-color: rgba(217, 119, 6, 0.6); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .shimmer-copper-text {
          background: linear-gradient(90deg, #d97706 0%, #fbbf24 25%, #d97706 50%, #f59e0b 75%, #d97706 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-copper 4s linear infinite;
        }
        .pulse-copper-badge {
          animation: pulse-copper 3s ease-in-out infinite;
        }
        .float-subtle {
          animation: float-subtle 4s ease-in-out infinite;
        }
        .glow-border {
          animation: glow-border 3s ease-in-out infinite;
        }
        .hero-overlay-third {
          background: linear-gradient(to bottom,
            rgba(10, 15, 42, 0.4) 0%,
            rgba(10, 15, 42, 0.65) 40%,
            rgba(10, 15, 42, 0.95) 100%);
        }
        .hero-transition {
          background: linear-gradient(to bottom, transparent 0%, rgba(10, 15, 42, 0.5) 50%, rgba(10, 15, 42, 1) 100%);
        }
        .team-card-france {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.2), rgba(10, 15, 42, 0.5));
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }
        .team-card-france:hover {
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.12);
        }
        .team-card-england {
          background: linear-gradient(135deg, rgba(148, 163, 184, 0.1), rgba(10, 15, 42, 0.5));
          border: 1px solid rgba(148, 163, 184, 0.2);
          transition: all 0.3s ease;
        }
        .team-card-england:hover {
          border-color: rgba(148, 163, 184, 0.5);
          box-shadow: 0 0 30px rgba(148, 163, 184, 0.12);
        }
        .player-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .player-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(217, 119, 6, 0.12);
        }
        .storyline-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .storyline-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(217, 119, 6, 0.1);
        }
      `}</style>

      {/* ====================================================================== */}
      {/* 1. HERO 区域                                                          */}
      {/* ====================================================================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 背景图 */}
        <div className="absolute inset-0">
          <img
            src="./third-hero-banner.jpg"
            alt="2026 World Cup Third Place Match"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay-third absolute inset-0" />
        </div>

        {/* 内容 */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* 顶部英文标题 */}
          <p className="text-sm sm:text-base tracking-[0.4em] text-amber-600/60 mb-4">
            THIRD PLACE MATCH &middot; 2026 FIFA WORLD CUP
          </p>

          {/* 铜牌 + 主标题 */}
          <div className="mb-3 float-subtle">
            <span className="text-5xl sm:text-7xl">🥉</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black shimmer-copper-text mb-4 leading-tight tracking-tight">
            荣誉之战
          </h1>

          {/* VS副标题 */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
            <div className="flex items-center gap-2">
              <FlagImg team={france} size="xl" />
              <span className="text-2xl sm:text-4xl font-bold text-blue-300">法国</span>
            </div>
            <span className="text-xl sm:text-2xl font-black text-amber-600/70">VS</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-4xl font-bold text-slate-300">英格兰</span>
              <FlagImg team={england} size="xl" />
            </div>
          </div>

          {/* 副标题 */}
          <p className="text-lg sm:text-xl text-slate-300/80 mb-2">
            法国 vs 英格兰 &middot; 季军争夺战
          </p>

          {/* 日期地点 */}
          <div className="flex items-center justify-center gap-3 text-base sm:text-lg text-amber-200/70 mb-2">
            <span>7月19日 05:00</span>
            <span className="text-amber-600/30">|</span>
            <span>迈阿密硬石体育场</span>
          </div>
        </div>

        {/* 底部渐变过渡 */}
        <div className="hero-transition absolute bottom-0 left-0 right-0 h-40" />
      </section>

      {/* ====================================================================== */}
      {/* 2. 赛事信息栏                                                          */}
      {/* ====================================================================== */}
      <section className="relative py-4 bg-[#080d24] border-y border-amber-700/15">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-amber-600">👤</span>
            <span>裁判：</span>
            <span className="text-slate-200">Fernando Rapallini（阿根廷）</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-amber-600">☀️</span>
            <span>天气：</span>
            <span className="text-slate-200">晴 32°C 湿度62%</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-amber-600">📺</span>
            <span>转播：</span>
            <span className="text-slate-200">CCTV5 / 咪咕视频</span>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 3. 双方概览（双栏对比）                                                */}
      {/* ====================================================================== */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-black shimmer-copper-text mb-4 tracking-tight">
            双方概览
          </h2>
          <p className="text-center text-amber-600/50 text-base sm:text-lg mb-14">
            两支失意之师，一场尊严之战
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* 法国 */}
            <div className="team-card-france rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <FlagImg team={france} size="xl" />
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-blue-300">法国</h3>
                  <p className="text-sm text-blue-400/50 tracking-wider">FRANCE</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mb-5 aspect-video">
                <img src="./third-france-team.jpg" alt="法国队" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-600/80 font-semibold">FIFA排名</span>
                  <span className="text-amber-200/90">第3位</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-600/80 font-semibold">全队身价</span>
                  <span className="text-amber-200/90">15.2亿€</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-600/80 font-semibold">本届战绩</span>
                  <span className="text-amber-200/90">6胜1负</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-600/80 font-semibold">进 / 失球</span>
                  <span className="text-amber-200/90">16 / 2</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {franceTags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-blue-900/40 border border-blue-700/30 text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 英格兰 */}
            <div className="team-card-england rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <FlagImg team={england} size="xl" />
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-slate-200">英格兰</h3>
                  <p className="text-sm text-slate-400/50 tracking-wider">ENGLAND</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mb-5 aspect-video">
                <img src="./third-england-team.jpg" alt="英格兰队" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-600/80 font-semibold">FIFA排名</span>
                  <span className="text-amber-200/90">第4位</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-600/80 font-semibold">全队身价</span>
                  <span className="text-amber-200/90">13.6亿€</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-600/80 font-semibold">本届战绩</span>
                  <span className="text-amber-200/90">5胜1负</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-amber-600/80 font-semibold">进 / 失球</span>
                  <span className="text-amber-200/90">17 / 7</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {englandTags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-slate-800/50 border border-slate-600/30 text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 4. 核心球员对比                                                        */}
      {/* ====================================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#070c22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-black shimmer-copper-text mb-4 tracking-tight">
            核心球员对比
          </h2>
          <p className="text-center text-amber-600/50 text-base sm:text-lg mb-14">
            四组关键对位，决定比赛走向
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {playerMatchups.map((m, i) => (
              <div
                key={i}
                className={`player-card rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${m.gradient} border ${m.borderColor} backdrop-blur-sm`}
              >
                {/* 对位标签 */}
                <div className="flex items-center justify-center mb-5">
                  <span className="px-4 py-1.5 rounded-full bg-amber-900/30 border border-amber-700/30 text-amber-500 text-sm font-bold tracking-wider">
                    {m.label}
                  </span>
                </div>
                {/* 双方球员 */}
                <div className="grid grid-cols-2 gap-4">
                  {/* 法国 */}
                  <div className="text-center p-4 rounded-xl bg-blue-950/40 border border-blue-800/20">
                    <span className="text-2xl mb-2 block">{m.france.emoji}</span>
                    <p className="text-lg font-bold text-blue-300 mb-1">{m.france.name}</p>
                    <p className="text-xs text-blue-400/60">法国</p>
                    <p className="text-sm text-amber-500 mt-2 font-semibold">{m.france.stats}</p>
                  </div>
                  {/* 英格兰 */}
                  <div className="text-center p-4 rounded-xl bg-slate-900/40 border border-slate-700/20">
                    <span className="text-2xl mb-2 block">{m.england.emoji}</span>
                    <p className="text-lg font-bold text-slate-200 mb-1">{m.england.name}</p>
                    <p className="text-xs text-slate-400/60">英格兰</p>
                    <p className="text-sm text-amber-500 mt-2 font-semibold">{m.england.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 5. 历史交锋                                                            */}
      {/* ====================================================================== */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-black shimmer-copper-text mb-4 tracking-tight">
            历史交锋
          </h2>
          <p className="text-center text-amber-600/50 text-base sm:text-lg mb-14">
            百年宿敌，恩怨不断
          </p>

          <div className="space-y-6">
            {/* 总战绩 */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#0d1435] to-slate-900/40 border border-amber-700/15 p-6 sm:p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <FlagImg team={france} size="lg" />
                  <div>
                    <p className="text-sm text-blue-400/60">法国</p>
                    <p className="text-4xl font-black text-amber-500">5</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-amber-600/50 tracking-widest mb-1">历史总战绩（9场）</p>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-amber-600">5胜</span>
                    <span className="text-lg text-slate-500">1平</span>
                    <span className="text-2xl font-bold text-slate-400">3负</span>
                  </div>
                  <p className="text-xs text-amber-600/40 mt-1">法国占据上风</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm text-slate-400/60">英格兰</p>
                    <p className="text-4xl font-black text-slate-300">3</p>
                  </div>
                  <FlagImg team={england} size="lg" />
                </div>
              </div>
            </div>

            {/* 关键战役 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-xl bg-[#0d1435] border border-amber-700/10 p-5">
                <p className="text-xs text-amber-600/50 tracking-wider mb-2">2022世界杯 1/4决赛</p>
                <div className="flex items-center gap-3 mb-3">
                  <FlagImg team={france} size="md" />
                  <span className="text-2xl font-black text-white">2 <span className="text-amber-600/60">-</span> 1</span>
                  <FlagImg team={england} size="md" />
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  法国2-1淘汰英格兰晋级四强。楚阿梅尼远射破门，凯恩点球扳平，吉鲁头球绝杀。这场比赛至今仍是英格兰球迷心中的痛。
                </p>
              </div>
              <div className="rounded-xl bg-[#0d1435] border border-amber-700/10 p-5">
                <p className="text-xs text-amber-600/50 tracking-wider mb-2">近9次交手统计</p>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-1 text-center">
                    <p className="text-3xl font-black text-amber-500">6</p>
                    <p className="text-xs text-blue-400/60">法国胜</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-500">2平</p>
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-3xl font-black text-slate-300">1</p>
                    <p className="text-xs text-slate-400/60">英格兰胜</p>
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  近9次交手法国6胜2平1负占据绝对优势，英格兰上次击败法国还要追溯到2015年友谊赛。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 6. 战术看点                                                            */}
      {/* ====================================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#070c22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-black shimmer-copper-text mb-4 tracking-tight">
            战术看点
          </h2>
          <p className="text-center text-amber-600/50 text-base sm:text-lg mb-14">
            两位名帅的最后一道考题
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {/* 法国战术看点 */}
            <div className="team-card-france rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <FlagImg team={france} size="lg" />
                <h3 className="text-xl font-bold text-blue-300">法国看点</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600 text-sm">●</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">德尚谢幕战</p>
                    <p className="text-sm text-slate-400">14年执教生涯的最后一战，球员必将全力以赴为主帅送行。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600 text-sm">●</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">姆巴佩带伤冲金靴</p>
                    <p className="text-sm text-slate-400">本届10球3助领跑射手榜，带伤作战冲击大赛金靴。</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600 text-sm">●</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">萨利巴伤缺</p>
                    <p className="text-sm text-slate-400">后防核心因伤缺席，科纳特或于帕梅卡诺将顶替出战，防线稳固性存疑。</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 英格兰战术看点 */}
            <div className="team-card-england rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <FlagImg team={england} size="lg" />
                <h3 className="text-xl font-bold text-slate-200">英格兰看点</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600 text-sm">●</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">图赫尔回应保守争议</p>
                    <p className="text-sm text-slate-400">半决赛保守战术遭质疑，此战他是否会让三狮军团放手一搏？</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600 text-sm">●</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">季军赛魔咒</p>
                    <p className="text-sm text-slate-400">英格兰此前两次参加季军赛（2018、2019欧国联）均告失利，能否打破宿命？</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-amber-600 text-sm">●</span>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">少一天休息</p>
                    <p className="text-sm text-slate-400">英格兰比法国少休息一天，体能恢复成为隐患，轮换或将不可避免。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 教练发言引用框 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 德尚发言 */}
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-950/50 to-[#0d1435] border border-blue-800/25 p-6 sm:p-8">
              <div className="absolute -top-3 left-6">
                <span className="text-4xl text-amber-600/40">"</span>
              </div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <FlagImg team={france} size="md" />
                <div>
                  <p className="text-sm font-bold text-blue-300">德尚</p>
                  <p className="text-xs text-blue-400/50">法国主教练</p>
                </div>
              </div>
              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic border-l-2 border-amber-600/40 pl-4">
                明天的比赛就是我执教法国队的最后一战。对阵英格兰永远不会是友谊赛，我们别无选择，必须拿下胜利。
              </blockquote>
            </div>

            {/* 图赫尔发言 */}
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/50 to-[#0d1435] border border-slate-700/25 p-6 sm:p-8">
              <div className="absolute -top-3 left-6">
                <span className="text-4xl text-amber-600/40">"</span>
              </div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <FlagImg team={england} size="md" />
                <div>
                  <p className="text-sm font-bold text-slate-200">图赫尔</p>
                  <p className="text-xs text-slate-400/50">英格兰主教练</p>
                </div>
              </div>
              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic border-l-2 border-amber-600/40 pl-4">
                我承担责任。如果你想找个人归咎，那就冲我来吧。
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 7. 关键看点卡片                                                        */}
      {/* ====================================================================== */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-black shimmer-copper-text mb-4 tracking-tight">
            关键看点
          </h2>
          <p className="text-center text-amber-600/50 text-base sm:text-lg mb-14">
            四大故事线，定义这场尊严之战
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {keyStorylines.map((s, i) => (
              <div
                key={i}
                className="storyline-card rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#0d1435] to-blue-950/30 border border-amber-700/12 backdrop-blur-sm"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-amber-500 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 8. 比分预测                                                            */}
      {/* ====================================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#070c22]">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black shimmer-copper-text mb-4 tracking-tight">
            比分预测
          </h2>
          <p className="text-amber-600/50 text-base sm:text-lg mb-12">
            尊严之战，谁将拿下铜牌？
          </p>

          {/* AI预测框 */}
          <div className="inline-block border-2 border-amber-600/50 rounded-2xl p-8 sm:p-12 bg-black/30 backdrop-blur-sm glow-border mb-10">
            <p className="text-sm tracking-[0.3em] text-amber-600/50 mb-4">AI 预测比分</p>
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
              <div className="text-center">
                <FlagImg team={france} size="xl" />
                <p className="text-sm text-blue-300 mt-2">法国</p>
              </div>
              <div className="text-5xl sm:text-7xl font-black text-amber-500 tabular-nums">
                2 <span className="text-3xl sm:text-4xl text-amber-600/50 mx-1">:</span> 1
              </div>
              <div className="text-center">
                <FlagImg team={england} size="xl" />
                <p className="text-sm text-slate-300 mt-2">英格兰</p>
              </div>
            </div>
            <div className="max-w-md mx-auto">
              <p className="text-sm text-slate-400 leading-relaxed">
                法国凭借德尚谢幕战的情感加成和姆巴佩的个人能力略占上风。萨利巴的缺阵可能让比赛更为开放，预计法国在一场对攻战中以2-1险胜。
              </p>
            </div>
            <p className="text-xs text-slate-600 mt-4">*AI预测仅供参考，一切以实际比赛为准</p>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 页脚                                                                   */}
      {/* ====================================================================== */}
      <footer className="relative py-16 sm:py-20 bg-[#050a1a] text-center border-t border-amber-700/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-4xl sm:text-5xl mb-4">🥉</div>
          <p className="text-sm tracking-[0.3em] text-amber-600/40 mb-2">
            2026 FIFA WORLD CUP &middot; 迈阿密
          </p>
          <p className="text-xl sm:text-2xl font-bold shimmer-copper-text mb-6">
            荣誉之战，永不妥协
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
            <span>⚽</span>
            <span>The Beautiful Game &middot; 2026</span>
            <span>⚽</span>
          </div>
        </div>
      </footer>
    </div>
  );
}