# 🚀 PHÂN CÔNG DỰ ÁN COLLABORATIVE EDITOR - TEAM LTM

**Thời gian:** 48 giờ (22:00 11/6/2025 → 22:00 13/6/2025)  
**Nguyên tắc:** Mỗi người làm FULL-STACK (Server + Client), số lượng công việc BẰNG NHAU, tránh CONFLICT

---

## 👥 PHÂN CÔNG THEO TÍNH NĂNG (END-TO-END)

### 🔵 NGƯỜI 1: DOCUMENT MANAGEMENT & EDITOR SYSTEM
**Vai trò:** Quản lý tài liệu và giao diện soạn thảo  
**Tổng:** 10 files (5 server + 5 client)

#### **Server (5 files):**
1. `src/services/DocumentService.js` - Quản lý nội dung document
2. `src/handlers/DocumentWSHandler.js` - WebSocket handlers cho document
3. `src/routes/documentRoutes.js` - API endpoints cho document
4. `src/utils/documentHelpers.js` - Helper functions
5. `src/config/constants.js` - Phần constants cho document

#### **Client (5 files):**
6. `client/src/components/Editor.js` - Text editor chính
7. `client/src/components/EditorControls.js` - Toolbar controls
8. `client/src/hooks/useEditor.js` - Custom hook quản lý editor
9. `client/src/utils/documentApi.js` - API calls cho document
10. `client/src/App.css` - Styling phần Editor (dòng 1-100)

---

### 🟢 NGƯỜI 2: VERSION CONTROL SYSTEM
**Vai trò:** Quản lý phiên bản và lịch sử tài liệu  
**Tổng:** 10 files (5 server + 5 client)

#### **Server (5 files):**
1. `src/services/VersionService.js` - Quản lý versions
2. `src/handlers/VersionWSHandler.js` - WebSocket handlers cho versions
3. `src/routes/versionRoutes.js` - API endpoints cho versions
4. `src/utils/versionHelpers.js` - Helper functions
5. `versions.json` - File lưu trữ versions

#### **Client (5 files):**
6. `client/src/components/VersionPanel.js` - Panel hiển thị versions
7. `client/src/components/CreateVersionForm.js` - Form tạo version
8. `client/src/hooks/useVersions.js` - Custom hook quản lý versions
9. `client/src/utils/versionApi.js` - API calls cho versions
10. `client/src/App.css` - Styling phần Versions (dòng 101-200)

---

### 🟠 NGƯỜI 3: USER MANAGEMENT & CONNECTION SYSTEM
**Vai trò:** Quản lý người dùng và kết nối WebSocket  
**Tổng:** 10 files (5 server + 5 client)

#### **Server (5 files):**
1. `src/services/UserService.js` - Quản lý users online
2. `src/handlers/UserWSHandler.js` - WebSocket handlers cho users
3. `src/routes/userRoutes.js` - API endpoints cho users
4. `src/utils/userHelpers.js` - Helper functions
5. `server.js` - Main server integration

#### **Client (5 files):**
6. `client/src/components/Header.js` - Header với connection status
7. `client/src/components/UserInfo.js` - Thông tin user
8. `client/src/components/OnlineUsers.js` - Danh sách users online
9. `client/src/hooks/useWebSocket.js` - Custom hook quản lý WebSocket
10. `client/src/App.css` - Styling phần User/Header (dòng 201-300)

---

## 📅 TIMELINE CHI TIẾT 48 GIỜ

### 🌙 THỨ 5 - 11/6/2025

#### **22:00 - 23:00 | Phase 1: Setup & Planning**
**Tất cả cùng làm:**
```bash
# Tạo branches
git checkout -b nguoi1/init
git checkout -b nguoi2/init
git checkout -b nguoi3/init

# Review requirements
# Setup môi trường local
```

---

#### **23:00 - 01:00 | Phase 2A: Core Services - Round 1**

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/document-service
File: src/services/DocumentService.js
Chức năng:
  - getDocument(): Lấy nội dung document hiện tại
  - updateDocument(content): Cập nhật document
  - getDocumentLength(): Lấy độ dài document
  - isEmpty(): Kiểm tra document rỗng
  - clearDocument(): Xóa toàn bộ document

Commit: "feat(server): implement DocumentService"
Push: 00:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/version-service
File: src/services/VersionService.js
Chức năng:
  - initialize(): Khởi tạo và load versions từ file
  - loadVersions(): Đọc versions.json
  - saveVersions(): Lưu vào versions.json
  - createVersion(name, content, creator): Tạo version mới
  - getAllVersions(): Lấy tất cả versions
  - getVersionById(id): Lấy version theo ID
  - deleteVersion(id): Xóa version
  - getLatestVersion(): Lấy version mới nhất

