/**
 * WebSocket Handler - Handles WebSocket connections and messages
 */

const WebSocket = require('ws');
const { MESSAGE_TYPES } = require('../config/constants');
const { generateSessionId, generateUserId } = require('../utils/idGenerator');
const UserService = require('../services/UserService');
const VersionService = require('../services/VersionService');
const DocumentService = require('../services/DocumentService');
const Logger = require('../utils/logger');

class WebSocketHandler {
    constructor(wss) {
        this.wss = wss;
    }

    /**
     * Initialize WebSocket server
     */
    initialize() {
        this.wss.on('connection', (ws) => this.handleConnection(ws));
        Logger.info('WebSocket server initialized');
    }

    /**
     * Handle new WebSocket connection
     * @param {WebSocket} ws - WebSocket connection
     */
    handleConnection(ws) {
        // Generate session and user ID
        const sessionId = generateSessionId();
        const userId = generateUserId(sessionId);
        
        // Add user
        const user = UserService.addUser(sessionId, userId, ws);
        
        // Send session info to client
        this.sendMessage(ws, MESSAGE_TYPES.SESSION, {
            sessionId: sessionId,
            userId: userId,
            userName: user.name
        });

        // Send initial document
        this.sendMessage(ws, MESSAGE_TYPES.INIT, DocumentService.getDocument());

        // Send online users list
        this.sendMessage(ws, MESSAGE_TYPES.USER_LIST, UserService.getOnlineUsers());

        // Send versions list
        this.sendMessage(ws, MESSAGE_TYPES.VERSIONS, VersionService.getAllVersions());

        // Broadcast updated user list to all clients
        this.broadcastUserList();

        // Setup message handler
        ws.on('message', (message) => this.handleMessage(ws, sessionId, message));

        // Setup close handler
        ws.on('close', () => this.handleClose(sessionId));

        // Setup error handler
        ws.on('error', (error) => this.handleError(sessionId, error));
    }

    /**
     * Handle incoming message
     * @param {WebSocket} ws - WebSocket connection
     * @param {string} sessionId - Session ID
     * @param {string} message - Message string
     */
    handleMessage(ws, sessionId, message) {
        try {
            const parsedMessage = JSON.parse(message);
            
            switch (parsedMessage.type) {
                case MESSAGE_TYPES.UPDATE:
                    this.handleDocumentUpdate(parsedMessage.data);
                    break;
                    
                case MESSAGE_TYPES.CREATE_VERSION:
                    this.handleCreateVersion(ws, sessionId, parsedMessage.data);
                    break;
                    
                case MESSAGE_TYPES.UPDATE_USER_NAME:
                    this.handleUpdateUserName(sessionId, parsedMessage.data);
                    break;
                    
                default:
                    Logger.warn(`Unknown message type: ${parsedMessage.type}`);
            }
        } catch (error) {
            Logger.error('Error parsing message:', error);
        }
    }

    /**
     * Handle document update
     * @param {string} newContent - New document content
     */
    handleDocumentUpdate(newContent) {
        DocumentService.updateDocument(newContent);
        this.broadcastMessage(MESSAGE_TYPES.UPDATE, DocumentService.getDocument());
    }

    /**
     * Handle create version request
     * @param {WebSocket} ws - WebSocket connection
     * @param {string} sessionId - Session ID
     * @param {Object} data - Version data
     */
    handleCreateVersion(ws, sessionId, data) {
        const user = UserService.getUser(sessionId);
        const versionName = data?.versionName;
        const createdBy = user ? `${user.name} (${user.id})` : 'Unknown';
        
        const version = VersionService.createVersion(
            versionName, 
            DocumentService.getDocument(), 
            createdBy
        );
        
        this.broadcastVersions();
        this.sendMessage(ws, MESSAGE_TYPES.VERSION_CREATED, version);
    }

    /**
     * Handle update user name request
     * @param {string} sessionId - Session ID
     * @param {Object} data - User data
     */
    handleUpdateUserName(sessionId, data) {
        const success = UserService.updateUserName(sessionId, data.name);
        if (success) {
            this.broadcastUserList();
        }
    }

    /**
     * Handle connection close
     * @param {string} sessionId - Session ID
     */
    handleClose(sessionId) {
        UserService.removeUser(sessionId);
        this.broadcastUserList();
    }

    /**
     * Handle WebSocket error
     * @param {string} sessionId - Session ID
     * @param {Error} error - Error object
     */
    handleError(sessionId, error) {
        Logger.error(`WebSocket error for session ${sessionId}:`, error);
        UserService.removeUser(sessionId);
        this.broadcastUserList();
    }

    /**
     * Send message to a specific client
     * @param {WebSocket} ws - WebSocket connection
     * @param {string} type - Message type
     * @param {any} data - Message data
     */
    sendMessage(ws, type, data) {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type, data }));
        }
    }

    /**
     * Broadcast message to all connected clients
     * @param {string} type - Message type
     * @param {any} data - Message data
     */
    broadcastMessage(type, data) {
        this.wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type, data }));
            }
        });
    }

    /**
     * Broadcast user list to all clients
     */
    broadcastUserList() {
        this.broadcastMessage(MESSAGE_TYPES.USER_LIST, UserService.getOnlineUsers());
    }

    /**
     * Broadcast versions list to all clients
     */
    broadcastVersions() {
        this.broadcastMessage(MESSAGE_TYPES.VERSIONS_UPDATE, VersionService.getAllVersions());
    }

    /**
     * Broadcast document update to all clients
     * @param {string} document - Document content
     */
    broadcastDocumentUpdate(document) {
        this.broadcastMessage(MESSAGE_TYPES.UPDATE, document);
    }

    /**
     * Close all connections
     */
    closeAllConnections() {
        this.wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.close();
            }
        });
    }
}

module.exports = WebSocketHandler;

