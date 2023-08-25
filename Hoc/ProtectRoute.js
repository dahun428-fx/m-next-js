import isLogin from "@/common/function/login/isLogin";
import { execAuthCheck } from "@/common/function/login/login";
import { useRouter } from "next/router";
import { Children, cloneElement, isValidElement, useEffect, useState } from "react";
const ProtectRoute = ({children}) => {

    const router = useRouter();
    const [isLoginUser, setIsLoginUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loginedUser, setLoginedUser] = useState({});

    useEffect(()=>{
        console.log('=========> Now LOADING PAGE.....');
        (async()=>{
            if (typeof window !== 'undefined' && !router.asPath.includes('[')) {
                loginCheck();
                setIsLoading(false);
            }
        })();
        return () => setIsLoading(true);
    },[router.asPath]);

    const loginCheck = async () => {
        let user = await execAuthCheck();
        let isLoginUser = isLogin(user);
        setLoginedUser(user);
        setIsLoginUser(isLoginUser);
    }

    const childrenWithProps = Children.map(children, (child) => {
        if(isValidElement(child)) {
            return cloneElement(child, {isLoginUser, loginedUser, loginCheck:()=>{loginCheck()}});
        }
        return child;
    })

    if(!isLoading) {
        return childrenWithProps;
    }
}

export default ProtectRoute;