Commit: "feat(server): implement VersionService with file storage"
Push: 00:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/user-service
File: src/services/UserService.js
Chức năng:
  - addUser(sessionId, userId, ws): Thêm user mới
  - removeUser(sessionId): Xóa user
  - getUser(sessionId): Lấy thông tin user
  - updateUserName(sessionId, name): Đổi tên user
  - getOnlineUsers(): Lấy danh sách users online
  - getUserCount(): Đếm số users
  - getAllConnections(): Lấy tất cả WebSocket connections

Commit: "feat(server): implement UserService with session tracking"
Push: 00:30
```

**Merge vào main: 01:00**

---

#### **01:00 - 03:00 | Phase 2B: Core Services - Round 2**

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/document-helpers
File: src/utils/documentHelpers.js
Chức năng:
  - validateDocumentContent(content): Validate nội dung
  - sanitizeDocument(content): Làm sạch nội dung
  - getDocumentStats(content): Thống kê (words, chars, lines)
  - compareDocuments(doc1, doc2): So sánh 2 documents
  - getDocumentPreview(content, length): Lấy preview

Commit: "feat(server): add document helper utilities"
Push: 02:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/version-helpers
File: src/utils/versionHelpers.js
Chức năng:
  - generateVersionName(): Tạo tên version tự động
  - validateVersionName(name): Validate tên version
  - formatVersionDate(date): Format ngày tháng
  - getVersionDiff(v1, v2): Tính diff giữa 2 versions
  - sortVersionsByDate(versions): Sắp xếp versions

File: versions.json
- Khởi tạo file với empty array []

Commit: "feat(server): add version helpers and init storage file"
Push: 02:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/user-helpers
File: src/utils/userHelpers.js
Chức năng:
  - generateUserName(userId): Tạo tên user mặc định
  - validateUserName(name): Validate tên user
  - formatUserInfo(user): Format thông tin user
  - getUserColorByName(name): Lấy màu theo tên
  - isUserOnline(sessionId, users): Kiểm tra online

Commit: "feat(server): add user helper utilities"
Push: 02:30
```

**Merge vào main: 03:00**

---

### 🌅 THỨ 6 - 12/6/2025

#### **03:00 - 05:00 | Phase 3: WebSocket Handlers**

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/document-ws-handler
File: src/handlers/DocumentWSHandler.js
Chức năng:
  - handleDocumentUpdate(ws, sessionId, data): Xử lý update document
  - handleDocumentClear(ws, sessionId): Xóa document
  - broadcastDocumentUpdate(document): Broadcast update
  - sendDocumentToClient(ws, document): Gửi document cho 1 client
  - handleDocumentRequest(ws, sessionId): Xử lý request document

Commit: "feat(server): implement DocumentWSHandler for real-time updates"
Push: 04:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/version-ws-handler
File: src/handlers/VersionWSHandler.js
Chức năng:
  - handleCreateVersion(ws, sessionId, data): Xử lý tạo version
  - handleDeleteVersion(ws, sessionId, data): Xử lý xóa version
  - handleRestoreVersion(ws, sessionId, data): Xử lý restore version
  - broadcastVersionsList(versions): Broadcast danh sách versions
  - sendVersionsToClient(ws, versions): Gửi versions cho 1 client

Commit: "feat(server): implement VersionWSHandler for version control"
Push: 04:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/user-ws-handler
File: src/handlers/UserWSHandler.js
Chức năng:
  - handleUserJoin(ws, sessionId, userId): Xử lý user join
  - handleUserLeave(sessionId): Xử lý user leave
  - handleUserNameUpdate(ws, sessionId, data): Xử lý đổi tên
  - broadcastUserList(users): Broadcast danh sách users
  - sendUserListToClient(ws, users): Gửi user list cho 1 client
  - sendSessionInfo(ws, sessionId, userId): Gửi session info

Commit: "feat(server): implement UserWSHandler for connection management"
Push: 04:30
```

**Merge vào main: 05:00**

---

#### **05:00 - 07:00 | Phase 4: API Routes**

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/document-routes
File: src/routes/documentRoutes.js
Endpoints:
  - GET /api/document - Lấy document hiện tại
  - PUT /api/document - Cập nhật document
  - DELETE /api/document - Xóa document
  - GET /api/document/stats - Lấy thống kê document

Commit: "feat(server): add document REST API routes"
Push: 06:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/version-routes
File: src/routes/versionRoutes.js (ĐÃ CÓ - CẢI THIỆN)
Endpoints:
  - GET /api/versions - Lấy tất cả versions
  - POST /api/versions - Tạo version mới
  - GET /api/versions/:id - Lấy version theo ID
  - DELETE /api/versions/:id - Xóa version
  - POST /api/versions/:id/restore - Restore version
  - GET /api/versions/latest - Lấy version mới nhất

Commit: "feat(server): enhance version API routes with more endpoints"
Push: 06:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/user-routes
File: src/routes/userRoutes.js
Endpoints:
  - GET /api/users - Lấy danh sách users online
  - GET /api/users/:sessionId - Lấy thông tin user
  - PUT /api/users/:sessionId - Update thông tin user
  - GET /api/users/count - Đếm số users online

Commit: "feat(server): add user REST API routes"
Push: 06:30
```

