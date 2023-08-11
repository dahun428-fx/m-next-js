import { execLogin } from "@/common/function/login/login";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LoginForm = (props) => {

    const router = useRouter();
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeHandler = (e) => {
        const {name, value} = e.target;

        if( name === 'loginId' ) {
            setLoginId(value);
        } else if ( name === 'password') {
            setPassword(value);
        }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        const data = await execLogin(loginId, password);
        console.log('login success', data);
        if(router.asPath === '/') {
            router.reload();
        } else {
            router.replace('/');
        }
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div>
                <input type="text" name="loginId" value={loginId} onChange={onChangeHandler} />
                <input type="password" name="password" value={password} onChange={onChangeHandler} />
                </div>
                <button type="submit">login</button>
            </form>
        </>
    )
}

export default LoginForm;