import { execLogin } from "@/common/function/login/login";
import { useState } from "react";

const LoginHeadForm = ({loginCheck, ballonClose}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");

    const onChangeFormHandler = (e) => {
        const {name, value} = e.target;

        if( name === 'userid' ) {
            setUserid(value);
        } else if ( name === 'password') {
            setPassword(value);
        }
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout( async () => {
            await execLogin(userid, password);
            setIsLoading(false);
            setUserid('');
            setPassword('');
            loginCheck();
            ballonClose();
        }, 300);
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                {isLoading ? 
                <>
                    <div className="l-header__loading">
                        <p>Loading...</p>
                    </div>
                </> : 
                <div className="l-header__login">
                    <dl className="lc-id">
                        <dt>아이디</dt>
                        <dd>
                            <input type="text" maxLength={128} name="userid" onChange={onChangeFormHandler}/>
                        </dd>
                    </dl>
                    <dl className="lc-pass">
                        <dt>비밀번호</dt>
                        <dd>
                            <input type="password" maxLength={128} name="password" onChange={onChangeFormHandler} />
                        </dd>
                    </dl>
                    <p className="lc-btn--login">
                        <input type="submit" value={`로그인`} />
                    </p>
                    <ul className="m-linkList">
                        <li>
                            <a>
                            로그인 ID 찾기
                            </a>
                        </li>
                        <li>
                            <a>
                                비밀번호찾기
                            </a>
                        </li>
                    </ul>
                </div>
                }
            </form>
        </>
    )
}

export default LoginHeadForm;