**Merge vào main: 07:00**

---

#### **07:00 - 09:00 | Phase 5: Main Server Integration**

**👤 NGƯỜI 3 (Lead):**
```javascript
Branch: nguoi3/main-server
File: server.js (CẢI THIỆN)
Nhiệm vụ:
  - Tích hợp tất cả handlers (Document, Version, User)
  - Setup WebSocket server với 3 handlers
  - Kết nối routes với handlers
  - Graceful shutdown
  - Error handling
  - Logging

File: src/handlers/WebSocketHandler.js (REFACTOR)
  - Tích hợp DocumentWSHandler
  - Tích hợp VersionWSHandler
  - Tích hợp UserWSHandler
  - Message routing

Commit: "feat(server): integrate all handlers into main server"
Push: 08:30
```

**👤 NGƯỜI 1 & 2:**
- Review code của Người 3
- Test server locally
- Report bugs qua comments

**Merge vào main: 09:00**
**🎉 SERVER HOÀN THÀNH 100%**

---

#### **09:00 - 11:00 | Phase 6: Client Setup & Hooks - Round 1**

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/editor-hook
File: client/src/hooks/useEditor.js
Chức năng:
  - State: document, isEditing, isSaving
  - handleChange(newContent): Xử lý thay đổi
  - saveDocument(): Lưu document
  - clearDocument(): Xóa document
  - getDocumentStats(): Lấy stats
  - debounceUpdate(): Debounce updates

Commit: "feat(client): implement useEditor hook"
Push: 10:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/versions-hook
File: client/src/hooks/useVersions.js (CẢI THIỆN)
Chức năng:
  - State: versions, loading, error
  - fetchVersions(): Lấy versions từ API
  - createVersion(name): Tạo version mới
  - deleteVersion(id): Xóa version
  - restoreVersion(id): Restore version
  - Listen WebSocket events cho versions

Commit: "feat(client): enhance useVersions hook with full CRUD"
Push: 10:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/websocket-hook
File: client/src/hooks/useWebSocket.js (CẢI THIỆN)
Chức năng:
  - State: socket, isConnected, sessionId, userId, userName, onlineUsers
  - Connect/disconnect handling
  - Message routing
  - Auto reconnect
  - sendMessage(type, data): Gửi message
  - updateUserName(name): Đổi tên
  - Listen tất cả message types

Commit: "feat(client): enhance useWebSocket hook with full features"
Push: 10:30
```

**Merge vào main: 11:00**

---

#### **11:00 - 13:00 | Phase 7: Client Components - Round 1 (Main Components)**

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/editor-component
File: client/src/components/Editor.js (CẢI THIỆN)
Chức năng:
  - Textarea với syntax highlighting
  - Line numbers
  - Character/word count display
  - Auto-save indicator
  - Keyboard shortcuts (Ctrl+S)
  - Responsive textarea

Commit: "feat(client): enhance Editor with rich features"
Push: 12:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/version-panel
File: client/src/components/VersionPanel.js (CẢI THIỆN)
Chức năng:
  - Hiển thị danh sách versions
  - Version card (name, date, creator)
  - Restore button
  - Delete button
  - Close panel button
  - Loading state
  - Empty state
  - Responsive design

Commit: "feat(client): enhance VersionPanel with full UI"
Push: 12:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/header-component
File: client/src/components/Header.js (CẢI THIỆN)
Chức năng:
  - Logo/Title
  - Connection status indicator (🟢/🔴)
  - Connection status text
  - Responsive design
  - Animations

Commit: "feat(client): enhance Header with connection status"
Push: 12:30
```

**Merge vào main: 13:00**

---

#### **13:00 - 15:00 | Phase 8: Client Components - Round 2**

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/editor-controls
File: client/src/components/EditorControls.js (CẢI THIỆN)
Chức năng:
  - Toolbar với buttons
  - "Tạo Version" button
  - "Xem Versions" button
  - Document stats display (words, chars)
  - Save status indicator
  - Responsive toolbar

