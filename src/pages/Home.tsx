import { Link } from 'react-router-dom';
import { useState } from 'react';
import { schedule } from '../data/schedule';
import { teams } from '../data/teams';
import { matchDetails } from '../data/matchDetails';
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

// 重要新闻海报配置 — 当有重要新闻时设置为 true，并配置海报信息
const FEATURED_NEWS = {
  enabled: true,
  image: './messi-record.jpg',
  alt: '梅西18球成为世界杯历史射手王',
  badge: '最新纪录',
  title: '🐐 梅西超越克洛泽！世界杯历史射手王',
  description: '阿根廷2-0奥地利，梅西梅开二度，世界杯总进球达到18球，正式超越克洛泽独占历史射手榜榜首。同时刷新连续6场进球纪录、历史出场王（28场）、胜场数第一（18胜）等多项纪录。',
};

export default function Home() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  // Get finished matches (most recent first)
  const finishedMatches = schedule
    .filter(m => m.status === 'finished')
    .sort((a, b) => {
      if (a.date !== b.date) return b.date.localeCompare(a.date);
      return b.time.localeCompare(a.time);
    })
    .slice(0, 6);

  const getTeam = (id: string) => teams.find(t => t.id === id);

  return (
    <div>
      {/* Featured News Banner — 重要新闻海报（置顶） */}
      {FEATURED_NEWS.enabled && (
        <section className="relative overflow-hidden">
          <div className="relative w-full aspect-[16/7] sm:aspect-[16/5] lg:aspect-[16/4] max-h-[420px]">
            <img
              src={FEATURED_NEWS.image}
              alt={FEATURED_NEWS.alt}
              className="w-full h-full object-cover object-top"
            />
            {/* Gradient overlays for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
            {/* Text overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
              <div className="max-w-7xl mx-auto w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFD700] text-black text-xs sm:text-sm font-black mb-2 sm:mb-3 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  {FEATURED_NEWS.badge}
                </div>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2"
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
                  {FEATURED_NEWS.title}
                </h2>
                <p className="text-sm sm:text-lg text-white/90 font-bold max-w-2xl"
                  style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                  {FEATURED_NEWS.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Hero Section — Comic Style */}
      <section className="relative bg-gradient-to-br from-[#1a0533] via-[#2d0a4a] to-[#e11d48] text-white overflow-hidden min-h-[75vh] flex items-center">
        {/* Manga dot pattern overlay */}
        <div className="absolute inset-0 manga-dots opacity-20" />
        
        {/* Speed lines */}
        <div className="absolute inset-0 speed-lines opacity-15" />

        {/* Action vector decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-12 left-8 text-8xl comic-shake" style={{ animationPlayState: 'running' }}>⚡</div>
          <div className="absolute top-20 right-12 text-7xl comic-flame">🔥</div>
          <div className="absolute bottom-16 left-16 text-7xl comic-shake">💥</div>
          <div className="absolute bottom-24 right-8 text-8xl">⚽</div>
          <div className="absolute top-1/3 left-1/2 text-[14rem] -translate-x-1/2 opacity-[0.04]">🏆</div>
        </div>

        {/* Speed effects — diagonal lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="speed" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
              <line x1="0" y1="80" x2="80" y2="0" stroke="white" strokeWidth="2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#speed)" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-24 w-full">
          {/* Live indicator badge */}
          <div className="flex justify-center mb-6">
            <div className="comic-bounce-in inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF2D55] border-2 border-white text-sm font-black shadow-[0_4px_0_#000]">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              <span className="tracking-wider">LIVE</span>
              <span className="text-white/80">赛事进行中</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="comic-title text-5xl sm:text-7xl lg:text-8xl leading-tight mb-4"
              style={{ filter: 'drop-shadow(0 8px 12px rgba(255,45,85,0.5))' }}>
              FIFA WORLD CUP
              <br />
              <span className="comic-title-sm text-7xl sm:text-8xl lg:text-9xl block mt-2"
                style={{ filter: 'drop-shadow(0 6px 8px rgba(255,215,0,0.6))' }}>
                ⚽ 2026 世界杯 ⚽
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-6">
            <p className="text-lg sm:text-2xl font-bold tracking-widest"
              style={{ textShadow: '2px 2px 0 #000, 0 0 20px rgba(255,45,85,0.5)' }}>
              🇺🇸 美国 · 🇨🇦 加拿大 · 🇲🇽 墨西哥 联合主办
            </p>
          </div>

          {/* Stats counter — comic style */}
          <div className="flex justify-center gap-4 sm:gap-8 mb-8">
            {[
              { num: '48', label: '支球队' },
              { num: '104', label: '场比赛' },
              { num: '16', label: '座城市' },
              { num: '1', label: '个冠军' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="comic-card bg-white/10 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 text-center"
                style={{ animation: `comicBounceIn ${0.4 + i * 0.1}s ease forwards`, opacity: 0 }}
              >
                <div className="text-3xl sm:text-4xl font-black text-[#FFD700]"
                  style={{ textShadow: '2px 2px 0 #000' }}>
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white/80 mt-1 tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Hot-blooded Slogan */}
          <div className="text-center mb-10">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-widest text-[#FFD700] leading-relaxed"
              style={{
                textShadow: '3px 3px 0 #FF2D55, 6px 6px 0 rgba(0,0,0,0.4)',
                filter: 'drop-shadow(0 0 20px rgba(255,45,85,0.6))'
              }}>
              🔥 四年磨一剑，一战定乾坤！🔥
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/groups" className="comic-btn comic-btn-red action-impact text-lg">
              ⚔️ 查看分组
            </Link>
            <Link to="/schedule" className="comic-btn comic-btn-yellow action-impact text-lg"
              style={{ animationDelay: '0.2s' }}>
              📅 完整赛程
            </Link>
            <Link to="/standings" className="comic-btn bg-white text-black action-impact text-lg border-3 border-black"
              style={{ animationDelay: '0.4s' }}>
              📊 积分榜
            </Link>
          </div>

          {/* Bottom speed line decoration */}
          <div className="mt-12 flex justify-center gap-1 opacity-30">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className="w-1 bg-white rounded-full"
                style={{
                  height: `${6 + Math.random() * 20}px`,
                  transform: `rotate(${(Math.random() - 0.5) * 10}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Results — Comic Style */}
      {finishedMatches.length > 0 && (
        <section className="bg-[#1a0533] relative overflow-hidden">
          <div className="absolute inset-0 manga-dots opacity-10" />
          <div className="relative max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black text-white flex items-center gap-2"
                style={{ textShadow: '2px 2px 0 #FF2D55' }}>
                <span className="w-3 h-3 rounded-full bg-[#FF2D55] animate-pulse" />
                ⚡ 最新赛况
              </h2>
              <Link to="/schedule" className="comic-btn comic-btn-yellow text-xs !py-1.5 !px-3">
                全部赛程 ➜
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {finishedMatches.map((match) => {
                const home = getTeam(match.homeTeamId);
                const away = getTeam(match.awayTeamId);
                return (
                  <div key={match.id}
                    className={`comic-card bg-white/10 backdrop-blur-sm px-2 py-3 flex flex-col items-center gap-1.5 ${matchDetails[match.id] ? 'cursor-pointer hover:bg-white/20' : ''}`}
                    onClick={() => matchDetails[match.id] && setSelectedMatch(match)}
                  >
                    <div className="flex items-center gap-1 text-xs">
                      <span className="bg-[#FF2D55] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">{match.group}组</span>
                      <span className="text-white/60 text-[10px]">{match.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 w-full justify-center">
                      <div className="flex flex-col items-center gap-0.5 flex-1">
                        {home && <FlagImg team={home} size="sm" />}
                        <span className="text-[11px] font-bold truncate max-w-[55px] text-center text-white">{home?.nameZh || '?'}</span>
                      </div>
                      <span className="text-lg font-black text-[#FFD700] tabular-nums"
                        style={{ textShadow: '1px 1px 0 #000' }}>
                        {match.homeScore}-{match.awayScore}
                      </span>
                      <div className="flex flex-col items-center gap-0.5 flex-1">
                        {away && <FlagImg team={away} size="sm" />}
                        <span className="text-[11px] font-bold truncate max-w-[55px] text-center text-white">{away?.nameZh || '?'}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Stats Bar — Comic Style */}
      <section className="bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0,0,0,0.02) 20px, rgba(0,0,0,0.02) 21px)',
        }} />
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

      {/* Quick Links — Comic Cards */}
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

      {/* Storylines — Comic Style */}
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

      {/* Bottom CTA — Comic Style */}
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
