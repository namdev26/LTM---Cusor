# 📝 COLLABORATIVE EDITOR - TIMELINE CHI TIẾT

## ⏰ THỜI GIAN DỰ ÁN

**Bắt đầu:** 20:00 Ngày 11/6/2025 (Thứ 5)  
**Kết thúc:** 19:00 Ngày 13/6/2025 (Thứ 7)  
**Tổng thời gian:** 47 giờ

---

## 👥 PHÂN CÔNG TEAM

| Người | Vai trò | Tổng features | Client | Server |
|-------|---------|---------------|--------|--------|
| **Person 1** | Text Editor & Document | 3 | 3 | 3 |
| **Person 2** | Version Control | 3 | 3 | 3 |
| **Person 3** | User Management | 3 | 3 | 3 |

---

## 📅 TIMELINE CHI TIẾT THEO GIỜ

---

# 🗓️ NGÀY 1 - 11/6/2025 (THỨ 5)

## 20:00 - 24:00 (4 tiếng) - Setup Foundation

### ⏰ 20:00 - 23:00 | PERSON 2 - WebSocket Base (PUSH TRƯỚC)

**Priority:** 🔴 HIGH - Làm xong push NGAY để Person 3 dùng

**Branch:** `feature/person2-websocket-base`

**Tasks:**
```bash
# 20:00 - 20:15: Setup
git checkout develop
git pull origin develop
git checkout -b feature/person2-websocket-base
npm install

# 20:15 - 21:30: Server Development
# File: src/handlers/WebSocketHandler.js (UPDATE)
- Thêm connection pooling
- Thêm reconnection logic
- Thêm rate limiting base
- Comment rõ ràng cho Person 3 sử dụng

# File: src/services/ConnectionService.js (NEW)
- Manage active connections
- Track connection status
- Handle reconnection

# File: src/middleware/rateLimiter.js (NEW)
- Rate limiting cho WebSocket messages
- Prevent spam

# 21:30 - 22:00: Client Development
# File: client/src/hooks/useWebSocket.js (UPDATE)
- Thêm auto-reconnect logic
- Thêm connection status indicator

# 22:00 - 22:30: Testing
npm start                    # Test server
cd client && npm start       # Test client
# Test reconnection, rate limiting

# 22:30 - 23:00: Commit & Push
git add src/handlers/ src/services/ src/middleware/ client/src/hooks/
git commit -m "feat(both): add WebSocket optimization with reconnection and rate limiting"
git push origin feature/person2-websocket-base

# Tạo PR ngay:
# Title: [Person 2] WebSocket Optimization & Connection Management
# Description: Chi tiết các files
# Assign: @Person1 @Person3
# Label: feature, server, client, high-priority
```

**Deliverables:**
- ✅ WebSocket connection pooling
- ✅ Auto-reconnect mechanism
- ✅ Rate limiting middleware
- ✅ Connection status tracking

---

### ⏰ 20:00 - 24:00 | PERSON 1 - Document Routes (Song song với Person 2)

**Priority:** 🟡 MEDIUM - Files độc lập, không ảnh hưởng Person 2 & 3

**Branch:** `feature/person1-doc-base`

**Tasks:**
```bash
# 20:00 - 20:15: Setup
git checkout develop
git pull origin develop
git checkout -b feature/person1-doc-base
npm install

# 20:15 - 21:30: Server Development
# File: src/routes/documentRoutes.js (NEW - File hoàn toàn mới)
const express = require('express');
const router = express.Router();

// GET /api/document/stats
router.get('/stats', (req, res) => {
    // Calculate word count, char count, line count
});

// POST /api/document/search
router.post('/search', (req, res) => {
    // Search in document
});

# File: src/services/DocumentService.js (UPDATE - Phần riêng)
- Thêm calculateStats()
- Thêm searchContent()

# File: src/utils/textAnalyzer.js (NEW)
- Word count algorithm
- Character count
- Line count
- Reading time estimate

# 21:30 - 23:00: Client Development
# File: client/src/components/DocumentStats.js (NEW)
import React from 'react';

const DocumentStats = ({ stats }) => {
    return (
        <div className="doc-stats">
            <span>Words: {stats.wordCount}</span>
            <span>Characters: {stats.charCount}</span>
            <span>Lines: {stats.lineCount}</span>
            <span>Reading time: {stats.readingTime}min</span>
        </div>
    );
};

# File: client/src/hooks/useDocumentStats.js (NEW)
- Fetch stats từ API
- Auto-update khi document thay đổi

# 23:00 - 23:30: Testing
npm start                    # Test API
cd client && npm start       # Test UI
curl http://localhost:5000/api/document/stats

# 23:30 - 24:00: Commit & Push
git add src/routes/documentRoutes.js src/services/ src/utils/textAnalyzer.js
git add client/src/components/DocumentStats.js client/src/hooks/
git commit -m "feat(both): add document statistics with word count and reading time"
git push origin feature/person1-doc-base

# Tạo PR
```

**Deliverables:**
- ✅ Document statistics API
- ✅ Text analysis utilities
- ✅ Document stats UI component

---

### ⏰ 23:00 - 24:00 | PERSON 3 - Setup Presence (Bắt đầu sau khi Person 2 push)

**Priority:** 🔴 HIGH - Phụ thuộc vào Person 2

**Branch:** `feature/person3-presence-base`

**Tasks:**
```bash
# 23:00 - 23:15: Đợi Person 2 merge
# Review PR của Person 2
# Approve nếu OK

# 23:15 - 23:30: Pull code mới
git checkout develop
git pull origin develop  # Lấy code WebSocket của Person 2
git checkout -b feature/person3-presence-base

# 23:30 - 24:00: Setup initial structure
# File: src/services/PresenceService.js (NEW - File outline)
class PresenceService {
    constructor() {
        this.userPresence = new Map(); // userId -> { cursor, color, status }
    }
    
    // TODO: Implement tomorrow morning
    updateCursorPosition(userId, position) {}
    getUserColor(userId) {}
    broadcastPresence() {}
}

# Commit setup
git add src/services/PresenceService.js
git commit -m "chore(server): setup presence service structure"
# CHƯA push, sẽ push sáng mai
```

**Note:** Person 3 làm setup ban đầu, phần chính làm sáng hôm sau

---

# 🗓️ NGÀY 2 - 12/6/2025 (THỨ 6)

## 00:00 - 04:00 (4 tiếng) - Person 3 Presence Feature

### ⏰ 00:00 - 04:00 | PERSON 3 - User Presence (Hoàn thiện & Push)

**Branch:** `feature/person3-presence-base`

