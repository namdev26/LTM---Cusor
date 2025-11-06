/**
 * API Routes Index
 */

const express = require('express');
const router = express.Router();
const versionRoutes = require('./versionRoutes');

// Mount version routes
router.use('/versions', versionRoutes);

// Health check endpoint
router.get('/health', (req, res) => {
    res.json({
        success: true,
        message: 'Server is healthy',
        timestamp: new Date().toISOString()
    });
});

module.exports = router;

