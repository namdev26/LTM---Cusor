/**
 * Version Service - Manages document versions/snapshots
 */

const fs = require('fs');
const path = require('path');
const { MAX_VERSIONS, VERSIONS_FILE } = require('../config/constants');
const { generateVersionId } = require('../utils/idGenerator');
const Logger = require('../utils/logger');

class VersionService {
    constructor() {
        this.versions = [];
        this.versionsFilePath = path.join(process.cwd(), VERSIONS_FILE);
    }

    /**
     * Initialize - Load versions from file
     */
    initialize() {
        this.loadVersions();
    }

    /**
     * Load versions from file
     */
    loadVersions() {
        try {
            if (fs.existsSync(this.versionsFilePath)) {
                const data = fs.readFileSync(this.versionsFilePath, 'utf8');
                this.versions = JSON.parse(data);
                Logger.info(`Loaded ${this.versions.length} versions from file`);
            } else {
                this.versions = [];
                Logger.info('No versions file found, starting with empty versions');
            }
        } catch (error) {
            Logger.error('Error loading versions:', error);
            this.versions = [];
        }
    }

    /**
     * Save versions to file
     */
    saveVersions() {
        try {
            fs.writeFileSync(
                this.versionsFilePath, 
                JSON.stringify(this.versions, null, 2), 
                'utf8'
            );
            Logger.info(`Saved ${this.versions.length} versions to file`);
        } catch (error) {
            Logger.error('Error saving versions:', error);
        }
    }

    /**
     * Create a new version
     * @param {string} versionName - Version name
     * @param {string} content - Document content
     * @param {string} createdBy - Creator information
     * @returns {Object} Created version
     */
    createVersion(versionName, content, createdBy) {
        const version = {
            id: generateVersionId(),
            versionName: versionName || `Version ${new Date().toLocaleString('vi-VN')}`,
            content: content,
            timestamp: new Date().toISOString(),
            createdBy: createdBy || 'System'
        };
        
        this.versions.push(version);
        
        // Limit max versions to prevent file from growing too large
        if (this.versions.length > MAX_VERSIONS) {
            this.versions.shift(); // Remove oldest version
            Logger.info(`Removed oldest version to maintain ${MAX_VERSIONS} max versions`);
        }
        
        this.saveVersions();
        Logger.info(`Version created: ${version.versionName} by ${createdBy}`);
        
        return version;
    }

    /**
     * Get all versions
     * @returns {Array} Array of versions
     */
    getAllVersions() {
        return this.versions;
    }

    /**
     * Get version by ID
     * @param {string} versionId - Version ID
     * @returns {Object|undefined} Version object
     */
    getVersionById(versionId) {
        return this.versions.find(v => v.id === versionId);
    }

    /**
     * Get latest version
     * @returns {Object|undefined} Latest version
     */
    getLatestVersion() {
        return this.versions.length > 0 
            ? this.versions[this.versions.length - 1] 
            : undefined;
    }

    /**
     * Delete version by ID
     * @param {string} versionId - Version ID
     * @returns {boolean} Success status
     */
    deleteVersion(versionId) {
        const index = this.versions.findIndex(v => v.id === versionId);
        
        if (index === -1) {
            return false;
        }
        
        const deletedVersion = this.versions.splice(index, 1)[0];
        this.saveVersions();
        Logger.info(`Version deleted: ${deletedVersion.versionName}`);
        
        return true;
    }

    /**
     * Get total number of versions
     * @returns {number} Number of versions
     */
    getVersionCount() {
        return this.versions.length;
    }
}

module.exports = new VersionService();