**Tasks:**
```bash
# 00:00 - 02:00: Server Development
# File: src/services/PresenceService.js (COMPLETE)
class PresenceService {
    constructor() {
        this.userPresence = new Map();
        this.colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'];
    }
    
    assignColor(userId) {
        // Assign unique color to user
    }
    
    updateCursorPosition(userId, position) {
        // Update cursor position
        this.userPresence.set(userId, { position, color, timestamp });
    }
    
    getUsersPresence() {
        return Array.from(this.userPresence.values());
    }
}

# File: src/handlers/WebSocketHandler.js (UPDATE - Thêm presence tracking)
handleMessage(ws, sessionId, message) {
    // ... existing code ...
    
    // Thêm case mới
    case MESSAGE_TYPES.CURSOR_MOVE:
        PresenceService.updateCursorPosition(userId, message.data.position);
        this.broadcastPresence();
        break;
}

# 02:00 - 03:30: Client Development
# File: client/src/hooks/useUserPresence.js (NEW)
export const useUserPresence = (socket) => {
    const [userCursors, setUserCursors] = useState([]);
    
    useEffect(() => {
        if (!socket) return;
        
        socket.addEventListener('message', (event) => {
            const msg = JSON.parse(event.data);
            if (msg.type === 'userPresence') {
                setUserCursors(msg.data);
            }
        });
    }, [socket]);
    
    const updateCursor = (position) => {
        socket.send(JSON.stringify({
            type: 'cursorMove',
            data: { position }
        }));
    };
    
    return { userCursors, updateCursor };
};

# File: client/src/components/UserCursor.js (NEW)
const UserCursor = ({ userId, position, color, name }) => {
    return (
        <div 
            className="user-cursor" 
            style={{ 
                top: position.y, 
                left: position.x,
                borderColor: color 
            }}
        >
            <span className="user-name">{name}</span>
        </div>
    );
};

# 03:30 - 04:00: Testing, Commit & Push
npm start
cd client && npm start
# Test cursor tracking

git add src/services/ src/handlers/ client/src/hooks/ client/src/components/
git commit -m "feat(both): add real-time user presence and cursor tracking"
git push origin feature/person3-presence-base

# Tạo PR
# Title: [Person 3] User Presence & Cursor Tracking
# Assign: @Person1 @Person2
# ĐI NGỦ (04:00 - 08:00)
```

**Deliverables:**
- ✅ User presence service
- ✅ Real-time cursor tracking
- ✅ User color assignment
- ✅ Presence broadcast via WebSocket

---

## 08:00 - 12:00 (4 tiếng) - Person 1 UI Integration

### ⏰ 08:00 - 12:00 | PERSON 1 - Text Toolbar UI (PUSH TRƯỚC shared files)

**Priority:** 🔴 CRITICAL - Sẽ sửa App.js, App.css (shared files)

**Branch:** `feature/person1-text-toolbar`

**Tasks:**
```bash
# 08:00 - 08:30: Pull latest & Setup
git checkout develop
git pull origin develop  # Lấy code của Person 2 & 3
git checkout -b feature/person1-text-toolbar
npm install
cd client && npm install && cd ..

# 08:30 - 10:00: Client Development
# File: client/src/components/TextToolbar.js (NEW)
import React from 'react';

const TextToolbar = ({ onFormat }) => {
    return (
        <div className="text-toolbar">
            <button onClick={() => onFormat('bold')}>
                <strong>B</strong>
            </button>
            <button onClick={() => onFormat('italic')}>
                <em>I</em>
            </button>
            <button onClick={() => onFormat('underline')}>
                <u>U</u>
            </button>
            <select onChange={(e) => onFormat('fontSize', e.target.value)}>
                <option value="12">12px</option>
                <option value="14">14px</option>
                <option value="16">16px</option>
                <option value="18">18px</option>
            </select>
        </div>
    );
};

export default TextToolbar;

# File: client/src/components/Editor.js (UPDATE)
import TextToolbar from './TextToolbar';

const Editor = ({ value, onChange }) => {
    const [formatting, setFormatting] = useState({});
    
    const handleFormat = (type, value) => {
        setFormatting({ ...formatting, [type]: value });
        // Apply formatting
    };
    
    return (
        <div className="editor-container">
            <TextToolbar onFormat={handleFormat} />
            <textarea 
                value={value} 
                onChange={onChange}
                style={formatting}
            />
        </div>
    );
};

# 10:00 - 11:00: Integrate vào App.js (QUAN TRỌNG - shared file)
# File: client/src/App.js (UPDATE)
# THÊM Ở DÒNG 10-15 (KHÔNG xóa code Person 2, 3)

import { 
    Header, 
    UserInfo, 
    OnlineUsers, 
    Editor,        // Already exists
    EditorControls, 
    VersionPanel 
} from './components';

// ============ PERSON 1 - TEXT TOOLBAR START ============
// Thêm phần này ở dòng 50-60, KHÔNG đụng code khác
const [showToolbar, setShowToolbar] = useState(true);

// ============ PERSON 1 - TEXT TOOLBAR END ==============

# File: client/src/App.css (UPDATE)
# THÊM Ở CUỐI FILE (dòng 556 trở đi)

/* ============================================== */
/* PERSON 1 - TEXT TOOLBAR STYLES                */
/* Added: 12/6/2025 08:00 by Person 1            */
/* Lines: 556-620                                */
/* ============================================== */

.text-toolbar {
    display: flex;
    gap: 8px;
    padding: 10px;
    background: #f5f5f5;
    border-bottom: 1px solid #ddd;
    align-items: center;
}

.text-toolbar button {
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    transition: all 0.2s;
}

.text-toolbar button:hover {
    background: #e8e8e8;
    border-color: #999;
}

.text-toolbar button:active {
    background: #d0d0d0;
}

.text-toolbar select {
    padding: 6px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
}

.editor-container {
    display: flex;
    flex-direction: column;
    width: 100%;
}

/* END PERSON 1 STYLES */
/* ============================================== */

# 11:00 - 11:30: Testing
npm start
cd client && npm start
# Test toolbar, formatting

# 11:30 - 12:00: Commit & Push
git add client/src/components/TextToolbar.js
git add client/src/components/Editor.js
git add client/src/App.js
git add client/src/App.css

git commit -m "feat(client): add text formatting toolbar with bold, italic, underline and font size selector

- Added TextToolbar component
- Integrated toolbar into Editor
- Updated App.js (lines 50-60) - PERSON 1 SECTION
- Updated App.css (lines 556-620) - PERSON 1 STYLES
- All changes clearly marked and isolated"

git push origin feature/person1-text-toolbar

# Tạo PR NGAY
# Title: [Person 1] Text Formatting Toolbar - SHARED FILES UPDATED
# Description: 
## ⚠️ IMPORTANT - Shared Files Modified
- App.js: Lines 50-60 only
- App.css: Lines 556-620 only
- All changes clearly marked with comments
- Person 2 & 3: Please pull before continuing

# Assign: @Person2 @Person3
# Label: feature, client, URGENT-REVIEW

# GỬI MESSAGE SLACK/DISCORD:
🚨 @team URGENT: Đã push update vào App.js và App.css
📍 App.js: Lines 50-60 (Text Toolbar section)
📍 App.css: Lines 556-620 (Toolbar styles)
⏰ Vui lòng pull develop sau khi merge (~12:30)
🔗 PR: <link>
```

