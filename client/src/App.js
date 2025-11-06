import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
    const [document, setDocument] = useState("");
    const [socket, setSocket] = useState(null);
    const [sessionId, setSessionId] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState("");
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [isConnected, setIsConnected] = useState(false);
    const [showNameInput, setShowNameInput] = useState(false);
    const [versions, setVersions] = useState([]);
    const [showVersions, setShowVersions] = useState(false);
    const [showCreateVersion, setShowCreateVersion] = useState(false);
    const nameInputRef = useRef(null);
    const versionNameRef = useRef(null);

    useEffect(() => {
        const newSocket = new WebSocket('ws://localhost:5000');
        setSocket(newSocket);

        newSocket.onopen = () => {
            console.log('WebSocket connection established');
            setIsConnected(true);
        };

        newSocket.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                if (message.type === 'session') {
                    // Nhận thông tin session và user ID
                    setSessionId(message.data.sessionId);
                    setUserId(message.data.userId);
                    setUserName(message.data.userName);
                    console.log('Session established:', message.data);
                } else if (message.type === 'init') {
                    setDocument(message.data);
                } else if (message.type === 'update') {
                    // Cập nhật từ server
                    setDocument(message.data);
                } else if (message.type === 'userList') {
                    // Cập nhật danh sách người dùng online
                    setOnlineUsers(message.data);
                    console.log('Online users updated:', message.data);
                } else if (message.type === 'versions') {
                    // Nhận danh sách versions từ server
                    setVersions(message.data);
                } else if (message.type === 'versionsUpdate') {
                    // Nhận cập nhật danh sách versions
                    setVersions(message.data);
                } else if (message.type === 'versionCreated') {
                    // Xác nhận version đã được tạo
                    console.log('Version created:', message.data);
                    setShowCreateVersion(false);
                }
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        };

        newSocket.onclose = () => {
            console.log('WebSocket connection closed');
            setIsConnected(false);
        };

        newSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
            setIsConnected(false);
        };

        return () => {
            newSocket.close();
        };
    }, []);

    const handleChange = (e) => {
        const newDocument = e.target.value;
        setDocument(newDocument);
        
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ 
                type: 'update', 
                data: newDocument
            }));
        }
    };
    
    const handleCreateVersion = () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            const versionName = versionNameRef.current?.value || `Version ${new Date().toLocaleString('vi-VN')}`;
            socket.send(JSON.stringify({ 
                type: 'createVersion', 
                data: { versionName: versionName }
            }));
        }
    };
    
    const handleRestoreVersion = async (versionId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/versions/${versionId}/restore`, {
                method: 'POST'
            });
            const result = await response.json();
            if (result.success) {
                console.log('Version restored:', result.data);
                // Document sẽ được cập nhật qua WebSocket message
            }
        } catch (error) {
            console.error('Error restoring version:', error);
            alert('Không thể khôi phục version. Vui lòng thử lại.');
        }
    };
    
    const handleDeleteVersion = async (versionId) => {
        if (!window.confirm('Bạn có chắc chắn muốn xóa version này?')) {
            return;
        }
        
        try {
            const response = await fetch(`http://localhost:5000/api/versions/${versionId}`, {
                method: 'DELETE'
            });
            const result = await response.json();
            if (result.success) {
                // Versions sẽ được cập nhật qua WebSocket message
                fetchVersions();
            }
        } catch (error) {
            console.error('Error deleting version:', error);
            alert('Không thể xóa version. Vui lòng thử lại.');
        }
    };
    
    const fetchVersions = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/versions');
            const result = await response.json();
            if (result.success) {
                setVersions(result.data);
            }
        } catch (error) {
            console.error('Error fetching versions:', error);
        }
    };
    
    // Load versions khi mở versions panel
    useEffect(() => {
        if (showVersions) {
            fetchVersions();
        }
    }, [showVersions]);

    const handleUpdateUserName = (newName) => {
        if (socket && socket.readyState === WebSocket.OPEN && newName.trim()) {
            socket.send(JSON.stringify({ 
                type: 'updateUserName', 
                data: { name: newName.trim() } 
            }));
            setUserName(newName.trim());
            setShowNameInput(false);
        }
    };

    const formatTime = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString('vi-VN', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        });
    };
    
    const formatDateTime = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };
    

    return (
        <div className="App">
            <div className="header">
                <h1>Collaborative Editor</h1>
                <div className="connection-status">
                    <span className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}>
                        {isConnected ? '🟢 Đã kết nối' : '🔴 Đã ngắt kết nối'}
                    </span>
                </div>
            </div>

            <div className="editor-controls">
                <div className="version-controls">
                    <button 
                        className="control-btn save-version-btn"
                        onClick={() => setShowCreateVersion(!showCreateVersion)}
                        title="Lưu version hiện tại"
                    >
                        💾 Lưu Version
                    </button>
                    <button 
                        className="control-btn versions-btn"
                        onClick={() => setShowVersions(!showVersions)}
                        title="Xem các versions đã lưu"
                    >
                        📚 Versions ({versions.length})
                    </button>
                </div>
                
                {showCreateVersion && (
                    <div className="create-version-form">
                        <input
                            ref={versionNameRef}
                            type="text"
                            placeholder="Tên version (để trống để dùng tên mặc định)"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleCreateVersion();
                                }
                            }}
                            autoFocus
                        />
                        <button onClick={handleCreateVersion}>
                            Lưu
                        </button>
                        <button onClick={() => setShowCreateVersion(false)}>
                            Hủy
                        </button>
                    </div>
                )}
            </div>

            <div className="user-info-section">
                <div className="current-user">
                    <strong>Thông tin của bạn:</strong>
                    <div className="user-details">
                        <span>ID: {userId || 'Đang tải...'}</span>
                        <span>Session: {sessionId ? sessionId.substring(0, 8) + '...' : 'Đang tải...'}</span>
                        <span>
                            Tên: {userName || 'Chưa có tên'}
                            <button 
                                className="edit-name-btn"
                                onClick={() => setShowNameInput(!showNameInput)}
                            >
                                ✏️
                            </button>
                        </span>
                    </div>
                    {showNameInput && (
                        <div className="name-input-container">
                            <input
                                ref={nameInputRef}
                                type="text"
                                placeholder="Nhập tên của bạn"
                                defaultValue={userName}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleUpdateUserName(e.target.value);
                                    }
                                }}
                                autoFocus
                            />
                            <button onClick={() => {
                                if (nameInputRef.current) {
                                    handleUpdateUserName(nameInputRef.current.value);
                                }
                            }}>
                                Lưu
                            </button>
                            <button onClick={() => setShowNameInput(false)}>
                                Hủy
                            </button>
                        </div>
                    )}
                </div>

                <div className="online-users">
                    <strong>Người dùng online ({onlineUsers.length}):</strong>
                    <div className="users-list">
                        {onlineUsers.length === 0 ? (
                            <p className="no-users">Chưa có người dùng online</p>
                        ) : (
                            onlineUsers.map((user) => (
                                <div key={user.id} className="user-item">
                                    <span className="user-name">{user.name}</span>
                                    <span className="user-id">({user.id})</span>
                                    <span className="user-time">
                                        Kết nối lúc: {formatTime(user.connectedAt)}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <textarea
                value={document}
                onChange={handleChange}
                rows="20"
                cols="80"
                placeholder="Bắt đầu chỉnh sửa tài liệu..."
            />
            
            {showVersions && (
                <>
                    <div className="versions-overlay" onClick={() => setShowVersions(false)}></div>
                    <div className="versions-panel">
                        <div className="versions-header">
                            <h3>📚 Danh sách Versions</h3>
                            <button 
                                className="close-versions-btn"
                                onClick={() => setShowVersions(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="versions-list">
                            {versions.length === 0 ? (
                                <p className="no-versions">Chưa có version nào được lưu</p>
                            ) : (
                                [...versions].reverse().map((version) => (
                                    <div key={version.id} className="version-entry">
                                        <div className="version-entry-header">
                                            <span className="version-name">
                                                📄 {version.versionName}
                                            </span>
                                            <span className="version-time">
                                                {formatDateTime(version.timestamp)}
                                            </span>
                                        </div>
                                        <div className="version-info">
                                            <span className="version-creator">
                                                👤 {version.createdBy}
                                            </span>
                                            <span className="version-size">
                                                {version.content.length} ký tự
                                            </span>
                                        </div>
                                        <div className="version-preview">
                                            <pre>{version.content.substring(0, 150) || '(trống)'}{version.content.length > 150 ? '...' : ''}</pre>
                                        </div>
                                        <div className="version-actions">
                                            <button 
                                                className="restore-btn"
                                                onClick={() => handleRestoreVersion(version.id)}
                                            >
                                                ↻ Khôi phục
                                            </button>
                                            <button 
                                                className="delete-btn"
                                                onClick={() => handleDeleteVersion(version.id)}
                                            >
                                                🗑️ Xóa
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;