const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware để parse JSON

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let document = ""; // Store the document content

// Quản lý người dùng và phiên
const users = new Map(); // Map<sessionId, {id, name, ws, connectedAt}>

// Hệ thống versioning - lưu các snapshot/version
const VERSIONS_FILE = path.join(__dirname, 'versions.json');
let versions = []; // Array of {id, versionName, content, timestamp, createdBy}

// Hàm tạo ID cho version
function generateVersionId() {
    return `version_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

// Hàm load versions từ file
function loadVersions() {
    try {
        if (fs.existsSync(VERSIONS_FILE)) {
            const data = fs.readFileSync(VERSIONS_FILE, 'utf8');
            versions = JSON.parse(data);
            console.log(`Loaded ${versions.length} versions from file`);
        } else {
            versions = [];
            console.log('No versions file found, starting with empty versions');
        }
    } catch (error) {
        console.error('Error loading versions:', error);
        versions = [];
    }
}

// Hàm lưu versions vào file
function saveVersions() {
    try {
        fs.writeFileSync(VERSIONS_FILE, JSON.stringify(versions, null, 2), 'utf8');
        console.log(`Saved ${versions.length} versions to file`);
    } catch (error) {
        console.error('Error saving versions:', error);
    }
}

// Load versions khi server start
loadVersions();

// Nếu có versions, load version mới nhất vào document
if (versions.length > 0) {
    const latestVersion = versions[versions.length - 1];
    document = latestVersion.content;
    console.log(`Loaded latest version "${latestVersion.versionName}" into document`);
}

// Hàm tạo ID ngẫu nhiên
function generateSessionId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Hàm lấy danh sách người dùng online
function getOnlineUsers() {
    return Array.from(users.values()).map(user => ({
        id: user.id,
        name: user.name,
        connectedAt: user.connectedAt
    }));
}

// Hàm broadcast danh sách người dùng đến tất cả clients
function broadcastUserList() {
    const userList = getOnlineUsers();
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ 
                type: 'userList', 
                data: userList 
            }));
        }
    });
}

// Hàm tạo version mới (snapshot)
function createVersion(versionName, content, createdBy) {
    const version = {
        id: generateVersionId(),
        versionName: versionName || `Version ${new Date().toLocaleString('vi-VN')}`,
        content: content,
        timestamp: new Date().toISOString(),
        createdBy: createdBy || 'System'
    };
    
    versions.push(version);
    
    // Giới hạn tối đa 50 versions để tránh file quá lớn
    if (versions.length > 50) {
        versions.shift(); // Xóa version cũ nhất
    }
    
    // Lưu vào file
    saveVersions();
    
    return version;
}

// Hàm broadcast danh sách versions đến tất cả clients
function broadcastVersions() {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ 
                type: 'versionsUpdate', 
                data: versions 
            }));
        }
    });
}

// API endpoint để lấy danh sách versions
app.get('/api/versions', (req, res) => {
    res.json({
        success: true,
        data: versions,
        total: versions.length
    });
});

// API endpoint để tạo version mới
app.post('/api/versions', (req, res) => {
    try {
        const { versionName, createdBy } = req.body;
        const version = createVersion(versionName, document, createdBy);
        broadcastVersions();
        res.json({
            success: true,
            message: 'Version created successfully',
            data: version
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating version',
            error: error.message
        });
    }
});

// API endpoint để restore một version
app.post('/api/versions/:versionId/restore', (req, res) => {
    try {
        const versionId = req.params.versionId;
        const version = versions.find(v => v.id === versionId);
        
        if (!version) {
            return res.status(404).json({
                success: false,
                message: 'Version not found'
            });
        }
        
        // Restore document
        document = version.content;
        
        // Broadcast update đến tất cả clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ 
                    type: 'update', 
                    data: document 
                }));
            }
        });
        
        res.json({
            success: true,
            message: 'Version restored successfully',
            data: version
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error restoring version',
            error: error.message
        });
    }
});

// API endpoint để xóa một version
app.delete('/api/versions/:versionId', (req, res) => {
    try {
        const versionId = req.params.versionId;
        const index = versions.findIndex(v => v.id === versionId);
        
        if (index === -1) {
            return res.status(404).json({
                success: false,
                message: 'Version not found'
            });
        }
        
        versions.splice(index, 1);
        saveVersions();
        broadcastVersions();
        
        res.json({
            success: true,
            message: 'Version deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting version',
            error: error.message
        });
    }
});

wss.on('connection', (ws) => {
    // Tạo session ID và user ID cho client mới
    const sessionId = generateSessionId();
    const userId = `user_${sessionId.substring(0, 8)}`;
    
    // Tạo thông tin người dùng
    const user = {
        id: userId,
        name: `User ${userId.substring(5)}`, // Tên mặc định
        ws: ws,
        connectedAt: new Date().toISOString(),
        sessionId: sessionId
    };
    
    // Lưu thông tin người dùng
    users.set(sessionId, user);
    
    console.log(`Client connected - Session: ${sessionId}, User ID: ${userId}`);
    console.log(`Total online users: ${users.size}`);

    // Gửi thông tin session và user ID cho client mới
    ws.send(JSON.stringify({ 
        type: 'session', 
        data: {
            sessionId: sessionId,
            userId: userId,
            userName: user.name
        }
    }));

    // Gửi document hiện tại cho client mới
    ws.send(JSON.stringify({ type: 'init', data: document }));

    // Gửi danh sách người dùng online cho client mới
    ws.send(JSON.stringify({ 
        type: 'userList', 
        data: getOnlineUsers() 
    }));

    // Gửi danh sách versions cho client mới
    ws.send(JSON.stringify({ 
        type: 'versions', 
        data: versions 
    }));

    // Broadcast thông tin người dùng mới đến tất cả clients khác
    broadcastUserList();

    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            
            if (parsedMessage.type === 'update') {
                const newContent = parsedMessage.data;
                document = newContent;
                
                // Broadcast the update to all connected clients (không lưu vào history)
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ 
                            type: 'update', 
                            data: document 
                        }));
                    }
                });
            } else if (parsedMessage.type === 'createVersion') {
                // Tạo version mới từ client
                const user = users.get(sessionId);
                const versionName = parsedMessage.data?.versionName;
                const createdBy = user ? `${user.name} (${user.id})` : 'Unknown';
                const version = createVersion(versionName, document, createdBy);
                broadcastVersions();
                
                // Gửi confirmation về client
                ws.send(JSON.stringify({ 
                    type: 'versionCreated', 
                    data: version 
                }));
            } else if (parsedMessage.type === 'updateUserName') {
                // Cập nhật tên người dùng
                const user = users.get(sessionId);
                if (user) {
                    user.name = parsedMessage.data.name || user.name;
                    console.log(`User ${userId} updated name to: ${user.name}`);
                    broadcastUserList();
                }
            }
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    });

    ws.on('close', () => {
        // Xóa người dùng khỏi danh sách
        users.delete(sessionId);
        console.log(`Client disconnected - Session: ${sessionId}, User ID: ${userId}`);
        console.log(`Total online users: ${users.size}`);
        
        // Broadcast cập nhật danh sách người dùng
        broadcastUserList();
    });

    ws.on('error', (error) => {
        console.error(`WebSocket error for session ${sessionId}:`, error);
        users.delete(sessionId);
        broadcastUserList();
    });
});

// Lưu version khi server đóng (graceful shutdown)
function gracefulShutdown() {
    console.log('\nShutting down server...');
    
    // Tạo version tự động trước khi đóng
    if (document.trim().length > 0) {
        const autoVersion = createVersion(
            `Auto-save ${new Date().toLocaleString('vi-VN')}`, 
            document, 
            'System (Auto-save on shutdown)'
        );
        console.log(`Auto-saved version: ${autoVersion.versionName}`);
    }
    
    // Đóng tất cả WebSocket connections
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.close();
        }
    });
    
    // Đóng server
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
}

// Handle shutdown signals
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log(`Document initialized with ${document.length} characters`);
    console.log(`Available versions: ${versions.length}`);
});