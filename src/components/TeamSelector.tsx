import { useState, useRef, useEffect } from 'react';
import { teams } from '../data/teams';
import FlagImg from './FlagImg';
import { Search, X } from 'lucide-react';

interface TeamSelectorProps {
  selected: string[];
  onChange: (teamIds: string[]) => void;
  max?: number;
}

export default function TeamSelector({ selected, onChange, max = 5 }: TeamSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const filtered = teams.filter((t) => {
    if (search && !t.nameZh.includes(search) && !t.name.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });

  const toggleTeam = (teamId: string) => {
    if (selected.includes(teamId)) {
      onChange(selected.filter((id) => id !== teamId));
    } else if (selected.length < max) {
      onChange([...selected, teamId]);
    }
  };

  const removeTeam = (teamId: string) => {
    onChange(selected.filter((id) => id !== teamId));
  };

  const selectedTeams = teams.filter((t) => selected.includes(t.id));

  return (
    <div ref={containerRef} className="relative">
      {/* Selected tags */}
      <div
        className="flex flex-wrap gap-1.5 p-2 min-h-[42px] rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 cursor-text"
        onClick={() => setOpen(true)}
      >
        {selectedTeams.map((t) => (
          <span
            key={t.id}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 dark:bg-green-900/30 text-sm"
          >
            <FlagImg team={t} size="sm" />
            <span className="text-gray-700 dark:text-gray-200 text-xs">{t.nameZh}</span>
            <button
              onClick={(e) => { e.stopPropagation(); removeTeam(t.id); }}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <X size={12} />
            </button>
          </span>
        ))}
        {selected.length === 0 && (
          <span className="text-gray-400 dark:text-gray-500 text-sm py-0.5">
            选择支持的球队（最多{max}支）...
          </span>
        )}
      </div>

      {selected.length > 0 && (
        <p className="text-xs text-gray-400 mt-1">{selected.length}/{max} 支球队</p>
      )}

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-600 overflow-hidden">
          {/* Search */}
          <div className="p-2 border-b border-gray-100 dark:border-gray-700">
            <div className="relative">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="搜索球队..."
                className="w-full pl-8 pr-3 py-2 rounded-md text-sm bg-gray-50 dark:bg-gray-700 border-0 outline-none focus:ring-2 focus:ring-wc-green text-gray-900 dark:text-white"
                autoFocus
              />
            </div>
          </div>
          {/* Team list */}
          <div className="max-h-56 overflow-y-auto p-1">
            {filtered.map((t) => {
              const isSelected = selected.includes(t.id);
              const isDisabled = !isSelected && selected.length >= max;
              return (
                <button
                  key={t.id}
                  onClick={() => !isDisabled && toggleTeam(t.id)}
                  disabled={isDisabled}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                    isSelected
                      ? 'bg-green-50 dark:bg-green-900/20 text-wc-green font-medium'
                      : isDisabled
                      ? 'opacity-40 cursor-not-allowed'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200'
                  }`}
                >
                  <FlagImg team={t} size="sm" />
                  <span className="flex-1 text-left">{t.nameZh}</span>
                  <span className="text-xs text-gray-400">{t.group}组</span>
                  {isSelected && <span className="text-wc-green text-xs">✓</span>}
                </button>
              );
            })}
            {filtered.length === 0 && (
              <p className="text-center text-gray-400 text-sm py-4">没有匹配的球队</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
