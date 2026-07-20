import { scorers } from '../data/scorers';
import { teams } from '../data/teams';
import FlagImg from '../components/FlagImg';
import { Trophy, Medal, Target } from 'lucide-react';

const POSITION_LABELS: Record<string, string> = {
  Forward: '前锋', Midfielder: '中场', Defender: '后卫', Goalkeeper: '门将',
};

export default function Scorers() {
  const getTeam = (id: string) => teams.find(t => t.id === id);
  const sorted = [...scorers].sort((a, b) => b.goals - a.goals);
  const maxGoals = sorted.length > 0 ? sorted[0].goals : 1;

  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title flex items-center gap-2">
        <Target size={28} className="text-wc-gold" /> 射手榜
      </h1>

      {sorted.length === 0 ? (
        <div className="card-base p-12 text-center">
          <Trophy size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-gray-500 dark:text-gray-400">尚无进球数据</p>
        </div>
      ) : (
        <>
          {/* Top 3 highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {sorted.slice(0, 3).map((scorer, idx) => {
              const team = getTeam(scorer.teamId);
              const medals = ['🥇', '🥈', '🥉'];
              const bgColors = [
                'bg-gradient-to-b from-amber-400 to-amber-500',
                'bg-gradient-to-b from-gray-300 to-gray-400',
                'bg-gradient-to-b from-orange-300 to-orange-400',
              ];
              return (
                <div key={scorer.name} className={`card-base p-5 text-center ${idx === 0 ? 'ring-2 ring-wc-gold scale-105' : ''}`}>
                  <div className="text-4xl mb-2">{medals[idx]}</div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {team && <FlagImg team={team} size="md" />}
                    <span className="font-bold text-gray-900 dark:text-white text-lg">{scorer.nameZh}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{team?.nameZh} · {POSITION_LABELS[scorer.position] || scorer.position}</p>
                  <div className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-wc-gold/10 text-wc-gold font-black text-2xl">
                    <span>{scorer.goals}</span>
                    <span className="text-sm font-normal text-amber-600 dark:text-amber-400">球</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full table */}
          <div className="card-base overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700">
                    <th className="px-4 py-3 text-left text-gray-500 dark:text-gray-400 font-medium w-12">#</th>
                    <th className="px-4 py-3 text-left text-gray-500 dark:text-gray-400 font-medium">球员</th>
                    <th className="px-4 py-3 text-left text-gray-500 dark:text-gray-400 font-medium hidden sm:table-cell">国家</th>
                    <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium hidden sm:table-cell">位置</th>
                    <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium">进球</th>
                    <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium hidden sm:table-cell">出场</th>
                    <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium hidden md:table-cell">效率</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
                  {sorted.map((scorer, idx) => {
                    const team = getTeam(scorer.teamId);
                    const efficiency = scorer.matches > 0 ? (scorer.goals / scorer.matches).toFixed(2) : '0';
                    return (
                      <tr key={scorer.name} className={`hover:bg-gray-50 dark:hover:bg-gray-750 ${idx < 3 ? 'bg-amber-50/30 dark:bg-amber-900/5' : ''}`}>
                        <td className="px-4 py-3">
                          {idx === 0 ? <Medal size={18} className="text-wc-gold" /> :
                           idx === 1 ? <Medal size={18} className="text-gray-400" /> :
                           idx === 2 ? <Medal size={18} className="text-orange-400" /> :
                           <span className="text-gray-400">{idx + 1}</span>}
                        </td>
                        <td className="px-4 py-3">
                          <span className="font-semibold text-gray-900 dark:text-white">{scorer.nameZh}</span>
                          <span className="text-xs text-gray-400 ml-1 hidden sm:inline">{scorer.name}</span>
                        </td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <div className="flex items-center gap-1.5">
                            {team && <FlagImg team={team} size="sm" />}
                            <span className="text-gray-700 dark:text-gray-300 text-xs">{team?.nameZh}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-center hidden sm:table-cell">
                          <span className="badge bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs">
                            {POSITION_LABELS[scorer.position] || scorer.position}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="font-black text-gray-900 dark:text-white text-lg">{scorer.goals}</span>
                        </td>
                        <td className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                          {scorer.matches}场
                        </td>
                        <td className="px-4 py-3 text-center hidden md:table-cell">
                          <div className="flex items-center justify-center gap-1">
                            <div className="w-12 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-wc-green rounded-full"
                                style={{ width: `${(scorer.goals / maxGoals) * 100}%` }}
                              />
                            </div>
                            <span className="text-xs text-gray-400">{efficiency}</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
