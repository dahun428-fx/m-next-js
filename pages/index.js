import { useEffect, useState } from "react";
import LoginForm from "@/Components/Form/LoginForm";
import CustomStorage from "@/tempStorage/storage";
import isLogin from "@/common/function/login/isLogin";
import { execLogout } from "@/common/function/login/login";
import { useRouter } from "next/router";
import Link from "next/link";

const Home = ({isLoginUser}) => {

    const router = useRouter();
    const [userInfo, setUserInfo] = useState(null);
    useEffect(()=>{
        if ( isLoginUser && typeof window !== 'undefined' ){
            setUserInfo(CustomStorage.USER_INFO.getItem());
        } else {
            setUserInfo(null);
        }
    },[]);
    
    const logoutHandler = async (e) => {
        e.preventDefault();
        await execLogout();
        if(router.asPath === '/') {
            router.reload();
        } else {
            router.replace('/');
        }
    }

    return (
        <>
            <div>
            Home
            </div>
            {/* <p>hi</p>
            {
                isLoginUser && userInfo ?
                <div>
                    <p>
                    login success 
                    </p>
                    <p>{userInfo.userName}</p>
                    <button onClick={logoutHandler}>logout</button>
                </div>
                :
                <LoginForm />
            }
            <div>
                <p>
                    <Link href={`/vona2/mech`}>
                        move to category Page
                    </Link>
                </p>
            </div> */}
        </>
    )
}

export default Home;