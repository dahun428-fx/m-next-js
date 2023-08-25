import setCookieValue from "../cookie/setCookieValue";
import isLogin from "./isLogin";

import { loginApi, userInfoApi, logoutApi } from '../../../api/api.auth'; 
import CustomStorage from "@/tempStorage/storage";

const storage = CustomStorage;

export const execAuthCheck = async () => {
    
    console.log('=========> excute Auth check')

    const userInfo = storage.USER_INFO.getItem();
    if (!userInfo) {
        console.log('=========> user Login Check : no User');
        logouted();
        return;
    }
    return getUserInfo();
}

export const execLogin = async (uid, pw) => {

    console.log('=========> excute user Login')

    try {
        const {data} = await loginApi(uid, pw);
        await setSession(data);

        return getUserInfo();
    } catch (error) {
        console.log('execute Login error ', error);
        throw new Error(error);
    }
}

export const execLogout = async () => {

    console.log('=========> excute user Logout')

    return await logoutApi().then(res=> {
        clearSession(res);
    });
}

export const getUserInfo = async () => {
    console.log('=========> excute getUser from Api Server');
    try {
        const {data} = await userInfoApi();
        data.permissionList = data.permissionList.map((item, index) => {
            return parseInt(item);
        })
        if(!isLogin(data)) {
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
    console.log('=========> login Progres___Start');
    let userInfo = storage.USER_INFO.getItem();
    if(userInfo) {
        setCookieValue( 'CUSTCD', userInfo?.userCode, null, '/', null );
        setCookieValue( 'msm_cellcd', userInfo?.cellCode, 0.02, '/', null);
    }
    let login_status = storage.LOGIN_STATUS.getItem();
    if (!login_status) {
        update();
    }
    console.log('=========> login Progres___End');
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
    console.log('=========> logout Progres___Start');
    setCookieValue( 'CUSTCD', '', 0, '/', null );
    let login_status = storage.LOGIN_STATUS.getItem();
    if(login_status) {
        storage.LOGIN_STATUS.removeItem();
        update();
    } 
    console.log('=========> logout Progres___End');
}

export const clearSession = (json) => {
    console.log('clear session')
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
    console.log('unset session');
    storage.ACESS_TOKEN.removeItem();
    setCookieValue( 'GACCESSTOKENKEY', '', null, '/' );
    setCookieValue( 'GREFRESHTOKENHASH', '', null, '/' );
}