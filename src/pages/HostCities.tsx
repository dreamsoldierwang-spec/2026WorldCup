import { useState, useMemo } from 'react';
import { stadiums, getStadiumsByCountry } from '../data/stadiums';
import { MapPin, Users, Calendar, Building2, Trophy, Star } from 'lucide-react';
import type { HostCountry, Stadium } from '../types';

const COUNTRY_CONFIG: Record<string, {
  label: string;
  badge: string;
  flag: string;
  code: string;
  heroBg: string;
  heroGrad: string;
}> = {
  USA: {
    label: '美国',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
    flag: '🇺🇸',
    code: 'us',
    heroBg: 'from-blue-600 to-blue-800',
    heroGrad: 'from-blue-500/20 to-blue-700/30',
  },
  Canada: {
    label: '加拿大',
    badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    flag: '🇨🇦',
    code: 'ca',
    heroBg: 'from-red-600 to-red-800',
    heroGrad: 'from-red-500/20 to-red-700/30',
  },
  Mexico: {
    label: '墨西哥',
    badge: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    flag: '🇲🇽',
    code: 'mx',
    heroBg: 'from-green-600 to-green-800',
    heroGrad: 'from-green-500/20 to-green-700/30',
  },
};

const KEY_MATCH_GOLD: Record<string, boolean> = {
  '决赛': true, '开幕式': true, '半决赛': true, '季军赛': true,
};

function formatNumber(num: number): string {
  return num.toLocaleString('zh-CN');
}

function FlagImage({ code, label, size = 'md' }: { code: string; label: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'w-5 h-4', md: 'w-7 h-5', lg: 'w-10 h-7' };
  return (
    <img
      src={`https://flagcdn.com/w80/${code}.png`}
      alt={label}
      className={`${sizes[size]} object-cover rounded-sm shadow-sm inline-block`}
      loading="lazy"
    />
  );
}

// Stadium initials for hero placeholder
function getStadiumInitials(city: string): string {
  return city.slice(0, 2);
}

