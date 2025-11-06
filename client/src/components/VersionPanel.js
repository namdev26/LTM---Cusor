import React from 'react';
import { formatDateTime } from '../utils/formatters';

/**
 * Version Panel component - displays list of saved versions
 */
const VersionPanel = ({ versions, onClose, onRestore, onDelete }) => {
    return (
        <>
            <div className="versions-overlay" onClick={onClose}></div>
            <div className="versions-panel">
                <div className="versions-header">
                    <h3>📚 Danh sách Versions</h3>
                    <button 
                        className="close-versions-btn"
                        onClick={onClose}
                        title="Đóng"
                    >
                        ✕
                    </button>
                </div>
                <div className="versions-list">
                    {versions.length === 0 ? (
                        <p className="no-versions">Chưa có version nào được lưu</p>
                    ) : (
                        [...versions].reverse().map((version) => (
                            <VersionEntry
                                key={version.id}
                                version={version}
                                onRestore={onRestore}
                                onDelete={onDelete}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

/**
 * Version Entry component - individual version item
 */
const VersionEntry = ({ version, onRestore, onDelete }) => {
    const previewText = version.content.substring(0, 150) || '(trống)';
    const hasMore = version.content.length > 150;

    return (
        <div className="version-entry">
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
                <pre>{previewText}{hasMore ? '...' : ''}</pre>
            </div>
            <div className="version-actions">
                <button 
                    className="restore-btn"
                    onClick={() => onRestore(version.id)}
                    title="Khôi phục version này"
                >
                    ↻ Khôi phục
                </button>
                <button 
                    className="delete-btn"
                    onClick={() => onDelete(version.id)}
                    title="Xóa version này"
                >
                    🗑️ Xóa
                </button>
            </div>
        </div>
    );
};

export default VersionPanel;

