import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { teams } from '../data/teams';
import { getMatchDetail } from '../data/matchDetails';
import FlagImg from '../components/FlagImg';
import { Trophy, Swords, Clock, AlertTriangle, Star, Crown, Medal, Eye, Footprints, ChevronRight } from 'lucide-react';

const spain = teams.find(t => t.id === 'esp')!;
const argentina = teams.find(t => t.id === 'arg')!;
const finalDetail = getMatchDetail('m104');

// ===== 决赛时间线 =====
const timeline = [
  {
    time: '上半场',
    minute: "44'",
    icon: <AlertTriangle size={18} className="text-orange-400" />,
    title: '利桑德罗·马丁内斯伤退',
    desc: '阿根廷后防核心被迫离场，防线重组',
    side: 'argentina',
  },
  {
    time: '全场常规时间',
    minute: "90'",
    icon: <Eye size={18} className="text-red-400" />,
    title: '阿根廷0射门',
    desc: '1966年以来世界杯决赛上半场射门最少纪录，西班牙传控完全压制',
    side: 'argentina',
  },
  {
    time: '补时阶段',
    minute: "90+'",
    icon: <AlertTriangle size={18} className="text-red-500" />,
    title: '恩佐累积两黄被罚下',
    desc: '阿根廷中场铁闸红牌离场，潘帕斯雄鹰十人迎战',
    side: 'argentina',
  },
  {
    time: '加时赛',
    minute: "106'",
    icon: <Footprints size={18} className="text-wc-gold" />,
    title: '费兰·托雷斯绝杀！',
    desc: '尼科·威廉斯头球摆渡，费兰·托雷斯爆射破门，一剑封喉！',
    highlight: true,
    side: 'spain',
  },
  {
    time: '颁奖仪式',
    minute: '终',
    icon: <Crown size={18} className="text-wc-gold" />,
    title: '西班牙第二次加冕世界之王',
    desc: '罗德里金球奖，梅西银球奖，姆巴佩金靴奖',
    highlight: true,
    side: 'spain',
  },
];

// ===== 两种足球哲学 =====
const philosophy = {
  spain: {
    title: '灵动 · 集体',
    subtitle: 'La Roja 的红色华尔兹',
    traits: [
      { label: '极致传控', value: '65% 控球率', desc: '567次传球，节奏如流水' },
      { label: '团队至上', value: '无个人英雄', desc: '每个人都是齿轮，完美咬合' },
      { label: '灵动渗透', value: '15次射门', desc: '如水银泻地，防不胜防' },
      { label: '青春风暴', value: '亚马尔 18岁', desc: '欧洲杯+世界杯双冠，天才少年' },
    ],
    color: 'from-red-600/20 to-yellow-500/10',
    border: 'border-red-500/30',
    accent: 'text-red-400',
  },
  argentina: {
    title: '粗犷 · 铁血',
    subtitle: '潘帕斯雄鹰的倔强',
    traits: [
      { label: '铁血防守', value: '14次犯规', desc: '肉搏战，寸土不让' },
      { label: '意志至上', value: '0射门仍拼搏', desc: '被压制全场，依然战斗到加时' },
      { label: '粗犷对抗', value: '恩佐红牌', desc: '南美式绞杀，激情与代价' },
      { label: '英雄迟暮', value: '梅西 39岁', desc: '最后一舞，银球奖告别' },
    ],
    color: 'from-sky-600/20 to-blue-500/10',
    border: 'border-sky-500/30',
    accent: 'text-sky-400',
  },
};

// ===== 英雄谱 =====
const heroes = [
  {
    name: '罗德里',
    nameEn: 'Rodri',
    role: '金球奖得主',
    emoji: '👑',
    desc: '中场大师的巅峰之作。92%传球成功率，攻防枢纽，西班牙传控体系的大脑与心脏。',
    color: 'from-amber-500/20 to-yellow-600/10',
    border: 'border-amber-500/30',
  },
  {
    name: '费兰·托雷斯',
    nameEn: 'Ferran Torres',
    role: '绝杀英雄',
    emoji: '⚡',
    desc: '第106分钟，一剑封喉！尼科·威廉斯头球摆渡，费兰爆射破门，4球8场，冠军射手。',
    color: 'from-red-500/20 to-orange-600/10',
    border: 'border-red-500/30',
  },
  {
    name: '亚马尔',
    nameEn: 'Lamine Yamal',
    role: '双冠天才',
    emoji: '💫',
    desc: '18岁同时拥有欧洲杯和世界杯冠军。灵动、飘逸、不可阻挡，西班牙足球的未来已来。',
    color: 'from-purple-500/20 to-pink-600/10',
    border: 'border-purple-500/30',
  },
  {
    name: '恩佐',
    nameEn: 'Enzo Fernandez',
    role: '悲壮离场',
    emoji: '💔',
    desc: '补时阶段累积黄牌被罚下。阿根廷中场的铁血与激情，红牌是粗犷足球的代价与注脚。',
    color: 'from-sky-500/20 to-blue-600/10',
    border: 'border-sky-500/30',
  },
  {
    name: '梅西',
    nameEn: 'Lionel Messi',
    role: '传奇告别',
    emoji: '🐐',
    desc: '39岁，世界杯最后一舞。银球奖是对GOAT的致敬，一个时代在此落幕，传奇永存。',
    color: 'from-emerald-500/20 to-teal-600/10',
    border: 'border-emerald-500/30',
  },
];

