import React from 'react';
import { formatTime } from '../utils/formatters';

/**
 * Online Users component - displays list of online users
 */
const OnlineUsers = ({ users }) => {
    return (
        <div className="online-users">
            <strong>Người dùng online ({users.length}):</strong>
            <div className="users-list">
                {users.length === 0 ? (
                    <p className="no-users">Chưa có người dùng online</p>
                ) : (
                    users.map((user) => (
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
    );
};

export default OnlineUsers;

