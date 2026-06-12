import { Link } from 'react-router-dom';
import { groups } from '../data/groups';
import { teams } from '../data/teams';
import FlagImg from '../components/FlagImg';
import { Users, ChevronRight } from 'lucide-react';
import type { GroupId } from '../types';

const groupLabels: GroupId[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

export default function Groups() {
  return (
    <div className="page-container">
      <h1 className="section-title">分组情况</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        48支球队分为12个小组（A-L），每组前2名+8个最佳小组第三晋级32强淘汰赛
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {groupLabels.map((gid) => {
          const group = groups.find((g) => g.id === gid);
          if (!group) return null;
          const groupTeams = teams.filter((t) => t.group === gid);

          return (
            <Link
              key={gid}
              to={`/groups/${gid}`}
              className="card-base p-5 group animate-slide-up"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-10 h-10 rounded-lg bg-wc-green text-white flex items-center justify-center text-lg font-bold">
                    {gid}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">小组</span>
                </div>
                <ChevronRight className="text-gray-400 group-hover:text-wc-green transition-colors" size={20} />
              </div>

              <div className="space-y-2">
                {groupTeams.map((team) => (
                  <div
                    key={team.id}
                    className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                  >
                    <span className="text-2xl">                    <FlagImg team={team} /></span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 dark:text-white text-sm truncate">
                        {team.nameZh}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        FIFA #{team.fifaRank}
                        {team.isHost && (
                          <span className="ml-1 text-wc-gold">★ 东道主</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center gap-1 text-xs text-gray-400">
                <Users size={14} />
                <span>4支球队</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