**Deliverables:**
- ✅ Text formatting toolbar component
- ✅ Format buttons (Bold, Italic, Underline)
- ✅ Font size selector
- ✅ Integration vào Editor
- ✅ Styles cho toolbar

---

## 12:30 - 18:00 (5.5 tiếng) - Person 2 & 3 Features

### ⏰ 12:30 - 18:00 | PERSON 2 - Version Diff Viewer

**Branch:** `feature/person2-version-diff`

**Tasks:**
```bash
# 12:30 - 13:00: Pull latest (SAU KHI Person 1 merge)
git checkout develop
git pull origin develop  # Lấy code Text Toolbar của Person 1
git checkout -b feature/person2-version-diff

# 13:00 - 15:30: Server Development
# File: src/services/DiffService.js (NEW)
const diff = require('diff'); // npm install diff

class DiffService {
    calculateDiff(content1, content2) {
        const differences = diff.diffLines(content1, content2);
        
        return {
            additions: differences.filter(d => d.added),
            deletions: differences.filter(d => d.removed),
            unchanged: differences.filter(d => !d.added && !d.removed)
        };
    }
    
    formatDiff(differences) {
        return differences.map(d => ({
            type: d.added ? 'added' : d.removed ? 'deleted' : 'unchanged',
            value: d.value,
            count: d.count
        }));
    }
}

module.exports = new DiffService();

# File: src/routes/versionRoutes.js (UPDATE)
const DiffService = require('../services/DiffService');

// GET /api/versions/:id/diff/:compareId
router.get('/:id/diff/:compareId', (req, res) => {
    try {
        const version1 = VersionService.getVersionById(req.params.id);
        const version2 = VersionService.getVersionById(req.params.compareId);
        
        if (!version1 || !version2) {
            return res.status(404).json({ 
                success: false, 
                message: 'Version not found' 
            });
        }
        
        const diff = DiffService.calculateDiff(
            version1.content, 
            version2.content
        );
        
        res.json({
            success: true,
            data: {
                version1: { id: version1.id, name: version1.versionName },
                version2: { id: version2.id, name: version2.versionName },
                diff: diff
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

# File: src/utils/diffAlgorithm.js (NEW)
// Helper functions cho diff algorithm

# 15:30 - 17:30: Client Development
# File: client/src/components/VersionDiff.js (NEW)
import React, { useState, useEffect } from 'react';
import { fetchVersionDiff } from '../utils/api';

const VersionDiff = ({ versionId, compareId, onClose }) => {
    const [diff, setDiff] = useState(null);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState('split'); // 'split' or 'unified'
    
    useEffect(() => {
        const loadDiff = async () => {
            try {
                const result = await fetchVersionDiff(versionId, compareId);
                setDiff(result);
            } catch (error) {
                console.error('Error loading diff:', error);
            } finally {
                setLoading(false);
            }
        };
        
        loadDiff();
    }, [versionId, compareId]);
    
    if (loading) return <div>Loading diff...</div>;
    
    return (
        <div className="version-diff-viewer">
            <div className="diff-header">
                <h3>Compare Versions</h3>
                <div className="view-mode-toggle">
                    <button 
                        onClick={() => setViewMode('split')}
                        className={viewMode === 'split' ? 'active' : ''}
                    >
                        Split View
                    </button>
                    <button 
                        onClick={() => setViewMode('unified')}
                        className={viewMode === 'unified' ? 'active' : ''}
                    >
                        Unified View
                    </button>
                </div>
                <button onClick={onClose}>✕</button>
            </div>
            
            <div className={`diff-content ${viewMode}`}>
                {viewMode === 'split' ? (
                    <div className="split-view">
                        <div className="left-panel">
                            <h4>{diff.version1.name}</h4>
                            <pre>{renderDiffLeft(diff.diff)}</pre>
                        </div>
                        <div className="right-panel">
                            <h4>{diff.version2.name}</h4>
                            <pre>{renderDiffRight(diff.diff)}</pre>
                        </div>
                    </div>
                ) : (
                    <div className="unified-view">
                        <pre>{renderDiffUnified(diff.diff)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

const renderDiffUnified = (diff) => {
    return diff.map((change, idx) => (
        <div 
            key={idx}
            className={`diff-line ${change.type}`}
        >
            <span className="line-marker">
                {change.type === 'added' ? '+' : change.type === 'deleted' ? '-' : ' '}
            </span>
            <span className="line-content">{change.value}</span>
        </div>
    ));
};

export default VersionDiff;

# File: client/src/components/VersionPanel.js (UPDATE)
import VersionDiff from './VersionDiff';

// Thêm state và handlers cho diff viewer
const [showDiff, setShowDiff] = useState(false);
const [compareVersions, setCompareVersions] = useState({ v1: null, v2: null });

// Thêm button "Compare" vào version entry

# File: client/src/utils/api.js (UPDATE)
export const fetchVersionDiff = async (versionId, compareId) => {
    const response = await fetch(
        `${API_ENDPOINTS.VERSIONS}/${versionId}/diff/${compareId}`
    );
    const result = await response.json();
    if (result.success) {
        return result.data;
    }
    throw new Error('Failed to fetch diff');
};

# 17:30 - 17:50: Add styles to App.css
# File: client/src/App.css (UPDATE - CUỐI FILE)

/* ============================================== */
/* PERSON 2 - VERSION DIFF STYLES                */
/* Added: 12/6/2025 17:30 by Person 2            */
/* Lines: 621-750                                */
/* ============================================== */

.version-diff-viewer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1200px;
    height: 80vh;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    z-index: 2000;
    display: flex;
    flex-direction: column;
}

.diff-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid #f0f0f0;
    background: #f8f9fa;
}

.view-mode-toggle button {
    padding: 8px 16px;
    margin: 0 4px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;
    border-radius: 4px;
}

.view-mode-toggle button.active {
    background: #007bff;
    color: white;
    border-color: #007bff;
}

.diff-content {
    flex: 1;
    overflow: auto;
    padding: 20px;
}

.split-view {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    height: 100%;
}

.left-panel, .right-panel {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    overflow: auto;
}

.left-panel h4, .right-panel h4 {
    margin: 0 0 10px 0;
    padding-bottom: 10px;
    border-bottom: 2px solid #eee;
}

.diff-line {
    padding: 2px 8px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.5;
}

.diff-line.added {
    background-color: #d4edda;
    color: #155724;
}

.diff-line.deleted {
    background-color: #f8d7da;
    color: #721c24;
}

.diff-line.unchanged {
    background-color: transparent;
    color: #333;
}

.line-marker {
    display: inline-block;
    width: 20px;
    text-align: center;
    font-weight: bold;
}

.unified-view pre {
    margin: 0;
    white-space: pre-wrap;
    word-wrap: break-word;
}

/* END PERSON 2 STYLES */
/* ============================================== */

# 17:50 - 18:00: Testing, Commit & Push
npm install diff  # Install diff library
npm start
cd client && npm start

# Test comparing 2 versions

git add src/services/DiffService.js src/routes/versionRoutes.js src/utils/
git add client/src/components/VersionDiff.js client/src/utils/api.js
git add client/src/App.css
git add package.json  # diff dependency

git commit -m "feat(both): add version diff viewer with split and unified view

Server:
- DiffService for calculating differences
- API endpoint /api/versions/:id/diff/:compareId
- Line-by-line diff algorithm

Client:
- VersionDiff component with split/unified views
- Syntax highlighting for additions/deletions
- Updated App.css (lines 621-750) - PERSON 2 STYLES"

git push origin feature/person2-version-diff

# Tạo PR
```

