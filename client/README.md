# 📋 PHÂN CÔNG CÔNG VIỆC TEAM LTM - COLLABORATIVE EDITOR

---

## 👥 THÀNH VIÊN TEAM

| Thành viên | Vai trò | Server | Client | Tổng |
|------------|---------|--------|--------|------|
| **Người 1** | Full-stack | 6 files | 6 files | 12 files |
| **Người 2** | Full-stack | 6 files | 6 files | 12 files |
| **Người 3** | Full-stack | 6 files | 6 files | 12 files |

---

## ⏰ THỜI GIAN

**Bắt đầu:** 22:00 Thứ 5, 11/6/2025  
**Kết thúc:** 22:00 Thứ 7, 13/6/2025  
**Tổng:** 48 giờ

---

## 🎯 PHÂN CÔNG CHI TIẾT

### 👤 NGƯỜI 1 - User Management System

#### **Server (6 files)**
1. `src/services/UserService.js` - Quản lý user, session, online tracking
2. `src/routes/userRoutes.js` - API endpoints cho user (login, update, online list)
3. `src/handlers/UserWSHandler.js` - WebSocket events (join, leave, update, typing)
4. `src/middleware/authMiddleware.js` - Xác thực user
5. `src/utils/userHelpers.js` - Helper functions cho user
6. `src/models/User.js` - User data model

#### **Client (6 files)**
7. `client/src/components/UserInfo.js` - Hiển thị và edit thông tin user
8. `client/src/components/OnlineUsers.js` - Danh sách users online
9. `client/src/components/UserAvatar.js` - Avatar component
10. `client/src/hooks/useUser.js` - Hook quản lý user state
11. `client/src/api/userApi.js` - API calls cho user
12. `client/src/styles/User.css` - Styling cho user components

---

### 👤 NGƯỜI 2 - Document Editor System

#### **Server (6 files)**
1. `src/services/DocumentService.js` - Quản lý document, CRUD, sync
2. `src/routes/documentRoutes.js` - API endpoints cho document
3. `src/handlers/DocumentWSHandler.js` - WebSocket (edit, cursor, selection)
4. `src/utils/conflictResolver.js` - Xử lý conflict khi nhiều user edit
5. `src/utils/documentHelpers.js` - Helper functions
6. `src/models/Document.js` - Document data model

#### **Client (6 files)**
7. `client/src/components/Editor.js` - Text editor chính
8. `client/src/components/EditorToolbar.js` - Toolbar controls
9. `client/src/components/CursorTracker.js` - Hiển thị cursor users khác
10. `client/src/hooks/useEditor.js` - Hook quản lý editor state
11. `client/src/api/documentApi.js` - API calls cho document
12. `client/src/styles/Editor.css` - Styling cho editor

---

### 👤 NGƯỜI 3 - Version Control System

#### **Server (6 files)**
1. `src/services/VersionService.js` - Quản lý versions, create, restore, compare
2. `src/routes/versionRoutes.js` - API endpoints cho version
3. `src/handlers/VersionStorageHandler.js` - Lưu/đọc versions.json
4. `src/utils/diffCalculator.js` - Tính toán diff giữa versions
5. `src/utils/versionHelpers.js` - Helper functions
6. `src/models/Version.js` - Version data model

#### **Client (6 files)**
7. `client/src/components/VersionPanel.js` - Panel hiển thị list versions
8. `client/src/components/CreateVersionModal.js` - Modal tạo version
9. `client/src/components/VersionCompare.js` - So sánh 2 versions
10. `client/src/hooks/useVersions.js` - Hook quản lý versions
11. `client/src/api/versionApi.js` - API calls cho version
12. `client/src/styles/Version.css` - Styling cho version components

---

## 📅 LỊCH TRÌNH PUSH CODE - 48 GIỜ

### **THỨ 5, 11/6/2025**

#### **22:00 - 23:30 | Phase 1: Setup Project**

**22:00 - Người 1**
```
Branch: nguoi1/setup
Files: package.json, .env.example, src/config/config.js, src/utils/logger.js
Commit: "feat: setup server config and logger"
Push: 22:30
```

