/**
 * ID Generation Utilities
 */

const { USER_ID_PREFIX, VERSION_ID_PREFIX } = require('../config/constants');

/**
 * Generate a random session ID
 * @returns {string} Session ID
 */
function generateSessionId() {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
}

/**
 * Generate a user ID from session ID
 * @param {string} sessionId - Session ID
 * @returns {string} User ID
 */
function generateUserId(sessionId) {
    return `${USER_ID_PREFIX}${sessionId.substring(0, 8)}`;
}

/**
 * Generate a version ID
 * @returns {string} Version ID
 */
function generateVersionId() {
    return `${VERSION_ID_PREFIX}${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

module.exports = {
    generateSessionId,
    generateUserId,
    generateVersionId,
};

