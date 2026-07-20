import { useState } from 'react';
import { schedule } from '../data/schedule';
import { teams } from '../data/teams';
import { Link } from 'react-router-dom';
import FlagImg from '../components/FlagImg';
import MatchDetailModal from '../components/MatchDetailModal';
import type { Match } from '../types';

// ===== 淘汰赛对阵数据 =====
const round32Matches = schedule.filter(m => m.stage === 'round32');

// 获取球队信息
const getTeam = (id: string) => teams.find(t => t.id === id);

// 获取比赛
function getMatch(id: string): Match | undefined {
  return schedule.find(m => m.id === id);
}

// 单场比赛卡片（紧凑版）
function MatchCard({ match, onClick, compact }: { match: Match; onClick?: () => void; compact?: boolean }) {
  const home = getTeam(match.homeTeamId);
  const away = getTeam(match.awayTeamId);
  const isFinished = match.status === 'finished';
  const isLive = match.status === 'live';

  return (
    <div
      onClick={onClick}
      className={`relative rounded-lg border cursor-pointer transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-[#FFD700]/10 ${
        isFinished
          ? 'border-[#FFD700]/30 bg-gradient-to-br from-white/10 to-white/5'
          : 'border-dashed border-white/10 bg-white/[0.03]'
      } ${compact ? 'px-2 py-1 min-w-[100px] sm:min-w-[120px]' : 'px-3 py-2 min-w-[130px] sm:min-w-[160px]'}`}
    >
      <div className="flex items-center justify-between gap-1">
        <div className="flex items-center gap-1 min-w-0 flex-1">
          {home && <FlagImg team={home} size="sm" />}
          <span className={`text-[10px] font-bold truncate ${isFinished ? 'text-white' : 'text-white/50'}`}>
            {home?.nameZh || '?'}
          </span>
        </div>
        <span className={`text-[11px] font-black tabular-nums flex-shrink-0 ${isFinished || isLive ? 'text-[#FFD700]' : 'text-white/30'}`}>
          {isFinished || isLive ? `${match.homeScore}-${match.awayScore}` : 'vs'}
        </span>
        <div className="flex items-center gap-1 min-w-0 flex-1 justify-end">
          <span className={`text-[10px] font-bold truncate ${isFinished ? 'text-white' : 'text-white/50'}`}>
            {away?.nameZh || '?'}
          </span>
          {away && <FlagImg team={away} size="sm" />}
        </div>
      </div>
      <div className="text-[9px] text-white/30 mt-0.5 text-center">{match.date}</div>
    </div>
  );
}

