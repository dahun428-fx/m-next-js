import isLogin from "@/common/function/login/isLogin";
import { execAuthCheck } from "@/common/function/login/login";
import { useRouter } from "next/router";
import { Children, cloneElement, isValidElement, useEffect, useState } from "react";
const ProtectRoute = ({children}) => {

    const router = useRouter();
    const [isLoginUser, setIsLoginUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true);
        (async()=>{
            if (typeof window !== 'undefined') {
                let user = await execAuthCheck();
                let isLoginUser = isLogin(user);
                console.log('route ', user, isLoginUser);
                setIsLoginUser(isLoginUser);
                setIsLoading(false);
            }
        })();
    },[router.asPath]);

    const childrenWithProps = Children.map(children, (child) => {
        if(isValidElement(child)) {
            return cloneElement(child, {isLoginUser});
        }
        return child;
    })

    if(!isLoading) {
        return childrenWithProps;
    }
}

export default ProtectRoute;