**Deliverables:**
- ✅ Diff calculation service
- ✅ Version comparison API
- ✅ Diff viewer component (split/unified)
- ✅ Syntax highlighting

---

### ⏰ 12:30 - 18:00 | PERSON 3 - User Profile & Settings (Song song Person 2)

**Branch:** `feature/person3-user-profile`

**Tasks:**
```bash
# 12:30 - 13:00: Pull latest
git checkout develop
git pull origin develop
git checkout -b feature/person3-user-profile

# 13:00 - 15:00: Server Development
# File: src/routes/userRoutes.js (NEW)
const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

// GET /api/users - Get all users
router.get('/', (req, res) => {
    try {
        const users = UserService.getOnlineUsers();
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// GET /api/users/:id - Get user by ID
router.get('/:id', (req, res) => {
    try {
        const user = UserService.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// PUT /api/users/:id - Update user
router.put('/:id', (req, res) => {
    try {
        const { name, color, avatar } = req.body;
        const updated = UserService.updateUser(req.params.id, {
            name,
            color,
            avatar
        });
        
        if (!updated) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }
        
        // Broadcast updated user list
        if (req.app.locals.wsHandler) {
            req.app.locals.wsHandler.broadcastUserList();
        }
        
        res.json({ success: true, data: updated });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// GET /api/users/:id/settings
router.get('/:id/settings', (req, res) => {
    try {
        const settings = UserService.getUserSettings(req.params.id);
        res.json({ success: true, data: settings });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// PUT /api/users/:id/settings
router.put('/:id/settings', (req, res) => {
    try {
        const updated = UserService.updateUserSettings(
            req.params.id, 
            req.body
        );
        res.json({ success: true, data: updated });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;

# File: src/services/UserService.js (UPDATE)
// Thêm methods:
getUserById(userId) {
    for (let [sessionId, user] of this.users) {
        if (user.id === userId) return user;
    }
    return null;
}

updateUser(userId, updates) {
    const user = this.getUserById(userId);
    if (!user) return null;
    
    Object.assign(user, updates);
    return user;
}

getUserSettings(userId) {
    const user = this.getUserById(userId);
    if (!user) return null;
    
    return user.settings || {
        notifications: true,
        theme: 'light',
        fontSize: 14
    };
}

updateUserSettings(userId, settings) {
    const user = this.getUserById(userId);
    if (!user) return null;
    
    user.settings = { ...user.settings, ...settings };
    return user.settings;
}

# File: src/routes/index.js (UPDATE)
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

# 15:00 - 17:00: Client Development
# File: client/src/components/UserProfile.js (NEW)
import React, { useState } from 'react';

const UserProfile = ({ user, onUpdate, onClose }) => {
    const [name, setName] = useState(user.name);
    const [color, setColor] = useState(user.color || '#4ECDC4');
    
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A',
        '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'
    ];
    
    const handleSave = async () => {
        try {
            await onUpdate({ name, color });
            onClose();
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
        }
    };
    
    return (
        <div className="user-profile-modal">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>👤 User Profile</h3>
                    <button onClick={onClose}>✕</button>
                </div>
                
                <div className="modal-body">
                    <div className="form-group">
                        <label>Display Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>User Color</label>
                        <div className="color-picker">
                            {colors.map(c => (
                                <div
                                    key={c}
                                    className={`color-option ${color === c ? 'selected' : ''}`}
                                    style={{ backgroundColor: c }}
                                    onClick={() => setColor(c)}
                                />
                            ))}
                        </div>
                        <div 
                            className="color-preview"
                            style={{ backgroundColor: color }}
                        >
                            {name || 'Preview'}
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>User ID</label>
                        <input
                            type="text"
                            value={user.id}
                            disabled
                            className="readonly"
                        />
                    </div>
                </div>
                
                <div className="modal-footer">
                    <button onClick={handleSave} className="btn-primary">
                        Save Changes
                    </button>
                    <button onClick={onClose} className="btn-secondary">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;

# File: client/src/components/UserSettings.js (NEW)
import React, { useState, useEffect } from 'react';

const UserSettings = ({ userId, onClose }) => {
    const [settings, setSettings] = useState({
        notifications: true,
        theme: 'light',
        fontSize: 14,
        autoSave: true
    });
    
    useEffect(() => {
        // Load settings from API
        fetch(`http://localhost:5000/api/users/${userId}/settings`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setSettings(data.data);
                }
            });
    }, [userId]);
    
    const handleSave = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/api/users/${userId}/settings`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(settings)
                }
            );
            
            const result = await response.json();
            if (result.success) {
                // Apply settings locally
                localStorage.setItem('userSettings', JSON.stringify(settings));
                onClose();
            }
        } catch (error) {
            console.error('Error saving settings:', error);
        }
    };
    
    return (
        <div className="user-settings-modal">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>⚙️ Settings</h3>
                    <button onClick={onClose}>✕</button>
                </div>
                
                <div className="modal-body">
                    <div className="setting-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.notifications}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    notifications: e.target.checked
                                })}
                            />
                            Enable Notifications
                        </label>
                    </div>
                    
                    <div className="setting-item">
                        <label>Theme</label>
                        <select
                            value={settings.theme}
                            onChange={(e) => setSettings({
                                ...settings,
                                theme: e.target.value
                            })}
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="auto">Auto</option>
                        </select>
                    </div>
                    
                    <div className="setting-item">
                        <label>Font Size</label>
                        <input
                            type="range"
                            min="12"
                            max="24"
                            value={settings.fontSize}
                            onChange={(e) => setSettings({
                                ...settings,
                                fontSize: parseInt(e.target.value)
                            })}
                        />
                        <span>{settings.fontSize}px</span>
                    </div>
                    
                    <div className="setting-item">
                        <label>
                            <input
                                type="checkbox"
                                checked={settings.autoSave}
                                onChange={(e) => setSettings({
                                    ...settings,
                                    autoSave: e.target.checked
                                })}
                            />
                            Auto-save Versions
                        </label>
                    </div>
                </div>
                
                <div className="modal-footer">
                    <button onClick={handleSave} className="btn-primary">
                        Save Settings
                    </button>
                    <button onClick={onClose} className="btn-secondary">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserSettings;

# File: client/src/components/UserInfo.js (UPDATE)
import UserProfile from './UserProfile';
import UserSettings from './UserSettings';

// Thêm buttons mở profile và settings

# 17:00 - 17:50: Add styles
# File: client/src/App.css (UPDATE - CUỐI FILE)

/* ============================================== */
/* PERSON 3 - USER PROFILE & SETTINGS STYLES     */
/* Added: 12/6/2025 17:00 by Person 3            */
/* Lines: 751-900                                */
/* ============================================== */

.user-profile-modal,
.user-settings-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.modal-content {
    position: relative;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    width: 90%;
    max-width: 500px;
    max-height: 80vh;
    overflow: auto;
    z-index: 1;
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 2px solid #f0f0f0;
    background: #f8f9fa;
}

.modal-header h3 {
    margin: 0;
}

.modal-header button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    padding: 0;
    width: 30px;
    height: 30px;
}

.modal-body {
    padding: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #333;
}

.form-group input[type="text"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
}

.form-group input.readonly {
    background: #f5f5f5;
    cursor: not-allowed;
}

.color-picker {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 8px;
    margin-bottom: 15px;
}

.color-option {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    border: 3px solid transparent;
    transition: all 0.2s;
}

.color-option:hover {
    transform: scale(1.1);
}

.color-option.selected {
    border-color: #333;
    box-shadow: 0 0 0 2px white, 0 0 0 4px #333;
}

.color-preview {
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 16px;
}

.setting-item {
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
}

.setting-item:last-child {
    border-bottom: none;
}

.setting-item label {
    display: flex;
    align-items: center;
    gap: 10px;
}

.setting-item input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.setting-item select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-top: 8px;
}

.setting-item input[type="range"] {
    width: 100%;
    margin: 10px 0;
}

.modal-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 20px;
    border-top: 2px solid #f0f0f0;
    background: #f8f9fa;
}

.btn-primary {
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
}

.btn-primary:hover {
    background: #0056b3;
}

.btn-secondary {
    padding: 10px 20px;
    background: #6c757d;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
}

.btn-secondary:hover {
    background: #545b62;
}

/* END PERSON 3 STYLES */
/* ============================================== */

# 17:50 - 18:00: Testing, Commit & Push
npm start
cd client && npm start

git add src/routes/userRoutes.js src/services/UserService.js src/routes/index.js
git add client/src/components/UserProfile.js client/src/components/UserSettings.js
git add client/src/components/UserInfo.js
git add client/src/App.css

git commit -m "feat(both): add user profile and settings management

Server:
- User routes for CRUD operations
- Settings management API
- User update with broadcast

Client:
- UserProfile modal with name and color picker
- UserSettings modal with preferences
- Updated App.css (lines 751-900) - PERSON 3 STYLES"

git push origin feature/person3-user-profile

# Tạo PR
```

