import { useState, useEffect, useCallback } from 'react';
import { WS_URL, WS_MESSAGE_TYPES } from '../utils/constants';

/**
 * Custom hook for WebSocket connection management
 * @returns {Object} WebSocket state and utilities
 */
export const useWebSocket = () => {
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false);
    const [sessionId, setSessionId] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userName, setUserName] = useState("");
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [document, setDocument] = useState("");

    useEffect(() => {
        const newSocket = new WebSocket(WS_URL);
        setSocket(newSocket);

        newSocket.onopen = () => {
            console.log('WebSocket connection established');
            setIsConnected(true);
        };

        newSocket.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                handleMessage(message);
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

    const handleMessage = (message) => {
        switch (message.type) {
            case WS_MESSAGE_TYPES.SESSION:
                setSessionId(message.data.sessionId);
                setUserId(message.data.userId);
                setUserName(message.data.userName);
                console.log('Session established:', message.data);
                break;
            case WS_MESSAGE_TYPES.INIT:
                setDocument(message.data);
                break;
            case WS_MESSAGE_TYPES.UPDATE:
                setDocument(message.data);
                break;
            case WS_MESSAGE_TYPES.USER_LIST:
                setOnlineUsers(message.data);
                console.log('Online users updated:', message.data);
                break;
            default:
                break;
        }
    };

    const sendMessage = useCallback((type, data) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type, data }));
            return true;
        }
        return false;
    }, [socket]);

    const updateDocument = useCallback((newDocument) => {
        setDocument(newDocument);
        sendMessage(WS_MESSAGE_TYPES.UPDATE, newDocument);
    }, [sendMessage]);

    const updateUserName = useCallback((newName) => {
        if (newName.trim()) {
            sendMessage(WS_MESSAGE_TYPES.UPDATE_USER_NAME, { name: newName.trim() });
            setUserName(newName.trim());
            return true;
        }
        return false;
    }, [sendMessage]);

    return {
        socket,
        isConnected,
        sessionId,
        userId,
        userName,
        onlineUsers,
        document,
        updateDocument,
        updateUserName,
        sendMessage,
    };
};

