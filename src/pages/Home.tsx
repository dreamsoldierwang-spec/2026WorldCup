import { Link } from 'react-router-dom';
import { useState } from 'react';
import { schedule } from '../data/schedule';
import { teams } from '../data/teams';
import { news } from '../data/news';
import FlagImg from '../components/FlagImg';
import MatchDetailModal from '../components/MatchDetailModal';
import type { Match } from '../types';

const storylines = [
  { emoji: '👑', title: '梅西最后一舞', desc: '39岁的卫冕冠军梅西，率领阿根廷冲击两连冠' },
  { emoji: '🔥', title: 'C罗终极之战', desc: '41岁第6届世界杯，C罗追逐缺失的最后奖杯' },
  { emoji: '💫', title: '姆巴佩的复仇', desc: '2022决赛失利后，领衔豪华法国队卷土重来' },
  { emoji: '🌟', title: '西班牙黄金一代', desc: '亚马尔(18岁)、佩德里、罗德里 — 欧洲杯冠军班底' },
  { emoji: '🏠', title: '东道主雄心', desc: '美国(波切蒂诺)、墨西哥(阿吉雷)、加拿大(马什)' },
  { emoji: '⚡', title: '哈兰德首秀', desc: '挪威时隔28年回归，带着世界最强射手' },
  { emoji: '🌍', title: '全新赛制', desc: '48支球队，32队进入淘汰赛 — 史上最开放的赛事' },
  { emoji: '🇧🇷', title: '安切洛蒂的巴西', desc: '传奇教头力图终结24年冠军荒' },
];

const quickLinks = [
  { to: '/groups', emoji: '📋', title: '分组情况', desc: '12个小组A-L' },
  { to: '/teams', emoji: '⚽', title: '48支球队', desc: '队名·国旗·教练·球星' },
  { to: '/schedule', emoji: '📅', title: '完整赛程', desc: '104场比赛' },
  { to: '/stars', emoji: '⭐', title: '顶级球星', desc: '25+球星介绍' },
  { to: '/records', emoji: '🏆', title: '历史纪录', desc: '射手王·助攻王' },
  { to: '/host-cities', emoji: '🏟️', title: '16座球场', desc: '3国16城' },
];

// 重要新闻配置 — 当有重要新闻时设置为 true
const FEATURED_NEWS = {
  enabled: true,
  image: './hero-worldcup.jpg',
  alt: '2026世界杯淘汰赛开战',
  badge: '淘汰赛开战',
  title: '⚔️ 32强集结！淘汰赛即将震撼开战',
  description: '48队小组赛尘埃落定，32支劲旅脱颖而出！6月29日起，16场1/16决赛连番上演：巴西vs日本、德国vs巴拉圭、阿根廷vs佛得角、英格兰vs刚果(金)…谁能挺进16强？点击探索完整对阵表与赛程！',
};