**22:00 - Người 2**
```
Branch: nguoi2/setup
Files: client/package.json, client/src/App.js, client/src/config/constants.js
Commit: "feat: setup client React app"
Push: 22:30
```

**22:00 - Người 3**
```
Branch: nguoi3/setup
Files: data/versions.json, data/documents.json, src/utils/fileHandler.js
Commit: "feat: setup data storage"
Push: 22:30
```

**23:00 - Merge tất cả vào main**

---

#### **23:30 - 02:00 | Phase 2: Core Services**

**23:30 - Người 1**
```
Branch: nguoi1/user-service
Files: src/services/UserService.js, src/models/User.js
Commit: "feat: implement UserService and User model"
Push: 01:00
```

**23:30 - Người 2**
```
Branch: nguoi2/document-service
Files: src/services/DocumentService.js, src/models/Document.js
Commit: "feat: implement DocumentService and Document model"
Push: 01:00
```

**23:30 - Người 3**
```
Branch: nguoi3/version-service
Files: src/services/VersionService.js, src/models/Version.js
Commit: "feat: implement VersionService and Version model"
Push: 01:00
```

**01:30 - Review và merge vào main**

---

### **THỨ 6, 12/6/2025**

#### **02:00 - 05:00 | Phase 3: API Routes**

**02:00 - Người 1**
```
Branch: nguoi1/user-routes
Files: src/routes/userRoutes.js, src/middleware/authMiddleware.js
Commit: "feat: add user API routes and auth middleware"
Push: 04:00
```

**02:00 - Người 2**
```
Branch: nguoi2/document-routes
Files: src/routes/documentRoutes.js, src/utils/conflictResolver.js
Commit: "feat: add document API routes and conflict resolver"
Push: 04:00
```

**02:00 - Người 3**
```
Branch: nguoi3/version-routes
Files: src/routes/versionRoutes.js, src/utils/diffCalculator.js
Commit: "feat: add version API routes and diff calculator"
Push: 04:00
```

**04:30 - Review và merge vào main**

---

#### **05:00 - 08:00 | Phase 4: WebSocket Handlers**

**05:00 - Người 1**
```
Branch: nguoi1/user-websocket
Files: src/handlers/UserWSHandler.js, src/utils/userHelpers.js
Commit: "feat: implement user WebSocket handler"
Push: 07:00
```

**05:00 - Người 2**
```
Branch: nguoi2/document-websocket
Files: src/handlers/DocumentWSHandler.js, src/utils/documentHelpers.js
Commit: "feat: implement document WebSocket handler"
Push: 07:00
```

**05:00 - Người 3**
```
Branch: nguoi3/version-storage
Files: src/handlers/VersionStorageHandler.js, src/utils/versionHelpers.js
Commit: "feat: implement version storage handler"
Push: 07:00
```

**07:30 - Review và merge vào main**

---

#### **08:00 - 11:00 | Phase 5: Main Server Integration**

**08:00 - Người 2 (Lead)**
```
Branch: nguoi2/main-server
Files: server.js, src/app.js
Commit: "feat: implement main server with all integrations"
Push: 10:00
```

**08:00 - Người 1 & 3**
- Review server.js
- Test server locally
- Report bugs

**10:30 - Merge server.js vào main**
**✅ SERVER HOÀN THÀNH**

---

#### **11:00 - 14:00 | Phase 6: Client Components Round 1**

**11:00 - Người 1**
```
Branch: nguoi1/user-components-1
Files: client/src/components/UserInfo.js, client/src/components/UserAvatar.js
Commit: "feat: add UserInfo and UserAvatar components"
Push: 13:00
```

**11:00 - Người 2**
```
Branch: nguoi2/editor-components-1
Files: client/src/components/Editor.js, client/src/components/EditorToolbar.js
Commit: "feat: add Editor and EditorToolbar components"
Push: 13:00
```

**11:00 - Người 3**
```
Branch: nguoi3/version-components-1
Files: client/src/components/VersionPanel.js, client/src/components/CreateVersionModal.js
Commit: "feat: add VersionPanel and CreateVersionModal"
Push: 13:00
```

