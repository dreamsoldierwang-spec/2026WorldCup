import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, Star, ChevronRight, MapPin, Clock } from 'lucide-react';
import { schedule } from '../data/schedule';
import { teams } from '../data/teams';
import FlagImg from '../components/FlagImg';

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

export default function Home() {
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-wc-navy via-blue-900 to-wc-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">⚽</div>
          <div className="absolute bottom-10 right-10 text-9xl">🏆</div>
          <div className="absolute top-1/2 left-1/2 text-[12rem] -translate-x-1/2 -translate-y-1/2">🌍</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-28 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            赛事进行中 · 2026年6月11日 - 7月19日
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6 animate-fade-in">
            2026 FIFA
            <br />
            <span className="text-wc-gold">世界杯</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-4">
            美国 · 加拿大 · 墨西哥 联合主办
          </p>
          <p className="text-lg text-gray-400 mb-10">
            48支球队 · 104场比赛 · 16座城市 · 1个冠军
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/groups" className="btn-primary text-lg px-8 py-3">
              查看分组
              <ChevronRight className="ml-2" size={20} />
            </Link>
            <Link to="/schedule" className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white hover:text-wc-navy transition-colors text-lg">
              查看赛程
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Results */}
      {finishedMatches.length > 0 && (
        <section className="bg-gradient-to-r from-green-900 via-green-800 to-emerald-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                最新赛况
              </h2>
              <Link to="/schedule" className="text-sm text-green-300 hover:text-white transition-colors flex items-center gap-1">
                全部赛程 <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {finishedMatches.map((match) => {
                const home = getTeam(match.homeTeamId);
                const away = getTeam(match.awayTeamId);
                return (
                  <div key={match.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-1 text-xs text-green-300">
                      <span className="badge bg-white/10 text-white text-[10px]">{match.group}组</span>
                      <span className="text-green-400">{match.date}</span>
                    </div>
                    <div className="flex items-center gap-2 w-full justify-center">
                      <div className="flex flex-col items-center gap-0.5 flex-1">
                        {home && <FlagImg team={home} size="sm" />}
                        <span className="text-xs font-medium truncate max-w-[60px] text-center">{home?.nameZh || '?'}</span>
                      </div>
                      <span className="text-xl font-black text-wc-gold tabular-nums">
                        {match.homeScore}-{match.awayScore}
                      </span>
                      <div className="flex flex-col items-center gap-0.5 flex-1">
                        {away && <FlagImg team={away} size="sm" />}
                        <span className="text-xs font-medium truncate max-w-[60px] text-center">{away?.nameZh || '?'}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Stats Bar */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Users size={24} />, value: '48', label: '参赛球队' },
              { icon: <Calendar size={24} />, value: '104', label: '比赛场次' },
              { icon: <MapPin size={24} />, value: '16', label: '主办城市' },
              { icon: <Trophy size={24} />, value: '23', label: '届世界杯' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <div className="text-wc-green">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="page-container">
        <h2 className="section-title text-center mb-8">快速导航</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="card-base p-5 text-center group animate-slide-up"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{link.emoji}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{link.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Storylines */}
      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">赛事十大看点</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {storylines.map((item, i) => (
              <div
                key={i}
                className="card-base p-5 animate-slide-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="page-container text-center pb-16">
        <div className="bg-gradient-to-r from-wc-green to-green-700 rounded-2xl p-10 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">准备好享受足球盛宴了吗？</h2>
          <p className="text-lg text-green-100 mb-6">探索完整赛程，了解每支球队，追踪你支持的球星</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/schedule" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-wc-green font-bold hover:bg-gray-100 transition-colors">
              查看赛程 <ChevronRight size={20} className="ml-1" />
            </Link>
            <Link to="/teams" className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white text-white font-bold hover:bg-white/10 transition-colors">
              探索球队
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
