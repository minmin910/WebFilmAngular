import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserLogin, UserSignUp } from "../models/user";
import * as config from "../../_share/common/Config";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}
  public login(taiKhoan: string, matKhau: string): Observable<any> {
    let loginInfo = new UserLogin(taiKhoan, matKhau);
    let header = new HttpHeaders();
    header.append("Content-Type", "application/json");
    const url = config.domain + "/api/QuanLyNguoiDung/DangNhap";
    let ob = this.http.post(url, loginInfo, { headers: header });
    return ob;
  }
  public signUpservice(
    taiKhoan: string,
    matKhau: string,
    email: string,
    soDt: string,
    hoTen: string
  ): Observable<any> {
    let signUpInfo = new UserSignUp(taiKhoan, matKhau, email, soDt, hoTen);

    
    let header = new HttpHeaders();
    header.append("Content-Type", "application/json");
    const url = config.domain + "/api/QuanLyNguoiDung/DangKy";
    let ob = this.http.post(url, signUpInfo,{ headers: header ,responseType:'text'});
    return ob;
  }
}
