import React, { useState, useRef } from 'react';
import { truncateSessionId } from '../utils/formatters';

/**
 * User Info component - displays current user information
 */
const UserInfo = ({ userId, sessionId, userName, onUpdateUserName }) => {
    const [showNameInput, setShowNameInput] = useState(false);
    const nameInputRef = useRef(null);

    const handleSaveName = () => {
        if (nameInputRef.current && nameInputRef.current.value.trim()) {
            const success = onUpdateUserName(nameInputRef.current.value);
            if (success) {
                setShowNameInput(false);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSaveName();
        }
    };

    return (
        <div className="current-user">
            <strong>Thông tin của bạn:</strong>
            <div className="user-details">
                <span>ID: {userId || 'Đang tải...'}</span>
                <span>Session: {truncateSessionId(sessionId)}</span>
                <span>
                    Tên: {userName || 'Chưa có tên'}
                    <button 
                        className="edit-name-btn"
                        onClick={() => setShowNameInput(!showNameInput)}
                        title="Chỉnh sửa tên"
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
                        onKeyPress={handleKeyPress}
                        autoFocus
                    />
                    <button onClick={handleSaveName}>Lưu</button>
                    <button onClick={() => setShowNameInput(false)}>Hủy</button>
                </div>
            )}
        </div>
    );
};

export default UserInfo;

