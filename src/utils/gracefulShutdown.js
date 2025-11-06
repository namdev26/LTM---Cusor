/**
 * Graceful Shutdown Utility
 */

const VersionService = require('../services/VersionService');
const DocumentService = require('../services/DocumentService');
const Logger = require('./logger');

/**
 * Handle graceful shutdown
 * @param {http.Server} server - HTTP server instance
 * @param {WebSocketHandler} wsHandler - WebSocket handler instance
 */
function setupGracefulShutdown(server, wsHandler) {
    const shutdown = () => {
        Logger.info('\nShutting down server...');
        
        // Auto-save version before shutdown
        if (!DocumentService.isEmpty()) {
            const autoVersion = VersionService.createVersion(
                `Auto-save ${new Date().toLocaleString('vi-VN')}`, 
                DocumentService.getDocument(), 
                'System (Auto-save on shutdown)'
            );
            Logger.info(`Auto-saved version: ${autoVersion.versionName}`);
        }
        
        // Close all WebSocket connections
        wsHandler.closeAllConnections();
        
        // Close server
        server.close(() => {
            Logger.info('Server closed');
            process.exit(0);
        });
        
        // Force exit after 10 seconds
        setTimeout(() => {
            Logger.error('Forced shutdown after timeout');
            process.exit(1);
        }, 10000);
    };

    // Handle shutdown signals
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
}

module.exports = setupGracefulShutdown;

