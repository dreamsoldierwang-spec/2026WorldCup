import { useState, useMemo } from 'react';
import { news } from '../data/news';
import { Newspaper, TrendingUp, Sparkles, Zap } from 'lucide-react';

const CATEGORY_CONFIG: Record<string, { icon: string; color: string; badge: string }> = {
  '赛况': { icon: '⚽', color: 'text-green-600 dark:text-green-400', badge: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
  '花絮': { icon: '✨', color: 'text-purple-600 dark:text-purple-400', badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
  '纪录': { icon: '🏆', color: 'text-amber-600 dark:text-amber-400', badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' },
  '场外': { icon: '🎭', color: 'text-blue-600 dark:text-blue-400', badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
};

export default function News() {
  const [categoryFilter, setCategoryFilter] = useState<string>('全部');

  const filtered = useMemo(() => {
    if (categoryFilter === '全部') return news;
    return news.filter(n => n.category === categoryFilter);
  }, [categoryFilter]);

  const categories = ['全部', '赛况', '花絮', '纪录', '场外'];

  // Group by date
  const groupedByDate = useMemo(() => {
    const grouped: Record<string, typeof news> = {};
    filtered.forEach(n => {
      if (!grouped[n.date]) grouped[n.date] = [];
      grouped[n.date].push(n);
    });
    return grouped;
  }, [filtered]);

  const dates = Object.keys(groupedByDate).sort((a, b) => b.localeCompare(a));

  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title flex items-center gap-2">
        <Newspaper size={28} className="text-wc-green" /> 每日新闻
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              categoryFilter === cat
                ? 'bg-wc-green text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            {cat === '全部' ? '📰' : CATEGORY_CONFIG[cat]?.icon} {cat}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        共 <span className="font-bold text-gray-700 dark:text-gray-200">{filtered.length}</span> 条新闻
      </p>

      {/* News by date */}
      <div className="space-y-8">
        {dates.map(date => (
          <div key={date}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-wc-green" />
              {date}
              <span className="badge bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs">
                {groupedByDate[date].length}条
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {groupedByDate[date].map(item => {
                const catConf = CATEGORY_CONFIG[item.category];
                return (
                  <div key={item.id} className="card-base p-5 animate-slide-up group hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl shrink-0 mt-0.5">{item.emoji}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`badge text-xs ${catConf?.badge || ''}`}>
                            {catConf?.icon} {item.category}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-wc-green transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card-base p-12 text-center">
          <Newspaper size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-gray-500 dark:text-gray-400">暂无此类新闻</p>
        </div>
      )}
    </div>
  );
}
