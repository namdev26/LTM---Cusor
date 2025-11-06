/**
 * Version API Routes
 */

const express = require('express');
const router = express.Router();
const VersionService = require('../services/VersionService');
const DocumentService = require('../services/DocumentService');
const Logger = require('../utils/logger');

/**
 * GET /api/versions
 * Get all versions
 */
router.get('/', (req, res) => {
    try {
        const versions = VersionService.getAllVersions();
        res.json({
            success: true,
            data: versions,
            total: versions.length
        });
    } catch (error) {
        Logger.error('Error fetching versions:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching versions',
            error: error.message
        });
    }
});

/**
 * POST /api/versions
 * Create a new version
 */
router.post('/', (req, res) => {
    try {
        const { versionName, createdBy } = req.body;
        const version = VersionService.createVersion(
            versionName, 
            DocumentService.getDocument(), 
            createdBy
        );
        
        // Broadcast to WebSocket clients handled by WebSocketHandler
        res.json({
            success: true,
            message: 'Version created successfully',
            data: version
        });
    } catch (error) {
        Logger.error('Error creating version:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating version',
            error: error.message
        });
    }
});

/**
 * POST /api/versions/:versionId/restore
 * Restore a specific version
 */
router.post('/:versionId/restore', (req, res) => {
    try {
        const { versionId } = req.params;
        const version = VersionService.getVersionById(versionId);
        
        if (!version) {
            return res.status(404).json({
                success: false,
                message: 'Version not found'
            });
        }
        
        // Restore document
        DocumentService.updateDocument(version.content);
        
        Logger.info(`Version restored: ${version.versionName}`);
        
        // Broadcast to WebSocket clients
        if (req.app.locals.wsHandler) {
            req.app.locals.wsHandler.broadcastDocumentUpdate(DocumentService.getDocument());
        }
        
        // Return success
        res.json({
            success: true,
            message: 'Version restored successfully',
            data: version
        });
    } catch (error) {
        Logger.error('Error restoring version:', error);
        res.status(500).json({
            success: false,
            message: 'Error restoring version',
            error: error.message
        });
    }
});

/**
 * DELETE /api/versions/:versionId
 * Delete a specific version
 */
router.delete('/:versionId', (req, res) => {
    try {
        const { versionId } = req.params;
        const success = VersionService.deleteVersion(versionId);
        
        if (!success) {
            return res.status(404).json({
                success: false,
                message: 'Version not found'
            });
        }
        
        // Broadcast to WebSocket clients
        if (req.app.locals.wsHandler) {
            req.app.locals.wsHandler.broadcastVersions();
        }
        
        res.json({
            success: true,
            message: 'Version deleted successfully'
        });
    } catch (error) {
        Logger.error('Error deleting version:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting version',
            error: error.message
        });
    }
});

module.exports = router;

