import getConfigs from "./config.common";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const mode = process.env.NEXT_PUBLIC_RUN_MODE;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const ecweb = {
    catalog_first_directory : {
        path : '/vona2'
    },
    cookie : {
        gAccessTokenKeyDomain : '.misumi-ec.com',
        expiresInit: 'Tue, 1-Jan-2030 00:00:00 GMT',
        defaultPath: '/'
    },
    api : {
        authUrl : 'https://stg0-kr.mauth.misumi-ec.com/api-auth-v1/auth/api/token/refresh',
    }
}
export default getConfigs({
    baseUrl, mode, apiUrl, ecweb, serverUrl
}) 