**13:30 - Review và merge vào main**

---

#### **14:00 - 17:00 | Phase 7: Client Components Round 2**

**14:00 - Người 1**
```
Branch: nguoi1/user-components-2
Files: client/src/components/OnlineUsers.js
Commit: "feat: add OnlineUsers component"
Push: 16:00
```

**14:00 - Người 2**
```
Branch: nguoi2/editor-components-2
Files: client/src/components/CursorTracker.js
Commit: "feat: add CursorTracker component"
Push: 16:00
```

**14:00 - Người 3**
```
Branch: nguoi3/version-components-2
Files: client/src/components/VersionCompare.js
Commit: "feat: add VersionCompare component"
Push: 16:00
```

**16:30 - Review và merge vào main**

---

#### **17:00 - 20:00 | Phase 8: Client Hooks**

**17:00 - Người 1**
```
Branch: nguoi1/user-hooks
Files: client/src/hooks/useUser.js
Commit: "feat: implement useUser hook"
Push: 19:00
```

**17:00 - Người 2**
```
Branch: nguoi2/editor-hooks
Files: client/src/hooks/useEditor.js
Commit: "feat: implement useEditor hook"
Push: 19:00
```

**17:00 - Người 3**
```
Branch: nguoi3/version-hooks
Files: client/src/hooks/useVersions.js
Commit: "feat: implement useVersions hook"
Push: 19:00
```

**19:30 - Review và merge vào main**

---

#### **20:00 - 23:00 | Phase 9: Client API & Styling**

**20:00 - Người 1**
```
Branch: nguoi1/user-api-style
Files: client/src/api/userApi.js, client/src/styles/User.css
Commit: "feat: add user API client and styling"
Push: 22:00
```

**20:00 - Người 2**
```
Branch: nguoi2/document-api-style
Files: client/src/api/documentApi.js, client/src/styles/Editor.css
Commit: "feat: add document API client and styling"
Push: 22:00
```

**20:00 - Người 3**
```
Branch: nguoi3/version-api-style
Files: client/src/api/versionApi.js, client/src/styles/Version.css
Commit: "feat: add version API client and styling"
Push: 22:00
```

**22:30 - Review và merge vào main**

---

### **THỨ 7, 13/6/2025**

#### **00:00 - 03:00 | Phase 10: Main App Integration**

**00:00 - Người 2 (Lead)**
```
Branch: nguoi2/app-integration
Files: client/src/App.js (complete), client/src/App.css
Commit: "feat: integrate all components in App"
Push: 02:00
```

**00:00 - Người 1 & 3**
- Review App.js
- Test components integration
- Report issues

**02:30 - Merge App.js vào main**
**✅ CLIENT HOÀN THÀNH**

---

#### **03:00 - 08:00 | Phase 11: Testing & Bug Fixes**

**03:00 - Người 1**
```
Branch: nguoi1/bugfix
Files: Fix bugs trong user system
Commit: "fix: user system improvements"
Push: 06:00
```

**03:00 - Người 2**
```
Branch: nguoi2/bugfix
Files: Fix bugs trong editor system
Commit: "fix: editor and WebSocket improvements"
Push: 06:00
```

**03:00 - Người 3**
```
Branch: nguoi3/bugfix
Files: Fix bugs trong version system
Commit: "fix: version control improvements"
Push: 06:00
```

**07:00 - Merge tất cả bugfixes**

---

#### **08:00 - 12:00 | Phase 12: Polish & Optimization**

**08:00 - Người 1**
```
Branch: nguoi1/polish
Files: Cải thiện UI/UX user components
Commit: "polish: improve user UI and UX"
Push: 10:00
```

**08:00 - Người 2**
```
Branch: nguoi2/polish
Files: Cải thiện editor performance
Commit: "polish: optimize editor performance"
Push: 10:00
```

**08:00 - Người 3**
```
Branch: nguoi3/polish
Files: Cải thiện version UI
Commit: "polish: improve version UI"
Push: 10:00
```

