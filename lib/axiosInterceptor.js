import { useEffect } from 'react';
import EnvConfig from '../config/config.export';
import axios from 'axios';
import getCookieValue from '@/common/function/cookie/getCookieValue';



const config = EnvConfig();
const instance = axios.create({
    // baseURL : config.baseUrl,
    baseURL : `https://${config.apiUrl}/api/v1/`,
    headers : {
        'Content-Type': 'application/json',
    },
    params:{
        applicationId : process.env.NEXT_PUBLIC_APPLICATION_ID,
        lang : process.env.NEXT_PUBLIC_LANGUAGE,
    }
})

instance.interceptors.request.use(async(config) => {
    
    if (getCookieValue('GACCESSTOKENKEY')) {
        config.params.sessionId = getCookieValue('GACCESSTOKENKEY'); 
    }
    return config;
})
const AxiosInterceptor = ({children}) => {
    
    const requestInterceptor = (request) => {

        console.log('axios interceptor requeset : ', request);
        return request;
    }
    
    const responseInterceptor = (response) => {
        console.log('axios interceptor response: ', response);
        return response;
    }

    const errorIntercpetor = (error) => {
        return error;
    }

    const req = instance.interceptors.request.use(requestInterceptor);
    const res = instance.interceptors.response.use(responseInterceptor, errorIntercpetor);

    useEffect(()=>{
        return () => {
            instance.interceptors.request.eject(req);
            instance.interceptors.response.eject(res);
        }
    }, [
        req, res
    ])

    return children;
}
export default instance;
export { AxiosInterceptor };