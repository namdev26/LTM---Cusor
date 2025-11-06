/**
 * Application Constants
 */

module.exports = {
    // Server Configuration
    PORT: process.env.PORT || 5000,
    
    // Version Management
    MAX_VERSIONS: 50, // Maximum number of versions to keep
    VERSIONS_FILE: 'versions.json',
    
    // WebSocket Message Types
    MESSAGE_TYPES: {
        SESSION: 'session',
        INIT: 'init',
        UPDATE: 'update',
        USER_LIST: 'userList',
        VERSIONS: 'versions',
        VERSIONS_UPDATE: 'versionsUpdate',
        VERSION_CREATED: 'versionCreated',
        CREATE_VERSION: 'createVersion',
        UPDATE_USER_NAME: 'updateUserName',
    },
    
    // User Configuration
    DEFAULT_USER_NAME_PREFIX: 'User',
    USER_ID_PREFIX: 'user_',
    VERSION_ID_PREFIX: 'version_',
};

