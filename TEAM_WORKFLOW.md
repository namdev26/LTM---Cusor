# 👥 Team Workflow - Collaborative Editor Project

## 📋 Mục lục
- [Nguyên tắc phân công](#nguyên-tắc-phân-công)
- [Phân công công việc 3 người](#phân-công-công-việc-3-người)
- [Git Workflow và Thứ tự Commit](#git-workflow-và-thứ-tự-commit)
- [Setup Project](#setup-project)
- [Quy trình làm việc hàng ngày](#quy-trình-làm-việc-hàng-ngày)
- [Code Review Process](#code-review-process)

---

## ⚖️ Nguyên tắc phân công

### ✅ Quy tắc bắt buộc:
1. **MỖI NGƯỜI PHẢI LÀM CẢ CLIENT VÀ SERVER** (50% - 50%)
2. Công việc được chia **ĐỀU NHAU** về số lượng và độ khó
3. Mỗi người chịu trách nhiệm **HOÀN CHỈNH** feature của mình (UI + API + Logic)
4. Commit theo **THỨ TỰ CHUẨN** để tránh conflict

### 📊 Phân bổ công việc:

| Người | Client (50%) | Server (50%) | Total |
|-------|--------------|--------------|-------|
| Person 1 | 3 features | 3 features | 6 features |
| Person 2 | 3 features | 3 features | 6 features |
| Person 3 | 3 features | 3 features | 6 features |

---

## 👥 Phân công công việc 3 người

### 🧑 PERSON 1: Text Editor & Document Management

#### 📱 CLIENT - Features (50%)

##### Feature 1.1: Text Formatting Toolbar
**Files:**
- `client/src/components/TextToolbar.js` (NEW)
- `client/src/components/Editor.js` (UPDATE)
- `client/src/App.css` (UPDATE - toolbar styles)

**Tasks:**
```javascript
// 1. Create TextToolbar component with:
//    - Bold, Italic, Underline buttons
//    - Font size selector (12, 14, 16, 18, 20)
//    - Text alignment (left, center, right)
//    - Undo/Redo buttons

// 2. Integrate với Editor component
// 3. Save formatted text state
// 4. Apply formatting styles
```

**Estimated:** 8 hours

##### Feature 1.2: Document Statistics Display
**Files:**
- `client/src/components/DocumentStats.js` (NEW)
- `client/src/hooks/useDocumentStats.js` (NEW)
- `client/src/utils/api.js` (UPDATE)

**Tasks:**
```javascript
// 1. Create component hiển thị:
//    - Word count
//    - Character count
//    - Line count
//    - Reading time estimate

// 2. Fetch stats từ API
// 3. Real-time update khi document thay đổi
// 4. Beautiful UI với icons
```

**Estimated:** 6 hours

##### Feature 1.3: Document Export/Import UI
**Files:**
- `client/src/components/ExportImport.js` (NEW)
- `client/src/utils/fileHelpers.js` (NEW)
- `client/src/utils/api.js` (UPDATE)

**Tasks:**
```javascript
// 1. Export buttons (TXT, JSON, Markdown)
// 2. Import file picker
// 3. Download file functionality
// 4. File validation & error handling
```

**Estimated:** 6 hours

#### 🖥️ SERVER - Features (50%)

##### Feature 1.4: Document Statistics API
**Files:**
- `src/routes/documentRoutes.js` (NEW)
- `src/services/DocumentService.js` (UPDATE)
- `src/utils/textAnalyzer.js` (NEW)

**Tasks:**
```javascript
// API Endpoints:
GET /api/document/stats
// Response: {
//   wordCount: number,
//   charCount: number,
//   lineCount: number,
//   readingTime: number
// }

// 1. Implement text analysis logic
// 2. Calculate stats accurately
// 3. Cache results for performance
```

**Estimated:** 5 hours

##### Feature 1.5: Document Export API
**Files:**
- `src/routes/documentRoutes.js` (UPDATE)
- `src/services/ExportService.js` (NEW)
- `src/utils/formatters.js` (NEW)

**Tasks:**
```javascript
// API Endpoints:
POST /api/document/export
// Body: { format: 'txt' | 'json' | 'markdown' }
// Response: downloadable file

// 1. Support multiple formats
// 2. Format conversion logic
// 3. File generation
```

**Estimated:** 6 hours

##### Feature 1.6: Document Import API
**Files:**
- `src/routes/documentRoutes.js` (UPDATE)
- `src/services/ImportService.js` (NEW)
- `src/middleware/fileUpload.js` (NEW)

**Tasks:**
```javascript
// API Endpoints:
POST /api/document/import
// Body: multipart/form-data with file

// 1. File upload handling (multer)
// 2. File validation (size, type)
// 3. Parse và merge vào document
// 4. Broadcast update qua WebSocket
```

**Estimated:** 7 hours

**TOTAL PERSON 1:** ~38 hours (Client: 20h, Server: 18h)

---

### 🧑 PERSON 2: Version Control & Comparison

#### 📱 CLIENT - Features (50%)

##### Feature 2.1: Version Comparison UI (Diff Viewer)
**Files:**
- `client/src/components/VersionDiff.js` (NEW)
- `client/src/components/VersionPanel.js` (UPDATE)
- `client/src/utils/diffHelpers.js` (NEW)

**Tasks:**
```javascript
// 1. Side-by-side diff viewer
// 2. Highlight additions (green) và deletions (red)
// 3. Line-by-line comparison
// 4. Switch between unified/split view
```

**Estimated:** 10 hours

##### Feature 2.2: Version Search & Filter
**Files:**
- `client/src/components/VersionSearch.js` (NEW)
- `client/src/components/VersionPanel.js` (UPDATE)
- `client/src/hooks/useVersions.js` (UPDATE)

**Tasks:**
```javascript
// 1. Search box (by name, content, creator)
// 2. Filter by date range
// 3. Sort options (newest, oldest, name)
// 4. Tag filter
```

**Estimated:** 6 hours

##### Feature 2.3: Version Tags & Labels
**Files:**
- `client/src/components/VersionTags.js` (NEW)
- `client/src/components/CreateVersionForm.js` (UPDATE)
- `client/src/hooks/useVersions.js` (UPDATE)

**Tasks:**
```javascript
// 1. Add tags to version (Important, Backup, Draft)
// 2. Tag color coding
// 3. Tag management UI
// 4. Filter by tags
```

**Estimated:** 5 hours

#### 🖥️ SERVER - Features (50%)

##### Feature 2.4: Version Diff Calculation API
**Files:**
- `src/routes/versionRoutes.js` (UPDATE)
- `src/services/DiffService.js` (NEW)
- `src/utils/diffAlgorithm.js` (NEW)

**Tasks:**
```javascript
// API Endpoint:
GET /api/versions/:id/diff/:compareId
// Response: {
//   additions: [...],
//   deletions: [...],
//   unchanged: [...]
// }

// 1. Implement diff algorithm (Myers, or use library)
// 2. Calculate line-by-line differences
// 3. Return structured diff data
```

**Estimated:** 9 hours

##### Feature 2.5: Version Search API
**Files:**
- `src/routes/versionRoutes.js` (UPDATE)
- `src/services/VersionService.js` (UPDATE)
- `src/utils/searchHelpers.js` (NEW)

**Tasks:**
```javascript
// API Endpoint:
GET /api/versions/search?q=keyword&dateFrom=&dateTo=&tags=

// 1. Full-text search in version content
// 2. Search by name, creator
// 3. Date range filtering
// 4. Tag filtering
```

**Estimated:** 7 hours

##### Feature 2.6: Version Tags API
**Files:**
- `src/routes/versionRoutes.js` (UPDATE)
- `src/services/VersionService.js` (UPDATE)
- `src/models/Version.js` (NEW)

**Tasks:**
```javascript
// API Endpoints:
POST   /api/versions/:id/tags        // Add tags
DELETE /api/versions/:id/tags/:tag   // Remove tag
GET    /api/tags                     // Get all tags

// 1. Tag CRUD operations
// 2. Tag validation
// 3. Update versions.json structure
```

**Estimated:** 5 hours

**TOTAL PERSON 2:** ~42 hours (Client: 21h, Server: 21h)

---

### 🧑 PERSON 3: User Management & Collaboration

#### 📱 CLIENT - Features (50%)

##### Feature 3.1: User Presence & Cursors
**Files:**
- `client/src/components/UserCursor.js` (NEW)
- `client/src/components/Editor.js` (UPDATE)
- `client/src/hooks/useUserPresence.js` (NEW)

**Tasks:**
```javascript
// 1. Show other users' cursors in real-time
// 2. Color-code each user
// 3. Show user name tooltip on cursor
// 4. Track cursor position via WebSocket
```

**Estimated:** 10 hours

##### Feature 3.2: User Profile & Settings
**Files:**
- `client/src/components/UserProfile.js` (NEW)
- `client/src/components/UserSettings.js` (NEW)
- `client/src/hooks/useUserSettings.js` (NEW)

**Tasks:**
```javascript
// 1. User profile modal (avatar, name, color)
// 2. User settings (notifications, theme preference)
// 3. Save settings to localStorage/server
// 4. Apply user preferences
```

**Estimated:** 7 hours

##### Feature 3.3: Activity Log & Notifications
**Files:**
- `client/src/components/ActivityLog.js` (NEW)
- `client/src/components/Notifications.js` (NEW)
- `client/src/hooks/useNotifications.js` (NEW)

**Tasks:**
```javascript
// 1. Activity feed (who edited, created version, etc)
// 2. Toast notifications (user joined, version created)
// 3. Notification center
// 4. Real-time updates via WebSocket
```

**Estimated:** 8 hours

#### 🖥️ SERVER - Features (50%)

##### Feature 3.4: User Presence Tracking API
**Files:**
- `src/handlers/WebSocketHandler.js` (UPDATE)
- `src/services/UserService.js` (UPDATE)
- `src/services/PresenceService.js` (NEW)

**Tasks:**
```javascript
// WebSocket Messages:
// Client -> Server: 
//   { type: 'cursorMove', data: { position: number } }
// Server -> All Clients:
//   { type: 'userCursor', data: { userId, position, color } }

// 1. Track user cursor positions
// 2. Broadcast cursor updates
// 3. Assign colors to users
// 4. Handle user disconnect
```

**Estimated:** 8 hours

##### Feature 3.5: User Profile & Settings API
**Files:**
- `src/routes/userRoutes.js` (NEW)
- `src/services/UserService.js` (UPDATE)
- `src/models/User.js` (NEW)

**Tasks:**
```javascript
// API Endpoints:
GET    /api/users/:id
PUT    /api/users/:id
GET    /api/users/:id/settings
PUT    /api/users/:id/settings

// 1. User CRUD operations
// 2. Settings management
// 3. Avatar upload (optional)
// 4. Validation
```

**Estimated:** 7 hours

##### Feature 3.6: Activity Logging API
**Files:**
- `src/routes/activityRoutes.js` (NEW)
- `src/services/ActivityService.js` (NEW)
- `src/middleware/activityLogger.js` (NEW)

**Tasks:**
```javascript
// API Endpoints:
GET /api/activities
GET /api/activities/:userId

// 1. Log all user actions (edit, create version, etc)
// 2. Store in activity log file/database
// 3. Broadcast activities via WebSocket
// 4. Activity filtering and pagination
```

**Estimated:** 7 hours

**TOTAL PERSON 3:** ~47 hours (Client: 25h, Server: 22h)

---

## 🔀 Git Workflow và Thứ tự Commit

### 📋 Branch Strategy

```
main (production - KHÔNG ai được commit trực tiếp)
  ↓
develop (integration - KHÔNG ai được commit trực tiếp)
  ↓
  ├── feature/person1-text-formatting        (Person 1)
  ├── feature/person1-doc-stats              (Person 1)
  ├── feature/person1-export-import          (Person 1)
  ├── feature/person2-version-diff           (Person 2)
  ├── feature/person2-version-search         (Person 2)
  ├── feature/person2-version-tags           (Person 2)
  ├── feature/person3-user-presence          (Person 3)
  ├── feature/person3-user-profile           (Person 3)
  └── feature/person3-activity-log           (Person 3)
```

### 🎯 Quy trình làm việc (QUAN TRỌNG)

#### Bước 1: Setup ban đầu (Chỉ làm 1 lần)

```bash
# Clone repo
git clone <repository-url>
cd collab-editor

# Checkout develop
git checkout develop
git pull origin develop

# Cài đặt dependencies
npm install
cd client && npm install && cd ..
```

#### Bước 2: Tạo feature branch (Mỗi feature mới)

```bash
# LUÔN LUÔN pull develop trước khi tạo branch mới
git checkout develop
git pull origin develop

# Tạo branch theo format: feature/<person>-<tên-feature>
git checkout -b feature/person1-text-formatting

# Ví dụ các branch:
# Person 1:
git checkout -b feature/person1-text-formatting
git checkout -b feature/person1-doc-stats
git checkout -b feature/person1-export-import

# Person 2:
git checkout -b feature/person2-version-diff
git checkout -b feature/person2-version-search
git checkout -b feature/person2-version-tags

# Person 3:
git checkout -b feature/person3-user-presence
git checkout -b feature/person3-user-profile
git checkout -b feature/person3-activity-log
```

#### Bước 3: Development & Commit

```bash
# Làm việc trên feature của bạn...

# Kiểm tra files đã thay đổi
git status

# Add files (KHÔNG dùng git add .)
# Add từng file cụ thể để tránh add nhầm
git add client/src/components/TextToolbar.js
git add client/src/components/Editor.js
git add src/routes/documentRoutes.js

# HOẶC add theo folder
git add client/src/components/
git add src/routes/

# Commit với message CHUẨN
git commit -m "feat(client): add text formatting toolbar with bold, italic, underline"
git commit -m "feat(server): implement document statistics API"
git commit -m "fix(client): resolve cursor position bug in editor"
git commit -m "refactor(server): optimize version diff algorithm"

# ❌ KHÔNG commit như này:
git commit -m "update"
git commit -m "fix bug"
git commit -m "abc"
```

### 📝 Commit Message Convention (BẮT BUỘC)

Format: `<type>(<scope>): <description>`

**Types:**
- `feat`: Feature mới
- `fix`: Sửa bug
- `refactor`: Refactor code
- `style`: Format code (không đổi logic)
- `docs`: Cập nhật documentation
- `test`: Thêm tests
- `chore`: Cập nhật build, dependencies

**Scope:**
- `client`: Frontend changes
- `server`: Backend changes
- `both`: Changes cả client và server

**Examples:**
```bash
git commit -m "feat(client): add text formatting toolbar"
git commit -m "feat(server): implement document export API"
git commit -m "fix(both): resolve WebSocket reconnection issue"
git commit -m "refactor(client): optimize version diff rendering"
git commit -m "style(server): format code with prettier"
git commit -m "docs: update README with new features"
```

#### Bước 4: Push và tạo Pull Request

```bash
# Push branch lên remote
git push origin feature/person1-text-formatting

# Nếu lần đầu push branch mới:
git push -u origin feature/person1-text-formatting

# Sau đó vào GitHub/GitLab tạo Pull Request:
# 1. Base branch: develop
# 2. Compare branch: feature/person1-text-formatting
# 3. Title: [Person 1] Add Text Formatting Toolbar
# 4. Description: Chi tiết những gì đã làm
# 5. Assign reviewers: 2 người còn lại
# 6. Labels: feature, client, server
```

#### Bước 5: Code Review (QUAN TRỌNG)

**Reviewer checklist:**
```markdown
Code Review Checklist:
- [ ] Code chạy được (pull về test local)
- [ ] Cả CLIENT và SERVER đều có changes
- [ ] Code style đúng chuẩn
- [ ] Không có console.log
- [ ] Commit messages đúng format
- [ ] Không có file không cần thiết (node_modules, .env)
- [ ] Comments đầy đủ
- [ ] Performance OK
```

**Reviewer phải:**
1. Pull branch về máy local test
2. Check cả client và server changes
3. Comment nếu có vấn đề
4. Approve nếu OK

**Cách review:**
```bash
# Pull branch cần review
git fetch origin
git checkout feature/person1-text-formatting
git pull origin feature/person1-text-formatting

# Test local
npm start              # Terminal 1
cd client && npm start # Terminal 2

# Test features, check code
# Approve hoặc request changes trên GitHub/GitLab
```

#### Bước 6: Merge và Clean up

```bash
# SAU KHI PR được approve bởi ít nhất 1 người:
# 1. Merge via GitHub/GitLab UI (Squash and merge)
# 2. Delete branch on remote

# Local cleanup:
git checkout develop
git pull origin develop
git branch -d feature/person1-text-formatting

# Bắt đầu feature mới
git checkout -b feature/person1-doc-stats
```

---

## 🚦 THỨ TỰ COMMIT để tránh CONFLICT

### Nguyên tắc:

1. **MỖI NGƯỜI làm branch RIÊNG** cho mỗi feature
2. **KHÔNG bao giờ** commit trực tiếp vào `develop` hoặc `main`
3. **LUÔN LUÔN** pull `develop` trước khi tạo branch mới
4. **MERGE theo thứ tự** để tránh conflict

### Thứ tự ưu tiên merge (Tuần 1):

```
Week 1 Priority:
Day 1-2: Foundation (Server base features)
  → Person 2: Version diff API
  → Person 1: Document stats API
  → Person 3: User presence API

Day 3-4: Client Integration
  → Person 1: Text toolbar UI
  → Person 2: Version diff UI
  → Person 3: User cursors UI

Day 5: Review & Fix
  → All: Bug fixes, integration
```

### Tránh conflict:

#### ✅ DO:
```bash
# Pull thường xuyên
git checkout develop
git pull origin develop
git checkout feature/your-branch
git rebase develop  # Rebase thay vì merge

# Commit files cụ thể
git add client/src/components/MyComponent.js
git commit -m "feat(client): add my component"

# Push thường xuyên để backup
git push origin feature/your-branch
```

#### ❌ DON'T:
```bash
# KHÔNG commit files không liên quan
git add .  # ❌ Nguy hiểm!

# KHÔNG commit node_modules, .env, logs
git add node_modules/  # ❌ NEVER!

# KHÔNG làm việc trực tiếp trên develop
git checkout develop
# ... làm việc ... # ❌ SAI!
```

### File ownership (Để tránh conflict):

| Files | Owner | Others |
|-------|-------|--------|
| `client/src/components/TextToolbar.js` | Person 1 | ❌ Không sửa |
| `client/src/components/VersionDiff.js` | Person 2 | ❌ Không sửa |
| `client/src/components/UserCursor.js` | Person 3 | ❌ Không sửa |
| `src/routes/documentRoutes.js` | Person 1 | ❌ Không sửa |
| `src/routes/versionRoutes.js` | Person 2 | ❌ Không sửa |
| `src/routes/userRoutes.js` | Person 3 | ❌ Không sửa |

**Shared files** (Cần coordinate):
- `client/src/App.js` - Cả 3 người
- `client/src/App.css` - Cả 3 người
- `server.js` - Cả 3 người
- `src/handlers/WebSocketHandler.js` - Person 2 & 3

**Khi sửa shared files:**
```bash
# 1. Thông báo team trước
# 2. Pull latest
# 3. Commit ngay sau khi sửa
# 4. Push immediately
# 5. Notify team đã push
```

---

## 🛠️ Setup Project

### Prerequisites:
- Node.js v16+
- Git
- VS Code (recommended)
- Postman (để test API)

### Installation:

```bash
# 1. Clone
git clone <repo-url>
cd collab-editor

# 2. Install server dependencies
npm install

# 3. Install client dependencies
cd client
npm install
cd ..

# 4. Tạo .gitignore (nếu chưa có)
echo "node_modules/
.env
*.log
.DS_Store
versions.json" > .gitignore
```

### Running:

```bash
# Terminal 1: Server (port 5000)
npm start

# Terminal 2: Client (port 3000)
cd client
npm start
```

### Testing:

```bash
# Test server
curl http://localhost:5000/api/health

# Test client
# Mở http://localhost:3000
```

---

## 📅 Quy trình làm việc hàng ngày

### 🌅 Morning Routine (9:00 AM)

```bash
# 1. Pull latest develop
git checkout develop
git pull origin develop

# 2. Check current branch
git branch

# 3. Rebase feature branch (nếu đang làm feature)
git checkout feature/person1-text-formatting
git rebase develop

# 4. Start servers
npm start              # Terminal 1
cd client && npm start # Terminal 2

# 5. Check team's PRs và review
```

### 💻 During Work

```bash
# Commit thường xuyên (mỗi 1-2 tiếng)
git add <specific-files>
git commit -m "feat(client): progress on text toolbar"
git push origin feature/person1-text-formatting

# Pull develop thường xuyên (2-3 lần/ngày)
git checkout develop
git pull origin develop
git checkout feature/person1-text-formatting
git rebase develop
```

### 🌆 End of Day (6:00 PM)

```bash
# 1. Commit tất cả work
git add <files>
git commit -m "wip: end of day progress"
git push origin feature/person1-text-formatting

# 2. Update team về progress
# 3. Review pending PRs

# 4. Plan cho ngày mai
```

---

## 🔍 Code Review Process

### Khi tạo Pull Request:

**PR Template:**
```markdown
## 📝 Description
Brief description của feature

## ✅ Checklist
- [x] Có changes cả CLIENT và SERVER
- [x] Code chạy được local
- [x] Đã test thủ công
- [x] Commit messages đúng format
- [x] Đã remove console.log
- [x] Code style đúng chuẩn

## 📱 CLIENT Changes
- File: client/src/components/TextToolbar.js
- File: client/src/hooks/useFormatting.js
- Features: Bold, Italic, Underline

## 🖥️ SERVER Changes
- File: src/routes/documentRoutes.js
- File: src/services/DocumentService.js
- API: GET /api/document/stats

## 🧪 Testing
1. Open http://localhost:3000
2. Click toolbar buttons
3. Check formatting applied
4. Verify API call to /api/document/stats

## 📸 Screenshots
[Attach screenshots]

## 🔗 Related Issues
Closes #123
```

### Khi review PR:

```bash
# 1. Pull branch
git fetch origin
git checkout feature/person1-text-formatting

# 2. Run local
npm start
cd client && npm start

# 3. Test features

# 4. Check code
# - Có changes cả client và server không?
# - Code style OK không?
# - Performance OK không?

# 5. Comment hoặc Approve
```

**Review Comments Template:**
```markdown
## ✅ Approved
Great work! Code looks good.

## ⚠️ Changes Requested
1. Line 45: Please remove console.log
2. File XYZ: Missing error handling
3. Need to add server changes for this feature

## 💡 Suggestions
- Consider using useMemo for performance
- Add loading state
```

---

## ⚠️ Common Issues & Solutions

### Issue 1: Conflict khi merge
```bash
# Solution 1: Rebase
git checkout develop
git pull origin develop
git checkout feature/your-branch
git rebase develop

# Nếu có conflict:
# 1. Mở file có conflict
# 2. Sửa conflict (xóa <<<< ==== >>>>)
# 3. git add <file>
# 4. git rebase --continue
```

### Issue 2: Port already in use
```bash
# Windows
netstat -ano | findstr :5000
taskkill /F /PID <PID>

# Mac/Linux
lsof -i :5000
kill -9 <PID>
```

### Issue 3: Accidentally committed to develop
```bash
# DON'T PANIC!
# 1. Create branch from current state
git checkout -b feature/recovery-branch

# 2. Reset develop
git checkout develop
git reset --hard origin/develop

# 3. Continue work on recovery branch
git checkout feature/recovery-branch
```

### Issue 4: Need to undo last commit
```bash
# Keep changes (staged)
git reset --soft HEAD~1

# Keep changes (unstaged)
git reset HEAD~1

# Discard changes (CAREFUL!)
git reset --hard HEAD~1
```

---

## 📊 Progress Tracking

### Weekly Goals:

**Week 1:**
- [ ] Person 1: Text toolbar (Client + Server)
- [ ] Person 2: Version diff (Client + Server)
- [ ] Person 3: User presence (Client + Server)

**Week 2:**
- [ ] Person 1: Doc stats (Client + Server)
- [ ] Person 2: Version search (Client + Server)
- [ ] Person 3: User profile (Client + Server)

**Week 3:**
- [ ] Person 1: Export/Import (Client + Server)
- [ ] Person 2: Version tags (Client + Server)
- [ ] Person 3: Activity log (Client + Server)

### Daily Standup (15 phút mỗi sáng):
```markdown
## Person 1:
- Yesterday: Completed text toolbar UI
- Today: Will implement document stats API
- Blockers: None

## Person 2:
- Yesterday: Working on diff algorithm
- Today: Will finish diff API and start UI
- Blockers: Need help with diff library

## Person 3:
- Yesterday: Set up user presence tracking
- Today: Will implement cursor broadcast
- Blockers: None
```

---

## ✅ Final Checklist Before Submitting

### Individual Feature Checklist:
- [ ] ✅ Client changes completed (UI working)
- [ ] ✅ Server changes completed (API working)
- [ ] ✅ Integration working (Client calls Server correctly)
- [ ] ✅ Manual testing done
- [ ] ✅ Code formatted properly
- [ ] ✅ No console.log left
- [ ] ✅ No errors in console
- [ ] ✅ Commit messages đúng format
- [ ] ✅ PR created với đầy đủ thông tin
- [ ] ✅ Reviewed by at least 1 person
- [ ] ✅ Merged to develop

### Project Completion Checklist:
- [ ] All 3 people có ít nhất 3 features (Client + Server mỗi feature)
- [ ] All PRs được review và merge
- [ ] All features working together
- [ ] Documentation complete
- [ ] Demo video recorded (optional)

---

## 📞 Communication

### Slack/Discord Channels:
- `#general`: Thảo luận chung
- `#code-review`: PR reviews
- `#bugs`: Bug reports
- `#questions`: Hỏi đáp kỹ thuật

### Response Time:
- Urgent (blocking): < 1 hour
- PR review: < 4 hours
- Questions: < 24 hours

---

## 🎓 Learning Resources

- [Git Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [React Best Practices](https://react.dev/learn)
- [Node.js API Design](https://expressjs.com/en/guide/routing.html)
- [WebSocket Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

---

**Created:** November 6, 2025  
**Team Size:** 3 người  
**Project Duration:** 3 weeks  
**Last Updated:** November 6, 2025
