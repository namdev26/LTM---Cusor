import React, { useState } from 'react';
import './App.css';
import { useWebSocket, useVersions } from './hooks';
import { 
    Header, 
    UserInfo, 
    OnlineUsers, 
    Editor, 
    EditorControls, 
    VersionPanel 
} from './components';

function App() {
    const [showVersions, setShowVersions] = useState(false);

    // Use custom hooks
    const {
        socket,
        isConnected,
        sessionId,
        userId,
        userName,
        onlineUsers,
        document,
        updateDocument,
        updateUserName,
    } = useWebSocket();

    const {
        versions,
        showCreateVersion,
        setShowCreateVersion,
        createVersion,
        handleRestoreVersion,
        handleDeleteVersion,
    } = useVersions(socket, showVersions);

    // Handlers
    const handleDocumentChange = (e) => {
        updateDocument(e.target.value);
    };

    const handleToggleCreateVersion = () => {
        setShowCreateVersion(!showCreateVersion);
    };

    const handleToggleVersionsPanel = () => {
        setShowVersions(!showVersions);
    };

    const handleCreateVersion = (versionName) => {
        createVersion(versionName);
    };

    return (
        <div className="App">
            <Header isConnected={isConnected} />

            <EditorControls
                showCreateVersion={showCreateVersion}
                versionsCount={versions.length}
                onToggleCreateVersion={handleToggleCreateVersion}
                onToggleVersionsPanel={handleToggleVersionsPanel}
                onCreateVersion={handleCreateVersion}
            />

            <div className="user-info-section">
                <UserInfo
                    userId={userId}
                    sessionId={sessionId}
                    userName={userName}
                    onUpdateUserName={updateUserName}
                />

                <OnlineUsers users={onlineUsers} />
            </div>

            <Editor value={document} onChange={handleDocumentChange} />

            {showVersions && (
                <VersionPanel
                    versions={versions}
                    onClose={() => setShowVersions(false)}
                    onRestore={handleRestoreVersion}
                    onDelete={handleDeleteVersion}
                />
            )}
        </div>
    );
}

export default App;