**Deliverables:**
- ✅ User CRUD API
- ✅ User settings API
- ✅ Profile modal UI
- ✅ Settings modal UI
- ✅ Color picker

---

## 18:00 - 24:00 (6 tiếng) - Final Features

### ⏰ 18:00 - 21:00 | PERSON 1 - Export/Import (Files độc lập)

**Branch:** `feature/person1-export-import`

**Tasks:**
```bash
# 18:00 - 18:15: Pull & Setup
git checkout develop
git pull origin develop
git checkout -b feature/person1-export-import

# 18:15 - 19:30: Server Development
# File: src/services/ExportService.js (NEW)
class ExportService {
    exportToTxt(content) {
        return content;
    }
    
    exportToJson(content, metadata) {
        return JSON.stringify({
            content,
            metadata,
            exportedAt: new Date().toISOString()
        }, null, 2);
    }
    
    exportToMarkdown(content) {
        // Convert to markdown format
        return `# Document\n\n${content}`;
    }
}

# File: src/services/ImportService.js (NEW)
const multer = require('multer');

const upload = multer({
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'text/plain' || 
            file.mimetype === 'application/json') {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type'));
        }
    }
});

# File: src/routes/documentRoutes.js (UPDATE)
const ExportService = require('../services/ExportService');
const ImportService = require('../services/ImportService');

// POST /api/document/export
router.post('/export', (req, res) => {
    const { format } = req.body; // 'txt', 'json', 'markdown'
    const content = DocumentService.getDocument();
    
    let exported;
    let contentType;
    let filename;
    
    switch (format) {
        case 'txt':
            exported = ExportService.exportToTxt(content);
            contentType = 'text/plain';
            filename = 'document.txt';
            break;
        case 'json':
            exported = ExportService.exportToJson(content, {
                exportedBy: req.body.userId,
                timestamp: new Date()
            });
            contentType = 'application/json';
            filename = 'document.json';
            break;
        case 'markdown':
            exported = ExportService.exportToMarkdown(content);
            contentType = 'text/markdown';
            filename = 'document.md';
            break;
    }
    
    res.setHeader('Content-Type', contentType);
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(exported);
});

