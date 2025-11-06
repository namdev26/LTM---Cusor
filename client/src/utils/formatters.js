/**
 * Format ISO time string to Vietnamese time format (HH:MM:SS)
 * @param {string} isoString - ISO time string
 * @returns {string} Formatted time string
 */
export const formatTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('vi-VN', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
};

/**
 * Format ISO date time string to Vietnamese date time format
 * @param {string} isoString - ISO date time string
 * @returns {string} Formatted date time string
 */
export const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

/**
 * Truncate session ID for display
 * @param {string} sessionId - Full session ID
 * @returns {string} Truncated session ID
 */
export const truncateSessionId = (sessionId) => {
    if (!sessionId) return 'Đang tải...';
    return sessionId.substring(0, 8) + '...';
};

