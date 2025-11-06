// WebSocket Configuration
export const WS_URL = 'ws://localhost:5000';

// API Configuration
export const API_BASE_URL = 'http://localhost:5000';
export const API_ENDPOINTS = {
    VERSIONS: `${API_BASE_URL}/api/versions`,
    RESTORE_VERSION: (versionId) => `${API_BASE_URL}/api/versions/${versionId}/restore`,
    DELETE_VERSION: (versionId) => `${API_BASE_URL}/api/versions/${versionId}`,
};

// WebSocket Message Types
export const WS_MESSAGE_TYPES = {
    SESSION: 'session',
    INIT: 'init',
    UPDATE: 'update',
    USER_LIST: 'userList',
    VERSIONS: 'versions',
    VERSIONS_UPDATE: 'versionsUpdate',
    VERSION_CREATED: 'versionCreated',
    CREATE_VERSION: 'createVersion',
    UPDATE_USER_NAME: 'updateUserName',
};

