import { useState, useMemo } from 'react';
import { stars } from '../data/stars';
import { teams } from '../data/teams';
import FlagImg from '../components/FlagImg';
import { Search, Star, MapPin, Award, Users } from 'lucide-react';
import type { Team } from '../types';

const POSITION_CONFIG: Record<string, { label: string; color: string; badgeColor: string }> = {
  Forward: {
    label: '前锋',
    color: 'text-red-600 dark:text-red-400',
    badgeColor: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  },
  Midfielder: {
    label: '中场',
    color: 'text-blue-600 dark:text-blue-400',
    badgeColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  },
  Defender: {
    label: '后卫',
    color: 'text-green-600 dark:text-green-400',
    badgeColor: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  },
  Goalkeeper: {
    label: '门将',
    color: 'text-yellow-600 dark:text-yellow-400',
    badgeColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  },
};

const POSITION_FILTERS = ['全部', '前锋', '中场', '后卫', '门将'];

function getTeamById(id: string): Team | undefined {
  return teams.find((t) => t.id === id);
}

export default function Stars() {
  const [positionFilter, setPositionFilter] = useState<string>('全部');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredStars = useMemo(() => {
    let result = [...stars];

    // Filter by position
    if (positionFilter !== '全部') {
      result = result.filter((p) => {
        const config = POSITION_CONFIG[p.position];
        return config?.label === positionFilter;
      });
    }

    // Filter by search
    if (searchTerm.trim()) {
      const term = searchTerm.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.nameZh.toLowerCase().includes(term) ||
          p.name.toLowerCase().includes(term) ||
          p.nationalityZh.toLowerCase().includes(term) ||
          p.club.toLowerCase().includes(term)
      );
    }

    // Sort: isTopStar first, then by name
    result.sort((a, b) => {
      if (a.isTopStar !== b.isTopStar) return a.isTopStar ? -1 : 1;
      return a.nameZh.localeCompare(b.nameZh);
    });

    return result;
  }, [positionFilter, searchTerm]);

  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title">球星阵容</h1>

      {/* Filters */}
      <div className="card-base p-4 mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="搜索球星姓名..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-wc-green placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>

        {/* Position Filter */}
        <div className="flex flex-wrap gap-1.5">
          {POSITION_FILTERS.map((pos) => (
            <button
              key={pos}
              onClick={() => setPositionFilter(pos)}
              className={`badge cursor-pointer transition-colors ${
                positionFilter === pos
                  ? 'bg-wc-green text-white dark:bg-green-600'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {pos}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        共 <span className="font-bold text-gray-700 dark:text-gray-200">{filteredStars.length}</span> 位球星
      </p>

      {/* Empty State */}
      {filteredStars.length === 0 && (
        <div className="card-base p-12 text-center">
          <Users size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-gray-500 dark:text-gray-400">没有匹配的球星</p>
        </div>
      )}

      {/* Player Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredStars.map((player) => {
          const team = getTeamById(player.teamId);
          const posConfig = POSITION_CONFIG[player.position] || {
            label: player.positionZh,
            color: 'text-gray-600 dark:text-gray-400',
            badgeColor: 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300',
          };

          return (
            <div
              key={player.id}
              className="card-base overflow-hidden group animate-slide-up"
            >
              {/* Player Image */}
              <div className="relative h-64 bg-gray-100 dark:bg-gray-700/50 flex items-center justify-center overflow-hidden border-b-[3px] border-black dark:border-gray-600">
                <img
                  src={`/stars/${player.id}.png`}
                  alt={player.nameZh}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.querySelector('.fallback')!.classList.remove('hidden');
                  }}
                />
                {/* Fallback placeholder */}
                <div className="fallback hidden absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl mb-2 opacity-30">⚽</div>
                  <span className="text-xs text-gray-400">{player.nameZh}</span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
              {/* Header: Name + Top Star Badge */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-wc-green transition-colors">
                    {player.nameZh}
                  </h3>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{player.name}</p>
                </div>
                {player.isTopStar && (
                  <Star
                    size={18}
                    className="text-wc-gold fill-wc-gold shrink-0"
                  />
                )}
              </div>

              {/* Info tags */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                {/* Nationality */}
                <span className="inline-flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                  <span className="text-lg leading-none">{team ? <FlagImg team={team} /> : '🌍'}</span>
                  <span>{player.nationalityZh}</span>
                </span>

                {/* Age */}
                <span className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Users size={14} />
                  {player.age}岁
                </span>

                {/* Position Badge */}
                <span className={`badge ${posConfig.badgeColor}`}>
                  {posConfig.label}
                </span>
              </div>

              {/* Club */}
              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <MapPin size={14} />
                <span>{player.club}</span>
              </div>

              {/* Notable Achievements */}
              <div className="space-y-1.5">
                {player.notable.slice(0, 2).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-gray-400"
                  >
                    <Award size={12} className="shrink-0 mt-0.5 text-wc-gold" />
                    <span>{item}</span>
                  </div>
                ))}
                {player.notable.length > 2 && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 pl-5">
                    +{player.notable.length - 2} 更多成就
                  </p>
                )}
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