export default function Home() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  // Get finished matches (most recent first)
  const finishedMatches = schedule
    .filter(m => m.status === 'finished')
    .sort((a, b) => {
      if (a.date !== b.date) return b.date.localeCompare(a.date);
      return b.time.localeCompare(a.time);
    });

  // Get latest 8 matches for the scrollable row
  const latestMatches = finishedMatches.slice(0, 8);

  // Get latest 4 news items
  const latestNews = news.slice(-4).reverse();

  const getTeam = (id: string) => teams.find(t => t.id === id);

  return (
    <div>
      {/* ===== Hero Section — 缩小高度，精简内容 ===== */}
      <section className="relative bg-gradient-to-br from-[#1a0533] via-[#2d0a4a] to-[#e11d48] text-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 manga-dots opacity-15" />
        <div className="absolute inset-0 speed-lines opacity-10" />
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-4 left-6 text-6xl comic-shake">⚡</div>
          <div className="absolute top-8 right-10 text-5xl comic-flame">🔥</div>
          <div className="absolute bottom-4 right-6 text-6xl">⚽</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-14 lg:py-16 w-full">
          {/* LIVE Badge */}
          <div className="flex justify-center mb-4">
            <div className="comic-bounce-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF2D55] border-2 border-white text-xs font-black shadow-[0_3px_0_#000]">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="tracking-wider">LIVE</span>
              <span className="text-white/80">赛事进行中</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-3">
            <h1 className="comic-title text-4xl sm:text-6xl lg:text-7xl leading-tight mb-2"
              style={{ filter: 'drop-shadow(0 6px 10px rgba(255,45,85,0.5))' }}>
              FIFA WORLD CUP
              <br />
              <span className="comic-title-sm text-5xl sm:text-7xl lg:text-8xl block mt-1"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(255,215,0,0.6))' }}>
                ⚽ 2026 世界杯 ⚽
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-4">
            <p className="text-base sm:text-xl font-bold tracking-widest"
              style={{ textShadow: '2px 2px 0 #000, 0 0 15px rgba(255,45,85,0.5)' }}>
              🇺🇸 美国 · 🇨🇦 加拿大 · 🇲🇽 墨西哥 联合主办
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-3 sm:gap-6 mb-5">
            {[
              { num: '48', label: '支球队' },
              { num: '104', label: '场比赛' },
              { num: '16', label: '座城市' },
              { num: '1', label: '个冠军' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="comic-card bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-5 sm:py-3 text-center"
                style={{ animation: `comicBounceIn ${0.3 + i * 0.08}s ease forwards`, opacity: 0 }}
              >
                <div className="text-2xl sm:text-3xl font-black text-[#FFD700]"
                  style={{ textShadow: '2px 2px 0 #000' }}>
                  {stat.num}
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-white/80 mt-0.5 tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/groups" className="comic-btn comic-btn-red action-impact">
              ⚔️ 查看分组
            </Link>
            <Link to="/schedule" className="comic-btn comic-btn-yellow action-impact"
              style={{ animationDelay: '0.15s' }}>
              📅 完整赛程
            </Link>
            <Link to="/standings" className="comic-btn bg-white text-black action-impact border-3 border-black"
              style={{ animationDelay: '0.3s' }}>
              📊 积分榜
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Latest Matches — 横向滚动卡片 ===== */}
      {latestMatches.length > 0 && (
        <section className="bg-[#0f0f23] relative overflow-hidden py-4">
          <div className="absolute inset-0 manga-dots opacity-5" />
          <div className="relative">
            {/* Section header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-black text-white/70 flex items-center gap-2 tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#FF2D55] animate-pulse" />
                  最新赛况
                </h2>
                <Link to="/schedule" className="text-xs text-[#FFD700] font-bold hover:underline">
                  全部赛程 →
                </Link>
              </div>
            </div>

            {/* Scrollable match cards */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 px-4 sm:px-6 lg:px-8 pb-2" style={{ minWidth: 'max-content' }}>
                {latestMatches.map((match) => {
                  const home = getTeam(match.homeTeamId);
                  const away = getTeam(match.awayTeamId);
                  return (
                    <div
                      key={match.id}
                      className={`flex-shrink-0 w-[140px] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 px-3 py-3 flex flex-col items-center gap-1.5 cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all`}
                      onClick={() => setSelectedMatch(match)}
                    >
                      <div className="flex items-center gap-1.5 text-[10px]">
                        <span className="bg-[#FF2D55]/80 text-white px-1.5 py-0.5 rounded font-bold">{match.group}组</span>
                        <span className="text-white/40">{match.date}</span>
                      </div>
                      <div className="flex items-center gap-2 w-full justify-center">
                        <div className="flex flex-col items-center gap-0.5 flex-1">
                          {home && <FlagImg team={home} size="sm" />}
                          <span className="text-[10px] font-bold truncate max-w-[50px] text-center text-white/90">{home?.nameZh || '?'}</span>
                        </div>
                        <span className="text-base font-black text-[#FFD700] tabular-nums"
                          style={{ textShadow: '1px 1px 0 #000' }}>
                          {match.homeScore}-{match.awayScore}
                        </span>
                        <div className="flex flex-col items-center gap-0.5 flex-1">
                          {away && <FlagImg team={away} size="sm" />}
                          <span className="text-[10px] font-bold truncate max-w-[50px] text-center text-white/90">{away?.nameZh || '?'}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== Featured News Section ===== */}
      {FEATURED_NEWS.enabled && (
        <section className="bg-white dark:bg-gray-900 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main featured news card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#1a365d] mb-6">
              <div className="flex flex-col lg:flex-row">
                {/* Left: Text content */}
                <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD700] text-black text-xs font-black mb-4 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                    {FEATURED_NEWS.badge}
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 leading-tight">
                    {FEATURED_NEWS.title}
                  </h2>
                  <p className="text-sm sm:text-base text-white/80 mb-5 leading-relaxed">
                    {FEATURED_NEWS.description}
                  </p>
                  <Link
                    to="/knockout"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1a365d] rounded-full text-sm font-black hover:bg-white/90 transition-colors w-fit"
                  >
                    查看对阵表
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
                {/* Right: Image */}
                <div className="lg:w-1/2 relative min-h-[250px] sm:min-h-[300px] lg:min-h-[400px]">
                  <img
                    src={FEATURED_NEWS.image}
                    alt={FEATURED_NEWS.alt}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Sub news grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {latestNews.map((item) => (
                <Link
                  key={item.id}
                  to="/news"
                  className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#1a365d] text-white">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h3 className="text-sm font-black text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#1a365d] dark:group-hover:text-[#FFD700] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== Stats Bar ===== */}
      <section className="bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { emoji: '⚽', value: '48', label: '参赛球队' },
              { emoji: '🏟️', value: '104', label: '比赛场次' },
              { emoji: '🌍', value: '16', label: '主办城市' },
              { emoji: '👑', value: '23', label: '届世界杯' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <div className="text-3xl">{stat.emoji}</div>
                <div className="text-3xl font-black text-gray-900 dark:text-white"
                  style={{ textShadow: '2px 2px 0 rgba(255,45,85,0.3)' }}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Quick Links ===== */}
      <section className="page-container">
        <h2 className="text-center mb-8">
          <span className="text-3xl font-black text-gray-900 dark:text-white"
            style={{ textShadow: '3px 3px 0 #FFD700' }}>
            ⚡ 快速导航 ⚡
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className="comic-card bg-white dark:bg-gray-800 p-5 text-center group"
              style={{ animation: `comicBounceIn ${0.3 + i * 0.08}s ease forwards`, opacity: 0 }}
            >
              <div className="text-4xl mb-3 comic-shake">{link.emoji}</div>
              <h3 className="font-black text-gray-900 dark:text-white mb-1">{link.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== Storylines ===== */}
      <section className="bg-white dark:bg-gray-800 py-12 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,45,85,0.03) 1px, transparent 1px)',
          backgroundSize: '10px 10px',
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8">
            <span className="text-3xl font-black text-gray-900 dark:text-white"
              style={{ textShadow: '3px 3px 0 #FFD700' }}>
              🔥 赛事十大看点 🔥
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {storylines.map((item, i) => (
              <div
                key={i}
                className="comic-card bg-white dark:bg-gray-800 p-5"
                style={{ animation: `comicBounceIn ${0.2 + i * 0.08}s ease forwards`, opacity: 0 }}
              >
                <div className="text-3xl mb-3 comic-shake">{item.emoji}</div>
                <h3 className="font-black text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA ===== */}
      <section className="page-container text-center pb-16">
        <div className="comic-card bg-gradient-to-br from-[#1a0533] via-[#2d0a4a] to-[#e11d48] p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 manga-dots opacity-10" />
          <div className="relative">
            <h2 className="text-2xl sm:text-4xl font-black mb-4"
              style={{ textShadow: '3px 3px 0 #000' }}>
              ⚽ 准备好享受足球盛宴了吗？ 🔥
            </h2>
            <p className="text-lg text-white/80 mb-6 font-bold">探索完整赛程，了解每支球队，追踪你支持的球星</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/schedule" className="comic-btn comic-btn-yellow">
                📅 查看赛程 ➜
              </Link>
              <Link to="/teams" className="comic-btn bg-white text-black">
                ⚽ 探索球队
              </Link>
            </div>
          </div>
        </div>
      </section>
      {selectedMatch && (
        <MatchDetailModal match={selectedMatch} onClose={() => setSelectedMatch(null)} />
      )}
    </div>
  );
}
