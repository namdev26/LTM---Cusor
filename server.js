/**
 * Collaborative Editor Server - Refactored
 * A real-time collaborative text editor with version control
 */

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

// Configuration
const { PORT } = require('./src/config/constants');

// Services
const VersionService = require('./src/services/VersionService');
const DocumentService = require('./src/services/DocumentService');

// Handlers
const WebSocketHandler = require('./src/handlers/WebSocketHandler');

// Routes
const apiRoutes = require('./src/routes');

// Utils
const Logger = require('./src/utils/logger');
const setupGracefulShutdown = require('./src/utils/gracefulShutdown');

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Create HTTP server
const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Initialize services
VersionService.initialize();

// Load latest version into document if available
const latestVersion = VersionService.getLatestVersion();
if (latestVersion) {
    DocumentService.updateDocument(latestVersion.content);
    Logger.info(`Loaded latest version "${latestVersion.versionName}" into document`);
}

// Initialize WebSocket handler
const wsHandler = new WebSocketHandler(wss);
wsHandler.initialize();

// Make wsHandler available to routes via app.locals
app.locals.wsHandler = wsHandler;

// Mount API routes
app.use('/api', apiRoutes);

// Setup graceful shutdown
setupGracefulShutdown(server, wsHandler);

// Start server
server.listen(PORT, () => {
    Logger.info('='.repeat(60));
    Logger.info('📝 Collaborative Editor Server Started');
    Logger.info('='.repeat(60));
    Logger.info(`🌐 Server listening on port ${PORT}`);
    Logger.info(`📄 Document initialized with ${DocumentService.getDocumentLength()} characters`);
    Logger.info(`📚 Available versions: ${VersionService.getVersionCount()}`);
    Logger.info('='.repeat(60));
});

module.exports = { app, server, wss };