Commit: "feat(client): enhance EditorControls with toolbar"
Push: 14:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/create-version-form
File: client/src/components/CreateVersionForm.js (CẢI THIỆN)
Chức năng:
  - Form tạo version
  - Input tên version
  - Auto-generate tên mặc định
  - Validation
  - Loading state
  - Success/error messages
  - Cancel button
  - Responsive form

Commit: "feat(client): enhance CreateVersionForm with validation"
Push: 14:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/user-info
File: client/src/components/UserInfo.js (CẢI THIỆN)
Chức năng:
  - Hiển thị User ID
  - Hiển thị Session ID
  - Hiển thị User Name
  - Edit name button (✏️)
  - Edit name inline
  - Save/Cancel buttons
  - Validation
  - Responsive card

Commit: "feat(client): enhance UserInfo with inline editing"
Push: 14:30
```

**Merge vào main: 15:00**

---

#### **15:00 - 17:00 | Phase 9: Client Components - Round 3**

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/online-users
File: client/src/components/OnlineUsers.js (CẢI THIỆN)
Chức năng:
  - Danh sách users online
  - User card (name, ID, online duration)
  - Current user highlight
  - Online indicator (🟢)
  - Empty state
  - Auto-scroll
  - Responsive list

Commit: "feat(client): enhance OnlineUsers with rich UI"
Push: 16:30
```

**👤 NGƯỜI 1 & 2:**
- Review components
- Test integration
- Fix bugs

**Merge vào main: 17:00**

---

#### **17:00 - 19:00 | Phase 10: API Utilities**

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/document-api
File: client/src/utils/documentApi.js
Chức năng:
  - getDocument(): GET /api/document
  - updateDocument(content): PUT /api/document
  - clearDocument(): DELETE /api/document
  - getDocumentStats(): GET /api/document/stats
  - Error handling
  - Loading states

Commit: "feat(client): add document API client functions"
Push: 18:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/version-api
File: client/src/utils/versionApi.js
Chức năng:
  - getAllVersions(): GET /api/versions
  - createVersion(data): POST /api/versions
  - getVersionById(id): GET /api/versions/:id
  - deleteVersion(id): DELETE /api/versions/:id
  - restoreVersion(id): POST /api/versions/:id/restore
  - getLatestVersion(): GET /api/versions/latest
  - Error handling

Commit: "feat(client): add version API client functions"
Push: 18:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/user-api
File: client/src/utils/userApi.js
Chức năng:
  - getOnlineUsers(): GET /api/users
  - getUserInfo(sessionId): GET /api/users/:sessionId
  - updateUserInfo(sessionId, data): PUT /api/users/:sessionId
  - getUserCount(): GET /api/users/count
  - Error handling

Commit: "feat(client): add user API client functions"
Push: 18:30
```

**Merge vào main: 19:00**

---

#### **19:00 - 21:00 | Phase 11: Styling (CSS)**

**👤 NGƯỜI 1:**
```css
Branch: nguoi1/editor-styling
File: client/src/App.css (Dòng 1-100)
Styling:
  - .editor-container
  - .editor-textarea
  - .editor-line-numbers
  - .editor-stats
  - .editor-controls
  - .toolbar
  - .save-indicator
  - Responsive breakpoints

Commit: "style(client): add Editor and EditorControls styling"
Push: 20:30
```

**👤 NGƯỜI 2:**
```css
Branch: nguoi2/version-styling
File: client/src/App.css (Dòng 101-200)
Styling:
  - .version-panel
  - .version-list
  - .version-card
  - .version-actions
  - .create-version-form
  - .version-empty-state
  - Animations (fade-in, slide-in)
  - Responsive breakpoints

Commit: "style(client): add Version components styling"
Push: 20:30
```

**👤 NGƯỜI 3:**
```css
Branch: nguoi3/user-styling
File: client/src/App.css (Dòng 201-300)
Styling:
  - .header
  - .connection-status
  - .user-info-section
  - .user-info-card
  - .online-users-list
  - .user-card
  - .online-indicator
  - Animations (pulse)
  - Responsive breakpoints

Commit: "style(client): add User and Header components styling"
Push: 20:30
```

**Merge vào main: 21:00**

---

#### **21:00 - 23:00 | Phase 12: App Integration**

**👤 NGƯỜI 3 (Lead):**
```javascript
Branch: nguoi3/app-integration
File: client/src/App.js (HOÀN THIỆN)
Nhiệm vụ:
  - Import tất cả components
  - Import tất cả hooks
  - Connect components với hooks
  - State management
  - Event handlers
  - Layout structure
  - Error boundaries

