import { ACCESS_TOKEN, getAccessToken, setAccessToken } from "@/tempStorage/storage";
import isLogin from "../login/isLogin";
import getCookieValue from "../cookie/getCookieValue";
import { clearSession } from "../login/login";
import { tokenCheck } from "@/api/api.auth";

const RefreshToken = () => {

    if(typeof window === 'undefined') {
        return;
    }
    const check = (force) => {
        let mustPoll = getAccessToken() && force;
        let noRefreshToken = !getCookieValue('GREFRESHTOKENHASH') && mustPoll;

        if(noRefreshToken) {
            clearSession();
        }
        return mustPoll ? save(poll()) : new Promise.resolve({});
    }

    const poll = () => {
        return tokenCheck();
    }

    const save = (p) => {
        console.log('refresh token save :' , p);
        try {
            p.then(()=>{
                setAccessToken(getCookieValue('GACCESSTOKENKEY'));
            })
        } catch (error) {
            console.log(error);
        }
    }

    return {
        check
    }
}

export default RefreshToken;