// ===== 西班牙冠军之路 =====
const roadToGlory = [
  { round: '1/8决赛', opponent: '奥地利', score: '3-0', note: '轻松晋级' },
  { round: '1/4决赛', opponent: '葡萄牙', score: '1-0', note: '伊比利亚德比' },
  { round: '半决赛', opponent: '比利时', score: '2-1', note: '逆转取胜' },
  { round: '半决赛', opponent: '法国', score: '2-0', note: '零封晋级' },
  { round: '决赛', opponent: '阿根廷', score: '1-0', note: '加时绝杀' },
];

// ===== 粒子背景 =====
function ParticleField() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 5 + Math.random() * 8,
    size: 1 + Math.random() * 4,
    opacity: 0.15 + Math.random() * 0.4,
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

export default function FinalResult() {
  const [shimmerKey, setShimmerKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setShimmerKey(k => k + 1), 3000);
    return () => clearInterval(id);
  }, []);

  const stats = finalDetail?.stats;

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
        @keyframes float-up {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0); opacity: 0; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes trophy-shine {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255,215,0,0.5)); }
          50% { filter: drop-shadow(0 0 30px rgba(255,215,0,0.9)); }
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
        .particle {
          animation: float-up linear infinite;
        }
        .fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .trophy-shine {
          animation: trophy-shine 2s ease-in-out infinite;
        }
      `}</style>

      {/* ===== HERO SECTION - 全屏冠军海报 ===== */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src="./champion-spain-2026.jpg"
          alt="西班牙2026世界杯冠军"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* 多层渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        <ParticleField />

        {/* 顶部冠军标签 */}
        <div className="absolute top-6 left-0 right-0 z-20 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD700]/90 text-black text-xs font-black tracking-widest">
            <Trophy size={14} />
            FIFA WORLD CUP 2026 决赛
          </div>
        </div>

        {/* 中央内容 */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 sm:pb-24 px-4 text-center">
          {/* CHAMPIONS 标题 */}
          <div className="mb-4">
            <p className="text-xs sm:text-sm tracking-[0.4em] text-amber-300/80 font-semibold mb-2">
              第二次登上世界之巅
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black shimmer-text leading-none">
              CHAMPIONS
            </h1>
          </div>

          {/* 比分展示 */}
          <div className="flex items-center gap-4 sm:gap-8 mb-6">
            <div className="flex flex-col items-center gap-1">
              <FlagImg team={spain} size="lg" />
              <span className="text-sm sm:text-base font-bold">{spain.nameZh}</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-5xl sm:text-7xl font-black text-white tabular-nums drop-shadow-lg">1</span>
                <span className="text-3xl sm:text-5xl font-black text-amber-400">-</span>
                <span className="text-5xl sm:text-7xl font-black text-white tabular-nums drop-shadow-lg">0</span>
              </div>
              <span className="text-xs sm:text-sm text-amber-300/70 mt-1">加时绝杀 · 7月20日 纽约</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <FlagImg team={argentina} size="lg" />
              <span className="text-sm sm:text-base font-bold">{argentina.nameZh}</span>
            </div>
          </div>

          {/* 冠军标签 */}
          <div className="vs-badge inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-red-600/80 to-yellow-500/80 border border-[#FFD700]/40 mb-6">
            <Trophy size={20} className="text-[#FFD700]" />
            <span className="text-sm sm:text-base font-black">西班牙 2026 世界杯冠军</span>
          </div>

          {/* 导航按钮 */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/schedule" className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-bold hover:bg-white/20 transition-all">
              完整赛程 →
            </Link>
            <Link to="/knockout" className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-bold hover:bg-white/20 transition-all">
              淘汰赛对阵 →
            </Link>
            <Link to="/home" className="px-5 py-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-500/40 text-amber-300 text-sm font-bold hover:bg-amber-500/30 transition-all">
              进入网站主页 →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 决赛时间线 ===== */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0a0202] to-[#1a0505]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Clock size={28} className="mx-auto text-wc-gold mb-3" />
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">决赛时刻</h2>
            <p className="text-sm text-gray-400">一场注定被写入足球史册的决战</p>
          </div>

          <div className="relative">
            {/* 中轴线 */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent" />

            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-start gap-4 mb-8 ${
                  idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* 内容卡片 */}
                <div className={`flex-1 ml-10 sm:ml-0 ${idx % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:text-left'}`}>
                  <div
                    className={`card-base p-4 border ${
                      item.highlight
                        ? 'border-amber-500/40 bg-amber-950/20'
                        : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <div className={`flex items-center gap-2 mb-1 ${idx % 2 === 0 ? 'sm:justify-end' : ''}`}>
                      {item.icon}
                      <span className="text-xs text-gray-400">{item.time}</span>
                      <span className="text-xs font-bold text-amber-400">{item.minute}</span>
                    </div>
                    <h3 className={`text-base font-bold mb-1 ${item.highlight ? 'text-amber-300' : 'text-white'}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* 中轴点 */}
                <div className="absolute left-4 sm:left-1/2 top-4 -translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      item.highlight
                        ? 'bg-amber-500 border-amber-300 shadow-lg shadow-amber-500/50'
                        : 'bg-[#1a0505] border-gray-500'
                    }`}
                  />
                </div>

                {/* 占位 */}
                <div className="hidden sm:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 两种足球哲学 ===== */}
      <section className="py-16 sm:py-20 bg-[#0f0505]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Swords size={28} className="mx-auto text-wc-gold mb-3" />
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">两种足球哲学</h2>
            <p className="text-sm text-gray-400">灵动与粗犷的巅峰对话</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 西班牙 */}
            <div className={`rounded-2xl border ${philosophy.spain.border} bg-gradient-to-br ${philosophy.spain.color} p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <FlagImg team={spain} size="md" />
                <div>
                  <h3 className="text-xl font-black text-white">{philosophy.spain.title}</h3>
                  <p className="text-xs text-gray-400">{philosophy.spain.subtitle}</p>
                </div>
              </div>
              <div className="space-y-3">
                {philosophy.spain.traits.map((t, i) => (
                  <div key={i} className="flex items-start gap-3 bg-black/20 rounded-lg p-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{t.label}</span>
                        <span className={`text-xs font-black ${philosophy.spain.accent}`}>{t.value}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 阿根廷 */}
            <div className={`rounded-2xl border ${philosophy.argentina.border} bg-gradient-to-br ${philosophy.argentina.color} p-6`}>
              <div className="flex items-center gap-3 mb-4">
                <FlagImg team={argentina} size="md" />
                <div>
                  <h3 className="text-xl font-black text-white">{philosophy.argentina.title}</h3>
                  <p className="text-xs text-gray-400">{philosophy.argentina.subtitle}</p>
                </div>
              </div>
              <div className="space-y-3">
                {philosophy.argentina.traits.map((t, i) => (
                  <div key={i} className="flex items-start gap-3 bg-black/20 rounded-lg p-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{t.label}</span>
                        <span className={`text-xs font-black ${philosophy.argentina.accent}`}>{t.value}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 英雄谱 ===== */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0f0505] to-[#0a0202]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Star size={28} className="mx-auto text-wc-gold mb-3" />
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">英雄谱</h2>
            <p className="text-sm text-gray-400">决赛舞台上的命运主角</p>
          </div>

          {/* 核心英雄 - 罗德里 & 费兰 大卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {heroes.slice(0, 2).map((hero, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl border ${hero.border} bg-gradient-to-br ${hero.color} p-6 overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{hero.emoji}</div>
                  <h3 className="text-2xl font-black text-white mb-1">{hero.name}</h3>
                  <p className="text-xs text-gray-400 mb-1">{hero.nameEn}</p>
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/30 text-amber-300 text-xs font-bold mb-3">
                    <Medal size={12} />
                    {hero.role}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{hero.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 其他英雄 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {heroes.slice(2).map((hero, idx) => (
              <div
                key={idx}
                className={`rounded-xl border ${hero.border} bg-gradient-to-br ${hero.color} p-5`}
              >
                <div className="text-3xl mb-2">{hero.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-0.5">{hero.name}</h3>
                <p className="text-xs text-gray-400 mb-2">{hero.nameEn}</p>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/30 text-amber-300 text-xs font-bold mb-2">
                  {hero.role}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{hero.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 决赛数据之战 ===== */}
      {stats && (
        <section className="py-16 sm:py-20 bg-[#0f0505]">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <Eye size={28} className="mx-auto text-wc-gold mb-3" />
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">数据之战</h2>
              <p className="text-sm text-gray-400">一场完全压制的决赛</p>
            </div>

            <div className="card-base p-6 border border-white/10">
              {/* 控球率 */}
              <div className="mb-6">
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span className="text-red-400">西班牙 {stats.homePossession}%</span>
                  <span className="text-gray-500">控球率</span>
                  <span className="text-sky-400">{stats.awayPossession}% 阿根廷</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden flex">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-400" style={{ width: `${stats.homePossession}%` }} />
                  <div className="h-full bg-gradient-to-r from-sky-500 to-sky-400" style={{ width: `${stats.awayPossession}%` }} />
                </div>
              </div>

              {/* 数据对比网格 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: '射门', home: stats.homeShots, away: stats.awayShots, unit: '次' },
                  { label: '射正', home: stats.homeShotsOnTarget, away: stats.awayShotsOnTarget, unit: '次' },
                  { label: '传球', home: stats.homePasses, away: stats.awayPasses, unit: '次' },
                  { label: '角球', home: stats.homeCorners, away: stats.awayCorners, unit: '次' },
                  { label: '犯规', home: stats.homeFouls, away: stats.awayFouls, unit: '次' },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-3 bg-black/20 rounded-lg">
                    <div className="flex items-center justify-center gap-3 mb-1">
                      <span className="text-lg font-black text-red-400">{stat.home}</span>
                      <span className="text-xs text-gray-500">{stat.label}</span>
                      <span className="text-lg font-black text-sky-400">{stat.away}</span>
                    </div>
                    <span className="text-xs text-gray-500">{stat.unit}</span>
                  </div>
                ))}
              </div>

              {/* 关键数据高亮 */}
              <div className="mt-6 p-4 bg-amber-950/20 border border-amber-500/20 rounded-lg text-center">
                <p className="text-sm text-amber-300">
                  <span className="font-black">阿根廷全场0射门</span> — 1966年以来世界杯决赛上半场射门最少纪录
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== 冠军之路 ===== */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#0f0505] to-[#0a0202]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Footprints size={28} className="mx-auto text-wc-gold mb-3" />
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">冠军之路</h2>
            <p className="text-sm text-gray-400">西班牙的登顶征程</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/30 via-amber-500/30 to-amber-500/10" />
            {roadToGlory.map((match, idx) => (
              <div
                key={idx}
                className={`relative flex items-center gap-4 mb-6 ${
                  idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ml-10 sm:ml-0 ${idx % 2 === 0 ? 'sm:pr-10 sm:text-right' : 'sm:pl-10 sm:text-left'}`}>
                  <div className="card-base p-4 border border-white/10 bg-white/5">
                    <div className={`flex items-center gap-2 mb-1 ${idx % 2 === 0 ? 'sm:justify-end' : ''}`}>
                      <span className="text-xs text-amber-400 font-bold">{match.round}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${idx % 2 === 0 ? 'sm:justify-end' : ''}`}>
                      <span className="text-lg font-black text-white">{match.score}</span>
                      <span className="text-sm text-gray-400">vs {match.opponent}</span>
                    </div>
                    <p className={`text-xs text-gray-500 mt-1 ${idx % 2 === 0 ? 'sm:text-right' : ''}`}>{match.note}</p>
                  </div>
                </div>
                <div className="absolute left-4 sm:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-3 h-3 rounded-full bg-amber-500 border-2 border-amber-300" />
                </div>
                <div className="hidden sm:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 梅西告别 ===== */}
      <section className="py-16 sm:py-20 bg-[#0a0202] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🐐</div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">一个时代的落幕</h2>
          <p className="text-lg text-emerald-300 font-bold mb-4">梅西 · 世界杯最后一舞</p>
          <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xl mx-auto">
            39岁的里奥内尔·梅西，带着卫冕冠军的荣耀踏上决赛草坪。
            尽管阿根廷未能卫冕，但银球奖是对这位GOAT最好的致敬。
            从2006年德国到2026年北美，五届世界杯，一座冠军奖杯，
            一个属于梅西的时代，在此刻画上句号。
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 text-sm">
            <Medal size={16} />
            银球奖 · 世界杯传奇 · 永恒GOAT
          </div>
        </div>
      </section>

      {/* ===== 底部导航 ===== */}
      <section className="py-12 bg-[#0f0505] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-lg font-bold text-white mb-4">继续探索</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/home" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all flex items-center gap-1">
              <ChevronRight size={14} /> 网站主页
            </Link>
            <Link to="/knockout" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all flex items-center gap-1">
              <ChevronRight size={14} /> 淘汰赛对阵
            </Link>
            <Link to="/schedule" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all flex items-center gap-1">
              <ChevronRight size={14} /> 完整赛程
            </Link>
            <Link to="/scorers" className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all flex items-center gap-1">
              <ChevronRight size={14} /> 射手榜
            </Link>
            <Link to="/final" className="px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300 hover:bg-amber-500/20 transition-all flex items-center gap-1">
              <ChevronRight size={14} /> 决赛前瞻
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
