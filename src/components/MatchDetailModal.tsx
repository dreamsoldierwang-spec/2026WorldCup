import { X, Target, Crosshair, Flag, Calendar, MapPin, Clock } from 'lucide-react';
import { matchDetails, type MatchDetail } from '../data/matchDetails';
import { teams } from '../data/teams';
import FlagImg from './FlagImg';
import type { Match } from '../types';

interface Props {
  match: Match;
  onClose: () => void;
}

function StatBar({ label, homeVal, awayVal, maxVal, unit = '' }: {
  label: string; homeVal: number; awayVal: number; maxVal: number; unit?: string;
}) {
  const homePct = maxVal > 0 ? (homeVal / maxVal) * 50 : 50;
  const awayPct = maxVal > 0 ? (awayVal / maxVal) * 50 : 50;
  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs font-bold text-gray-500 dark:text-gray-400 mb-1">
        <span>{homeVal}{unit}</span>
        <span>{label}</span>
        <span>{awayVal}{unit}</span>
      </div>
      <div className="flex h-2 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <div className="bg-wc-green transition-all" style={{ width: `${homePct}%` }} />
        <div className="bg-gray-300 dark:bg-gray-600 transition-all" style={{ width: `${awayPct}%` }} />
      </div>
    </div>
  );
}

