import { useEffect, useState } from 'react';
import { teams } from '../data/teams';
import FlagImg from '../components/FlagImg';

// ===== 团队数据 =====
const spain = teams.find(t => t.id === 'esp')!;
const argentina = teams.find(t => t.id === 'arg')!;

// ===== 倒计时组件 =====
function CountdownTimer() {
  const finalTime = new Date('2026-07-20T03:00:00-04:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, finalTime - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [finalTime]);

  const blocks = [
    { value: timeLeft.days, label: '天' },
    { value: timeLeft.hours, label: '时' },
    { value: timeLeft.minutes, label: '分' },
    { value: timeLeft.seconds, label: '秒' },
  ];

  return (
    <div className="flex gap-3 sm:gap-5 justify-center mt-8">
      {blocks.map((b, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="countdown-digit w-16 h-16 sm:w-20 sm:h-20 bg-black/60 border border-[#FFD700]/40 rounded-xl flex items-center justify-center backdrop-blur-sm">
            <span className="text-3xl sm:text-4xl font-black text-[#FFD700] tabular-nums">
              {String(b.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-amber-300/80 mt-1.5 tracking-widest">{b.label}</span>
        </div>
      ))}
    </div>
  );
}

// ===== 粒子背景 =====
function ParticleField() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 4 + Math.random() * 6,
    size: 1 + Math.random() * 3,
    opacity: 0.2 + Math.random() * 0.5,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle absolute rounded-full bg-[#FFD700]"
          style={{
            left: `${p.left}%`,
            bottom: '-10px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

// ===== 对决看点卡片 =====
const matchups = [
  {
    icon: '⚔️',
    title: '中场之战',
    description: '罗德里 — 传球机器 vs 德保罗+恩佐 — 绞杀中场',
    detail: '罗德里本届传球成功率92%，是西班牙传控核心。德保罗与恩佐组成南美最硬双后腰，拦截+覆盖无死角。中场控制权将决定冠军归属。',
    gradient: 'from-yellow-900/30 to-orange-900/20',
  },
  {
    icon: '🔄',
    title: '新老传承',
    description: '梅西39岁最后冲击 vs 亚马尔17岁冲击双冠',
    detail: '梅西可能是最后一届世界杯，带着卫冕荣耀追求第4冠。亚马尔17岁就站在决赛舞台，若夺冠将同时拥有欧洲杯+世界杯，创造足球史奇迹。',
    gradient: 'from-purple-900/30 to-blue-900/20',
  },
  {
    icon: '🎨',
    title: '哲学碰撞',
    description: '西班牙传控体系 vs 阿根廷防反英雄主义',
    detail: '这是两支球队百年哲学的巅峰对决。西班牙以极致传控支配节奏，阿根廷以铁血防守反击创造奇迹。体系足球 vs 个人英雄主义，谁才是终极答案？',
    gradient: 'from-red-900/30 to-blue-900/20',
  },
  {
    icon: '🏆',
    title: '命运对决',
    description: '西班牙追第2冠 vs 阿根廷卫冕第4冠',
    detail: '西班牙2010年首夺世界杯，16年后渴望再登巅峰。阿根廷2022年夺冠后，若再胜将成为巴西、意大利之后第3支卫冕的传奇球队。',
    gradient: 'from-amber-900/30 to-yellow-900/20',
  },
];

// ===== 晋级之路数据 =====
const spainRoad = [
  { round: '1/8决赛', score: '3 - 0', opponent: '奥地利' },
  { round: '1/4决赛', score: '1 - 0', opponent: '葡萄牙' },
  { round: '半决赛', score: '2 - 1', opponent: '比利时' },
  { round: '半决赛', score: '2 - 0', opponent: '法国' },
];
const argentinaRoad = [
  { round: '1/8决赛', score: '加时 3 - 2', opponent: '佛得角' },
  { round: '1/4决赛', score: '3 - 2', opponent: '埃及' },
  { round: '半决赛', score: '加时 3 - 1', opponent: '瑞士' },
  { round: '半决赛', score: '2 - 1', opponent: '英格兰' },
];

// ===== 西班牙特色标签 =====
const spainTags = ['极致传控', '铁壁防守', '亚马尔天才', '罗德里中场'];
const argentinaTags = ['梅西GOAT', '逆转DNA', '反击致命', '大心脏'];

// ===== 最终页组件 =====
export default function FinalPage() {
  const [shimmerKey, setShimmerKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setShimmerKey(k => k + 1), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0202] text-white overflow-x-hidden">
      {/* ===== CSS 动画样式注入 ===== */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.4), 0 0 60px rgba(255, 215, 0, 0.1); transform: scale(1); }
          50% { box-shadow: 0 0 50px rgba(255, 215, 0, 0.7), 0 0 100px rgba(255, 215, 0, 0.3); transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0); opacity: 0; }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
          75% { opacity: 1; }
        }
        @keyframes digit-tick {
          0%, 49% { transform: translateY(0); }
          50%, 100% { transform: translateY(-4px); }
        }
        @keyframes border-glow {
          0%, 100% { border-color: rgba(255, 215, 0, 0.3); }
          50% { border-color: rgba(255, 215, 0, 0.8); }
        }
        .vs-badge {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #FFD700 0%, #fff 25%, #FFD700 50%, #fff 75%, #FFD700 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .gradient-flow-bg {
          background: linear-gradient(270deg, #7f1d1d, #1a0505, #1e3a5f, #1a0505);
          background-size: 400% 400%;
          animation: gradient-flow 8s ease infinite;
        }
        .particle {
          animation: float-up linear infinite;
        }
        .flicker {
          animation: flicker 1.5s ease-in-out infinite;
        }
        .countdown-digit {
          animation: border-glow 2s ease-in-out infinite;
        }
        .hero-overlay {
          background: linear-gradient(to bottom,
            rgba(10, 2, 2, 0.5) 0%,
            rgba(26, 5, 5, 0.7) 40%,
            rgba(10, 2, 2, 0.9) 100%);
        }
        .fire-transition {
          background: linear-gradient(to bottom, transparent 0%, rgba(127, 29, 29, 0.3) 50%, rgba(10, 2, 2, 1) 100%);
        }
        .team-card-spain {
          background: linear-gradient(135deg, rgba(185, 28, 28, 0.15), rgba(26, 5, 5, 0.4));
          border: 1px solid rgba(239, 68, 68, 0.2);
          transition: all 0.3s ease;
        }
        .team-card-spain:hover {
          border-color: rgba(239, 68, 68, 0.5);
          box-shadow: 0 0 30px rgba(239, 68, 68, 0.15);
        }
        .team-card-argentina {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(26, 5, 5, 0.4));
          border: 1px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }
        .team-card-argentina:hover {
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.15);
        }
        .matchup-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .matchup-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 40px rgba(255, 215, 0, 0.15);
        }
        .timeline-line {
          background: linear-gradient(90deg, #dc2626, #FFD700, #3b82f6);
        }
      `}</style>

      {/* ====================================================================== */}
      {/* 1. HERO 区域                                                          */}
      {/* ====================================================================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 背景图 */}
        <div className="absolute inset-0">
          <img
            src="./final-hero-banner.jpg"
            alt="2026 World Cup Final"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <ParticleField />

        {/* 内容 */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* 顶部英文标题 */}
          <p className="text-sm sm:text-base tracking-[0.4em] text-amber-300/70 mb-4 flicker">
            2026 FIFA WORLD CUP FINAL
          </p>

          {/* 奖杯 + 主标题 */}
          <div className="mb-2">
            <span className="text-5xl sm:text-7xl">🏆</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black shimmer-text mb-4 leading-tight tracking-tight">
            终极对决
          </h1>

          {/* VS副标题 */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
            <div className="flex items-center gap-2">
              <FlagImg team={spain} size="xl" />
              <span className="text-2xl sm:text-4xl font-bold text-red-400">西班牙</span>
            </div>
            <span className="text-2xl sm:text-3xl font-black text-[#FFD700]/80">VS</span>
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-4xl font-bold text-blue-400">阿根廷</span>
              <FlagImg team={argentina} size="xl" />
            </div>
          </div>

          {/* 日期地点 */}
          <div className="flex items-center justify-center gap-3 text-base sm:text-lg text-amber-200/80 mb-2">
            <span>📅 7月20日 03:00</span>
            <span className="text-[#FFD700]/40">|</span>
            <span>📍 纽约大都会人寿体育场</span>
          </div>

          {/* 倒计时 */}
          <div className="mt-4 mb-2">
            <p className="text-xs tracking-[0.3em] text-[#FFD700]/50 mb-2">距离决赛开球</p>
            <CountdownTimer />
          </div>
        </div>

        {/* 火焰过渡 */}
        <div className="fire-transition absolute bottom-0 left-0 right-0 h-40" />
      </section>

      {/* ====================================================================== */}
      {/* 2. VS 对阵区                                                          */}
      {/* ====================================================================== */}
      <section className="relative py-20 sm:py-28 gradient-flow-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-3xl sm:text-5xl font-black shimmer-text mb-16 tracking-tight">
            决赛对阵
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-center">
            {/* 西班牙 */}
            <div className="team-card-spain rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <FlagImg team={spain} size="xl" />
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-red-400">西班牙</h3>
                  <p className="text-sm text-red-300/60 tracking-wider">SPAIN</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mb-5 aspect-video">
                <img src="./final-spain-team.jpg" alt="西班牙队" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-amber-400 font-semibold">FIFA排名</span>
                  <span className="text-amber-300/80">#{spain.fifaRank}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-amber-400 font-semibold">本届战绩</span>
                  <span className="text-amber-300/80">7战6胜1平</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-amber-400 font-semibold">进球/失球</span>
                  <span className="text-amber-300/80">14 / 1</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {spainTags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-red-900/40 border border-red-700/30 text-red-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* VS 徽章 */}
            <div className="flex justify-center md:justify-center order-first md:order-none mb-4 md:mb-0">
              <div className="vs-badge w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-yellow-400 via-[#FFD700] to-amber-600 flex items-center justify-center shadow-2xl">
                <span className="text-3xl sm:text-4xl font-black text-[#1a0505] tracking-tight">VS</span>
              </div>
            </div>

            {/* 阿根廷 */}
            <div className="team-card-argentina rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <FlagImg team={argentina} size="xl" />
                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-blue-400">阿根廷</h3>
                  <p className="text-sm text-blue-300/60 tracking-wider">ARGENTINA</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden mb-5 aspect-video">
                <img src="./final-argentina-team.jpg" alt="阿根廷队" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-amber-400 font-semibold">FIFA排名</span>
                  <span className="text-amber-300/80">#{argentina.fifaRank}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-amber-400 font-semibold">本届战绩</span>
                  <span className="text-amber-300/80">7战全胜</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-amber-400 font-semibold">进球/失球</span>
                  <span className="text-amber-300/80">17 / 7</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {argentinaTags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-blue-900/40 border border-blue-700/30 text-blue-300">
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
      {/* 3. 球队特色对比（交替布局）                                              */}
      {/* ====================================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#0a0202]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-24 sm:space-y-32">
          {/* 西班牙段 - 左图右文 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-red-800/30 shadow-lg shadow-red-900/20">
              <img src="./final-spain-team.jpg" alt="西班牙队" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <FlagImg team={spain} size="lg" />
                <p className="text-sm tracking-[0.3em] text-red-400/70">EUROPEAN CHAMPIONS</p>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                <span className="text-red-400">斗牛士军团</span>
                <span className="text-[#FFD700] mx-2">—</span>
                <span className="text-amber-300">体系之王</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                欧洲杯卫冕冠军，传控足球的巅峰。罗德里坐镇中场，亚马尔天才边路，7战仅失1球，近14场大赛13胜1平。
                若夺冠将是队史第2座世界杯，达成欧洲杯+世界杯连冠。
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {spainTags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-red-900/50 to-red-800/30 border border-red-600/30 text-red-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 阿根廷段 - 右图左文 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-5 lg:order-1">
              <div className="flex items-center gap-3">
                <FlagImg team={argentina} size="lg" />
                <p className="text-sm tracking-[0.3em] text-blue-400/70">DEFENDING CHAMPIONS</p>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                <span className="text-blue-400">潘帕斯雄鹰</span>
                <span className="text-[#FFD700] mx-2">—</span>
                <span className="text-amber-300">天命所归</span>
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                卫冕冠军，39岁梅西的最后一舞。7场17球火力全开，连续逆转绝杀铸就钢铁意志。
                若夺冠将拿下队史第4冠，成为第3支卫冕世界杯的传奇球队。
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {argentinaTags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-blue-900/50 to-blue-800/30 border border-blue-600/30 text-blue-300 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-blue-800/30 shadow-lg shadow-blue-900/20 lg:order-2">
              <img src="./final-argentina-team.jpg" alt="阿根廷队" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 4. 核心对决看点                                                         */}
      {/* ====================================================================== */}
      <section className="relative py-20 sm:py-28 gradient-flow-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-3xl sm:text-5xl font-black shimmer-text mb-4 tracking-tight">
            核心对决
          </h2>
          <p className="text-center text-amber-300/60 text-base sm:text-lg mb-14">
            四大看点，定义这场世纪之战
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {matchups.map((m, i) => (
              <div
                key={i}
                className={`matchup-card rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${m.gradient} border border-[#FFD700]/15 backdrop-blur-sm`}
              >
                <div className="text-3xl mb-4">{m.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#FFD700] mb-2">{m.title}</h3>
                <p className="text-base text-amber-200/90 font-semibold mb-3">{m.description}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 5. 晋级之路时间线                                                       */}
      {/* ====================================================================== */}
      <section className="relative py-20 sm:py-28 bg-[#0a0202]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-3xl sm:text-5xl font-black shimmer-text mb-4 tracking-tight">
            晋级之路
          </h2>
          <p className="text-center text-amber-300/60 text-base sm:text-lg mb-16">
            两队决赛之路，每一步都惊心动魄
          </p>

          {/* 西班牙时间线 */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FlagImg team={spain} size="lg" />
              <h3 className="text-xl sm:text-2xl font-bold text-red-400">西班牙晋级之路</h3>
            </div>
            <div className="relative">
              {/* 水平线 */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-red-800/60 to-red-500/60 -translate-y-1/2 hidden sm:block" />
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
                {spainRoad.map((game, i) => (
                  <div key={i} className="relative">
                    {/* 节点 */}
                    <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 rounded-full bg-red-600 border-2 border-red-400 z-10 items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="bg-red-950/40 border border-red-800/30 rounded-xl p-4 text-center sm:ml-4">
                      <p className="text-xs text-red-400/60 mb-1">{game.round}</p>
                      <p className="text-lg font-bold text-white mb-1">{game.score}</p>
                      <p className="text-sm text-red-300/80">vs {game.opponent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 阿根廷时间线 */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FlagImg team={argentina} size="lg" />
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400">阿根廷晋级之路</h3>
            </div>
            <div className="relative">
              {/* 水平线 */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-800/60 to-blue-500/60 -translate-y-1/2 hidden sm:block" />
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
                {argentinaRoad.map((game, i) => (
                  <div key={i} className="relative">
                    {/* 节点 */}
                    <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-3 w-6 h-6 rounded-full bg-blue-600 border-2 border-blue-400 z-10 items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="bg-blue-950/40 border border-blue-800/30 rounded-xl p-4 text-center sm:ml-4">
                      <p className="text-xs text-blue-400/60 mb-1">{game.round}</p>
                      <p className="text-lg font-bold text-white mb-1">{game.score}</p>
                      <p className="text-sm text-blue-300/80">vs {game.opponent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 6. 终极预测                                                             */}
      {/* ====================================================================== */}
      <section className="relative py-20 sm:py-28 gradient-flow-bg">
        <ParticleField />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-black shimmer-text mb-4 tracking-tight">
            终极预测
          </h2>
          <p className="text-amber-300/60 text-base sm:text-lg mb-12">
            历史即将书写，谁将成为世界之王？
          </p>

          {/* AI预测框 */}
          <div className="inline-block border-2 border-[#FFD700]/60 rounded-2xl p-8 sm:p-12 bg-black/40 backdrop-blur-sm countdown-digit mb-12">
            <p className="text-sm tracking-[0.3em] text-[#FFD700]/60 mb-4">AI 预测比分</p>
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-4">
              <div className="text-center">
                <FlagImg team={spain} size="xl" />
                <p className="text-sm text-red-400 mt-2">西班牙</p>
              </div>
              <div className="text-5xl sm:text-7xl font-black text-[#FFD700] tabular-nums">
                2 <span className="text-3xl sm:text-4xl text-[#FFD700]/60 mx-1">:</span> 1
              </div>
              <div className="text-center">
                <FlagImg team={argentina} size="xl" />
                <p className="text-sm text-blue-400 mt-2">阿根廷</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2">*AI预测仅供参考，一切以实际比赛为准</p>
          </div>

          {/* 你支持谁？ */}
          <div>
            <p className="text-2xl sm:text-3xl font-bold text-white/90 mb-8">你支持谁？</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="group relative px-10 sm:px-16 py-5 rounded-2xl bg-gradient-to-r from-red-900/60 to-red-800/40 border-2 border-red-500/40 hover:border-red-400/80 hover:from-red-800/70 hover:to-red-700/50 transition-all duration-300">
                <div className="flex items-center gap-3 justify-center">
                  <span className="text-3xl">🇪🇸</span>
                  <span className="text-xl sm:text-2xl font-bold text-red-300 group-hover:text-red-200 transition-colors">西班牙</span>
                </div>
                <p className="text-xs text-red-400/50 mt-1">体系之王</p>
              </button>
              <button className="group relative px-10 sm:px-16 py-5 rounded-2xl bg-gradient-to-r from-blue-900/60 to-blue-800/40 border-2 border-blue-500/40 hover:border-blue-400/80 hover:from-blue-800/70 hover:to-blue-700/50 transition-all duration-300">
                <div className="flex items-center gap-3 justify-center">
                  <span className="text-3xl">🇦🇷</span>
                  <span className="text-xl sm:text-2xl font-bold text-blue-300 group-hover:text-blue-200 transition-colors">阿根廷</span>
                </div>
                <p className="text-xs text-blue-400/50 mt-1">天命所归</p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/* 7. 页脚                                                                */}
      {/* ====================================================================== */}
      <footer className="relative py-16 sm:py-20 bg-[#060101] text-center border-t border-[#FFD700]/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-4xl sm:text-5xl mb-4">🏆</div>
          <p className="text-sm tracking-[0.3em] text-[#FFD700]/50 mb-2">
            2026 FIFA WORLD CUP · 纽约
          </p>
          <p className="text-xl sm:text-2xl font-bold shimmer-text mb-6">
            足球之王，即将加冕
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-gray-600">
            <span>⚽</span>
            <span>The Beautiful Game · 2026</span>
            <span>⚽</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