Commit: "feat(client): integrate all components in App"
Push: 22:30
```

**👤 NGƯỜI 1 & 2:**
- Review App.js
- Test toàn bộ app
- Report bugs

**Merge vào main: 23:00**
**🎉 CLIENT HOÀN THÀNH 100%**

---

### 🌅 THỨ 7 - 13/6/2025

#### **00:00 - 03:00 | Phase 13: Integration Testing**

**👤 TẤT CẢ:**
```
Nhiệm vụ:
  - Test server + client cùng nhau
  - Test WebSocket real-time
  - Test multi-user (mở nhiều tabs)
  - Test version control
  - Test user management
  - Document bugs
```

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/bugfix-1
Files: Fix bugs trong Document & Editor system
Commit: "fix: resolve document sync issues"
Push: 02:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/bugfix-1
Files: Fix bugs trong Version system
Commit: "fix: resolve version creation and restore issues"
Push: 02:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/bugfix-1
Files: Fix bugs trong User & WebSocket system
Commit: "fix: resolve connection and user sync issues"
Push: 02:30
```

**Merge vào main: 03:00**

---

#### **03:00 - 06:00 | Phase 14: Performance & Optimization**

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/optimization
Files:
  - src/services/DocumentService.js (optimize)
  - client/src/components/Editor.js (memoization)
  - client/src/hooks/useEditor.js (debounce)
  
Optimizations:
  - Debounce document updates (300ms)
  - Memoize Editor component
  - Optimize re-renders
  - Add loading states

Commit: "perf: optimize document and editor performance"
Push: 05:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/optimization
Files:
  - src/services/VersionService.js (optimize file I/O)
  - client/src/components/VersionPanel.js (virtualization)
  - client/src/hooks/useVersions.js (caching)
  
Optimizations:
  - Cache versions list
  - Lazy load versions
  - Optimize file operations
  - Add pagination (nếu > 20 versions)

Commit: "perf: optimize version control performance"
Push: 05:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/optimization
Files:
  - src/services/UserService.js (optimize)
  - client/src/components/OnlineUsers.js (memoization)
  - client/src/hooks/useWebSocket.js (reconnect logic)
  
Optimizations:
  - Optimize user lookup (Map)
  - Memoize user list
  - Smart reconnect (exponential backoff)
  - Reduce WebSocket messages

Commit: "perf: optimize user management and WebSocket"
Push: 05:30
```

**Merge vào main: 06:00**

---

#### **06:00 - 09:00 | Phase 15: Error Handling & Edge Cases**

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/error-handling
Files:
  - src/routes/documentRoutes.js (error handling)
  - client/src/components/Editor.js (error boundaries)
  - client/src/utils/documentApi.js (retry logic)
  
Error Handling:
  - Validate input
  - Handle network errors
  - Show error messages
  - Retry failed requests
  - Graceful degradation

Commit: "feat: add comprehensive error handling for document system"
Push: 08:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/error-handling
Files:
  - src/routes/versionRoutes.js (error handling)
  - src/services/VersionService.js (file system errors)
  - client/src/components/VersionPanel.js (error UI)
  
Error Handling:
  - Handle file I/O errors
  - Validate version names
  - Handle restore failures
  - Show error messages
  - Rollback on errors

Commit: "feat: add comprehensive error handling for version system"
Push: 08:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/error-handling
Files:
  - src/handlers/WebSocketHandler.js (error handling)
  - client/src/hooks/useWebSocket.js (connection errors)
  - client/src/components/Header.js (error indicator)
  
Error Handling:
  - Handle connection drops
  - Handle invalid messages
  - Show connection errors
  - Auto reconnect
  - Fallback to HTTP if WS fails

Commit: "feat: add comprehensive error handling for WebSocket"
Push: 08:30
```

**Merge vào main: 09:00**

---

#### **09:00 - 12:00 | Phase 16: Polish & UX Improvements**

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/polish
Files:
  - client/src/components/Editor.js (UX)
  - client/src/components/EditorControls.js (UX)
  - client/src/App.css (animations)
  
Improvements:
  - Add keyboard shortcuts
  - Add tooltips
  - Add loading animations
  - Improve transitions
  - Add success messages
  - Improve accessibility

Commit: "polish: improve Editor UX and accessibility"
Push: 11:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/polish
Files:
  - client/src/components/VersionPanel.js (UX)
  - client/src/components/CreateVersionForm.js (UX)
  - client/src/App.css (animations)
  
Improvements:
  - Add version preview
  - Add confirm dialogs (delete, restore)
  - Add success animations
  - Improve empty states
  - Add keyboard navigation
  - Improve accessibility

