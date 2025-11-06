# Hướng Dẫn Demo Nhanh - Collab Editor

## 🚀 Chạy Dự Án (3 Bước)

### Bước 1: Cài đặt Dependencies

```bash
# Cài đặt cho server
npm install

# Cài đặt cho client
cd client
npm install
cd ..
```

### Bước 2: Chạy Server (Terminal 1)

```bash
npm start
```

✅ Server chạy trên `http://localhost:5000`

### Bước 3: Chạy Client (Terminal 2)

```bash
npm run client
```

✅ Client tự động mở tại `http://localhost:3000`

---

## 🎬 Cách Demo

### 1. Mở Nhiều Tab
- Mở 2-3 tab trình duyệt tại `http://localhost:3000`
- Mỗi tab = 1 người dùng

### 2. Kiểm Tra Tính Năng

#### ✅ Quản lý Người dùng
- Mỗi tab có **User ID** và **Session ID** riêng
- Hiển thị **trạng thái kết nối** (🟢/🔴)
- **Danh sách người dùng online** cập nhật real-time

#### ✅ Chỉnh sửa Cộng tác
- Gõ text trong tab 1 → Xuất hiện ngay trong tab 2, 3
- Thử nghiệm với nhiều người cùng gõ

#### ✅ Đổi Tên Người dùng
- Click nút ✏️ bên cạnh tên
- Nhập tên mới → Enter hoặc click "Lưu"
- Tên cập nhật trong tất cả các tab

#### ✅ Theo dõi Kết nối
- **Đóng tab** → Danh sách tự động cập nhật
- **Mở tab mới** → Người dùng mới xuất hiện

---

## 📝 Checklist Demo

- [ ] Server đang chạy (Terminal 1)
- [ ] Client đang chạy (Terminal 2)
- [ ] Mở ít nhất 2 tab trình duyệt
- [ ] Kiểm tra User ID và Session ID khác nhau
- [ ] Kiểm tra danh sách người dùng online
- [ ] Test chỉnh sửa real-time (gõ text)
- [ ] Test đổi tên người dùng
- [ ] Test đóng/mở tab (cập nhật danh sách)

---

## ⚡ Scripts Nhanh

```bash
# Chạy server
npm start          # hoặc npm run server

# Chạy client
npm run client

# Cài đặt tất cả
npm install && cd client && npm install && cd ..
```

---

## 🐛 Xử Lý Lỗi

| Lỗi | Giải pháp |
|-----|-----------|
| Cannot connect to WebSocket | Kiểm tra server đang chạy trên port 5000 |
| Client không load | Chạy `cd client && npm install` |
| Port 3000 đã được sử dụng | Đóng ứng dụng khác hoặc đổi port |
| Changes không sync | Kiểm tra console (F12) và server logs |

---

## 💡 Tips Demo

1. **Mở 3-4 tab** để thấy rõ tính năng cộng tác
2. **Đặt tên khác nhau** cho mỗi tab để dễ phân biệt
3. **Gõ đồng thời** trong nhiều tab để thấy real-time sync
4. **Đóng/mở tab** để demo tính năng theo dõi kết nối

---

**Happy Demo! 🎉**

