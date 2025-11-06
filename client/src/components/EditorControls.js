import React from 'react';
import CreateVersionForm from './CreateVersionForm';

/**
 * Editor Controls component - controls for version management
 */
const EditorControls = ({ 
    showCreateVersion, 
    versionsCount,
    onToggleCreateVersion,
    onToggleVersionsPanel,
    onCreateVersion 
}) => {
    return (
        <div className="editor-controls">
            <div className="version-controls">
                <button 
                    className="control-btn save-version-btn"
                    onClick={onToggleCreateVersion}
                    title="Lưu version hiện tại"
                >
                    💾 Lưu Version
                </button>
                <button 
                    className="control-btn versions-btn"
                    onClick={onToggleVersionsPanel}
                    title="Xem các versions đã lưu"
                >
                    📚 Versions ({versionsCount})
                </button>
            </div>
            
            {showCreateVersion && (
                <CreateVersionForm
                    onSubmit={(name) => {
                        onCreateVersion(name);
                    }}
                    onCancel={onToggleCreateVersion}
                />
            )}
        </div>
    );
};

export default EditorControls;

