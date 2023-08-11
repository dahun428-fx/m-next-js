import setCookieValue from "../cookie/setCookieValue";
import isLogin from "./isLogin";

import { loginApi, userInfoApi, logoutApi } from '../../../api/api.auth'; 
import CustomStorage from "@/tempStorage/storage";

const storage = CustomStorage;

export const execAuthCheck = async () => {
    
    const userInfo = storage.USER_INFO.getItem();
    if (!userInfo) {
        logouted();
        console.log('not logined user');
    }
    return getUserInfo();
}

export const execLogin = async (uid, pw) => {

    try {
        const {data} = await loginApi(uid, pw);
        await setSession(data);

        return getUserInfo();
    } catch (error) {
        throw new Error(error);
    }
}

export const execLogout = async () => {
    return await logoutApi().then(res=> {
        clearSession(res);
    });
}

export const getUserInfo = async () => {
    try {
        const {data} = await userInfoApi();
        data.permissionList = data.permissionList.map((item, index) => {
            return parseInt(item);
        })
        if(!isLogin(data)) {
            console.log('not logined now');
            return;
        }
        storage.USER_INFO.setItem(data);
        logined();
        return data;
    } catch (error) {
        logouted();
        console.log(error);
    }

}

const logined = () => {
    let userInfo = storage.USER_INFO.getItem();
    if(userInfo) {
        setCookieValue( 'CUSTCD', userInfo?.userCode, null, '/', null );
        setCookieValue( 'msm_cellcd', userInfo?.cellCode, 0.02, '/', null);
    }
    let login_status = storage.LOGIN_STATUS.getItem();
    if (login_status) {
        return;
    }
    update();
}
const update = () => {
    let user = storage.USER_INFO.getItem();
    if ( isLogin(user) ){
        try {
            //rewrite
            // if (typeof window !== 'undefined') window.misumivona.WriteMemberCheckCookie();
            //WriteMemberCheckCookie
        } catch (error) {
            console.log(error);            
        }
    }
}

const logouted = () => {
    setCookieValue( 'CUSTCD', '', 0, '/', null );
    let login_status = storage.LOGIN_STATUS.getItem();
    if(!login_status) {
        return;
    } 
    storage.LOGIN_STATUS.removeItem();
    update();
}

export const clearSession = (json) => {
    unsetSession(json);
    storage.USER_INFO.setItem('');
    logouted();
}

const setSession = async (v) => {
    storage.ACESS_TOKEN.setItem(v.sessionId);
    setCookieValue( 'GACCESSTOKENKEY', v.sessionId, null, '/' );
    setCookieValue( 'GREFRESHTOKENHASH', v.refreshTokenHash, null, '/' );
}

const unsetSession = (v) => {
    storage.ACESS_TOKEN.removeItem();
    setCookieValue( 'GACCESSTOKENKEY', '', null, '/' );
    setCookieValue( 'GREFRESHTOKENHASH', '', null, '/' );
}