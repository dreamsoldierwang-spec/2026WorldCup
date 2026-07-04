import { useMemo } from 'react';
import { schedule } from '../data/schedule';
import { teams } from '../data/teams';
import { Link } from 'react-router-dom';
import FlagImg from '../components/FlagImg';

// ===== 淘汰赛对阵数据 =====
const round32Matches = schedule.filter(m => m.stage === 'round32');

const round16Matches = schedule.filter(m => m.stage === 'round16');
const quarterMatches = schedule.filter(m => m.stage === 'quarter');
const semiMatches = schedule.filter(m => m.stage === 'semi');
const finalMatch = schedule.find(m => m.stage === 'final');
const thirdMatch = schedule.find(m => m.stage === 'third');

// 获取球队信息
const getTeam = (id: string) => teams.find(t => t.id === id);

// 比赛状态徽章
function StatusBadge({ status }: { status: string }) {
  if (status === 'finished') {
    return <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-600 text-white">已结束</span>;
  }
  if (status === 'live') {
    return <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-600 text-white animate-pulse">进行中</span>;
  }
  return <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-600/60 text-white">即将开始</span>;
}

// 单场比赛卡片
function MatchCard({ match, compact = false }: { match: typeof schedule[0]; compact?: boolean }) {
  const home = getTeam(match.homeTeamId);
  const away = getTeam(match.awayTeamId);
  const isFinished = match.status === 'finished';
  const isLive = match.status === 'live';

  if (compact) {
    return (
      <div className={`relative rounded-lg border ${isFinished ? 'border-white/20 bg-white/5' : 'border-dashed border-white/10 bg-white/[0.02]'} px-2 py-1.5`}>
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1 min-w-0">
            {home && <FlagImg team={home} size="sm" />}
            <span className="text-[10px] font-bold text-white truncate">{home?.nameZh || '?'}</span>
          </div>
          <span className={`text-xs font-black tabular-nums ${isFinished || isLive ? 'text-[#FFD700]' : 'text-white/30'}`}>
            {isFinished || isLive ? `${match.homeScore}-${match.awayScore}` : 'vs'}
          </span>
          <div className="flex items-center gap-1 min-w-0">
            <span className="text-[10px] font-bold text-white truncate">{away?.nameZh || '?'}</span>
            {away && <FlagImg team={away} size="sm" />}
          </div>
        </div>
        <div className="text-[9px] text-white/30 mt-0.5 text-center">{match.date} {match.time}</div>
      </div>
    );
  }

  return (
    <div className={`relative rounded-xl border-2 ${isFinished ? 'border-[#FFD700]/30 bg-gradient-to-br from-white/10 to-white/5' : 'border-dashed border-white/15 bg-white/[0.03]'} p-3 hover:border-[#FFD700]/50 transition-all`}>
      <div className="flex items-center justify-between mb-1.5">
        <StatusBadge status={match.status} />
        <span className="text-[10px] text-white/40">{match.date} {match.time}</span>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          {home && <FlagImg team={home} size="md" />}
          <span className="text-sm font-bold text-white truncate">{home?.nameZh || '?'}</span>
        </div>
        <div className={`text-xl font-black tabular-nums ${isFinished || isLive ? 'text-[#FFD700]' : 'text-white/20'}`}>
          {isFinished || isLive ? `${match.homeScore}-${match.awayScore}` : 'vs'}
        </div>
        <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
          <span className="text-sm font-bold text-white truncate">{away?.nameZh || '?'}</span>
          {away && <FlagImg team={away} size="md" />}
        </div>
      </div>
      <div className="text-[10px] text-white/30 mt-1 text-center">{match.cityZh}</div>
    </div>
  );
}

// 对阵图比赛对（两场比赛+连接线）
function MatchPair({ topMatch, bottomMatch }: { topMatch: typeof schedule[0]; bottomMatch: typeof schedule[0] }) {
  return (
    <div className="relative flex flex-col justify-around h-full py-2">
      <MatchCard match={topMatch} compact />
      <div className="h-3" />
      <MatchCard match={bottomMatch} compact />
      {/* 右侧连接线 */}
      <div className="absolute right-0 top-[25%] bottom-[25%] w-4">
        <div className="absolute right-0 top-0 w-3 border-t-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-tr h-[50%]" />
        <div className="absolute right-0 bottom-0 w-3 border-b-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-br h-[50%]" />
      </div>
    </div>
  );
}

