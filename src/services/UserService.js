/**
 * User Service - Manages user connections and information
 */

const { DEFAULT_USER_NAME_PREFIX } = require('../config/constants');
const Logger = require('../utils/logger');

class UserService {
    constructor() {
        // Map<sessionId, {id, name, ws, connectedAt, sessionId}>
        this.users = new Map();
    }

    /**
     * Add a new user
     * @param {string} sessionId - Session ID
     * @param {string} userId - User ID
     * @param {WebSocket} ws - WebSocket connection
     * @returns {Object} User object
     */
    addUser(sessionId, userId, ws) {
        const user = {
            id: userId,
            name: `${DEFAULT_USER_NAME_PREFIX} ${userId.substring(5)}`,
            ws: ws,
            connectedAt: new Date().toISOString(),
            sessionId: sessionId
        };
        
        this.users.set(sessionId, user);
        Logger.info(`User added - Session: ${sessionId}, User ID: ${userId}`);
        Logger.info(`Total online users: ${this.users.size}`);
        
        return user;
    }

    /**
     * Remove a user
     * @param {string} sessionId - Session ID
     */
    removeUser(sessionId) {
        const user = this.users.get(sessionId);
        if (user) {
            this.users.delete(sessionId);
            Logger.info(`User removed - Session: ${sessionId}, User ID: ${user.id}`);
            Logger.info(`Total online users: ${this.users.size}`);
        }
    }

    /**
     * Get user by session ID
     * @param {string} sessionId - Session ID
     * @returns {Object|undefined} User object
     */
    getUser(sessionId) {
        return this.users.get(sessionId);
    }

    /**
     * Update user name
     * @param {string} sessionId - Session ID
     * @param {string} newName - New user name
     * @returns {boolean} Success status
     */
    updateUserName(sessionId, newName) {
        const user = this.users.get(sessionId);
        if (user && newName) {
            user.name = newName;
            Logger.info(`User ${user.id} updated name to: ${newName}`);
            return true;
        }
        return false;
    }

    /**
     * Get list of online users (without ws connection)
     * @returns {Array} Array of user objects
     */
    getOnlineUsers() {
        return Array.from(this.users.values()).map(user => ({
            id: user.id,
            name: user.name,
            connectedAt: user.connectedAt
        }));
    }

    /**
     * Get total number of online users
     * @returns {number} Number of online users
     */
    getUserCount() {
        return this.users.size;
    }

    /**
     * Get all WebSocket connections
     * @returns {Array} Array of WebSocket connections
     */
    getAllConnections() {
        return Array.from(this.users.values()).map(user => user.ws);
    }
}

module.exports = new UserService();

