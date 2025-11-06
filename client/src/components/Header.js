import React from 'react';

/**
 * Header component with title and connection status
 */
const Header = ({ isConnected }) => {
    return (
        <div className="header">
            <h1>Collaborative Editor</h1>
            <div className="connection-status">
                <span className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}>
                    {isConnected ? '🟢 Đã kết nối' : '🔴 Đã ngắt kết nối'}
                </span>
            </div>
        </div>
    );
};

export default Header;

