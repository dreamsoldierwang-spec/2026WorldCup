import { useState, useMemo } from 'react';
import { schedule } from '../data/schedule';
import { teams } from '../data/teams';
import FlagImg from '../components/FlagImg';
import MatchDetailModal from '../components/MatchDetailModal';
import { matchDetails } from '../data/matchDetails';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Calendar, MapPin, Clock, Filter, LayoutList, CalendarDays } from 'lucide-react';
import type { MatchStage, Team, Match } from '../types';

const STAGE_LABELS: Record<string, string> = {
  all: '全部', group: '小组赛', round32: '1/16决赛', round16: '1/8决赛',
  quarter: '1/4决赛', semi: '半决赛', third: '季军赛', final: '决赛',
};

const STAGE_ORDER: MatchStage[] = ['group', 'round32', 'round16', 'quarter', 'semi', 'third', 'final'];

function getTeamById(id: string): Team | undefined {
  return teams.find((t) => t.id === id);
}

// Calendar helpers
function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay(); // 0=Sun
}

const MONTHS = [
  { year: 2026, month: 5, label: '6月', matchRange: '6月11日 - 6月30日' },  // 0-indexed
  { year: 2026, month: 6, label: '7月', matchRange: '7月1日 - 7月20日' },
];

export default function Schedule() {
  const [stageFilter, setStageFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('all');
  const [expandedDates, setExpandedDates] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('list');
  const [calendarMonth, setCalendarMonth] = useState(0);
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const uniqueDates = useMemo(() => {
    return [...new Set(schedule.map((m) => m.date))];
  }, []);

  // Map: "6月12日" -> { count, mainStage }
  const dateInfo = useMemo(() => {
    const map: Record<string, { count: number; stages: string[] }> = {};
    schedule.forEach((m) => {
      if (!map[m.date]) map[m.date] = { count: 0, stages: [] };
      map[m.date].count++;
      if (!map[m.date].stages.includes(m.stage)) {
        map[m.date].stages.push(m.stage);
      }
    });
    return map;
  }, []);

  const stageStyle: Record<string, { bg: string; text: string; dot: string; label: string }> = {
    group:    { bg: 'bg-emerald-500/10 border-emerald-500/30', text: 'text-emerald-600 dark:text-emerald-400', dot: 'bg-emerald-500', label: '小组赛' },
    round32:  { bg: 'bg-purple-500/10 border-purple-500/30',   text: 'text-purple-600 dark:text-purple-400',    dot: 'bg-purple-500', label: '1/16决赛' },
    round16:  { bg: 'bg-blue-500/10 border-blue-500/30',        text: 'text-blue-600 dark:text-blue-400',       dot: 'bg-blue-500',   label: '1/8决赛' },
    quarter:  { bg: 'bg-orange-500/10 border-orange-500/30',    text: 'text-orange-600 dark:text-orange-400',    dot: 'bg-orange-500', label: '1/4决赛' },
    semi:     { bg: 'bg-red-500/10 border-red-500/30',          text: 'text-red-600 dark:text-red-400',          dot: 'bg-red-500',    label: '半决赛' },
    third:    { bg: 'bg-amber-500/10 border-amber-500/30',      text: 'text-amber-600 dark:text-amber-400',      dot: 'bg-amber-500',  label: '季军赛' },
    final:    { bg: 'bg-amber-500/15 border-amber-500/40',      text: 'text-amber-600 dark:text-amber-400',      dot: 'bg-amber-500',  label: '决赛' },
  };

  const getMainStage = (stages: string[]): string => {
    if (stages.includes('group')) return 'group';
    if (stages.includes('final')) return 'final';
    if (stages.includes('third')) return 'third';
    if (stages.includes('semi')) return 'semi';
    if (stages.includes('quarter')) return 'quarter';
    if (stages.includes('round16')) return 'round16';
    if (stages.includes('round32')) return 'round32';
    return stages[0] || 'group';
  };

  const filteredMatches = useMemo(() => {
    let matches = schedule;
    if (stageFilter !== 'all') matches = matches.filter((m) => m.stage === stageFilter);
    if (dateFilter !== 'all') matches = matches.filter((m) => m.date === dateFilter);
    return matches.sort((a, b) => {
      const stageA = STAGE_ORDER.indexOf(a.stage);
      const stageB = STAGE_ORDER.indexOf(b.stage);
      if (stageA !== stageB) return stageA - stageB;
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      return a.time.localeCompare(b.time);
    });
  }, [stageFilter, dateFilter]);

  const matchesByDate = useMemo(() => {
    const grouped: Record<string, typeof filteredMatches> = {};
    for (const m of filteredMatches) {
      if (!grouped[m.date]) grouped[m.date] = [];
      grouped[m.date].push(m);
    }
    return grouped;
  }, [filteredMatches]);

  const allDates = Object.keys(matchesByDate);

  const toggleDate = (date: string) => {
    setExpandedDates((prev) => {
      const next = new Set(prev);
      if (next.has(date)) next.delete(date);
      else next.add(date);
      return next;
    });
  };

  const handleCalendarDateClick = (dateStr: string) => {
    // Toggle: if already selected, deselect; otherwise select
    if (dateFilter === dateStr) {
      setDateFilter('all');
    } else {
      setDateFilter(dateStr);
    }
  };

  const handleStageFilter = (stage: string) => {
    setStageFilter(stage);
    setDateFilter('all');
  };

  const goPrevMonth = () => setCalendarMonth(0);
  const goNextMonth = () => setCalendarMonth(1);

  const statusBadge = (status: string) => {
    if (status === 'live') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> 进行中
        </span>
      );
    }
    if (status === 'finished') {
      return <span className="badge bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">已结束</span>;
    }
    return <span className="badge bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">未开始</span>;
  };

  // ========== Calendar View ==========
  const currentMonth = calendarMonth; // 0=6月, 1=7月
  const year = 2026;
  const month = currentMonth === 0 ? 5 : 6; // JS 0-indexed
  const monthLabel = currentMonth === 0 ? '2026年6月' : '2026年7月';
  const startDay = currentMonth === 0 ? 11 : 1;
  const endDay = currentMonth === 0 ? 30 : 20;

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const weeks: number[][] = [];
  let cw: number[] = [];
  for (let i = 0; i < firstDay; i++) cw.push(0);
  for (let day = 1; day <= daysInMonth; day++) {
    cw.push(day);
    if (cw.length === 7) { weeks.push(cw); cw = []; }
  }
  if (cw.length > 0) {
    while (cw.length < 7) cw.push(0);
    weeks.push(cw);
  }

  // Build the match list for the selected date
  const selectedDateMatches = dateFilter !== 'all'
    ? schedule.filter((m) => {
        if (stageFilter !== 'all' && m.stage !== stageFilter) return false;
        return m.date === dateFilter;
      }).sort((a, b) => a.time.localeCompare(b.time))
    : [];

  const renderCalendar = () => (
    <div className="space-y-6">
      {/* Month Navigation */}
      <div className="rounded-2xl overflow-hidden shadow-lg border border-green-200 dark:border-green-900/30">
        {/* Header with football imagery */}
        <div className="relative bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 text-white overflow-hidden">
          {/* Background pattern: subtle pitch lines */}
          <div className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 32px, rgba(255,255,255,0.8) 32px, rgba(255,255,255,0.8) 33px), repeating-linear-gradient(90deg, transparent, transparent 49.5%, rgba(255,255,255,0.4) 49.5%, rgba(255,255,255,0.4) 50.5%, transparent 50.5%)',
            }}
          />
          {/* Corner decorations */}
          <div className="absolute top-2 right-3 text-5xl opacity-20">⚽</div>
          <div className="absolute bottom-1 left-3 text-4xl opacity-20">🏟️</div>

          <div className="relative flex items-center justify-between px-5 py-4">
            <button
              onClick={goPrevMonth}
              disabled={currentMonth === 0}
              className="p-2 rounded-lg hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="text-center">
              <h3 className="text-xl font-black tracking-wider flex items-center gap-2">
                <span>⚽</span> {monthLabel} <span>⚽</span>
              </h3>
              <p className="text-xs text-green-200 mt-0.5">
                {currentMonth === 0 ? '小组赛阶段' : '淘汰赛阶段'}
              </p>
            </div>
            <button
              onClick={goNextMonth}
              disabled={currentMonth === 1}
              className="p-2 rounded-lg hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 bg-green-50 dark:bg-green-950/30 border-b border-green-100 dark:border-green-900/20">
          {['日', '一', '二', '三', '四', '五', '六'].map((d, i) => (
            <div key={d} className={`text-center text-xs font-semibold py-3 ${
              i === 0 || i === 6
                ? 'text-red-400 dark:text-red-300'
                : 'text-green-700 dark:text-green-400'
            }`}>{d}</div>
          ))}
        </div>

        {/* Calendar grid with football pitch background */}
        <div
          className="bg-white dark:bg-gray-800"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(34,197,94,0.02) 3px, rgba(34,197,94,0.02) 6px)',
          }}
        >
          {weeks.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7">
              {week.map((day, di) => {
                const isInRange = day >= startDay && day <= endDay;
                const dayStr = `${month + 1}月${day}日`;
                const info = dateInfo[dayStr];
                const matchCount = info?.count || 0;
                const mainStage = info ? getMainStage(info.stages) : '';
                const ss = stageStyle[mainStage];
                const isSelected = dateFilter === dayStr;
                const isToday = day === 12 && currentMonth === 0;

                // Empty cell
                if (day === 0) {
                  return <div key={di} className="aspect-square border-r border-b border-gray-50 dark:border-gray-750/30 last:border-r-0" />;
                }

                // Out of range
                if (!isInRange) {
                  return (
                    <div key={di} className="aspect-square border-r border-b border-gray-50 dark:border-gray-750/30 last:border-r-0 flex items-center justify-center bg-gray-50/60 dark:bg-gray-800/50">
                      <span className="text-xs text-gray-300 dark:text-gray-600">{day}</span>
                    </div>
                  );
                }

                // Match day cell
                return (
                  <button
                    key={di}
                    onClick={() => matchCount > 0 && handleCalendarDateClick(dayStr)}
                    disabled={matchCount === 0}
                    className={`aspect-square border-r border-b border-gray-50 dark:border-gray-750/30 last:border-r-0 flex flex-col p-1.5 transition-all duration-200 relative
                      ${matchCount > 0 ? 'cursor-pointer hover:scale-[1.02] hover:shadow-lg hover:z-10 hover:border-transparent' : 'cursor-default'}
                      ${isSelected ? 'bg-gradient-to-br from-green-600 to-emerald-700 text-white z-10 scale-[1.02] shadow-xl ring-2 ring-green-500' : ''}
                      ${!isSelected && matchCount > 0 ? `${ss?.bg || ''} border-2 ${ss?.border || 'border-transparent'} rounded-[10px] m-0.5` : ''}
                      ${isToday && !isSelected ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-600' : ''}`}
                    style={isSelected ? {} : matchCount > 0 ? {} : {}}
                  >
                    {/* Top: day number + today indicator */}
                    <div className="flex-1 flex flex-col items-center justify-center gap-0.5">
                      <div className={`flex items-center gap-0.5`}>
                        {isToday && !isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                        )}
                        <span className={`text-sm font-bold leading-none
                          ${isSelected ? 'text-white' : matchCount > 0 ? 'text-gray-800 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500'}
                        `}>
                          {day}
                        </span>
                      </div>
                      {isToday && !isSelected && (
                        <span className="text-[9px] font-medium text-amber-600 dark:text-amber-400">今天</span>
                      )}
                      {/* Match dot indicator */}
                      {matchCount > 0 && !isSelected && (
                        <div className="flex gap-0.5 mt-0.5">
                          {Array.from({ length: Math.min(matchCount, 3) }).map((_, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${ss?.dot || 'bg-gray-400'}`} />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom: stage label */}
                    {matchCount > 0 && (
                      <span className={`text-[9px] leading-tight font-bold text-center truncate w-full
                        ${isSelected ? 'text-white/90' : `${ss?.text || 'text-gray-500'}`}`}>
                        {ss?.label || ''}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {[
              { s: stageStyle.group, l: '小组赛', icon: '⚽' },
              { s: stageStyle.round32, l: '1/16', icon: '🏟️' },
              { s: stageStyle.round16, l: '1/8', icon: '🏟️' },
              { s: stageStyle.quarter, l: '1/4', icon: '🏟️' },
              { s: stageStyle.semi, l: '半决赛', icon: '🔥' },
              { s: stageStyle.final, l: '决赛/季军', icon: '🏆' },
            ].map(({ s, l, icon }) => (
              <div key={l} className="flex items-center gap-1.5">
                <div className={`w-3 h-3 rounded-full ${s.dot} shadow-sm`} />
                <span className="text-xs text-gray-500 dark:text-gray-400">{icon} {l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Date Matches */}
      {dateFilter !== 'all' && (
        <div className="card-base overflow-hidden">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-900/30">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Calendar size={18} className="text-wc-green" />
                {dateFilter}
                <span className="badge bg-wc-green/10 text-wc-green">{selectedDateMatches.length} 场</span>
              </h3>
              <button
                onClick={() => setDateFilter('all')}
                className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                清除
              </button>
            </div>
          </div>

          {selectedDateMatches.length > 0 ? (
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {selectedDateMatches.map((match) => {
                const homeTeam = getTeamById(match.homeTeamId);
                const awayTeam = getTeamById(match.awayTeamId);
                return (
                  <div key={match.id}
                    className={`p-4 transition-colors ${matchDetails[match.id] ? 'hover:bg-gray-50 dark:hover:bg-gray-700/30 cursor-pointer' : ''}`}
                    onClick={() => matchDetails[match.id] && setSelectedMatch(match)}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-wc-green">{match.timeBeijing}</span>
                          {match.group ? (
                            <span className="badge bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{match.group}组</span>
                          ) : (
                            <span className="badge bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                              {STAGE_LABELS[match.stage] || match.stage}
                            </span>
                          )}
                        </div>
                        {statusBadge(match.status)}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <span className="font-semibold text-gray-900 dark:text-white text-sm">{homeTeam?.nameZh || '待定'}</span>
                            <span className="text-lg">{homeTeam && <FlagImg team={homeTeam} />}</span>
                          </div>
                        </div>
                        <div className="shrink-0 px-3">
                          {match.status !== 'scheduled' && match.homeScore != null ? (
                            <span className="text-xl font-black text-gray-900 dark:text-white tabular-nums">{match.homeScore} - {match.awayScore}</span>
                          ) : (
                            <span className="text-sm font-bold text-gray-400 dark:text-gray-500">VS</span>
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{awayTeam && <FlagImg team={awayTeam} />}</span>
                            <span className="font-semibold text-gray-900 dark:text-white text-sm">{awayTeam?.nameZh || '待定'}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                        <MapPin size={12} />
                        <span>{match.cityZh}</span>
                        <span className="mx-1">·</span>
                        <span>{match.stadium}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center text-sm text-gray-500 dark:text-gray-400">
              该日期没有符合条件的比赛
            </div>
          )}
        </div>
      )}

      {/* No date selected hint */}
      {dateFilter === 'all' && (
        <div className="card-base p-10 text-center">
          <div className="text-5xl mb-4">📅</div>
          <p className="text-gray-500 dark:text-gray-400 font-medium">点击日历中有比赛标记的日期查看详情</p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">小组赛阶段每天有多场比赛</p>
        </div>
      )}
    </div>
  );

  // ========== List View (existing) ==========
  const renderList = () => (
    <>
      {allDates.length === 0 ? (
        <div className="card-base p-12 text-center">
          <Calendar size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-gray-500 dark:text-gray-400">没有匹配的赛事</p>
          {dateFilter !== 'all' && (
            <button onClick={() => setDateFilter('all')} className="mt-2 text-wc-green hover:underline text-sm">
              清除日期筛选
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {allDates.map((date) => {
            const isExpanded = expandedDates.has(date);
            const matches = matchesByDate[date];
            return (
              <div key={date} className="card-base overflow-hidden">
                <button
                  onClick={() => toggleDate(date)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-wc-green" />
                    <span className="font-bold text-gray-900 dark:text-white text-lg">{date}</span>
                    <span className="badge bg-wc-green/10 text-wc-green dark:bg-green-900/30 dark:text-green-400">
                      {matches.length} 场
                    </span>
                  </div>
                  {isExpanded ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                </button>

                {isExpanded && (
                  <div className="border-t border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
                    {matches.map((match) => {
                      const homeTeam = getTeamById(match.homeTeamId);
                      const awayTeam = getTeamById(match.awayTeamId);
                      const hasTeams = homeTeam && awayTeam;

                      return (
                        <div key={match.id}
                          className={`p-4 transition-colors ${matchDetails[match.id] ? 'hover:bg-gray-50 dark:hover:bg-gray-700/30 cursor-pointer' : ''}`}
                          onClick={() => matchDetails[match.id] && setSelectedMatch(match)}
                        >
                          {match.stage !== 'group' && !hasTeams ? (
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                              <div className="flex items-center gap-2 shrink-0">
                                <span className="badge bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                                  {STAGE_LABELS[match.stage] || match.stage}
                                </span>
                                {match.matchNumber != null && match.matchNumber > 0 && (
                                  <span className="text-xs text-gray-400 dark:text-gray-500">#{match.matchNumber}</span>
                                )}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{match.round}</p>
                              </div>
                              <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                                {match.stadium !== '待定' && (
                                  <span className="flex items-center gap-1"><MapPin size={12} />{match.stadium}</span>
                                )}
                                <span className="flex items-center gap-1"><Clock size={12} />{match.timeBeijing}</span>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col gap-3">
                              <div className="flex items-center justify-between flex-wrap gap-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-wc-green">{match.timeBeijing}</span>
                                  {match.group ? (
                                    <span className="badge bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{match.group}组</span>
                                  ) : (
                                    <span className="badge bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
                                      {STAGE_LABELS[match.stage] || match.stage}
                                    </span>
                                  )}
                                </div>
                                {statusBadge(match.status)}
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="flex-1 text-right">
                                  <div className="flex items-center justify-end gap-2">
                                    <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                      {homeTeam?.nameZh || match.homeTeamId}
                                    </span>
                                    <span className="text-xl">{homeTeam && <FlagImg team={homeTeam} />}</span>
                                  </div>
                                </div>
                                <div className="shrink-0 px-3">
                                  {match.status !== 'scheduled' && match.homeScore != null && match.awayScore != null ? (
                                    <span className="text-xl font-black text-gray-900 dark:text-white tabular-nums">
                                      {match.homeScore} - {match.awayScore}
                                    </span>
                                  ) : (
                                    <span className="text-sm font-bold text-gray-400 dark:text-gray-500">VS</span>
                                  )}
                                </div>
                                <div className="flex-1 text-left">
                                  <div className="flex items-center gap-2">
                                    <span className="text-xl">{awayTeam && <FlagImg team={awayTeam} />}</span>
                                    <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                      {awayTeam?.nameZh || match.awayTeamId}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
                                <MapPin size={12} />
                                <span>{match.cityZh}</span>
                                <span className="mx-1">·</span>
                                <span>{match.stadium}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );

  return (
    <div className="page-container animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">赛事赛程</h1>
        {/* View Toggle */}
        <div className="flex rounded-lg bg-gray-100 dark:bg-gray-700 p-0.5">
          <button
            onClick={() => setViewMode('list')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'list' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <LayoutList size={16} /> 列表
          </button>
          <button
            onClick={() => setViewMode('calendar')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              viewMode === 'calendar' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            <CalendarDays size={16} /> 日历
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="card-base p-4 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <Filter size={18} className="text-gray-400 shrink-0" />
          <div className="flex flex-wrap gap-1.5">
            {['all', ...STAGE_ORDER].map((stage) => (
              <button
                key={stage}
                onClick={() => handleStageFilter(stage)}
                className={`badge cursor-pointer transition-colors ${
                  stageFilter === stage
                    ? 'bg-wc-green text-white dark:bg-green-600'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {STAGE_LABELS[stage]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Match Count & Actions */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          共 <span className="font-bold text-gray-700 dark:text-gray-200">{filteredMatches.length}</span> 场比赛
          {dateFilter !== 'all' && (
            <button onClick={() => setDateFilter('all')} className="ml-2 text-wc-green hover:underline">
              清除日期
            </button>
          )}
        </p>
        {viewMode === 'list' && allDates.length > 0 && (
          <div className="flex gap-2">
            <button onClick={() => setExpandedDates(new Set(allDates))} className="text-xs text-wc-green hover:underline dark:text-green-400">
              全部展开
            </button>
            <button onClick={() => setExpandedDates(new Set())} className="text-xs text-gray-500 hover:underline dark:text-gray-400">
              全部折叠
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      {viewMode === 'calendar' ? renderCalendar() : renderList()}
      {selectedMatch && (
        <MatchDetailModal match={selectedMatch} onClose={() => setSelectedMatch(null)} />
      )}
    </div>
  );
}
