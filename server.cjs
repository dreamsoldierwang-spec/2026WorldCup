/**
 * 2026 World Cup Fan Zone Server
 * Serves static site + provides message API with file-based persistence
 */

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4173;
const DATA_FILE = path.join(__dirname, 'data', 'messages.json');

// Ensure data directory exists
const dataDir = path.dirname(DATA_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// ============ File I/O with Write Mutex ============
// Simple promise-based mutex to prevent concurrent write corruption

let writeLock = Promise.resolve();

function readMessages() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    console.error('[Server] Failed to read messages file, returning empty array');
    return [];
  }
}

function writeMessages(messages) {
  // Queue the write to serialize concurrent access
  writeLock = writeLock.then(() => {
    return new Promise((resolve, reject) => {
      const tmpFile = DATA_FILE + '.tmp';
      const json = JSON.stringify(messages, null, 2);

      // Step 1: Write to temp file
      fs.writeFile(tmpFile, json, 'utf-8', (err) => {
        if (err) {
          console.error('[Server] Failed to write temp file:', err.message);
          return reject(err);
        }

        // Step 2: Atomically rename temp to target (atomic on same filesystem)
        fs.rename(tmpFile, DATA_FILE, (err2) => {
          if (err2) {
            console.error('[Server] Failed to rename temp file:', err2.message);
            // Clean up temp file
            try { fs.unlinkSync(tmpFile); } catch {}
            return reject(err2);
          }
          console.log(`[Server] Saved ${messages.length} messages to disk`);
          resolve();
        });
      });
    });
  }).catch((err) => {
    console.error('[Server] Write queue error:', err.message);
  });

  return writeLock;
}

// ============ Express Middleware ============
app.use(express.json());

// Log requests
app.use((req, _res, next) => {
  if (req.path.startsWith('/api')) {
    console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${req.path}`);
  }
  next();
});

// ============ API Routes ============

// GET /api/messages — Get all messages
app.get('/api/messages', (_req, res) => {
  try {
    const messages = readMessages();
    res.json({ success: true, data: messages });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Failed to read messages' });
  }
});

// POST /api/messages — Add a new message
app.post('/api/messages', (req, res) => {
  try {
    const { nickname, teamIds, message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, error: '留言不能为空' });
    }
    if (!teamIds || !Array.isArray(teamIds) || teamIds.length === 0) {
      return res.status(400).json({ success: false, error: '请至少选择一支球队' });
    }
    if (teamIds.length > 5) {
      return res.status(400).json({ success: false, error: '最多支持5支球队' });
    }

    const messages = readMessages();
    const newMsg = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      nickname: (nickname || '').trim().slice(0, 20) || '匿名球迷',
      teamIds: teamIds.slice(0, 5),
      message: message.trim().slice(0, 500),
      timestamp: Date.now(),
    };

    messages.unshift(newMsg);

    // Limit total messages to 10000 to prevent file bloat
    if (messages.length > 10000) {
      messages.splice(10000);
    }

    writeMessages(messages).then(() => {
      res.json({ success: true, data: newMsg });
    }).catch(() => {
      res.status(500).json({ success: false, error: '保存失败，请重试' });
    });
  } catch (err) {
    res.status(500).json({ success: false, error: '服务器错误' });
  }
});

// DELETE /api/messages/:id — Delete a message
app.delete('/api/messages/:id', (req, res) => {
  try {
    const { id } = req.params;
    const messages = readMessages();
    const index = messages.findIndex((m) => m.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, error: '消息不存在' });
    }

    messages.splice(index, 1);

    writeMessages(messages).then(() => {
      res.json({ success: true });
    }).catch(() => {
      res.status(500).json({ success: false, error: '删除失败，请重试' });
    });
  } catch (err) {
    res.status(500).json({ success: false, error: '服务器错误' });
  }
});

// ============ Static Files ============
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback — all non-API routes serve index.html
app.get(/^(?!\/api\/).*/, (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ============ Start ============
// Load existing messages on startup
const existingMsgs = readMessages();
console.log(`[Server] Loaded ${existingMsgs.length} existing messages`);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Server] 2026 World Cup Fan Zone running at http://localhost:${PORT}`);
  console.log(`[Server] Messages stored in: ${DATA_FILE}`);
  console.log(`[Server] Press Ctrl+C to stop`);
});