// POST /api/document/import
router.post('/import', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ 
                success: false, 
                message: 'No file uploaded' 
            });
        }
        
        const content = req.file.buffer.toString('utf-8');
        let parsedContent = content;
        
        if (req.file.mimetype === 'application/json') {
            const json = JSON.parse(content);
            parsedContent = json.content || content;
        }
        
        DocumentService.updateDocument(parsedContent);
        
        // Broadcast update
        if (req.app.locals.wsHandler) {
            req.app.locals.wsHandler.broadcastDocumentUpdate(parsedContent);
        }
        
        res.json({ 
            success: true, 
            message: 'Document imported successfully',
            charCount: parsedContent.length
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

# 19:30 - 20:30: Client Development
# File: client/src/components/ExportImport.js (NEW)
import React, { useState } from 'react';

const ExportImport = ({ onClose }) => {
    const [importing, setImporting] = useState(false);
    
    const handleExport = async (format) => {
        try {
            const response = await fetch('http://localhost:5000/api/document/export', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ format })
            });
            
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `document.${format === 'markdown' ? 'md' : format}`;
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Export error:', error);
            alert('Failed to export document');
        }
    };
    
    const handleImport = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const formData = new FormData();
        formData.append('file', file);
        
        setImporting(true);
        try {
            const response = await fetch('http://localhost:5000/api/document/import', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            if (result.success) {
                alert(`Document imported! ${result.charCount} characters`);
                onClose();
            } else {
                alert('Failed to import: ' + result.message);
            }
        } catch (error) {
            console.error('Import error:', error);
            alert('Failed to import document');
        } finally {
            setImporting(false);
        }
    };
    
    return (
        <div className="export-import-modal">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>📤 Export / Import Document</h3>
                    <button onClick={onClose}>✕</button>
                </div>
                
                <div className="modal-body">
                    <div className="section">
                        <h4>Export Document</h4>
                        <p>Download current document in various formats</p>
                        <div className="export-buttons">
                            <button 
                                onClick={() => handleExport('txt')}
                                className="export-btn"
                            >
                                📄 Export as TXT
                            </button>
                            <button 
                                onClick={() => handleExport('json')}
                                className="export-btn"
                            >
                                📋 Export as JSON
                            </button>
                            <button 
                                onClick={() => handleExport('markdown')}
                                className="export-btn"
                            >
                                📝 Export as Markdown
                            </button>
                        </div>
                    </div>
                    
                    <div className="divider"></div>
                    
                    <div className="section">
                        <h4>Import Document</h4>
                        <p>Upload a text or JSON file to replace current document</p>
                        <div className="import-area">
                            <input
                                type="file"
                                id="file-input"
                                accept=".txt,.json,.md"
                                onChange={handleImport}
                                style={{ display: 'none' }}
                                disabled={importing}
                            />
                            <label 
                                htmlFor="file-input" 
                                className="import-btn"
                            >
                                {importing ? '⏳ Importing...' : '📁 Choose File'}
                            </label>
                            <p className="help-text">
                                Supported: .txt, .json, .md (Max 5MB)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExportImport;

# File: client/src/components/EditorControls.js (UPDATE)
import ExportImport from './ExportImport';

// Thêm button "Export/Import"

# 20:30 - 20:50: Testing, Commit & Push
npm install multer  # Server
npm start
cd client && npm start

git add src/services/ExportService.js src/services/ImportService.js
git add src/routes/documentRoutes.js
git add client/src/components/ExportImport.js
git add client/src/components/EditorControls.js
git add package.json

git commit -m "feat(both): add document export/import functionality

Server:
- ExportService (TXT, JSON, Markdown)
- ImportService with file validation
- Export/Import API endpoints

Client:
- ExportImport modal
- Multi-format export buttons
- File upload with validation"

git push origin feature/person1-export-import

# Tạo PR
```

**Deliverables:**
- ✅ Export service (TXT, JSON, MD)
- ✅ Import service with validation
- ✅ File download functionality
- ✅ File upload UI

---

### ⏰ 19:00 - 22:00 | PERSON 2 - Version Search & Tags

**Branch:** `feature/person2-version-tags`

**Tasks:**
```bash
# 19:00 - 19:15: Setup
git checkout develop
git pull origin develop
git checkout -b feature/person2-version-tags

# 19:15 - 20:30: Server Development
# File: src/services/VersionService.js (UPDATE)
// Thêm tags vào version structure

createVersion(versionName, content, createdBy, tags = []) {
    const version = {
        id: generateVersionId(),
        versionName: versionName || `Version ${new Date().toLocaleString('vi-VN')}`,
        content: content,
        timestamp: new Date().toISOString(),
        createdBy: createdBy || 'System',
        tags: tags  // NEW
    };
    
    this.versions.push(version);
    // ... rest
}

addTagToVersion(versionId, tag) {
    const version = this.getVersionById(versionId);
    if (!version) return false;
    
    if (!version.tags) version.tags = [];
    if (!version.tags.includes(tag)) {
        version.tags.push(tag);
        this.saveVersions();
    }
    return true;
}

removeTagFromVersion(versionId, tag) {
    const version = this.getVersionById(versionId);
    if (!version) return false;
    
    if (version.tags) {
        version.tags = version.tags.filter(t => t !== tag);
        this.saveVersions();
    }
    return true;
}

searchVersions(query, filters = {}) {
    let results = this.versions;
    
    // Search by name or content
    if (query) {
        results = results.filter(v => 
            v.versionName.toLowerCase().includes(query.toLowerCase()) ||
            v.content.toLowerCase().includes(query.toLowerCase())
        );
    }
    
    // Filter by tags
    if (filters.tags && filters.tags.length > 0) {
        results = results.filter(v => 
            v.tags && filters.tags.some(tag => v.tags.includes(tag))
        );
    }
    
    // Filter by date range
    if (filters.dateFrom) {
        results = results.filter(v => 
            new Date(v.timestamp) >= new Date(filters.dateFrom)
        );
    }
    if (filters.dateTo) {
        results = results.filter(v => 
            new Date(v.timestamp) <= new Date(filters.dateTo)
        );
    }
    
    return results;
}

getAllTags() {
    const tagsSet = new Set();
    this.versions.forEach(v => {
        if (v.tags) {
            v.tags.forEach(tag => tagsSet.add(tag));
        }
    });
    return Array.from(tagsSet);
}

# File: src/routes/versionRoutes.js (UPDATE)
// POST /api/versions/:id/tags
router.post('/:id/tags', (req, res) => {
    try {
        const { tag } = req.body;
        const success = VersionService.addTagToVersion(req.params.id, tag);
        
        if (!success) {
            return res.status(404).json({ success: false, message: 'Version not found' });
        }
        
        if (req.app.locals.wsHandler) {
            req.app.locals.wsHandler.broadcastVersions();
        }
        
        res.json({ success: true, message: 'Tag added' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// DELETE /api/versions/:id/tags/:tag
router.delete('/:id/tags/:tag', (req, res) => {
    try {
        const success = VersionService.removeTagFromVersion(
            req.params.id, 
            req.params.tag
        );
        
        if (!success) {
            return res.status(404).json({ success: false, message: 'Version not found' });
        }
        
        if (req.app.locals.wsHandler) {
            req.app.locals.wsHandler.broadcastVersions();
        }
        
        res.json({ success: true, message: 'Tag removed' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// GET /api/versions/search
router.get('/search', (req, res) => {
    try {
        const { q, tags, dateFrom, dateTo } = req.query;
        
        const filters = {
            tags: tags ? tags.split(',') : [],
            dateFrom,
            dateTo
        };
        
        const results = VersionService.searchVersions(q, filters);
        
        res.json({ success: true, data: results, count: results.length });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// GET /api/tags
router.get('/tags', (req, res) => {
    try {
        const tags = VersionService.getAllTags();
        res.json({ success: true, data: tags });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

# 20:30 - 21:30: Client Development
# File: client/src/components/VersionSearch.js (NEW)
import React, { useState } from 'react';

const VersionSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    
    const availableTags = ['Important', 'Backup', 'Draft', 'Final', 'WIP'];
    
    const handleSearch = () => {
        onSearch({
            query,
            tags: selectedTags,
            dateFrom,
            dateTo
        });
    };
    
    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };
    
    return (
        <div className="version-search">
            <div className="search-row">
                <input
                    type="text"
                    placeholder="Search versions..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button onClick={handleSearch}>🔍 Search</button>
            </div>
            
            <div className="filter-row">
                <div className="tag-filter">
                    <label>Tags:</label>
                    <div className="tag-buttons">
                        {availableTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                className={`tag-btn ${selectedTags.includes(tag) ? 'active' : ''}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="date-filter">
                    <label>From:</label>
                    <input
                        type="date"
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                    />
                    <label>To:</label>
                    <input
                        type="date"
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default VersionSearch;

# File: client/src/components/VersionTags.js (NEW)
import React, { useState } from 'react';

const VersionTags = ({ version, onAddTag, onRemoveTag }) => {
    const [showInput, setShowInput] = useState(false);
    const [newTag, setNewTag] = useState('');
    
    const predefinedTags = ['Important', 'Backup', 'Draft', 'Final', 'WIP'];
    
    const handleAddTag = (tag) => {
        onAddTag(version.id, tag);
        setNewTag('');
        setShowInput(false);
    };
    
    return (
        <div className="version-tags">
            <div className="tags-list">
                {version.tags && version.tags.map(tag => (
                    <span key={tag} className={`tag tag-${tag.toLowerCase()}`}>
                        {tag}
                        <button onClick={() => onRemoveTag(version.id, tag)}>✕</button>
                    </span>
                ))}
            </div>
            
            {showInput ? (
                <div className="tag-input">
                    <select 
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                    >
                        <option value="">Select tag...</option>
                        {predefinedTags.map(tag => (
                            <option key={tag} value={tag}>{tag}</option>
                        ))}
                    </select>
                    <button onClick={() => handleAddTag(newTag)}>Add</button>
                    <button onClick={() => setShowInput(false)}>Cancel</button>
                </div>
            ) : (
                <button 
                    className="add-tag-btn"
                    onClick={() => setShowInput(true)}
                >
                    + Add Tag
                </button>
            )}
        </div>
    );
};

export default VersionTags;

# File: client/src/components/VersionPanel.js (UPDATE)
import VersionSearch from './VersionSearch';
import VersionTags from './VersionTags';

// Tích hợp search và tags vào panel

# 21:30 - 21:50: Testing, Commit & Push
npm start
cd client && npm start

git add src/services/VersionService.js src/routes/versionRoutes.js
git add client/src/components/VersionSearch.js client/src/components/VersionTags.js
git add client/src/components/VersionPanel.js

git commit -m "feat(both): add version search, filtering and tagging

Server:
- Search versions by query and filters
- Tag management (add/remove)
- Get all tags API

Client:
- VersionSearch with filters
- VersionTags management
- Tag-based filtering"

git push origin feature/person2-version-tags

# Tạo PR
```

**Deliverables:**
- ✅ Version search API
- ✅ Tag management API
- ✅ Search UI with filters
- ✅ Tag management UI

---

### ⏰ 19:00 - 22:00 | PERSON 3 - Activity Log

**Branch:** `feature/person3-activity-log`

**Tasks:**
```bash
# 19:00 - 19:15: Setup
git checkout develop
git pull origin develop
git checkout -b feature/person3-activity-log

# 19:15 - 20:30: Server Development
# File: src/services/ActivityService.js (NEW)
class ActivityService {
    constructor() {
        this.activities = []; // In-memory storage
        this.maxActivities = 100;
    }
    
    logActivity(userId, userName, action, details = {}) {
        const activity = {
            id: `activity_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            userName,
            action, // 'edit', 'create_version', 'restore_version', 'join', 'leave'
            details,
            timestamp: new Date().toISOString()
        };
        
        this.activities.push(activity);
        
        // Keep only last N activities
        if (this.activities.length > this.maxActivities) {
            this.activities.shift();
        }
        
        return activity;
    }
    
    getRecentActivities(limit = 20) {
        return this.activities
            .slice(-limit)
            .reverse();
    }
    
    getUserActivities(userId, limit = 20) {
        return this.activities
            .filter(a => a.userId === userId)
            .slice(-limit)
            .reverse();
    }
    
    clearActivities() {
        this.activities = [];
    }
}

module.exports = new ActivityService();

# File: src/routes/activityRoutes.js (NEW)
const express = require('express');
const router = express.Router();
const ActivityService = require('../services/ActivityService');

// GET /api/activities
router.get('/', (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 20;
        const activities = ActivityService.getRecentActivities(limit);
        res.json({ success: true, data: activities });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// GET /api/activities/:userId
router.get('/:userId', (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 20;
        const activities = ActivityService.getUserActivities(req.params.userId, limit);
        res.json({ success: true, data: activities });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;

# File: src/routes/index.js (UPDATE)
const activityRoutes = require('./activityRoutes');
router.use('/activities', activityRoutes);

# File: src/handlers/WebSocketHandler.js (UPDATE)
const ActivityService = require('../services/ActivityService');

// Trong handleConnection:
const activity = ActivityService.logActivity(
    userId,
    user.name,
    'join',
    { sessionId }
);
this.broadcastActivity(activity);

// Trong handleClose:
const activity = ActivityService.logActivity(
    userId,
    user.name,
    'leave',
    { sessionId }
);
this.broadcastActivity(activity);

// Trong handleDocumentUpdate:
// Log edit activity (throttled)

// Thêm method mới:
broadcastActivity(activity) {
    this.broadcastMessage('activity', activity);
}

# 20:30 - 21:30: Client Development
# File: client/src/components/ActivityLog.js (NEW)
import React, { useState, useEffect } from 'react';
import { formatDateTime } from '../utils/formatters';

const ActivityLog = ({ socket }) => {
    const [activities, setActivities] = useState([]);
    const [filter, setFilter] = useState('all'); // 'all', 'edits', 'versions', 'users'
    
    useEffect(() => {
        // Fetch initial activities
        fetch('http://localhost:5000/api/activities')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setActivities(data.data);
                }
            });
        
        // Listen for new activities
        if (!socket) return;
        
        const handleActivity = (event) => {
            const msg = JSON.parse(event.data);
            if (msg.type === 'activity') {
                setActivities(prev => [msg.data, ...prev].slice(0, 50));
            }
        };
        
        socket.addEventListener('message', handleActivity);
        return () => socket.removeEventListener('message', handleActivity);
    }, [socket]);
    
    const getActivityIcon = (action) => {
        switch (action) {
            case 'join': return '👋';
            case 'leave': return '👋';
            case 'edit': return '✏️';
            case 'create_version': return '💾';
            case 'restore_version': return '↻';
            default: return '📝';
        }
    };
    
    const getActivityText = (activity) => {
        switch (activity.action) {
            case 'join':
                return `${activity.userName} joined the session`;
            case 'leave':
                return `${activity.userName} left the session`;
            case 'edit':
                return `${activity.userName} edited the document`;
            case 'create_version':
                return `${activity.userName} created version "${activity.details.versionName}"`;
            case 'restore_version':
                return `${activity.userName} restored version "${activity.details.versionName}"`;
            default:
                return `${activity.userName} performed an action`;
        }
    };
    
    const filteredActivities = activities.filter(a => {
        if (filter === 'all') return true;
        if (filter === 'edits') return a.action === 'edit';
        if (filter === 'versions') return a.action.includes('version');
        if (filter === 'users') return a.action === 'join' || a.action === 'leave';
        return true;
    });
    
    return (
        <div className="activity-log">
            <div className="activity-header">
                <h3>📊 Activity Log</h3>
                <div className="activity-filters">
                    <button 
                        onClick={() => setFilter('all')}
                        className={filter === 'all' ? 'active' : ''}
                    >
                        All
                    </button>
                    <button 
                        onClick={() => setFilter('edits')}
                        className={filter === 'edits' ? 'active' : ''}
                    >
                        Edits
                    </button>
                    <button 
                        onClick={() => setFilter('versions')}
                        className={filter === 'versions' ? 'active' : ''}
                    >
                        Versions
                    </button>
                    <button 
                        onClick={() => setFilter('users')}
                        className={filter === 'users' ? 'active' : ''}
                    >
                        Users
                    </button>
                </div>
            </div>
            
            <div className="activity-list">
                {filteredActivities.length === 0 ? (
                    <div className="no-activity">No activities yet</div>
                ) : (
                    filteredActivities.map(activity => (
                        <div key={activity.id} className="activity-item">
                            <span className="activity-icon">
                                {getActivityIcon(activity.action)}
                            </span>
                            <div className="activity-content">
                                <span className="activity-text">
                                    {getActivityText(activity)}
                                </span>
                                <span className="activity-time">
                                    {formatDateTime(activity.timestamp)}
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ActivityLog;

# File: client/src/components/Notifications.js (NEW)
import React, { useState, useEffect } from 'react';

const Notifications = ({ socket }) => {
    const [notifications, setNotifications] = useState([]);
    
    useEffect(() => {
        if (!socket) return;
        
        const handleActivity = (event) => {
            const msg = JSON.parse(event.data);
            if (msg.type === 'activity') {
                // Show toast notification
                showNotification(msg.data);
            }
        };
        
        socket.addEventListener('message', handleActivity);
        return () => socket.removeEventListener('message', handleActivity);
    }, [socket]);
    
    const showNotification = (activity) => {
        const notification = {
            id: activity.id,
            message: getNotificationText(activity),
            timestamp: Date.now()
        };
        
        setNotifications(prev => [...prev, notification]);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== notification.id));
        }, 5000);
    };
    
    const getNotificationText = (activity) => {
        switch (activity.action) {
            case 'join':
                return `${activity.userName} joined`;
            case 'create_version':
                return `New version created: ${activity.details.versionName}`;
            default:
                return '';
        }
    };
    
    return (
        <div className="notifications-container">
            {notifications.map(notif => (
                <div key={notif.id} className="notification toast">
                    {notif.message}
                </div>
            ))}
        </div>
    );
};

export default Notifications;

# File: client/src/App.js (UPDATE)
import ActivityLog from './components/ActivityLog';
import Notifications from './components/Notifications';

// Thêm vào render

# 21:30 - 21:50: Testing, Commit & Push
npm start
cd client && npm start

git add src/services/ActivityService.js src/routes/activityRoutes.js
git add src/routes/index.js src/handlers/WebSocketHandler.js
git add client/src/components/ActivityLog.js client/src/components/Notifications.js
git add client/src/App.js

git commit -m "feat(both): add activity logging and notifications

Server:
- ActivityService for logging user actions
- Activity routes API
- Broadcast activities via WebSocket

Client:
- ActivityLog component with filtering
- Toast notifications for real-time events
- Activity icons and formatting"

git push origin feature/person3-activity-log

# Tạo PR
```

**Deliverables:**
- ✅ Activity logging service
- ✅ Activity API endpoints
- ✅ Activity log UI
- ✅ Toast notifications

---

# 🗓️ NGÀY 3 - 13/6/2025 (THỨ 7)

## 08:00 - 19:00 (11 tiếng) - Review, Integration, Polish

### ⏰ 08:00 - 12:00 | CẢ 3 NGƯỜI - Code Review & Merge

**Tasks:**
```bash
# Mỗi người review PRs của 2 người còn lại

# Person 1 review:
- PR của Person 2: Version Diff, Version Tags
- PR của Person 3: User Profile, Activity Log

# Person 2 review:
- PR của Person 1: Text Toolbar, Export/Import
- PR của Person 3: User Presence, Activity Log

# Person 3 review:
- PR của Person 1: Text Toolbar, Export/Import
- PR của Person 2: Version Diff, Version Tags

# Review checklist:
- [ ] Code chạy được
- [ ] Có cả client và server
- [ ] Code style OK
- [ ] No console.log
- [ ] Commits đúng format
- [ ] No conflicts

# Approve và merge tất cả PRs
```

---

### ⏰ 12:00 - 16:00 | CẢ 3 NGƯỜI - Integration Testing

**Tasks:**
```bash
# Pull tất cả code mới
git checkout develop
git pull origin develop

# Run full stack
npm install
cd client && npm install && cd ..
npm start
cd client && npm start

# Test tất cả features:
✅ Text formatting toolbar
✅ Document statistics
✅ Export/Import
✅ Version diff viewer
✅ Version search & tags
✅ User presence & cursors
✅ User profile & settings
✅ Activity log & notifications

# Fix bugs nếu có
# Mỗi người chịu trách nhiệm fix bugs của features mình làm
```

---

### ⏰ 16:00 - 19:00 | Final Polish & Documentation

**Person 1:**
```bash
# Polish UI/UX
- Responsive design
- Loading states
- Error messages
- Accessibility
```

**Person 2:**
```bash
# Performance optimization
- API response time
- WebSocket efficiency
- Memory leaks
```

**Person 3:**
```bash
# Documentation
- Update README
- API documentation
- User guide
```

---

## ✅ HOÀN THÀNH - 19:00 13/6/2025

### 🎉 Deliverables

**Person 1:**
- ✅ Text Formatting Toolbar (Client + Server)
- ✅ Document Statistics (Client + Server)
- ✅ Export/Import (Client + Server)

**Person 2:**
- ✅ Version Diff Viewer (Client + Server)
- ✅ Version Search & Filter (Client + Server)
- ✅ Version Tags (Client + Server)

**Person 3:**
- ✅ User Presence & Cursors (Client + Server)
- ✅ User Profile & Settings (Client + Server)
- ✅ Activity Log (Client + Server)

**Total:** 9 features hoàn chỉnh (3 người x 3 features x 2 phần client/server)

---

## 📊 THỐNG KÊ

| Metric | Value |
|--------|-------|
| Tổng thời gian | 47 giờ |
| Số features | 9 |
| Số PRs | 9 |
| Số commits | ~27 |
| Files created | ~40 |
| Lines of code | ~3000+ |

---

## 🎯 CHECKLIST CUỐI CÙNG

- [ ] Tất cả features hoạt động
- [ ] Không có lỗi console
- [ ] Responsive design OK
- [ ] Code được format
- [ ] Documentation đầy đủ
- [ ] README updated
- [ ] All PRs merged
- [ ] Develop branch clean
- [ ] Ready for demo

---

**🏆 DỰ ÁN HOÀN THÀNH!**

