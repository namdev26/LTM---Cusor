/**
 * Simple Logger Utility
 */

class Logger {
    static info(message, ...args) {
        console.log(`[INFO] ${message}`, ...args);
    }

    static error(message, ...args) {
        console.error(`[ERROR] ${message}`, ...args);
    }

    static warn(message, ...args) {
        console.warn(`[WARN] ${message}`, ...args);
    }

    static debug(message, ...args) {
        if (process.env.DEBUG) {
            console.log(`[DEBUG] ${message}`, ...args);
        }
    }
}

module.exports = Logger;

