import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const navItems = [
  { path: '/', label: '淘汰赛', icon: '⚔️' },
  { path: '/home', label: '首页', icon: '🏠' },
  { path: '/groups', label: '分组', icon: '📋' },
  { path: '/teams', label: '球队', icon: '⚽' },
  { path: '/schedule', label: '赛程', icon: '📅' },
  { path: '/stars', label: '球星', icon: '⭐' },
  { path: '/records', label: '纪录', icon: '🏆' },
  { path: '/news', label: '新闻', icon: '📰' },
  { path: '/standings', label: '积分榜', icon: '📊' },
  { path: '/scorers', label: '射手榜', icon: '🎯' },
  { path: '/host-cities', label: '主办城市', icon: '🏟️' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b-3 border-black dark:border-gray-700"
      style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-3xl">⚽</span>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                2026 世界杯
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                美国 · 加拿大 · 墨西哥
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-wc-green text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="px-2 py-3 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-wc-green text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
