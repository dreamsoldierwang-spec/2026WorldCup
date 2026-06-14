import { useState } from 'react';
import { records } from '../data/records';
import { Trophy, Medal } from 'lucide-react';
import type { RecordCategory, RecordEntry } from '../types';

function getRankDisplay(rank: number): string | null {
  if (rank === 0) return null;
  if (rank === 1) return '🏆';
  if (rank === 2) return '🥈';
  if (rank === 3) return '🥉';
  return `${rank}`;
}

function getRankColorClass(rank: number): string {
  if (rank === 0) return '';
  if (rank === 1) return 'bg-yellow-50 dark:bg-yellow-900/20';
  if (rank === 2) return 'bg-gray-50 dark:bg-gray-700/50';
  if (rank === 3) return 'bg-orange-50 dark:bg-orange-900/20';
  return '';
}

export default function Records() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const category: RecordCategory = records[activeCategory];
  const isFunFact = category.title === 'Interesting Records';

  return (
    <div className="page-container animate-fade-in">
      <div className="flex items-center gap-3 mb-2">
        <Trophy size={28} className="text-wc-gold" />
        <h1 className="section-title mb-0">历史纪录</h1>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        世界杯历史上的经典数据与纪录
      </p>

      {/* Category Tabs — touch-scrollable */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide touch-scroll snap-x">
        {records.map((cat, idx) => (
          <button
            key={cat.title}
            onClick={() => setActiveCategory(idx)}
            className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              activeCategory === idx
                ? 'bg-wc-green text-white shadow-md shadow-green-500/25'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            <span className="text-lg">{cat.icon}</span>
            <span>{cat.titleZh}</span>
          </button>
        ))}
      </div>

      {/* Current Category Card */}
      <div className="card-base overflow-hidden animate-slide-up">
        {/* Category Header */}
        <div className="p-5 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {category.titleZh}
              </h2>
              <p className="text-sm text-gray-400 dark:text-gray-500">{category.title}</p>
            </div>
          </div>
          {category.note && (
            <p className="mt-3 text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-lg px-3 py-1.5 inline-block">
              {category.note}
            </p>
          )}
        </div>

        {/* Fun Facts (rank=0) - List style */}
        {isFunFact ? (
          <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {category.records.map((record, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/10 border border-amber-200 dark:border-amber-800/30"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">📖</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {record.label}
                    </p>
                    <p className="text-lg font-bold text-wc-green dark:text-green-400 mt-1">
                      {record.value}
                    </p>
                    {record.detail && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {record.detail}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Standard Records Table */
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider w-20">
                    排名
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    纪录
                  </th>
                  <th className="text-right px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider w-32">
                    数据
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    详情
                  </th>
                </tr>
              </thead>
              <tbody>
                {category.records.map((record, idx) => {
                  const rankDisplay = getRankDisplay(record.rank);
                  const rowClass = getRankColorClass(record.rank);

                  return (
                    <tr
                      key={idx}
                      className={`border-b border-gray-50 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors ${rowClass}`}
                    >
                      {/* Rank */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          {rankDisplay ? (
                            <span className="text-lg font-bold text-gray-700 dark:text-gray-200">
                              {rankDisplay}
                            </span>
                          ) : (
                            <span className="text-sm text-gray-400 dark:text-gray-500">-</span>
                          )}
                          {record.rank === 1 && (
                            <Medal size={14} className="text-wc-gold" />
                          )}
                        </div>
                      </td>

                      {/* Label */}
                      <td className="px-5 py-4">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {record.label}
                        </span>
                      </td>

                      {/* Value */}
                      <td className="px-5 py-4 text-right">
                        <span className="font-bold text-lg text-wc-green dark:text-green-400">
                          {record.value}
                        </span>
                      </td>

                      {/* Detail */}
                      <td className="px-5 py-4 hidden sm:table-cell">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {record.detail || '-'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Category Navigation Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {records.map((cat, idx) => (
          <button
            key={cat.title}
            onClick={() => setActiveCategory(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              activeCategory === idx
                ? 'bg-wc-green w-6'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            title={cat.titleZh}
          />
        ))}
      </div>
    </div>
  );
}
