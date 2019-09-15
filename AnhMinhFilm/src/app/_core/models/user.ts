export class UserLogin {
  taiKhoan: string;
  matKhau: string;
  constructor(taiKhoan: string, matKhau: string) {
    this.taiKhoan = taiKhoan;
    this.matKhau = matKhau;
  }
}
export class UserSignUp {
  taiKhoan: string;
  matKhau: string;
  email: string;
  soDt: string;
  maNhom: string = "GP01";
  maLoaiNguoiDung: string = "KhachHang";
  hoTen: string;
  constructor(
    taiKhoan: string,
    matKhau: string,
    email: string,
    soDt: string,
    hoTen: string
  ) {
    this.taiKhoan = taiKhoan;
    this.matKhau = matKhau;
    this.email = email;
    this.soDt = soDt;
    this.hoTen = hoTen;
  }
}
