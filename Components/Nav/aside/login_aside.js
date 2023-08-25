import UserMenu from "./modal/usermenu";

const LoginAside = ({ballonShow, isBalloonShow, loginCheck, ballonClose, loginedUser}) => {
    return (
    <>
        <ul className="l-header__function">
            <li className="lc-user marker">
                <a onClick={()=>ballonShow('login')}>마이페이지</a>
            </li>
            <li className="lc-order">
                <a>
                견적/주문
                </a>
            </li>
            <li className="lc-cart">
                <a>장바구니</a>
            </li>
        </ul>
        {isBalloonShow === 'login' &&
            <div className="l-header__balloonBox--left balloonBoxMypage">
                <UserMenu loginCheck={loginCheck} ballonClose={ballonClose} loginedUser={loginedUser}/>
            </div>
        }
    </>
    );
}
export default LoginAside;