// 分层对战图：每轮一行，上下用连接线串联
function LayeredBracket({ onMatchClick }: { onMatchClick: (m: Match) => void }) {
  // 定义每轮比赛及其父级映射
  const rounds: { label: string; sublabel: string; matchIds: string[]; parentMap?: Record<string, string> }[] = [
    { label: '🏆 决赛', sublabel: '7月20日', matchIds: ['m104'] },
    { label: '🥉 季军赛', sublabel: '7月19日', matchIds: ['m103'], parentMap: { m103: 'semi-losers' } },
    { label: '半决赛', sublabel: '7月15日-16日', matchIds: ['m101', 'm102'] },
    { label: '1/4 决赛', sublabel: '7月10日-12日', matchIds: ['m097', 'm098', 'm099', 'm100'] },
    { label: '1/8 决赛', sublabel: '7月5日-8日', matchIds: ['m089', 'm090', 'm091', 'm092', 'm093', 'm094', 'm095', 'm096'] },
    { label: '1/16 决赛', sublabel: '6月29日-7月4日', matchIds: ['m073', 'm074', 'm075', 'm076', 'm077', 'm078', 'm079', 'm080', 'm081', 'm082', 'm083', 'm084', 'm085', 'm086', 'm087', 'm088'] },
  ];

  return (
    <div className="flex flex-col items-center gap-0">
      {rounds.map((round, ri) => {
        const matches = round.matchIds.map(id => getMatch(id)).filter(Boolean) as Match[];
        const isTopRound = ri === 0 || ri === 1; // 决赛和季军赛用大卡片

        return (
          <div key={round.label} className="flex flex-col items-center w-full">
            {/* 轮次标签 */}
            <div className="flex items-center gap-2 mb-3 mt-1">
              <span className="text-[10px] sm:text-xs font-bold text-[#FFD700] tracking-wider">{round.label}</span>
              <span className="text-[10px] text-white/30">{round.sublabel}</span>
            </div>

            {/* 卡片行 */}
            <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 w-full max-w-3xl`}>
              {matches.map(m => (
                <MatchCard key={m.id} match={m} onClick={() => onMatchClick(m)} compact={!isTopRound} />
              ))}
            </div>

            {/* 连接线（除了最后一轮） */}
            {ri < rounds.length - 1 && (
              <div className="flex justify-center my-1">
                <div className="w-px h-4 bg-[rgba(255,215,0,0.15)]" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function Knockout() {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#1a0533] to-[#0a0a1a]">
      {/* ===== Hero Banner ===== */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <img
          src="./knockout-poster.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
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

      {/* ===== Layered Bracket ===== */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-black text-white text-center mb-2">
            <span className="text-[#FFD700]">🏆</span> 淘汰赛对阵图
          </h2>
          <p className="text-center text-white/40 text-sm mb-8">自上而下 · 点击卡片查看详情</p>

          {/* 分层对战图 */}
          <LayeredBracket onMatchClick={setSelectedMatch} />
        </div>
      </section>

      {/* ===== Legend ===== */}
      <section className="py-4 max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 text-xs text-white/40">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-white/10 to-white/5 border border-[#FFD700]/30" />
            <span>已结束</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm border border-dashed border-white/10 bg-white/[0.03]" />
            <span>未开始</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-px bg-[rgba(255,215,0,0.25)]" />
            <span>晋级路径</span>
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
            { home: 'mar', away: 'fra', date: '7月10日', time: '04:00', highlight: '黑马摩洛哥 vs 卫冕冠军法国' },
            { home: 'nor', away: 'eng', date: '7月11日', time: '03:00', highlight: '哈兰德 vs 凯恩 · 北欧风暴' },
            { home: 'mex', away: 'eng', date: '7月6日', time: '08:00', highlight: '贝林厄姆98秒双响淘汰东道主' },
            { home: 'bra', away: 'nor', date: '7月6日', time: '04:00', highlight: '惊天大冷！挪威2-1掀翻巴西' },
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
            { round: '1/16决赛', date: '6月29日 - 7月4日', matches: 16, desc: '32进16', done: true },
            { round: '1/8决赛', date: '7月5日 - 7月8日', matches: 8, desc: '16进8', done: false },
            { round: '1/4决赛', date: '7月10日 - 7月12日', matches: 4, desc: '8进4', done: false },
            { round: '半决赛', date: '7月15日 - 7月16日', matches: 2, desc: '4进2', done: false },
            { round: '季军赛', date: '7月19日', matches: 1, desc: '三四名争夺', done: false },
            { round: '决赛', date: '7月20日', matches: 1, desc: '冠军争夺', done: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-full border flex items-center justify-center ${item.done ? 'bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30' : 'bg-gradient-to-br from-[#FFD700]/20 to-[#FF2D55]/20 border-[#FFD700]/30'}`}>
                <span className={`text-lg font-black ${item.done ? 'text-green-400' : 'text-[#FFD700]'}`}>{i + 1}</span>
              </div>
              <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">{item.round}</h3>
                    <p className="text-xs text-white/40">{item.desc} · {item.matches}场</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#FFD700]">{item.date}</p>
                    {item.done && <span className="text-[10px] text-green-400">已完成</span>}
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

      {/* Match Detail Modal */}
      {selectedMatch && (
        <MatchDetailModal
          match={selectedMatch}
          onClose={() => setSelectedMatch(null)}
        />
      )}
    </div>
  );
}