Commit: "polish: improve Version Control UX and accessibility"
Push: 11:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/polish
Files:
  - client/src/components/Header.js (UX)
  - client/src/components/UserInfo.js (UX)
  - client/src/components/OnlineUsers.js (UX)
  - client/src/App.css (animations)
  
Improvements:
  - Add tooltips
  - Add user avatars/colors
  - Add join/leave notifications
  - Improve animations
  - Add sound effects (optional)
  - Improve accessibility

Commit: "polish: improve User Management UX and accessibility"
Push: 11:30
```

**Merge vào main: 12:00**

---

#### **12:00 - 15:00 | Phase 17: Documentation**

**👤 NGƯỜI 1:**
```markdown
Branch: nguoi1/docs
Files:
  - docs/DOCUMENT_SYSTEM.md
  - docs/EDITOR_GUIDE.md
  
Content:
  - Document architecture
  - API documentation
  - Component documentation
  - Usage examples
  - Troubleshooting

Commit: "docs: add Document and Editor system documentation"
Push: 14:30
```

**👤 NGƯỜI 2:**
```markdown
Branch: nguoi2/docs
Files:
  - docs/VERSION_SYSTEM.md
  - docs/VERSION_API.md
  
Content:
  - Version control architecture
  - API documentation
  - Component documentation
  - Usage examples
  - Best practices

Commit: "docs: add Version Control system documentation"
Push: 14:30
```

**👤 NGƯỜI 3:**
```markdown
Branch: nguoi3/docs
Files:
  - docs/USER_SYSTEM.md
  - docs/WEBSOCKET_API.md
  - README.md (main, update)
  - DEMO.md (update)
  
Content:
  - User management architecture
  - WebSocket protocol documentation
  - API documentation
  - Setup guide
  - Deployment guide

Commit: "docs: add User and WebSocket documentation + update README"
Push: 14:30
```

**Merge vào main: 15:00**

---

#### **15:00 - 18:00 | Phase 18: Final Testing & Bug Fixes**

**👤 TẤT CẢ:**
```
Nhiệm vụ:
  - Complete system testing
  - Cross-browser testing
  - Mobile responsive testing
  - Load testing (nhiều users)
  - Security testing
  - Fix all remaining bugs
```

**👤 NGƯỜI 1:**
```javascript
Branch: nguoi1/final-fixes
Files: Any remaining issues in Document/Editor
Commit: "fix: final fixes for document system"
Push: 17:30
```

**👤 NGƯỜI 2:**
```javascript
Branch: nguoi2/final-fixes
Files: Any remaining issues in Version system
Commit: "fix: final fixes for version system"
Push: 17:30
```

**👤 NGƯỜI 3:**
```javascript
Branch: nguoi3/final-fixes
Files: Any remaining issues in User/WebSocket
Commit: "fix: final fixes for user and websocket system"
Push: 17:30
```

**Merge vào main: 18:00**

---

#### **18:00 - 20:00 | Phase 19: Deployment Preparation**

**👤 NGƯỜI 3 (Lead):**
```javascript
Branch: nguoi3/deployment
Files:
  - .env.example
  - .gitignore
  - package.json (scripts)
  - client/package.json (scripts)
  - Procfile (nếu deploy Heroku)
  - docker-compose.yml (nếu dùng Docker)
  
Commit: "chore: setup deployment configuration"
Push: 19:30
```

**👤 NGƯỜI 1 & 2:**
```
Nhiệm vụ:
  - Prepare demo data
  - Create demo video/screenshots
  - Final testing
  - Review deployment config
```

**Merge vào main: 20:00**

---

#### **20:00 - 22:00 | Phase 20: Final Demo & Release**

**👤 TẤT CẢ CÙNG LÀM:**
```
20:00 - 20:30: Production build
  npm run build

20:30 - 21:00: Deploy to server
  - Deploy backend
  - Deploy frontend
  - Test production

21:00 - 21:30: Create Release v1.0.0
  - Tag version
  - Create release notes
  - Update README with live demo link

21:30 - 22:00: Final Demo
  - Test all features
  - Record demo video
  - Take screenshots
  - Celebrate! 🎉
```

**22:00 - 🎉 PROJECT HOÀN THÀNH!**

---

## 🔄 GIT WORKFLOW

### Branch Naming Convention
```
nguoi1/<feature-name>
nguoi2/<feature-name>
nguoi3/<feature-name>
```

### Commit Message Format
```
<type>(<scope>): <description>

Types:
  feat     - Tính năng mới
  fix      - Sửa bug
  docs     - Documentation
  style    - Formatting, CSS
  refactor - Refactor code
  perf     - Performance improvement
  test     - Testing
  chore    - Maintenance

Scope:
  server   - Backend code
  client   - Frontend code
  