export default function HostCities() {
  const [countryFilter, setCountryFilter] = useState<string>('全部');

  const filteredStadiums = useMemo(() => {
    let result = [...stadiums];
    if (countryFilter !== '全部') {
      const countryMap: Record<string, HostCountry> = {
        '美国': 'USA', '加拿大': 'Canada', '墨西哥': 'Mexico',
      };
      const countryCode = countryMap[countryFilter];
      if (countryCode) result = getStadiumsByCountry(countryCode);
    }
    result.sort((a, b) => b.capacity - a.capacity);
    return result;
  }, [countryFilter]);

  const countryStats = useMemo(() => {
    type Country = 'USA' | 'Canada' | 'Mexico';
    const countries: Country[] = ['USA', 'Canada', 'Mexico'];
    return countries.map((country) => {
      const countryStadiums = getStadiumsByCountry(country);
      return {
        key: country,
        config: COUNTRY_CONFIG[country],
        count: countryStadiums.length,
        totalCapacity: countryStadiums.reduce((sum, s) => sum + s.capacity, 0),
        totalMatches: countryStadiums.reduce((sum, s) => sum + s.matches, 0),
      };
    });
  }, []);

  const hasKeyMatch = (keyMatches?: string[]): boolean => {
    if (!keyMatches || keyMatches.length === 0) return false;
    return keyMatches.some((km) => KEY_MATCH_GOLD[km]);
  };

  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title">主办城市与球场</h1>

      {/* Country Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {(['全部', '美国', '加拿大', '墨西哥'] as const).map((country) => {
          const conf = country !== '全部' ? COUNTRY_CONFIG[country === '美国' ? 'USA' : country === '加拿大' ? 'Canada' : 'Mexico'] : null;
          return (
            <button
              key={country}
              onClick={() => setCountryFilter(country)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                countryFilter === country
                  ? 'bg-wc-green text-white shadow-md shadow-green-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {country === '全部' ? (
                <span className="text-lg">🌍</span>
              ) : conf ? (
                <FlagImage code={conf.code} label={conf.label} size="sm" />
              ) : null}
              {country}
            </button>
          );
        })}
      </div>

      {/* Country Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {countryStats.map((stat) => (
          <div key={stat.key} className="card-base p-4 flex items-center gap-4 animate-slide-up">
            <FlagImage code={stat.config.code} label={stat.config.label} size="lg" />
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.config.label}</p>
              <div className="flex items-center gap-4 mt-1">
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.count}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">座球场</p>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{formatNumber(stat.totalCapacity)}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">总容量</p>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.totalMatches}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">场比赛</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stadium Count */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        共 <span className="font-bold text-gray-700 dark:text-gray-200">{filteredStadiums.length}</span> 座球场
      </p>

      {/* Stadium Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredStadiums.map((stadium, idx) => {
          const countryConf = COUNTRY_CONFIG[stadium.country];
          const hasGoldMatch = hasKeyMatch(stadium.keyMatches);

          return (
            <div
              key={stadium.id}
              className={`card-base overflow-hidden animate-slide-up ${
                hasGoldMatch ? 'ring-2 ring-wc-gold/50' : ''
              }`}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Stadium Hero Image */}
              <div className={`relative h-32 bg-gradient-to-br ${countryConf?.heroGrad || 'from-gray-500/20 to-gray-700/30'} flex items-center justify-center overflow-hidden`}>
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-2 left-4 text-6xl">⚽</div>
                  <div className="absolute bottom-2 right-4 text-6xl">🏟️</div>
                </div>
                {/* Center content */}
                <div className="relative z-10 text-center">
                  <Building2 size={36} className="mx-auto text-white/70 mb-2" />
                  <p className="text-white text-3xl font-black tracking-wider drop-shadow-lg">
                    {stadium.cityZh}
                  </p>
                </div>
                {/* Country flag badge top-right */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`badge text-xs ${countryConf?.badge || ''} shadow-sm`}>
                    <FlagImage code={countryConf?.code || 'us'} label={countryConf?.label || ''} size="sm" />
                    <span className="ml-1">{countryConf?.label || stadium.country}</span>
                  </span>
                </div>
                {/* Key match badge */}
                {hasGoldMatch && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-wc-gold text-yellow-900 shadow-sm">
                      <Star size={10} className="fill-current" /> 重要场馆
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5">
                {/* Stadium Name */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{stadium.nameZh}</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-500">{stadium.name}</p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <MapPin size={14} />
                  <span>{stadium.cityZh}</span>
                  {stadium.state && <><span className="mx-1">·</span><span>{stadium.state}</span></>}
                </div>

                {/* Stats Row */}
                <div className="flex items-center gap-4 mb-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                  <div className="flex items-center gap-1.5">
                    <Users size={16} className="text-wc-green" />
                    <div>
                      <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">{formatNumber(stadium.capacity)}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">容量</p>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-gray-200 dark:bg-gray-600" />
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} className="text-wc-green" />
                    <div>
                      <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">{stadium.matches}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">场次</p>
                    </div>
                  </div>
                  {stadium.openedYear && (
                    <>
                      <div className="w-px h-10 bg-gray-200 dark:bg-gray-600" />
                      <div className="flex items-center gap-1.5">
                        <Building2 size={16} className="text-wc-green" />
                        <div>
                          <p className="text-lg font-bold text-gray-900 dark:text-white tabular-nums">{stadium.openedYear}</p>
                          <p className="text-xs text-gray-400 dark:text-gray-500">启用</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Key Matches */}
                {stadium.keyMatches && stadium.keyMatches.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {stadium.keyMatches.map((km, i) => (
                      <span
                        key={i}
                        className={`badge text-xs ${
                          KEY_MATCH_GOLD[km]
                            ? 'bg-wc-gold/20 text-amber-800 dark:bg-yellow-900/30 dark:text-yellow-300 font-semibold'
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <Trophy size={10} className="mr-1" /> {km}
                      </span>
                    ))}
                  </div>
                )}

                {/* FIFA Name */}
                <p className="mt-3 text-xs text-gray-400 dark:text-gray-500 italic">FIFA: {stadium.fifaName}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredStadiums.length === 0 && (
        <div className="card-base p-12 text-center">
          <Building2 size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-gray-500 dark:text-gray-400">没有匹配的球场</p>
        </div>
      )}
    </div>
  );
}
