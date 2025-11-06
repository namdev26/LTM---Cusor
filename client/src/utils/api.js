import { API_ENDPOINTS } from './constants';

/**
 * Fetch all versions from server
 * @returns {Promise<Array>} Array of versions
 */
export const fetchVersions = async () => {
    try {
        const response = await fetch(API_ENDPOINTS.VERSIONS);
        const result = await response.json();
        if (result.success) {
            return result.data;
        }
        throw new Error('Failed to fetch versions');
    } catch (error) {
        console.error('Error fetching versions:', error);
        throw error;
    }
};

/**
 * Restore a specific version
 * @param {string} versionId - Version ID to restore
 * @returns {Promise<Object>} Restored version data
 */
export const restoreVersion = async (versionId) => {
    try {
        const response = await fetch(API_ENDPOINTS.RESTORE_VERSION(versionId), {
            method: 'POST'
        });
        const result = await response.json();
        if (result.success) {
            return result.data;
        }
        throw new Error('Failed to restore version');
    } catch (error) {
        console.error('Error restoring version:', error);
        throw error;
    }
};

/**
 * Delete a specific version
 * @param {string} versionId - Version ID to delete
 * @returns {Promise<boolean>} Success status
 */
export const deleteVersion = async (versionId) => {
    try {
        const response = await fetch(API_ENDPOINTS.DELETE_VERSION(versionId), {
            method: 'DELETE'
        });
        const result = await response.json();
        if (result.success) {
            return true;
        }
        throw new Error('Failed to delete version');
    } catch (error) {
        console.error('Error deleting version:', error);
        throw error;
    }
};