Examples:
  feat(server): implement DocumentService
  fix(client): resolve Editor sync issue
  docs: add API documentation
  style(client): improve Editor styling
```

### Daily Workflow
```bash
# 1. Pull latest từ main
git checkout main
git pull origin main

# 2. Tạo branch mới
git checkout -b nguoi1/document-service

# 3. Code và commit thường xuyên
git add .
git commit -m "feat(server): implement getDocument function"

# 4. Push lên remote
git push origin nguoi1/document-service

# 5. Tạo Pull Request
# 6. Đợi review (ít nhất 1 người approve)
# 7. Merge vào main

# 8. Xóa branch local sau khi merge
git checkout main
git pull origin main
git branch -d nguoi1/document-service
```

---

## ⚠️ TRÁNH CONFLICT - QUY TẮC VÀNG

### 1. Phân chia rõ ràng theo file
- **NGƯỜI 1:** Chỉ edit files có prefix `document`, `editor`
- **NGƯỜI 2:** Chỉ edit files có prefix `version`
- **NGƯỜI 3:** Chỉ edit files có prefix `user`, `websocket`, và main files (`server.js`, `App.js`)

### 2. Shared Files - Phân vùng rõ ràng

#### `client/src/App.css`
```css
/* NGƯỜI 1: Dòng 1-100 - Editor & Controls */
.editor-container { }
.editor-controls { }

/* NGƯỜI 2: Dòng 101-200 - Versions */
.version-panel { }
.version-card { }

/* NGƯỜI 3: Dòng 201-300 - User & Header */
.header { }
.user-info { }
.online-users { }
```

#### `server.js` - NGƯỜI 3 là owner
- Người 1, 2 KHÔNG edit trừ khi có thỏa thuận
- Người 1, 2 chỉ review và comment

#### `client/src/App.js` - NGƯỜI 3 là owner
- Người 1, 2 KHÔNG edit trừ khi có thỏa thuận
- Người 1, 2 chỉ review và comment

### 3. Communication Rules
- **Trước khi edit shared file:** Hỏi trong group chat
- **Push code:** Notify ngay trong chat
- **Gặp conflict:** Báo ngay, không tự resolve
- **Review PR:** Trong vòng 30 phút
- **Merge timing:** Đúng theo schedule

### 4. Sync thường xuyên
```bash
# Mỗi 2 giờ, pull main để update
git checkout main
git pull origin main
git checkout <your-branch>
git merge main

