/**
 * Document Service - Manages document content
 */

class DocumentService {
    constructor() {
        this.document = "";
    }

    /**
     * Get current document content
     * @returns {string} Document content
     */
    getDocument() {
        return this.document;
    }

    /**
     * Update document content
     * @param {string} content - New document content
     */
    updateDocument(content) {
        this.document = content;
    }

    /**
     * Get document length
     * @returns {number} Document length
     */
    getDocumentLength() {
        return this.document.length;
    }

    /**
     * Check if document is empty
     * @returns {boolean} True if document is empty
     */
    isEmpty() {
        return this.document.trim().length === 0;
    }
}

module.exports = new DocumentService();

