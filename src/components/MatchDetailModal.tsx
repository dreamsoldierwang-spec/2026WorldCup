import { X, Target, Crosshair, Flag, AlertTriangle } from 'lucide-react';
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

  if (!detail) return null;

  const maxShot = Math.max(detail.stats.homeShots, detail.stats.awayShots);
  const maxFoul = Math.max(detail.stats.homeFouls, detail.stats.awayFouls);
  const maxCorners = Math.max(detail.stats.homeCorners, detail.stats.awayCorners);
  const maxShotsOn = Math.max(detail.stats.homeShotsOnTarget, detail.stats.awayShotsOnTarget);
  const possessionMax = 100;

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
        <div className="bg-gradient-to-br from-[#1a0533] to-[#e11d48] text-white p-5 text-center rounded-t-2xl">
          <div className="text-xs font-bold mb-2 opacity-80">
            {match.group}组 · {match.date} · {match.time}
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-1 flex-1">
              {homeTeam && <FlagImg team={homeTeam} size="lg" />}
              <span className="font-bold text-sm">{homeTeam?.nameZh}</span>
            </div>
            <span className="text-3xl font-black text-[#FFD700]" style={{ textShadow: '2px 2px 0 #000' }}>
              {match.homeScore} - {match.awayScore}
            </span>
            <div className="flex flex-col items-center gap-1 flex-1">
              {awayTeam && <FlagImg team={awayTeam} size="lg" />}
              <span className="font-bold text-sm">{awayTeam?.nameZh}</span>
            </div>
          </div>
          <div className="text-xs mt-1 opacity-60">{match.stadium} · {match.cityZh}</div>
        </div>

        <div className="p-5">
          {/* Summary */}
          <div className="mb-5 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800/30">
            <h3 className="font-black text-sm mb-1 text-amber-700 dark:text-amber-300">📋 比赛简述</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{detail.summary}</p>
          </div>

          {/* Goals timeline */}
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

          {/* Match stats */}
          <div>
            <h3 className="font-black text-sm mb-3 flex items-center gap-1">
              <Target size={16} className="text-wc-green" /> 比赛数据
            </h3>

            <StatBar label="控球率" homeVal={detail.stats.homePossession} awayVal={detail.stats.awayPossession} maxVal={possessionMax} unit="%" />
            <StatBar label="射门" homeVal={detail.stats.homeShots} awayVal={detail.stats.awayShots} maxVal={maxShot} unit="" />
            <StatBar label="射正" homeVal={detail.stats.homeShotsOnTarget} awayVal={detail.stats.awayShotsOnTarget} maxVal={maxShotsOn} unit="" />
            <StatBar label="犯规" homeVal={detail.stats.homeFouls} awayVal={detail.stats.awayFouls} maxVal={maxFoul} unit="" />
            <StatBar label="角球" homeVal={detail.stats.homeCorners} awayVal={detail.stats.awayCorners} maxVal={maxCorners} unit="" />
            <StatBar label="传球" homeVal={detail.stats.homePasses} awayVal={detail.stats.awayPasses} maxVal={Math.max(detail.stats.homePasses, detail.stats.awayPasses)} unit="" />
          </div>
        </div>
      </div>
    </div>
  );
}
