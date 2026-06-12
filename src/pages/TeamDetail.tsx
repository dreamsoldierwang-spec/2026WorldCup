import { useParams, Link } from 'react-router-dom';
import { teams } from '../data/teams';
import { schedule } from '../data/schedule';
import FlagImg from '../components/FlagImg';
import { ArrowLeft, MapPin, Star, History, Calendar } from 'lucide-react';

const confLabels: Record<string, string> = {
  UEFA: '欧洲足联', CONMEBOL: '南美足联', CONCACAF: '中北美及加勒比海足联',
  CAF: '非洲足联', AFC: '亚洲足联', OFC: '大洋洲足联',
};

export default function TeamDetail() {
  const { teamId } = useParams<{ teamId: string }>();
  const team = teams.find((t) => t.id === teamId);

  if (!team) {
    return (
      <div className="page-container text-center py-20">
        <p className="text-2xl mb-4">🤷</p>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">球队不存在</h1>
        <p className="text-gray-500 mb-4">未找到球队 {teamId}</p>
        <Link to="/teams" className="btn-primary">返回球队列表</Link>
      </div>
    );
  }

  const teamMatches = schedule.filter(
    (m) => (m.homeTeamId === team.id || m.awayTeamId === team.id)
  ).sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return a.time.localeCompare(b.time);
  });

  // Count results from last 3 World Cups
  const wcResults = team.lastThreeWc.map((wc) => {
    const isQualified = wc.result !== 'DNQ';
    let colorClass = 'text-gray-400';
    if (wc.result === 'Champion') colorClass = 'text-yellow-500 font-bold';
    else if (wc.result.includes('Place') && !wc.result.includes('4th')) colorClass = 'text-yellow-600';
    else if (wc.result.includes('final') || wc.result.includes('Place')) colorClass = 'text-blue-500';
    else if (isQualified) colorClass = 'text-green-600';
    return { ...wc, isQualified, colorClass };
  });

  return (
    <div className="page-container animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link to="/teams" className="hover:text-wc-green transition-colors">球队</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white font-medium">{team.nameZh}</span>
      </div>

      {/* Team Header */}
      <div className="card-base p-6 sm:p-8 mb-8">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <div className="text-7xl sm:text-8xl"><FlagImg team={team} size="xl" /></div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
                {team.nameZh}
              </h1>
              <span className="badge bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                {team.group} 组
              </span>
              {team.isHost && (
                <span className="badge bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  ★ 东道主
                </span>
              )}
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{team.name} · {confLabels[team.confederation] || team.confederation}</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <div className="text-xs text-gray-400 mb-1">FIFA排名</div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">#{team.fifaRank}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">主教练</div>
                <div className="font-medium text-gray-900 dark:text-white">{team.headCoach}</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-1">联合会</div>
                <div className="font-medium text-gray-900 dark:text-white">{team.confederation}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - 2/3 */}
        <div className="lg:col-span-2 space-y-8">
          {/* Star Players */}
          <div className="card-base p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Star size={20} className="text-wc-gold" /> 核心球员
            </h2>
            {team.starPlayers.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {team.starPlayers.map((player: string) => (
                  <span
                    key={player}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-medium"
                  >
                    ⭐ {player}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-sm">暂无数据</p>
            )}
          </div>

          {/* Team Matches */}
          <div className="card-base p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-wc-green" /> 球队赛程
            </h2>
            {teamMatches.length > 0 ? (
              <div className="space-y-2">
                {teamMatches.map((match) => {
                  const oppId = match.homeTeamId === team.id ? match.awayTeamId : match.homeTeamId;
                  const oppTeam = teams.find((t) => t.id === oppId);
                  const isHome = match.homeTeamId === team.id;
                  return (
                    <div key={match.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-sm">
                      <div className="text-xs text-gray-500 dark:text-gray-400 min-w-[70px]">
                        <div>{match.date}</div>
                        <div>{match.time}</div>
                      </div>
                      <div className="flex-1 flex items-center gap-2">
                        <span>{isHome ? <FlagImg team={team} /> : oppTeam ? <FlagImg team={oppTeam} /> : <span>❓</span>}</span>
                        <span className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">
                          {isHome ? team.nameZh : (oppTeam?.nameZh || '待定')}
                        </span>
                        <span className="text-xs text-gray-400">vs</span>
                        <span className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">
                          {isHome ? (oppTeam?.nameZh || '待定') : team.nameZh}
                        </span>
                        <span>{!isHome ? <FlagImg team={team} /> : oppTeam ? <FlagImg team={oppTeam} /> : <span>❓</span>}</span>
                      </div>
                      {match.status !== 'scheduled' && (
                        <span className="font-bold text-gray-900 dark:text-white">
                          {match.homeScore}-{match.awayScore}
                        </span>
                      )}
                      <div className="hidden sm:block text-xs text-gray-400 text-right min-w-[80px]">{match.cityZh}</div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400 text-sm">暂无赛程数据</p>
            )}
          </div>
        </div>

        {/* Right column - 1/3 */}
        <div className="space-y-8">
          {/* World Cup History */}
          <div className="card-base p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <History size={20} className="text-wc-green" /> 近三届世界杯战绩
            </h2>
            <div className="space-y-2">
              {wcResults.map((wc) => (
                <div
                  key={wc.year}
                  className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50"
                >
                  <span className="font-medium text-gray-900 dark:text-white">{wc.year}</span>
                  <span className={`text-sm font-medium ${wc.colorClass}`}>
                    {wc.result}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="card-base p-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <MapPin size={20} className="text-wc-green" /> 基本信息
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">英文名</span>
                <span className="font-medium text-gray-900 dark:text-white">{team.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">FIFA排名</span>
                <span className="font-medium text-gray-900 dark:text-white">#{team.fifaRank}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">联合会</span>
                <span className="font-medium text-gray-900 dark:text-white">{team.confederation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">小组</span>
                <span className="font-bold text-wc-green">{team.group} 组</span>
              </div>
              {team.isHost && (
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">东道主</span>
                  <span className="text-wc-gold">★ 是</span>
                </div>
              )}
              {team.isFirstWc && (
                <div className="flex justify-between">
                  <span className="text-gray-500 dark:text-gray-400">首次参赛</span>
                  <span className="text-blue-500">🆕 是</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
