// Sửa thông tin cá nhân ở đây rồi git push để cập nhật website.
export const caNhan = {
  ten: 'Thông',
  chucDanh: 'Nhân viên Agribank Chi nhánh Tây Ninh',
  gioiThieu:
    'Đồng hành cùng khách hàng Tây Ninh với các sản phẩm, dịch vụ ngân hàng số của Agribank. Trang này tổng hợp những ứng dụng, hướng dẫn và công cụ mình xây dựng để phục vụ công việc kinh doanh và truyền thông.',
  chiNhanh: 'Agribank Chi nhánh Tây Ninh',
}

// Danh sách ứng dụng. Mỗi app thêm một dòng.
// - App HTML tĩnh: đặt thư mục vào public/apps/<ten-app>/ và để link: '/apps/<ten-app>/'
// - App ở nơi khác (dự án Vercel riêng...): để link đầy đủ https://...
export const ungDung = [
  {
    ten: 'Ứng dụng mẫu',
    moTa: 'Ví dụ cách đưa một app HTML lên trang này. Thay bằng app thật của bạn.',
    link: '/apps/vi-du/',
    nhan: 'Mẫu',
  },
]
