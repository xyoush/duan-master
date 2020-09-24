import dangnhap from "../container/dangnhap";
import Quanlycongviec from "../container/Quanlycongviec";
import Quanlyhoso from "../container/Quanlyhoso";
import Nopbaocao from "../container/Nopbaocao";

export const ADMIN_ROUTES = [
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
      path : '/dangnhap',
      name : 'Đăng Nhập',
      exact : true,
      component : dangnhap,
    },
  ];