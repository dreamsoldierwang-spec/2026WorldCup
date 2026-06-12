/**
 * Netlify Serverless Function — Fan Message Board API
 * Stores messages in Netlify Blobs (built-in persistent key-value store)
 * All routes: GET/POST/DELETE /api/messages
 */
import { getStore } from '@netlify/blobs';

const STORE_KEY = 'fan-messages';
const MAX_MESSAGES = 5000;

function getMessagesStore() {
  return getStore('worldcup-data');
}

export default async function handler(req) {
  const url = new URL(req.url);
  const path = url.pathname.replace('/api/messages', '');
  const id = path.replace('/', '').trim();
  const store = getMessagesStore();

  try {
    // GET /api/messages — return all messages
    if (req.method === 'GET') {
      const data = await store.get(STORE_KEY, { type: 'json' });
      const messages = Array.isArray(data) ? data : [];
      return new Response(JSON.stringify({ success: true, data: messages }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // POST /api/messages — create new message
    if (req.method === 'POST') {
      const body = await req.json().catch(() => ({}));
      const { nickname, teamIds, message } = body;

      if (!message || !message.trim()) {
        return new Response(JSON.stringify({ success: false, error: '留言不能为空' }), {
          status: 400, headers: { 'Content-Type': 'application/json' },
        });
      }
      if (!teamIds || !Array.isArray(teamIds) || teamIds.length === 0) {
        return new Response(JSON.stringify({ success: false, error: '请至少选择一支球队' }), {
          status: 400, headers: { 'Content-Type': 'application/json' },
        });
      }

      const existing = await store.get(STORE_KEY, { type: 'json' });
      const messages = Array.isArray(existing) ? existing : [];

      const newMsg = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        nickname: (nickname || '').trim().slice(0, 20) || '匿名球迷',
        teamIds: teamIds.slice(0, 5),
        message: message.trim().slice(0, 500),
        timestamp: Date.now(),
      };

      messages.unshift(newMsg);

      // Trim if too many
      if (messages.length > MAX_MESSAGES) {
        messages.splice(MAX_MESSAGES);
      }

      await store.setJSON(STORE_KEY, messages);

      return new Response(JSON.stringify({ success: true, data: newMsg }), {
        status: 200, headers: { 'Content-Type': 'application/json' },
      });
    }

    // DELETE /api/messages/:id — delete a message
    if (req.method === 'DELETE' && id) {
      const existing = await store.get(STORE_KEY, { type: 'json' });
      const messages = Array.isArray(existing) ? existing : [];
      const index = messages.findIndex((m) => m.id === id);

      if (index === -1) {
        return new Response(JSON.stringify({ success: false, error: '消息不存在' }), {
          status: 404, headers: { 'Content-Type': 'application/json' },
        });
      }

      messages.splice(index, 1);
      await store.setJSON(STORE_KEY, messages);

      return new Response(JSON.stringify({ success: true }), {
        status: 200, headers: { 'Content-Type': 'application/json' },
      });
    }

    // Method not allowed
    return new Response(JSON.stringify({ success: false, error: 'Method not allowed' }), {
      status: 405, headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('[messages] Error:', err.message);
    return new Response(JSON.stringify({ success: false, error: '服务器错误，请重试' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    });
  }
}
