# Refactor Guide - Collaborative Editor

## 📁 Cấu trúc thư mục mới

```
src/
├── hooks/              # Custom React Hooks
│   ├── useWebSocket.js  # WebSocket connection & state management
│   ├── useVersions.js   # Version management logic
│   └── index.js         # Exports
├── components/         # React Components
│   ├── Header.js        # Header với connection status
│   ├── UserInfo.js      # Thông tin người dùng hiện tại
│   ├── OnlineUsers.js   # Danh sách người dùng online
│   ├── Editor.js        # Text editor chính
│   ├── EditorControls.js # Controls cho version management
│   ├── VersionPanel.js  # Panel hiển thị versions
│   ├── CreateVersionForm.js # Form tạo version mới
│   └── index.js         # Exports
├── utils/              # Utilities & Helpers
│   ├── constants.js     # Constants (URLs, message types)
│   ├── formatters.js    # Formatter functions (time, date)
│   ├── api.js           # API calls
│   └── index.js         # Exports
├── App.js              # Main App component (refactored)
└── App.css             # Styles

```

## 🎯 Các cải tiến chính

### 1. **Separation of Concerns**
   - Logic tách riêng khỏi UI components
   - Mỗi component chỉ làm một việc duy nhất
   - Dễ test và maintain

### 2. **Custom Hooks**
   - `useWebSocket`: Quản lý WebSocket connection và state
   - `useVersions`: Quản lý version operations

### 3. **Reusable Components**
   - Tất cả components đều reusable
   - Props-driven, không có hard-coded values
   - Dễ dàng test từng component riêng lẻ

### 4. **Utilities**
   - Constants tập trung ở một nơi
   - Formatters có thể tái sử dụng
   - API calls được abstract hóa

## 🚀 Lợi ích của refactor

1. **Maintainability**: Code dễ đọc, dễ hiểu hơn
2. **Scalability**: Dễ dàng thêm features mới
3. **Testability**: Dễ dàng viết unit tests
4. **Reusability**: Components và hooks có thể tái sử dụng
5. **Performance**: Tối ưu re-renders với proper hooks

## 📝 Cách sử dụng

### Import components
```javascript
import { Header, Editor, UserInfo } from './components';
```

### Import hooks
```javascript
import { useWebSocket, useVersions } from './hooks';
```

### Import utils
```javascript
import { formatTime, WS_MESSAGE_TYPES, fetchVersions } from './utils';
```

## 🔄 So sánh trước và sau

### Trước refactor:
- 1 file App.js lớn (374 dòng)
- Tất cả logic lẫn lộn
- Khó maintain và test

### Sau refactor:
- App.js chính (80 dòng)
- 7 components riêng biệt
- 2 custom hooks
- 3 utility files
- Dễ maintain và test

## 🛠 Các chức năng đảm bảo hoạt động bình thường

✅ WebSocket connection
✅ Real-time document editing
✅ User name management
✅ Online users list
✅ Version creation
✅ Version restoration
✅ Version deletion
✅ Version preview
✅ Connection status indicator
✅ Responsive UI

## 💡 Best Practices được áp dụng

1. **Component Composition**: Tách nhỏ components
2. **Custom Hooks**: Extract logic thành hooks
3. **PropTypes/TypeScript**: (Có thể thêm sau)
4. **Error Handling**: Proper error handling
5. **Clean Code**: Meaningful names, comments
6. **DRY Principle**: Don't Repeat Yourself
7. **Single Responsibility**: Mỗi function/component làm 1 việc

## 🔧 Để chạy ứng dụng

```bash
# Install dependencies (nếu chưa cài)
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📚 Tài liệu tham khảo

- [React Hooks](https://react.dev/reference/react)
- [Component Composition](https://react.dev/learn/passing-props-to-a-component)
- [Clean Code in React](https://www.freecodecamp.org/news/best-practices-for-react/)

