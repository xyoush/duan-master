import Dangnhap from "../container/Dangnhap";
import Trangchu from "../container/Trangchu";
import Quanlycongviec from "../container/Quanlycongviec";
import Quanlyhoso from "../container/Quanlyhoso";
import Nopbaocao from "../container/Nopbaocao";
import Baohiemchinhsach from "../container/Baohiemchinhsach";
import Quanlyduan from "../container/Quanlyduan";
import Quanlyhosoduan from "../container/Quanlyhosoduan";
import Quanlykehoachcongviec from "../container/Quanlykehoachcongviec";
import Quanlykhachhang from "../container/Quanlykhachhang";
import Quanlynhanvien from "../container/Quanlynhanvien";
import Quanlythuchi from "../container/Quanlythuchi";
import Thongke from "../container/Thongke";




export const ADMIN_ROUTES = [
  {
    path : '/Trangchu',
    name : 'Trang chủ',
    exact : true,
    component : Trangchu,
  },
  {
    path : '/Quanlyduan',
    name : 'Quản lý dự án',
    exact : true,
    component : Quanlyduan,
  },
  {
    path : '/Quanlykehoachcongviec',
    name : 'Quản lý kế hoạch công việc',
    exact : true,
    component : Quanlykehoachcongviec,
  },
  {
    path : '/Quanlynhanvien',
    name : 'Quản lý nhân viên',
    exact : true,
    component : Quanlynhanvien,
  },
  {
    path : '/Quanlykhachhang',
    name : 'Quản lý khách hàng',
    exact : true,
    component : Quanlykhachhang,
  },
  {
    path : '/Quanlyhosoduan',
    name : 'Quản lý hồ sơ dự án',
    exact : true,
    component : Quanlyhosoduan,
  },
  {
    path : '/Quanlythuchi',
    name : 'Quản lý thu chi',
    exact : true,
    component : Quanlythuchi,
  },
  {
    path : '/Thongke',
    name : 'Thống kê',
    exact : true,
    component : Thongke,
  },
  {
    path : '/Baohiemchinhsach',
    name : 'Bảo hiểm chính sách',
    exact : true,
    component : Baohiemchinhsach,
  },
  {
    path : '/Quanlycongviec',
    name : 'Quản lý công việc',
    exact : true,
    component : Quanlycongviec,
  },
  {
    path : '/Quanlyhoso',
    name : 'Quản lý hồ sơ',
    exact : true,
    component : Quanlyhoso,
  },
  {
    path : '/Nopbaocao',
    name : 'Nộp báo cáo',
    exact : true,
    component : Nopbaocao,
  },
 
  ];

  export const LOGIN_ROUTES = [
    {
      path : '/Dangnhap',
      name : 'Đăng Nhập',
      exact : true,
      component : Dangnhap,
    },
  ];