export default function MatchDetailModal({ match, onClose }: Props) {
  const detail: MatchDetail | undefined = matchDetails[match.id];
  const homeTeam = teams.find(t => t.id === match.homeTeamId);
  const awayTeam = teams.find(t => t.id === match.awayTeamId);

  const isFinished = match.status === 'finished';
  const isLive = match.status === 'live';
  const isScheduled = match.status === 'scheduled';
  const hasTeams = homeTeam && awayTeam;

  // Determine stage label
  const stageLabel = match.group
    ? `${match.group}组小组赛`
    : match.round || '淘汰赛';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white dark:bg-gray-800 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border-3 border-black animate-slide-up"
        style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4), 6px 6px 0 #000' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors z-10"
        >
          <X size={18} />
        </button>

        {/* Match header */}
        <div className={`text-white p-5 text-center rounded-t-2xl ${
          isLive ? 'bg-gradient-to-br from-red-700 to-red-500'
          : isFinished ? 'bg-gradient-to-br from-[#1a0533] to-[#e11d48]'
          : 'bg-gradient-to-br from-gray-700 to-gray-500'
        }`}>
          <div className="text-xs font-bold mb-2 opacity-80 flex items-center justify-center gap-2">
            {isLive && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
            <span>{stageLabel}</span>
            <span>·</span>
            <span>{match.date}</span>
            <span>·</span>
            <span>{match.timeBeijing}</span>
          </div>

          {hasTeams ? (
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-1 flex-1">
                <FlagImg team={homeTeam!} size="lg" />
                <span className="font-bold text-sm">{homeTeam!.nameZh}</span>
              </div>
              {isFinished || isLive ? (
                <span className="text-3xl font-black text-[#FFD700]" style={{ textShadow: '2px 2px 0 #000' }}>
                  {match.homeScore} - {match.awayScore}
                </span>
              ) : (
                <span className="text-xl font-black text-white/60">VS</span>
              )}
              <div className="flex flex-col items-center gap-1 flex-1">
                <FlagImg team={awayTeam!} size="lg" />
                <span className="font-bold text-sm">{awayTeam!.nameZh}</span>
              </div>
            </div>
          ) : (
            <div className="py-4">
              <p className="font-bold text-base">{match.round || '待定对阵'}</p>
            </div>
          )}

          <div className="text-xs mt-2 opacity-70 flex items-center justify-center gap-1">
            <MapPin size={10} />
            <span>{match.stadium} · {match.cityZh}</span>
          </div>
        </div>

        <div className="p-5">
          {/* If match not started and no teams to show */}
          {isScheduled && !hasTeams && (
            <div className="text-center py-6">
              <div className="text-4xl mb-3">⏳</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">对阵双方尚未确定</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{match.round}</p>
            </div>
          )}

          {/* If match is scheduled but teams are known */}
          {isScheduled && hasTeams && (
            <div className="text-center py-4">
              <div className="text-4xl mb-3">⚽</div>
              <p className="text-sm font-bold text-gray-700 dark:text-gray-300">比赛尚未开始</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                {match.date} {match.timeBeijing} · {match.cityZh}
              </p>
            </div>
          )}

          {/* Match details for finished/live matches */}
          {(isFinished || isLive) && detail && (
            <>
              {/* Summary */}
              <div className="mb-5 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800/30">
                <h3 className="font-black text-sm mb-1 text-amber-700 dark:text-amber-300">📋 比赛简述</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{detail.summary}</p>
              </div>

              {/* Goals timeline */}
              {detail.goals && detail.goals.length > 0 && (
                <div className="mb-5">
                  <h3 className="font-black text-sm mb-3 flex items-center gap-1">
                    <Crosshair size={16} className="text-red-500" /> 进球时间线
                  </h3>
                  <div className="space-y-1.5">
                    {detail.goals.map((g, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 p-2 rounded-lg text-sm ${
                          g.team === 'home'
                            ? 'bg-green-50 dark:bg-green-900/20'
                            : 'bg-blue-50 dark:bg-blue-900/20'
                        }`}
                      >
                        <span className="font-black text-xs w-8 text-center px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700">
                          {g.time}
                        </span>
                        <span>⚽</span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">{g.player}</span>
                        {g.ownGoal && (
                          <span className="badge bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 text-[10px]">
                            <Flag size={10} className="mr-0.5" />乌龙
                          </span>
                        )}
                        <span className="ml-auto text-xs text-gray-400">
                          {g.team === 'home' ? homeTeam?.nameZh : awayTeam?.nameZh}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Match stats */}
              {detail.stats && (
                <div>
                  <h3 className="font-black text-sm mb-3 flex items-center gap-1">
                    <Target size={16} className="text-wc-green" /> 比赛数据
                  </h3>
                  {(() => {
                    const maxShot = Math.max(detail.stats.homeShots, detail.stats.awayShots);
                    const maxFoul = Math.max(detail.stats.homeFouls, detail.stats.awayFouls);
                    const maxCorners = Math.max(detail.stats.homeCorners, detail.stats.awayCorners);
                    const maxShotsOn = Math.max(detail.stats.homeShotsOnTarget, detail.stats.awayShotsOnTarget);
                    const maxPasses = Math.max(detail.stats.homePasses, detail.stats.awayPasses);
                    return (
                      <>
                        <StatBar label="控球率" homeVal={detail.stats.homePossession} awayVal={detail.stats.awayPossession} maxVal={100} unit="%" />
                        <StatBar label="射门" homeVal={detail.stats.homeShots} awayVal={detail.stats.awayShots} maxVal={maxShot} />
                        <StatBar label="射正" homeVal={detail.stats.homeShotsOnTarget} awayVal={detail.stats.awayShotsOnTarget} maxVal={maxShotsOn} />
                        <StatBar label="犯规" homeVal={detail.stats.homeFouls} awayVal={detail.stats.awayFouls} maxVal={maxFoul} />
                        <StatBar label="角球" homeVal={detail.stats.homeCorners} awayVal={detail.stats.awayCorners} maxVal={maxCorners} />
                        <StatBar label="传球" homeVal={detail.stats.homePasses} awayVal={detail.stats.awayPasses} maxVal={maxPasses} />
                      </>
                    );
                  })()}
                </div>
              )}
            </>
          )}

          {/* Finished match but no detail data yet */}
          {isFinished && !detail && hasTeams && (
            <div className="text-center py-6">
              <div className="text-4xl mb-3">📊</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">暂无详细数据</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
