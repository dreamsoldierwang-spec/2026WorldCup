import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { teams } from '../data/teams';
import FlagImg from '../components/FlagImg';
import { Search, Filter } from 'lucide-react';
import type { Confederation, GroupId } from '../types';

const confederations: { key: string; label: string; color: string }[] = [
  { key: '', label: '全部', color: '' },
  { key: 'UEFA', label: '欧洲', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  { key: 'CONMEBOL', label: '南美', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  { key: 'CONCACAF', label: '中北美', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },
  { key: 'CAF', label: '非洲', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
  { key: 'AFC', label: '亚洲', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
  { key: 'OFC', label: '大洋洲', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
];

const allGroups: string[] = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

export default function Teams() {
  const [search, setSearch] = useState('');
  const [conf, setConf] = useState('');
  const [group, setGroup] = useState('');

  const filtered = useMemo(() => {
    return teams.filter((t) => {
      if (search && !t.nameZh.includes(search) && !t.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (conf && t.confederation !== conf) return false;
      if (group && t.group !== group) return false;
      return true;
    });
  }, [search, conf, group]);

  return (
    <div className="page-container">
      <h1 className="section-title">参赛球队</h1>

      {/* Filters */}
      <div className="card-base p-4 mb-6 space-y-3">
        {/* Search */}
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="搜索球队名称..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-wc-green focus:border-transparent outline-none"
          />
        </div>

        {/* Federation filter */}
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center text-xs text-gray-500 dark:text-gray-400 mr-1">
            <Filter size={14} className="mr-1" />联合会：
          </span>
          {confederations.map((c) => (
            <button
              key={c.key}
              onClick={() => setConf(c.key)}
              className={`badge cursor-pointer transition-colors ${
                conf === c.key
                  ? 'bg-wc-green text-white'
                  : c.color || 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Group filter */}
        <div className="flex flex-wrap gap-2">
          <span className="flex items-center text-xs text-gray-500 dark:text-gray-400 mr-1">
            <Filter size={14} className="mr-1" />小组：
          </span>
          {allGroups.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              className={`badge cursor-pointer transition-colors ${
                group === g
                  ? 'bg-wc-green text-white'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {g || '全部'}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          共 <span className="font-bold text-gray-900 dark:text-white">{filtered.length}</span> 支球队
        </p>
      </div>

      {/* Team Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((team) => (
            <Link
              key={team.id}
              to={`/teams/${team.id}`}
              className="card-base p-4 group animate-slide-up"
            >
              <div className="flex items-start gap-3">
                <span className="text-4xl group-hover:scale-110 transition-transform"><FlagImg team={team} size="lg" /></span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 dark:text-white truncate">{team.nameZh}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">FIFA #{team.fifaRank}</p>
                </div>
                <span className="badge bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                  {team.group}组
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                <span className="badge badge-confederation text-xs">{team.confederation}</span>
                {team.isHost && (
                  <span className="badge bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs">
                    ★ 东道主
                  </span>
                )}
                {team.isFirstWc && (
                  <span className="badge bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">
                    🆕 首秀
                  </span>
                )}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium">教练：</span>{team.headCoach}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                  <span className="font-medium">球星：</span>{team.starPlayers.slice(0, 3).join('、')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card-base p-12 text-center">
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-gray-500 dark:text-gray-400">没有找到匹配的球队</p>
        </div>
      )}
    </div>
  );
}
