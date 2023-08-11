import axiosApi from '../lib/axiosInterceptor';
import axiosServer, {AxiosInterceptor} from '../lib/axiosInterceptor_server';
import authLogin from './enum/auth.login';
import authLogout from './enum/auth.logout';
import authTokenCheck from './enum/auth.token.check';
import userInfo from './enum/user.info';

export const loginApi = async (uid, pw) => {
    const request = {
        loginId : uid, password : pw
    }
    return await axiosApi.post(authLogin, request);
}

export const logoutApi = async () => {
    return await axiosApi.post(authLogout, {'field': '@default'})
}

export const userInfoApi = async () => {
    return await axiosApi({
        method:'get',
        url : userInfo,
        params:{
            'field':'@default',
        }
    });
}

// export const logoutApi = async() => {
//     return await axiosServer.post(authLogout, {field:'@default'});
// }

export const tokenCheck = () => {
    return axiosServer({
        method : 'post',
        url : authTokenCheck,
        // url : 'https://local.misumi-ec.com/vona2/token/check',
        timeout:6000,
    });
}