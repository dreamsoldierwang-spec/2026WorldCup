import { useState, useCallback, useEffect } from 'react';

export interface FanMessage {
  id: string;
  nickname: string;
  teamIds: string[];
  message: string;
  timestamp: number;
}

const STORAGE_KEY = 'wc2026_fan_messages';

function loadMessages(): FanMessage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveMessages(msgs: FanMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  } catch { /* quota exceeded — ignore */ }
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

let idCounter = Date.now();
function genId(): string {
  return `local_${++idCounter}_${Math.random().toString(36).slice(2, 8)}`;
}

export function useFanData() {
  const [messages, setMessages] = useState<FanMessage[]>([]);
  const [teamSupport, setTeamSupport] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const msgs = loadMessages();
      setMessages(msgs);
      setTeamSupport(calcTeamSupport(msgs));
    } catch (e: any) {
      setError('加载留言失败');
    } finally {
      setLoading(false);
    }
  }, []);

  const addMessage = useCallback(async (nickname: string, teamIds: string[], message: string) => {
    const newMsg: FanMessage = {
      id: genId(),
      nickname: nickname || '匿名球迷',
      teamIds,
      message,
      timestamp: Date.now(),
    };
    setMessages(prev => {
      const next = [newMsg, ...prev];
      saveMessages(next);
      return next;
    });
    setTeamSupport(prev => {
      const next = { ...prev };
      newMsg.teamIds.forEach(tid => {
        next[tid] = (next[tid] || 0) + 1;
      });
      return next;
    });
    return newMsg;
  }, []);

  const deleteMessage = useCallback(async (id: string) => {
    setMessages(prev => {
      const next = prev.filter(m => m.id !== id);
      saveMessages(next);
      return next;
    });
    setTeamSupport(prev => {
      // Recalculate from current messages
      const current = loadMessages();
      return calcTeamSupport(current);
    });
  }, []);

  return { messages, teamSupport, addMessage, deleteMessage, loading, error };
}
