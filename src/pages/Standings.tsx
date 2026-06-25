import { standings } from '../data/standings';
import { teams } from '../data/teams';
import FlagImg from '../components/FlagImg';
import { Trophy, CheckCircle2 } from 'lucide-react';

const GROUP_IDS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

const QUALIFY_COLORS: Record<number, string> = {
  1: 'border-l-green-500 bg-green-50/50 dark:bg-green-900/10',
  2: 'border-l-blue-500 bg-blue-50/50 dark:bg-blue-900/10',
};

export default function Standings() {
  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title flex items-center gap-2">
        <Trophy size={28} className="text-wc-gold" /> 小组积分榜
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        小组前两名直接晋级32强淘汰赛，8支成绩最好的小组第三名也将晋级
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {GROUP_IDS.map((gid, gi) => {
          const rows = standings[gid] || [];
          const qualifiedCount = rows.filter(r => r.qualified).length;
          return (
            <div
              key={gid}
              className="card-base overflow-hidden animate-slide-up"
              style={{ animationDelay: `${gi * 0.03}s` }}
            >
              {/* Group header */}
              <div className="bg-gray-50 dark:bg-gray-700/50 px-4 py-3 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <span className="font-black text-gray-900 dark:text-white text-lg">
                  {gid} 组
                </span>
                <div className="flex items-center gap-2">
                  {qualifiedCount > 0 && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                      <CheckCircle2 size={12} /> {qualifiedCount}队已晋级
                    </span>
                  )}
                  <span className="text-xs text-gray-400">
                    {rows.filter(r => r.played > 0).length}/{rows.length} 队已赛
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-50 dark:border-gray-700/50 text-gray-400 dark:text-gray-500">
                      <th className="text-left pl-3 pr-1 py-2 w-8">#</th>
                      <th className="text-left px-1 py-2">球队</th>
                      <th className="text-center px-1 py-2 w-6">场</th>
                      <th className="text-center px-1 py-2 w-6">胜</th>
                      <th className="text-center px-1 py-2 w-6">平</th>
                      <th className="text-center px-1 py-2 w-6">负</th>
                      <th className="text-center px-1 py-2 w-8">进/失</th>
                      <th className="text-center px-1 py-2 w-6">净</th>
                      <th className="text-center pr-3 pl-1 py-2 w-8 font-semibold">分</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => {
                      const team = teams.find(t => t.id === r.teamId);
                      const isDirectQualify = r.qualified && r.qualifiedAs === 'direct';
                      const isBestThird = r.qualified && r.qualifiedAs === 'best3rd';
                      const borderColor = isDirectQualify
                        ? 'border-l-green-500 bg-green-50/60 dark:bg-green-900/20'
                        : isBestThird
                        ? 'border-l-blue-500 bg-blue-50/60 dark:bg-blue-900/20'
                        : i < 2 ? QUALIFY_COLORS[i + 1] || '' : '';
                      return (
                        <tr
                          key={r.teamId}
                          className={`border-b border-gray-50 dark:border-gray-700/30 hover:bg-gray-50 dark:hover:bg-gray-750 ${borderColor} border-l-[3px]`}
                        >
                          <td className="pl-3 pr-1 py-2">
                            <div className="flex items-center gap-1">
                              {i === 0 ? (
                                <span className="text-xs font-bold text-wc-gold">{i + 1}</span>
                              ) : i === 1 ? (
                                <span className="text-xs font-bold text-blue-500">{i + 1}</span>
                              ) : i === 2 ? (
                                <span className="text-xs text-amber-500">3</span>
                              ) : (
                                <span className="text-xs text-gray-400">{i + 1}</span>
                              )}
                              {isDirectQualify && (
                                <CheckCircle2 size={12} className="text-green-500" />
                              )}
                            </div>
                          </td>
                          <td className="px-1 py-2">
                            <div className="flex items-center gap-1.5">
                              {team && <FlagImg team={team} size="sm" />}
                              <span className={`text-xs font-medium truncate max-w-[60px] ${
                                r.played > 0 ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'
                              }`}>
                                {team?.nameZh || r.teamId}
                              </span>
                              {isDirectQualify && (
                                <span className="hidden sm:inline text-[9px] font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/40 px-1 py-0.5 rounded">
                                  晋级
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-1 py-2 text-center text-gray-400">{r.played}</td>
                          <td className="px-1 py-2 text-center">{r.won > 0 ? r.won : '-'}</td>
                          <td className="px-1 py-2 text-center text-gray-400">{r.drawn > 0 ? r.drawn : '-'}</td>
                          <td className="px-1 py-2 text-center text-gray-400">{r.lost > 0 ? r.lost : '-'}</td>
                          <td className="px-1 py-2 text-center text-gray-500">{r.goalsFor}:{r.goalsAgainst}</td>
                          <td className={`px-1 py-2 text-center ${r.goalDiff > 0 ? 'text-green-600 dark:text-green-400' : r.goalDiff < 0 ? 'text-red-500' : 'text-gray-400'}`}>
                            {r.goalDiff > 0 ? `+${r.goalDiff}` : r.goalDiff}
                          </td>
                          <td className={`pr-3 pl-1 py-2 text-center font-black ${
                            r.points > 0 ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'
                          }`}>
                            {r.points}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mt-6 text-xs text-gray-400">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 border-l-[3px] border-l-green-500 rounded-sm bg-green-50 dark:bg-green-900/20" />
          <span className="text-green-600 dark:text-green-400 font-medium">✓ 已晋级（小组前两名）</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 border-l-[3px] border-l-green-500 rounded-sm" />
          <span>晋级区（前两名）</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-amber-500 font-bold">3</span>
          <span>可能晋级（最佳小组第三）</span>
        </div>
      </div>
    </div>
  );
}
