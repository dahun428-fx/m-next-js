import EnvConfig from '../../config/config.export';

const TokenRefresher = async (refresh_token_hash) => {
    const config = EnvConfig();

    const CONNECT_TIMEOUT = 60;
    const READ_TIMEOUT = 6000;
    console.log('before token invalid ---> new refresh token accept .... ')
    const controller = new AbortController();
    const timeoutId = setTimeout(()=>controller.abort(), READ_TIMEOUT);
    try {
        const url = `${config.ecweb.api.authUrl}?refreshTokenHash=${refresh_token_hash}`;
        // const url = 'https://stg0-kr.mauth.misumi-ec.com/api-auth-v1/auth/api/token/refresh?refreshTokenHash='+refresh_token_hash;
        return await fetch(url,{
            method:'POST',
            headers : new Headers({
                "Content-Type" : "application/x-www-form-urlencoded;charset=\"utf-8\"",
                "Accept" : "application/json"
            }),
            signal:controller.signal,
            // agent:new https.Agent({
            //     rejectUnauthorized: false,
            // }),
            
        }).then(res=> res.json());
    } catch (error) {
        console.log('eror', error)
    } finally {
        clearTimeout(timeoutId);
    }
}

export default TokenRefresher;