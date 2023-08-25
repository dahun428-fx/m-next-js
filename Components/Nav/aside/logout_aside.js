import LoginHeadForm from "@/Components/Nav/aside/modal/LoginHeadForm";

const LogoutAside = ({ballonShow, isBalloonShow, loginCheck, ballonClose}) => {
    return (
        <>
            <ul className="l-header__function" >
                <li className="lc-login">
                    <a onClick={()=>ballonShow('login')}>로그인</a>
                </li>
                <li className="lc-order">
                    <a>견적/주문</a>
                </li>
                <li className="lc-regist">
                    <a>회원가입</a>
                </li>
            </ul>
            {isBalloonShow === 'login' &&
                <div className="l-header__balloonBox--left balloonBoxLogin">
                    <LoginHeadForm loginCheck={loginCheck} ballonClose={ballonClose} />
                </div>
            }
        </>
    );
}

export default LogoutAside;