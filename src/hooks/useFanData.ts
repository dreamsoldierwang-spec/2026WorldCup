import { useState, useCallback, useEffect } from 'react';

export interface FanMessage {
  id: string;
  nickname: string;
  teamIds: string[];
  message: string;
  timestamp: number;
}

// API base: same origin (served by the same Express server)
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

  const refresh = useCallback(async () => {
    try {
      const msgs = await apiGet();
      setMessages(msgs);
      setTeamSupport(calcTeamSupport(msgs));
      setError(null);
    } catch (e: any) {
      setError(e.message || '加载失败');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const addMessage = useCallback(async (nickname: string, teamIds: string[], message: string) => {
    const newMsg = await apiPost(nickname, teamIds, message);
    // Small delay to ensure Netlify Blobs write is synced before reading
    await new Promise(r => setTimeout(r, 500));
    await refresh();
    return newMsg;
  }, [refresh]);

  const deleteMessage = useCallback(async (id: string) => {
    await apiDelete(id);
    await refresh();
  }, [refresh]);

  return { messages, teamSupport, addMessage, deleteMessage, loading, error };
}
