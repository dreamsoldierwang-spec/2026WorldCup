import { useState, useCallback, useEffect, useRef } from 'react';

export interface FanMessage {
  id: string;
  nickname: string;
  teamIds: string[];
  message: string;
  timestamp: number;
}

const API = '/api/messages';

async function apiGet(): Promise<FanMessage[]> {
  const res = await fetch(API);
  const json = await res.json();
  return json.data || [];
}

async function apiPost(nickname: string, teamIds: string[], message: string): Promise<FanMessage> {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nickname, teamIds, message }),
  });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || '发送失败');
  return json.data;
}

async function apiDelete(id: string): Promise<void> {
  const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
  const json = await res.json();
  if (!json.success) throw new Error(json.error || '删除失败');
}

function calcTeamSupport(msgs: FanMessage[]): Record<string, number> {
  const counts: Record<string, number> = {};
  msgs.forEach((m) => {
    m.teamIds.forEach((tid) => {
      counts[tid] = (counts[tid] || 0) + 1;
    });
  });
  return counts;
}

export function useFanData() {
  const [messages, setMessages] = useState<FanMessage[]>([]);
  const [teamSupport, setTeamSupport] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const refreshTimer = useRef<ReturnType<typeof setTimeout>>();

  const updateFromMessages = useCallback((msgs: FanMessage[]) => {
    setMessages(msgs);
    setTeamSupport(calcTeamSupport(msgs));
    setError(null);
  }, []);

  const refresh = useCallback(async () => {
    try {
      const msgs = await apiGet();
      updateFromMessages(msgs);
    } catch (e: any) {
      setError(e.message || '加载失败');
    } finally {
      setLoading(false);
    }
  }, [updateFromMessages]);

  useEffect(() => { refresh(); }, [refresh]);

  // Cleanup timer on unmount
  useEffect(() => () => { if (refreshTimer.current) clearTimeout(refreshTimer.current); }, []);

  const addMessage = useCallback(async (nickname: string, teamIds: string[], message: string) => {
    const newMsg = await apiPost(nickname, teamIds, message);

    // Optimistic: immediately add to local state so user sees it right away
    setMessages(prev => {
      // Avoid duplicate if refresh already added it
      if (prev.some(m => m.id === newMsg.id)) return prev;
      return [newMsg, ...prev];
    });
    setTeamSupport(prev => {
      const next = { ...prev };
      newMsg.teamIds.forEach(tid => {
        next[tid] = (next[tid] || 0) + 1;
      });
      return next;
    });

    // Background sync to catch concurrent messages from other users
    if (refreshTimer.current) clearTimeout(refreshTimer.current);
    refreshTimer.current = setTimeout(async () => {
      try {
        const msgs = await apiGet();
        setMessages(msgs);
        setTeamSupport(calcTeamSupport(msgs));
      } catch {}
    }, 2000);

    return newMsg;
  }, []);

  const deleteMessage = useCallback(async (id: string) => {
    await apiDelete(id);
    setMessages(prev => prev.filter(m => m.id !== id));
    // Background sync
    try {
      const msgs = await apiGet();
      setMessages(msgs);
      setTeamSupport(calcTeamSupport(msgs));
    } catch {}
  }, []);

  return { messages, teamSupport, addMessage, deleteMessage, loading, error };
}
