import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { groups } from '../data/groups';
import { teams } from '../data/teams';
import { schedule } from '../data/schedule';
import { getGroupStandings } from '../data/standings';
import FlagImg from '../components/FlagImg';
import MatchDetailModal from '../components/MatchDetailModal';
import { ArrowLeft, Trophy, MapPin, CheckCircle2 } from 'lucide-react';
import type { GroupId, Match } from '../types';

export default function GroupDetail() {
  const { groupId } = useParams<{ groupId: string }>();
  const group = groups.find((g) => g.id === groupId);
  const groupTeams = teams.filter((t) => t.group === groupId);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  if (!group || !groupId) {
    return (
      <div className="page-container text-center py-20">
        <p className="text-2xl mb-4">🤷</p>
        <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-2">小组不存在</h1>
        <p className="text-gray-500 mb-4">未找到小组 {groupId}</p>
        <Link to="/groups" className="btn-primary">返回分组列表</Link>
      </div>
    );
  }

  const groupStandings = getGroupStandings(groupId as GroupId);
  const groupMatches = schedule.filter(
    (m) => m.group === groupId && m.stage === 'group'
  );

  return (
    <div className="page-container animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
        <Link to="/groups" className="hover:text-wc-green transition-colors">分组</Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white font-medium">{groupId} 组</span>
      </div>

      {/* Group Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-wc-green text-white flex items-center justify-center text-3xl font-black">
          {groupId}
        </div>
        <div>
          <h1 className="section-title mb-1">{groupId} 组</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {groupTeams.length} 支球队 · 6场小组赛
          </p>
        </div>
      </div>

      {/* Teams Grid */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <span>⚽</span> 小组球队
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {groupTeams.map((team) => (
          <Link
            key={team.id}
            to={`/teams/${team.id}`}
            className="card-base p-5 group animate-slide-up"
          >
            <div className="text-5xl mb-3 text-center group-hover:scale-110 transition-transform">
              <FlagImg team={team} size="lg" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-center mb-1">
              {team.nameZh}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mb-3">
              FIFA #{team.fifaRank}
              {team.isHost && <span className="ml-1 text-wc-gold">★ 东道主</span>}
              {team.isFirstWc && <span className="ml-1 text-blue-500">🆕 首秀</span>}
            </p>
            <div className="space-y-1 text-xs text-gray-600 dark:text-gray-300">
              <p><span className="text-gray-400">教练：</span>{team.headCoach}</p>
              <p><span className="text-gray-400">球星：</span>{team.starPlayers.slice(0, 2).join('、')}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Standings Table */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Trophy size={20} /> 小组积分榜
      </h2>
      {groupStandings.length > 0 ? (
        <div className="card-base overflow-hidden mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-500 dark:text-gray-400 font-medium">#</th>
                  <th className="px-4 py-3 text-left text-gray-500 dark:text-gray-400 font-medium">球队</th>
                  <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium">场</th>
                  <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium">胜</th>
                  <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium">平</th>
                  <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium">负</th>
                  <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium">进/失</th>
                  <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium">净胜</th>
                  <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium">分</th>
                  <th className="px-4 py-3 text-center text-gray-500 dark:text-gray-400 font-medium">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {groupStandings.map((row, idx) => {
                  const team = teams.find((t) => t.id === row.teamId);
                  const isDirectQualify = row.qualified && row.qualifiedAs === 'direct';
                  return (
                    <tr
                      key={row.teamId}
                      className={`hover:bg-gray-50 dark:hover:bg-gray-750 ${
                        isDirectQualify ? 'bg-green-50/40 dark:bg-green-900/10 border-l-[3px] border-l-green-500' :
                        row.qualified ? 'bg-blue-50/40 dark:bg-blue-900/10 border-l-[3px] border-l-blue-500' : ''
                      }`}
                    >
                      <td className="px-4 py-3 font-bold text-gray-900 dark:text-white">{row.position}</td>
                      <td className="px-4 py-3">
                        <Link to={`/teams/${row.teamId}`} className="flex items-center gap-2 hover:text-wc-green transition-colors">
                          <span>{team && <FlagImg team={team} />}</span>
                          <span className="font-medium text-gray-900 dark:text-white">{team?.nameZh}</span>
                          {team?.isHost && <span className="text-wc-gold text-xs">★</span>}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-900 dark:text-white">{row.played}</td>
                      <td className="px-4 py-3 text-center text-green-600 font-medium">{row.won}</td>
                      <td className="px-4 py-3 text-center text-gray-500">{row.drawn}</td>
                      <td className="px-4 py-3 text-center text-red-500 font-medium">{row.lost}</td>
                      <td className="px-4 py-3 text-center text-gray-900 dark:text-white text-xs">{row.goalsFor}/{row.goalsAgainst}</td>
                      <td className={`px-4 py-3 text-center font-medium ${row.goalDiff > 0 ? 'text-green-600' : row.goalDiff < 0 ? 'text-red-500' : 'text-gray-400'}`}>
                        {row.goalDiff > 0 ? '+' : ''}{row.goalDiff}
                      </td>
                      <td className="px-4 py-3 text-center font-bold text-gray-900 dark:text-white">{row.points}</td>
                      <td className="px-4 py-3 text-center">
                        {isDirectQualify && (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 dark:text-green-400">
                            <CheckCircle2 size={14} /> 晋级
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="card-base p-8 text-center mb-10">
          <p className="text-4xl mb-3">⏳</p>
          <p className="text-gray-500 dark:text-gray-400">小组赛尚未开始，积分榜将在比赛后更新</p>
        </div>
      )}

      {/* Group Matches */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <MapPin size={20} /> 小组赛程
      </h2>
      {groupMatches.length > 0 ? (
        <div className="space-y-2">
          {groupMatches.map((match) => {
            const homeTeam = teams.find((t) => t.id === match.homeTeamId);
            const awayTeam = teams.find((t) => t.id === match.awayTeamId);
            return (
              <div
                key={match.id}
                className="card-base p-4 flex items-center gap-4 flex-wrap cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                onClick={() => setSelectedMatch(match)}
              >
                <div className="text-sm text-gray-500 dark:text-gray-400 min-w-[80px]">
                  <div className="font-medium text-gray-900 dark:text-white">{match.date}</div>
                  <div>{match.timeBeijing}</div>
                </div>
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-xl">{homeTeam && <FlagImg team={homeTeam} />}</span>
                    <span className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      {homeTeam?.nameZh}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">
                    VS
                  </span>
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-medium text-gray-900 dark:text-white text-sm truncate">
                      {awayTeam?.nameZh}
                    </span>
                    <span className="text-xl">{awayTeam && <FlagImg team={awayTeam} />}</span>
                  </div>
                </div>
                {match.status !== 'scheduled' && (
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {match.homeScore} - {match.awayScore}
                  </div>
                )}
                {match.status === 'finished' && (
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">查看详情 →</div>
                )}
                <div className="text-xs text-gray-400 text-right min-w-[120px]">
                  <div>{match.stadium}</div>
                  <div>{match.cityZh}</div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="card-base p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">暂无赛程数据</p>
        </div>
      )}

      {selectedMatch && (
        <MatchDetailModal match={selectedMatch} onClose={() => setSelectedMatch(null)} />
      )}
    </div>
  );
}