// 淘汰赛区域标题
function RoundHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-3">
      <h3 className="text-sm font-black text-[#FFD700] tracking-wider">{title}</h3>
      {subtitle && <p className="text-[10px] text-white/40 mt-0.5">{subtitle}</p>}
    </div>
  );
}

export default function Knockout() {
  // 将32强赛分为上下半区
  const upperRound32 = round32Matches.slice(0, 8);
  const lowerRound32 = round32Matches.slice(8, 16);

  // 后续轮次数据（目前为空或待定）
  const upperRound16 = round16Matches.slice(0, 4);
  const lowerRound16 = round16Matches.slice(4, 8);
  const upperQuarter = quarterMatches.slice(0, 2);
  const lowerQuarter = quarterMatches.slice(2, 4);
  const upperSemi = semiMatches.slice(0, 1);
  const lowerSemi = semiMatches.slice(1, 2);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a0533] to-[#0a0a1a]">
      {/* ===== Hero Banner ===== */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        {/* 底层：热血海报背景 */}
        <img
          src="./knockout-poster.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* 中层：深色遮罩确保文字可读 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/70 to-[#0a0a1a]/40" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-black mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>⚔️ 淘汰赛 · 生死战</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3" style={{ textShadow: '0 4px 20px rgba(255,215,0,0.3)' }}>
            2026 世界杯淘汰赛
          </h1>
          <p className="text-lg text-white/60 mb-6">32强逐鹿 · 单场定生死 · 通往荣耀之路</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[#FFD700] font-black">32</span>
              <span className="text-white/60 ml-1">支球队</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[#FFD700] font-black">5</span>
              <span className="text-white/60 ml-1">轮淘汰赛</span>
            </div>
            <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
              <span className="text-[#FFD700] font-black">7月20日</span>
              <span className="text-white/60 ml-1">决赛</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Bracket ===== */}
      <section className="py-8 overflow-x-auto">
        <div className="min-w-[1400px] max-w-[1600px] mx-auto px-4">
          <h2 className="text-2xl font-black text-white text-center mb-8">
            <span className="text-[#FFD700]">🏆</span> 淘汰赛对阵图
          </h2>

          {/* 对阵图主体 */}
          <div className="grid grid-cols-9 gap-4 h-[900px]">
            {/* ===== 上半区 ===== */}
            {/* 第1列: R32 */}
            <div className="flex flex-col justify-around">
              <RoundHeader title="1/16决赛" subtitle="Round of 32" />
              {upperRound32.map((match, i) => (
                <div key={match.id} className={i % 2 === 1 ? 'relative' : ''}>
                  <MatchCard match={match} compact />
                  {i % 2 === 1 && (
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4">
                      <div className="absolute right-0 top-[-120%] w-3 border-t-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-tr h-[120%]" />
                      <div className="absolute right-0 bottom-[-120%] w-3 border-b-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-br h-[120%]" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 第2列: R16 */}
            <div className="flex flex-col justify-around">
              <RoundHeader title="1/8决赛" subtitle="Round of 16" />
              {[0, 1, 2, 3].map(i => {
                const match = upperRound16[i];
                if (match) {
                  return (
                    <div key={match.id} className={i % 2 === 1 ? 'relative' : ''}>
                      <MatchCard match={match} compact />
                      {i % 2 === 1 && (
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4">
                          <div className="absolute right-0 top-[-200%] w-3 border-t-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-tr h-[200%]" />
                          <div className="absolute right-0 bottom-[-200%] w-3 border-b-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-br h-[200%]" />
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <div key={`placeholder-r16-${i}`} className={`rounded-lg border-2 border-dashed border-white/10 bg-white/[0.02] px-2 py-3 text-center ${i % 2 === 1 ? 'relative' : ''}`}>
                    <span className="text-xs text-white/20">待定</span>
                    {i % 2 === 1 && (
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4">
                        <div className="absolute right-0 top-[-200%] w-3 border-t-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-tr h-[200%]" />
                        <div className="absolute right-0 bottom-[-200%] w-3 border-b-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-br h-[200%]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 第3列: QF */}
            <div className="flex flex-col justify-around">
              <RoundHeader title="1/4决赛" subtitle="Quarter-finals" />
              {[0, 1].map(i => {
                const match = upperQuarter[i];
                if (match) {
                  return (
                    <div key={match.id} className={i % 2 === 1 ? 'relative' : ''}>
                      <MatchCard match={match} compact />
                      {i % 2 === 1 && (
                        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4">
                          <div className="absolute right-0 top-[-400%] w-3 border-t-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-tr h-[400%]" />
                          <div className="absolute right-0 bottom-[-400%] w-3 border-b-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-br h-[400%]" />
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <div key={`placeholder-qf-${i}`} className={`rounded-lg border-2 border-dashed border-white/10 bg-white/[0.02] px-2 py-6 text-center ${i % 2 === 1 ? 'relative' : ''}`}>
                    <span className="text-xs text-white/20">待定</span>
                    {i % 2 === 1 && (
                      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4">
                        <div className="absolute right-0 top-[-400%] w-3 border-t-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-tr h-[400%]" />
                        <div className="absolute right-0 bottom-[-400%] w-3 border-b-2 border-r-2 border-[rgba(255,215,0,0.25)] rounded-br h-[400%]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 第4列: SF */}
            <div className="flex flex-col justify-center">
              <RoundHeader title="半决赛" subtitle="Semi-finals" />
              {upperSemi[0] ? (
                <MatchCard match={upperSemi[0]} compact />
              ) : (
                <div className="rounded-lg border-2 border-dashed border-white/10 bg-white/[0.02] px-2 py-8 text-center">
                  <span className="text-xs text-white/20">待定</span>
                </div>
              )}
            </div>

            {/* 第5列: 决赛+奖杯 */}
            <div className="flex flex-col justify-center items-center gap-6">
              {/* 三四名 */}
              <div className="w-full">
                <div className="text-center mb-2">
                  <span className="text-[10px] font-bold text-white/40 tracking-wider">季军赛</span>
                </div>
                {thirdMatch ? (
                  <MatchCard match={thirdMatch} compact />
                ) : (
                  <div className="rounded-lg border-2 border-dashed border-white/10 bg-white/[0.02] px-2 py-3 text-center">
                    <span className="text-xs text-white/20">7月19日</span>
                  </div>
                )}
              </div>

              {/* 奖杯 */}
              <div className="text-center">
                <img
                  src="./world-cup-trophy.png"
                  alt="大力神杯"
                  className="w-20 h-20 object-contain mx-auto mb-2"
                  style={{ filter: 'drop-shadow(0 0 12px rgba(255,215,0,0.4))' }}
                />
                <h3 className="text-lg font-black text-[#FFD700]">决赛</h3>
                <p className="text-[10px] text-white/40">7月20日 · 纽约</p>
              </div>

              {/* 决赛 */}
              <div className="w-full">
                {finalMatch ? (
                  <MatchCard match={finalMatch} compact />
                ) : (
                  <div className="rounded-xl border-2 border-[#FFD700]/40 bg-gradient-to-br from-[#FFD700]/10 to-transparent px-4 py-6 text-center">
                    <span className="text-sm text-[#FFD700]/60 font-bold">决赛待定</span>
                    <p className="text-[10px] text-white/30 mt-1">7月20日 03:00</p>
                  </div>
                )}
              </div>
            </div>

            {/* 第6列: SF */}
            <div className="flex flex-col justify-center">
              <RoundHeader title="半决赛" subtitle="Semi-finals" />
              {lowerSemi[0] ? (
                <MatchCard match={lowerSemi[0]} compact />
              ) : (
                <div className="rounded-lg border-2 border-dashed border-white/10 bg-white/[0.02] px-2 py-8 text-center">
                  <span className="text-xs text-white/20">待定</span>
                </div>
              )}
            </div>

            {/* 第7列: QF */}
            <div className="flex flex-col justify-around">
              <RoundHeader title="1/4决赛" subtitle="Quarter-finals" />
              {[0, 1].map(i => {
                const match = lowerQuarter[i];
                if (match) {
                  return (
                    <div key={match.id} className={i % 2 === 1 ? 'relative' : ''}>
                      <MatchCard match={match} compact />
                      {i % 2 === 1 && (
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4">
                          <div className="absolute left-0 top-[-400%] w-3 border-t-2 border-l-2 border-[rgba(255,215,0,0.25)] rounded-tl h-[400%]" />
                          <div className="absolute left-0 bottom-[-400%] w-3 border-b-2 border-l-2 border-[rgba(255,215,0,0.25)] rounded-bl h-[400%]" />
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <div key={`placeholder-lqf-${i}`} className={`rounded-lg border-2 border-dashed border-white/10 bg-white/[0.02] px-2 py-6 text-center ${i % 2 === 1 ? 'relative' : ''}`}>
                    <span className="text-xs text-white/20">待定</span>
                    {i % 2 === 1 && (
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4">
                        <div className="absolute left-0 top-[-400%] w-3 border-t-2 border-l-2 border-[rgba(255,215,0,0.25)] rounded-tl h-[400%]" />
                        <div className="absolute left-0 bottom-[-400%] w-3 border-b-2 border-l-2 border-[rgba(255,215,0,0.25)] rounded-bl h-[400%]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 第8列: R16 */}
            <div className="flex flex-col justify-around">
              <RoundHeader title="1/8决赛" subtitle="Round of 16" />
              {[0, 1, 2, 3].map(i => {
                const match = lowerRound16[i];
                if (match) {
                  return (
                    <div key={match.id} className={i % 2 === 1 ? 'relative' : ''}>
                      <MatchCard match={match} compact />
                      {i % 2 === 1 && (
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4">
                          <div className="absolute left-0 top-[-200%] w-3 border-t-2 border-l-2 border-[rgba(255,215,0,0.25)] rounded-tl h-[200%]" />
                          <div className="absolute left-0 bottom-[-200%] w-3 border-b-2 border-l-2 border-[rgba(255,215,0,0.25)] rounded-bl h-[200%]" />
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <div key={`placeholder-lr16-${i}`} className={`rounded-lg border-2 border-dashed border-white/10 bg-white/[0.02] px-2 py-3 text-center ${i % 2 === 1 ? 'relative' : ''}`}>
                    <span className="text-xs text-white/20">待定</span>
                    {i % 2 === 1 && (
                      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4">
                        <div className="absolute left-0 top-[-200%] w-3 border-t-2 border-l-2 border-[rgba(255,215,0,0.25)] rounded-tl h-[200%]" />
                        <div className="absolute left-0 bottom-[-200%] w-3 border-b-2 border-l-2 border-[rgba(255,215,0,0.25)] rounded-bl h-[200%]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 第9列: R32 */}
            <div className="flex flex-col justify-around">
              <RoundHeader title="1/16决赛" subtitle="Round of 32" />
              {lowerRound32.map((match, i) => (
                <div key={match.id} className={i % 2 === 1 ? 'relative' : ''}>
                  <MatchCard match={match} compact />
                  {i % 2 === 1 && (
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4">
                      <div className="absolute left-0 top-[-120%] w-3 border-t-2 border-l-2 border-[rgba(255,215,0,0.25)] rounded-tl h-[120%]" />
                      <div className="absolute left-0 bottom-[-120%] w-3 border-b-2 border-l-2 border-[rgba(255,215,0,0.25)] rounded-bl h-[120%]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Focus Matches ===== */}
      <section className="py-10 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-black text-white text-center mb-6">
          <span className="text-[#FF2D55]">🔥</span> 焦点对决
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { home: 'bra', away: 'jpn', date: '6月30日', time: '01:00', highlight: '维尼修斯 vs 三笘薰' },
            { home: 'ger', away: 'par', date: '6月30日', time: '04:30', highlight: '穆西亚拉 vs 南美铁卫' },
            { home: 'fra', away: 'swe', date: '7月1日', time: '05:00', highlight: '姆巴佩 vs 伊萨克' },
            { home: 'arg', away: 'cpv', date: '7月4日', time: '06:00', highlight: '梅西 vs 56万人口奇迹' },
          ].map((item, i) => {
            const homeTeam = getTeam(item.home);
            const awayTeam = getTeam(item.away);
            return (
              <div key={i} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-[#FFD700]/30 transition-all cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col items-center gap-1">
                      {homeTeam && <FlagImg team={homeTeam} size="lg" />}
                      <span className="text-sm font-bold text-white">{homeTeam?.nameZh}</span>
                    </div>
                    <div className="text-2xl font-black text-[#FFD700]">VS</div>
                    <div className="flex flex-col items-center gap-1">
                      {awayTeam && <FlagImg team={awayTeam} size="lg" />}
                      <span className="text-sm font-bold text-white">{awayTeam?.nameZh}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-[#FF2D55] font-bold mb-1">{item.highlight}</p>
                    <p className="text-xs text-white/40">{item.date} {item.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== Schedule Timeline ===== */}
      <section className="py-10 max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-black text-white text-center mb-6">
          <span className="text-[#FFD700]">📅</span> 淘汰赛赛程
        </h2>
        <div className="space-y-6">
          {[
            { round: '1/16决赛', date: '6月29日 - 7月4日', matches: 16, desc: '32进16' },
            { round: '1/8决赛', date: '7月5日 - 7月8日', matches: 8, desc: '16进8' },
            { round: '1/4决赛', date: '7月9日 - 7月12日', matches: 4, desc: '8进4' },
            { round: '半决赛', date: '7月15日 - 7月16日', matches: 2, desc: '4进2' },
            { round: '季军赛', date: '7月19日', matches: 1, desc: '三四名争夺' },
            { round: '决赛', date: '7月20日', matches: 1, desc: '冠军争夺' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FF2D55]/20 border border-[#FFD700]/30 flex items-center justify-center">
                <span className="text-lg font-black text-[#FFD700]">{i + 1}</span>
              </div>
              <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">{item.round}</h3>
                    <p className="text-xs text-white/40">{item.desc} · {item.matches}场</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#FFD700]">{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Stats & Rules ===== */}
      <section className="py-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Rules */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2">
              <span className="text-[#FFD700]">📋</span> 淘汰赛规则
            </h3>
            <div className="space-y-3">
              {[
                { icon: '⚔️', title: '单场淘汰', desc: '90分钟定胜负，输一场即回家' },
                { icon: '⏱️', title: '加时赛', desc: '90分钟平局则进行30分钟加时（上下半场各15分钟）' },
                { icon: '🎯', title: '点球大战', desc: '加时赛后仍平局则进入点球大战（5轮+突然死亡）' },
                { icon: '🔄', title: '换人规则', desc: '常规时间5个换人名额，加时赛可增加1个名额' },
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{rule.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-white">{rule.title}</p>
                    <p className="text-xs text-white/50">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-lg font-black text-white mb-4 flex items-center gap-2">
              <span className="text-[#FFD700]">📊</span> 淘汰赛数据
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: '参赛球队', value: '32支' },
                { label: '总场次', value: '31场' },
                { label: '欧洲球队', value: '13支' },
                { label: '非洲球队', value: '9支' },
                { label: '南美球队', value: '5支' },
                { label: '中北美球队', value: '3支' },
                { label: '亚洲球队', value: '2支' },
                { label: '决赛日期', value: '7月20日' },
              ].map((stat, i) => (
                <div key={i} className="rounded-lg bg-white/5 px-3 py-2 text-center">
                  <p className="text-lg font-black text-[#FFD700]">{stat.value}</p>
                  <p className="text-xs text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== 32强名单 ===== */}
      <section className="py-10 max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-black text-white text-center mb-6">
          <span className="text-[#FFD700]">🏆</span> 32强完整名单
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {round32Matches.flatMap(m => [m.homeTeamId, m.awayTeamId]).map((teamId, i) => {
            const team = getTeam(teamId);
            if (!team) return null;
            return (
              <Link
                key={`${teamId}-${i}`}
                to={`/teams/${teamId}`}
                className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 hover:bg-white/[0.06] hover:border-[#FFD700]/30 transition-all"
              >
                <FlagImg team={team} size="md" />
                <span className="text-xs font-bold text-white text-center truncate w-full">{team.nameZh}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
