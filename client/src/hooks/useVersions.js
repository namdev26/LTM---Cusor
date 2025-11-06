import { useState, useEffect, useCallback } from 'react';
import { fetchVersions, restoreVersion, deleteVersion } from '../utils/api';
import { WS_MESSAGE_TYPES } from '../utils/constants';

/**
 * Custom hook for version management
 * @param {Object} socket - WebSocket connection
 * @param {boolean} showVersions - Whether versions panel is visible
 * @returns {Object} Version state and utilities
 */
export const useVersions = (socket, showVersions) => {
    const [versions, setVersions] = useState([]);
    const [showCreateVersion, setShowCreateVersion] = useState(false);

    // Load versions when panel is opened
    useEffect(() => {
        if (showVersions) {
            loadVersions();
        }
    }, [showVersions]);

    // Listen to version-related WebSocket messages
    useEffect(() => {
        if (!socket) return;

        const handleMessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                
                switch (message.type) {
                    case WS_MESSAGE_TYPES.VERSIONS:
                    case WS_MESSAGE_TYPES.VERSIONS_UPDATE:
                        setVersions(message.data);
                        break;
                    case WS_MESSAGE_TYPES.VERSION_CREATED:
                        console.log('Version created:', message.data);
                        setShowCreateVersion(false);
                        loadVersions();
                        break;
                    default:
                        break;
                }
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        };

        socket.addEventListener('message', handleMessage);

        return () => {
            socket.removeEventListener('message', handleMessage);
        };
    }, [socket]);

    const loadVersions = useCallback(async () => {
        try {
            const data = await fetchVersions();
            setVersions(data);
        } catch (error) {
            console.error('Failed to load versions:', error);
        }
    }, []);

    const createVersion = useCallback((versionName) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            const name = versionName || `Version ${new Date().toLocaleString('vi-VN')}`;
            socket.send(JSON.stringify({ 
                type: WS_MESSAGE_TYPES.CREATE_VERSION, 
                data: { versionName: name }
            }));
            return true;
        }
        return false;
    }, [socket]);

    const handleRestoreVersion = useCallback(async (versionId) => {
        try {
            await restoreVersion(versionId);
            console.log('Version restored successfully');
        } catch (error) {
            alert('Không thể khôi phục version. Vui lòng thử lại.');
        }
    }, []);

    const handleDeleteVersion = useCallback(async (versionId) => {
        if (!window.confirm('Bạn có chắc chắn muốn xóa version này?')) {
            return;
        }

        try {
            await deleteVersion(versionId);
            loadVersions();
        } catch (error) {
            alert('Không thể xóa version. Vui lòng thử lại.');
        }
    }, [loadVersions]);

    return {
        versions,
        showCreateVersion,
        setShowCreateVersion,
        createVersion,
        handleRestoreVersion,
        handleDeleteVersion,
    };
};