# Hoặc rebase
git rebase main
```

---

## ✅ CHECKLIST TRƯỚC KHI PUSH

### Code Quality
- [ ] Code chạy được locally (no errors)
- [ ] Không có console.log debug statements
- [ ] Follow naming conventions
- [ ] Code có comments đầy đủ
- [ ] Functions có JSDoc

### Testing
- [ ] Test function/component locally
- [ ] No console errors
- [ ] No warnings
- [ ] Test với server (nếu là client code)
- [ ] Test với client (nếu là server code)

### Git
- [ ] Commit message rõ ràng
- [ ] Pull latest main trước khi push
- [ ] No merge conflicts
- [ ] Push đúng branch name

---

## 📊 THEO DÕI TIẾN ĐỘ

### Checklist Tổng Thể

#### NGƯỜI 1: Document & Editor System
- [ ] DocumentService.js (23:00-01:00, Thứ 5)
- [ ] documentHelpers.js (01:00-03:00, Thứ 5)
- [ ] DocumentWSHandler.js (03:00-05:00, Thứ 6)
- [ ] documentRoutes.js (05:00-07:00, Thứ 6)
- [ ] useEditor.js (09:00-11:00, Thứ 6)
- [ ] Editor.js (11:00-13:00, Thứ 6)
- [ ] EditorControls.js (13:00-15:00, Thứ 6)
- [ ] documentApi.js (17:00-19:00, Thứ 6)
- [ ] App.css (Editor section) (19:00-21:00, Thứ 6)
- [ ] Bugfix & Optimization (00:00-09:00, Thứ 7)
- [ ] Documentation (12:00-15:00, Thứ 7)

#### NGƯỜI 2: Version Control System
- [ ] VersionService.js (23:00-01:00, Thứ 5)
- [ ] versionHelpers.js + versions.json (01:00-03:00, Thứ 5)
- [ ] VersionWSHandler.js (03:00-05:00, Thứ 6)
- [ ] versionRoutes.js (05:00-07:00, Thứ 6)
- [ ] useVersions.js (09:00-11:00, Thứ 6)
- [ ] VersionPanel.js (11:00-13:00, Thứ 6)
- [ ] CreateVersionForm.js (13:00-15:00, Thứ 6)
- [ ] versionApi.js (17:00-19:00, Thứ 6)
- [ ] App.css (Version section) (19:00-21:00, Thứ 6)
- [ ] Bugfix & Optimization (00:00-09:00, Thứ 7)
- [ ] Documentation (12:00-15:00, Thứ 7)

#### NGƯỜI 3: User & WebSocket System
- [ ] UserService.js (23:00-01:00, Thứ 5)
- [ ] userHelpers.js (01:00-03:00, Thứ 5)
- [ ] UserWSHandler.js (03:00-05:00, Thứ 6)
- [ ] userRoutes.js (05:00-07:00, Thứ 6)
- [ ] server.js integration (07:00-09:00, Thứ 6)
- [ ] useWebSocket.js (09:00-11:00, Thứ 6)
- [ ] Header.js (11:00-13:00, Thứ 6)
- [ ] UserInfo.js (13:00-15:00, Thứ 6)
- [ ] OnlineUsers.js (15:00-17:00, Thứ 6)
- [ ] userApi.js (17:00-19:00, Thứ 6)
- [ ] App.css (User section) (19:00-21:00, Thứ 6)
- [ ] App.js integration (21:00-23:00, Thứ 6)
- [ ] Bugfix & Optimization (00:00-09:00, Thứ 7)
- [ ] Documentation (12:00-15:00, Thứ 7)
- [ ] Deployment (18:00-20:00, Thứ 7)

---

## 🎯 MỤC TIÊU CUỐI CÙNG

### Functionality (100%)
- ✅ Real-time collaborative editing
- ✅ Multi-user support
- ✅ User management (names, sessions)
- ✅ Online users tracking
- ✅ Version control (create, restore, delete)
- ✅ WebSocket real-time sync
- ✅ REST API endpoints
- ✅ Error handling
- ✅ Auto-save & debouncing

### UI/UX (100%)
- ✅ Clean, modern interface
- ✅ Responsive design (mobile-friendly)
- ✅ Loading states
- ✅ Error messages
- ✅ Success notifications
- ✅ Animations & transitions
- ✅ Accessibility (a11y)
- ✅ Keyboard shortcuts

### Code Quality (100%)
- ✅ Clean, readable code
- ✅ Proper comments & JSDoc
- ✅ Consistent naming conventions
- ✅ No console errors/warnings
- ✅ Optimized performance
- ✅ Error boundaries
- ✅ Security best practices

### Documentation (100%)
- ✅ README.md (comprehensive)
- ✅ API documentation
- ✅ Component documentation
- ✅ Setup guide
- ✅ Deployment guide
- ✅ Demo instructions

### Deployment (100%)
- ✅ Production build
- ✅ Environment configuration
- ✅ Deployed to server
- ✅ Live demo available
- ✅ Release v1.0.0 tagged

---

## 💬 COMMUNICATION CHANNELS

### Daily Standups
- **09:00:** Morning standup (5 phút)
- **15:00:** Afternoon standup (5 phút)
- **21:00:** Evening standup (5 phút)

### Report Format
```
Người X:
✅ Hoàn thành: [task name]
🔄 Đang làm: [task name]
🚧 Gặp khó khăn: [problem]
⏰ Dự kiến push: [time]
```

### Emergency Contact
- **Gặp bug nghiêm trọng:** Tag @all
- **Conflict code:** Tag @all + video call
- **Thay đổi architecture:** Meeting toàn team

---

## 🚀 SUCCESS METRICS

### Performance
- [ ] Page load < 2s
- [ ] WebSocket latency < 100ms
- [ ] No memory leaks
- [ ] Smooth 60fps animations

### Testing
- [ ] Works on Chrome, Firefox, Safari
- [ ] Works on mobile devices
- [ ] Tested with 5+ concurrent users
- [ ] No critical bugs

### User Experience
- [ ] Intuitive interface
- [ ] Fast response time
- [ ] Clear error messages
- [ ] Helpful documentation

---

## 🎉 COMPLETION CRITERIA

**Project is DONE when:**
1. ✅ All 30 files completed (10 per person)
2. ✅ All features working perfectly
3. ✅ All tests passing
4. ✅ Documentation complete
5. ✅ Deployed to production
6. ✅ Demo video recorded
7. ✅ Release v1.0.0 tagged
8. ✅ All team members approve

---

**LET'S BUILD SOMETHING AMAZING! 🚀**

**Start:** 22:00 Thứ 5, 11/6/2025  
**End:** 22:00 Thứ 7, 13/6/2025  
**Duration:** 48 hours of pure coding! 💪

---

*Tạo bởi: Team LTM*  
*Cập nhật lần cuối: 11/6/2025*

