import { useState, useMemo } from 'react';
import { useFanData } from '../hooks/useFanData';
import { teams } from '../data/teams';
import TeamSelector from '../components/TeamSelector';
import FlagImg from '../components/FlagImg';
import EmojiPicker from '../components/EmojiPicker';
import { MessageCircle, Heart, Send, Smile, Trash2, Trophy, Users, Loader2, AlertCircle } from 'lucide-react';

function formatTime(ts: number): string {
  const d = new Date(ts);
  const now = new Date();
  const diff = now.getTime() - ts;
  if (diff < 60000) return '刚刚';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}分钟前`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}小时前`;
  return `${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}

export default function FanZone() {
  const { messages, teamSupport, addMessage, deleteMessage, loading, error } = useFanData();
  const [nickname, setNickname] = useState('');
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const [activeTab, setActiveTab] = useState<'board' | 'ranking'>('board');
  const [sortBy, setSortBy] = useState<'count' | 'group'>('count');
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [sendSuccess, setSendSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!message.trim()) return;
    setSending(true);
    setSendError('');
    setSendSuccess(false);
    try {
      await addMessage(nickname, selectedTeams, message);
      setMessage('');
      setShowEmoji(false);
      setSendSuccess(true);
      setTimeout(() => setSendSuccess(false), 3000);
    } catch (e: any) {
      setSendError(e.message || '发送失败');
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Team support ranking
  const supportRanking = useMemo(() => {
    return teams
      .map((t) => ({ team: t, count: teamSupport[t.id] || 0 }))
      .filter((item) => sortBy === 'count' || true)
      .sort((a, b) => b.count - a.count);
  }, [teamSupport, sortBy]);

  const topTeams = supportRanking.filter((t) => t.count > 0);
  const totalFans = Object.values(teamSupport).reduce((s, c) => s + c, 0);
  const maxCount = topTeams.length > 0 ? topTeams[0].count : 1;

  return (
    <div className="page-container animate-fade-in">
      <h1 className="section-title flex items-center gap-2">
        <MessageCircle size={28} className="text-wc-green" /> 球迷专区
      </h1>

      {/* Tab Toggle */}
      <div className="flex gap-1 mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1 w-fit">
        <button
          onClick={() => setActiveTab('board')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'board' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <MessageCircle size={16} /> 留言板
        </button>
        <button
          onClick={() => setActiveTab('ranking')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'ranking' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          <Trophy size={16} /> 球队支持排行
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Input Area */}
          {activeTab === 'board' && (
            <div className="card-base p-4 sm:p-6">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Send size={18} className="text-wc-green" /> 发表留言
              </h2>

              {/* Nickname */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5">昵称</label>
                <input
                  type="text"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  placeholder="给自己起个名字..."
                  maxLength={20}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-wc-green focus:border-transparent outline-none"
                />
              </div>

              {/* Team Selector */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5">
                  <Heart size={14} className="inline mr-1 text-red-500" /> 支持的球队
                </label>
                <TeamSelector selected={selectedTeams} onChange={setSelectedTeams} max={5} />
              </div>

              {/* Message with Emoji */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1.5">留言</label>
                <div className="relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="写下你想说的话...（支持表情 😊）"
                    maxLength={500}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-wc-green focus:border-transparent outline-none resize-none"
                  />
                  <button
                    onClick={() => setShowEmoji(!showEmoji)}
                    className={`absolute right-2 bottom-2 p-1.5 rounded-lg transition-colors ${
                      showEmoji ? 'bg-green-100 dark:bg-green-900/30 text-wc-green' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                    }`}
                  >
                    <Smile size={20} />
                  </button>
                  {showEmoji && (
                    <EmojiPicker
                      onSelect={(emoji) => { setMessage((m) => m + emoji); }}
                      onClose={() => setShowEmoji(false)}
                    />
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-1 text-right">{message.length}/500</p>
              </div>

              {sendError && (
                <div className="mb-3 p-2 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm flex items-center gap-2">
                  <AlertCircle size={14} /> {sendError}
                </div>
              )}
              {sendSuccess && (
                <div className="mb-3 p-2 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm flex items-center gap-2">
                  ✅ 留言发送成功！
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={!message.trim() || sending}
                className="w-full py-2.5 rounded-lg bg-wc-green text-white font-bold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {sending ? (
                  <><Loader2 size={16} className="animate-spin" /> 发送中...</>
                ) : (
                  <><Send size={16} /> 发送留言</>
                )}
              </button>
            </div>
          )}

          {/* Support Ranking (when tab active) */}
          {activeTab === 'ranking' && (
            <div className="card-base p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <Trophy size={18} className="text-wc-gold" /> 球队支持排行
                </h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'count' | 'group')}
                  className="text-xs rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-2 py-1 focus:outline-none"
                >
                  <option value="count">按支持人数</option>
                  <option value="group">按小组</option>
                </select>
              </div>

              {totalFans === 0 ? (
                <div className="text-center py-12">
                  <Users size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">还没有球迷表达支持</p>
                  <p className="text-sm text-gray-400 mt-1">去留言板留下你的支持吧！</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {supportRanking.map(({ team, count }, idx) => (
                    <div
                      key={team.id}
                      className="flex items-center gap-3"
                      style={{ opacity: count > 0 ? 1 : 0.3 }}
                    >
                      <div className="w-6 text-center text-sm font-bold text-gray-400">
                        {idx + 1}
                      </div>
                      <FlagImg team={team} size="md" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                            {team.nameZh}
                          </span>
                          <span className={`text-xs font-bold ml-2 ${count > 0 ? 'text-wc-green' : 'text-gray-400'}`}>
                            {count > 0 ? `${count}人` : '0'}
                          </span>
                        </div>
                        {count > 0 && (
                          <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-wc-green rounded-full transition-all duration-500"
                              style={{ width: `${(count / maxCount) * 100}%` }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Messages List */}
          {activeTab === 'board' && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Users size={18} /> 球迷留言
                {messages.length > 0 && (
                  <span className="badge bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                    {messages.length}
                  </span>
                )}
              </h2>

              {loading ? (
                <div className="card-base p-12 text-center">
                  <Loader2 size={32} className="mx-auto text-wc-green animate-spin mb-3" />
                  <p className="text-gray-500 dark:text-gray-400">加载留言中...</p>
                </div>
              ) : error ? (
                <div className="card-base p-8 text-center">
                  <AlertCircle size={40} className="mx-auto text-red-400 mb-3" />
                  <p className="text-gray-500 dark:text-gray-400">{error}</p>
                  <button onClick={() => window.location.reload()} className="mt-2 text-wc-green hover:underline text-sm">重试</button>
                </div>
              ) : messages.length === 0 ? (
                <div className="card-base p-12 text-center">
                  <MessageCircle size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">还没有留言，来做第一个球迷吧！</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg) => {
                    const supportedTeams = teams.filter((t) => msg.teamIds.includes(t.id));
                    return (
                      <div key={msg.id} className="card-base p-4 animate-slide-up">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-wc-green/10 flex items-center justify-center text-sm font-bold text-wc-green">
                              {msg.nickname.charAt(0)}
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900 dark:text-white text-sm">
                                {msg.nickname}
                              </span>
                              <span className="text-xs text-gray-400 ml-2">
                                {formatTime(msg.timestamp)}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => deleteMessage(msg.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            title="删除"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>

                        {supportedTeams.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-2">
                            {supportedTeams.map((t) => (
                              <span
                                key={t.id}
                                className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-50 dark:bg-red-900/20 text-xs"
                              >
                                <FlagImg team={t} size="sm" />
                                <span className="text-gray-600 dark:text-gray-300">{t.nameZh}</span>
                              </span>
                            ))}
                          </div>
                        )}

                        <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed whitespace-pre-wrap break-words">
                          {msg.message}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sidebar - Support Ranking (only on board tab) */}
        {activeTab === 'board' && (
          <div className="lg:col-span-1">
            <div className="card-base p-5 sticky top-20">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 text-sm">
                <Heart size={16} className="text-red-500" /> 球迷支持热度
              </h3>

              {topTeams.length === 0 ? (
                <div className="text-center py-8">
                  <Heart size={32} className="mx-auto text-gray-300 dark:text-gray-600 mb-2" />
                  <p className="text-sm text-gray-400">暂无数据</p>
                  <p className="text-xs text-gray-400 mt-1">快来留言支持你的主队！</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {topTeams.slice(0, 10).map(({ team, count }, idx) => (
                    <div key={team.id} className="flex items-center gap-2">
                      <span className={`w-5 text-xs font-bold text-center ${
                        idx === 0 ? 'text-wc-gold' : idx < 3 ? 'text-gray-500' : 'text-gray-400'
                      }`}>
                        {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}`}
                      </span>
                      <FlagImg team={team} size="sm" className="shrink-0" />
                      <span className="text-xs text-gray-700 dark:text-gray-300 truncate flex-1">
                        {team.nameZh}
                      </span>
                      <span className="text-xs font-bold text-wc-green">{count}</span>
                    </div>
                  ))}
                  {topTeams.length > 10 && (
                    <p className="text-xs text-gray-400 text-center pt-1">
                      还有 {topTeams.length - 10} 支球队...
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