**11:00 - Merge tất cả polish changes**

---

#### **12:00 - 16:00 | Phase 13: Documentation**

**12:00 - Người 1**
```
Branch: nguoi1/docs
Files: docs/USER_SYSTEM.md, README.md (user section)
Commit: "docs: add user system documentation"
Push: 14:00
```

**12:00 - Người 2**
```
Branch: nguoi2/docs
Files: docs/EDITOR_SYSTEM.md, docs/WEBSOCKET.md
Commit: "docs: add editor and WebSocket documentation"
Push: 14:00
```

**12:00 - Người 3**
```
Branch: nguoi3/docs
Files: docs/VERSION_SYSTEM.md, docs/API.md
Commit: "docs: add version system and API documentation"
Push: 14:00
```

**15:00 - Merge tất cả documentation**

---

#### **16:00 - 20:00 | Phase 14: Final Testing & Deployment Prep**

**16:00 - Người 1**
```
Branch: nguoi1/final
Files: Final checks user system
Commit: "chore: final user system checks"
Push: 18:00
```

**16:00 - Người 2**
```
Branch: nguoi2/final
Files: Final checks editor system
Commit: "chore: final editor checks and optimizations"
Push: 18:00
```

**16:00 - Người 3**
```
Branch: nguoi3/final
Files: Final checks version system, demo data
Commit: "chore: final version checks and demo data"
Push: 18:00
```

**19:00 - Merge all final changes**

---

#### **20:00 - 22:00 | Phase 15: Deployment**

**20:00 - Tất cả cùng làm**
```
- Final integration test
- Production build
- Environment setup
- Deploy to server
- Create release v1.0.0
```

**22:00 - 🎉 PROJECT COMPLETE**

---

## 🔄 QUY TRÌNH GIT

### Branch Naming
```
nguoi1/<feature>
nguoi2/<feature>
nguoi3/<feature>
```

### Commit Convention
```
feat: thêm tính năng mới
fix: sửa bug
docs: thêm documentation
style: format code
refactor: refactor code
test: thêm tests
chore: maintenance
```

### Workflow Hàng Ngày
```bash
# 1. Pull latest
git checkout main
git pull origin main

# 2. Tạo branch
git checkout -b nguoi1/feature

# 3. Làm việc và commit
git add .
git commit -m "feat: description"

# 4. Push
git push origin nguoi1/feature

# 5. Tạo Pull Request
# 6. Đợi approve từ 1 người
# 7. Merge vào main
```

---

## ⚠️ LƯU Ý QUAN TRỌNG

### Tránh Conflict
1. **Luôn pull main trước khi làm việc**
2. **Commit thường xuyên** (mỗi 1-2 giờ)
3. **Push ngay sau khi hoàn thành task**
4. **Không edit file của người khác** trừ khi thỏa thuận
5. **Review nhanh** (trong 30 phút)

### File Shared Cần Cẩn Thận
- `server.js` - Người 2 lead
- `client/src/App.js` - Người 2 lead
- `client/src/App.css` - Phân vùng rõ ràng

### Communication
- Báo cáo tiến độ mỗi 4 giờ
- Notify trước khi edit shared files
- Hỏi ngay nếu gặp vấn đề

---

## ✅ CHECKLIST

### Trước Khi Push
- [ ] Code chạy được locally
- [ ] Không có console errors
- [ ] Follow naming conventions
- [ ] Commit message rõ ràng

### Trước Khi Merge
- [ ] Đã được approve
- [ ] Đã test integration
- [ ] Không có conflicts
- [ ] Không breaking changes

---

## 🎯 MỤC TIÊU

**Hoàn thành 100%:**
- ✅ Server với tất cả APIs
- ✅ Client với tất cả components
- ✅ Real-time WebSocket hoạt động
- ✅ Version control system hoàn chỉnh
- ✅ UI/UX đẹp và responsive
- ✅ Documentation đầy đủ
- ✅ Deployed và sẵn sàng demo

---

**🚀 CHÚC TEAM THÀNH CÔNG! 🚀**