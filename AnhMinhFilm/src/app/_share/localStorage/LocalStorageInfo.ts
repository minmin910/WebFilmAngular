export const accessToken ='accessToken';
export const userLogin ='userLogin';
export class LocalStorageInfo{
    public static saveLoginData(data){
        localStorage.setItem(userLogin,JSON.stringify(data));
    }
    public static saveAccessToken(token){
        localStorage.setItem(accessToken,token);
    }
    public static getLoginData(){
        return JSON.parse(localStorage.getItem(userLogin))
    }
    public static getAccessToken(){
        return localStorage.getItem(accessToken)
    }
    public static deleteLoginData(){
        return localStorage.removeItem(userLogin);
    }
    public static deleteAccessToken(){
        return localStorage.removeItem(accessToken)
    }
}