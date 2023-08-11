import { NextResponse } from "next/server";
import TokenReloader from "./auth/token/tokenReloader";
import { TokenSystemError } from "./auth/token/error/tokenSystemError";
import authLogout from "./api/enum/auth.logout";
import EnvConfig from './config/config.export';
import { RefreshTokenExpriedError } from "./auth/token/error/refreshTokenExpiredError";
import { deleteCookie, getCookies, setCookie, getCookie } from 'cookies-next';
import { clearSession } from "./common/function/login/login";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";


export async function middleware(request) {
    const config = EnvConfig();
    console.log('request ::: ', request.nextUrl.pathname);

    const response = NextResponse.next();
    const cookie = request.cookies;
    const MISUMI_ACCESS_TOKEN_KEY = process.env.MISUMI_ACCESS_TOKEN_KEY;
    const MISUMI_REFRESH_TOKEN_HASH = process.env.MISUMI_REFRESH_TOKEN_HASH;
    const cookieAuthDomain = config.ecweb.cookie.gAccessTokenKeyDomain;
    const COOKIE_EXPIRES_2030 = config.ecweb.cookie.expiresInit;
    const COOKIE_DEFAULT_PATH = config.ecweb.cookie.defaultPath;
    const applicationId = process.env.NEXT_PUBLIC_APPLICATION_ID;
   
    if (cookie.get(MISUMI_REFRESH_TOKEN_HASH)?.value) {

        try {

            const accessTokenKey = cookie.get(MISUMI_ACCESS_TOKEN_KEY)?.value;
            const refreshTokenHash = cookie.get(MISUMI_REFRESH_TOKEN_HASH)?.value;
            // console.log('accessTokenKey', accessTokenKey , 'refreshTokenHash', refreshTokenHash);
            let accessTokenKeyTmp = await TokenReloader(accessTokenKey, refreshTokenHash);
            if(accessTokenKeyTmp && accessTokenKey !== accessTokenKeyTmp) {
                console.log('new refresh token accept complete ---> ', accessTokenKeyTmp);
                response.cookies.set({
                    name : MISUMI_ACCESS_TOKEN_KEY,
                    value : accessTokenKeyTmp,
                    path:COOKIE_DEFAULT_PATH,
                    expires : new Date(COOKIE_EXPIRES_2030).getTime(),
                    domain : cookieAuthDomain
                });
            }
            
        } catch (error) {
            if (error instanceof TokenSystemError || error instanceof RefreshTokenExpriedError) {
                //logout
                const res = await fetch(`https://${config.apiUrl}/api/v1/${authLogout}?sessionId=${cookie.get(MISUMI_ACCESS_TOKEN_KEY)?.value}&applicationId=${applicationId}`, {
                    method:'POST',
                    headers : new Headers({
                        'Content-Type': 'application/json',
                    }),
                    body:JSON.stringify({'field':'@default'})
                }).then(res => res.json());
                console.log('middleware user logouted : ', res);
                response.cookies.set({
                    name : MISUMI_ACCESS_TOKEN_KEY,
                    value : '',
                    path:COOKIE_DEFAULT_PATH,
                    expires : null,
                    domain : cookieAuthDomain
                })
                response.cookies.set({
                    name : MISUMI_REFRESH_TOKEN_HASH,
                    value : '',
                    path:COOKIE_DEFAULT_PATH,
                    expires : null,
                    domain : cookieAuthDomain
                })
            }
            console.log('middle ware error : ', error);        
        }
    }

    return response;
}

//해당 경로에서만 middleware 수행할 수 있도록 설정
export const config = {
    matcher: '/',
}
