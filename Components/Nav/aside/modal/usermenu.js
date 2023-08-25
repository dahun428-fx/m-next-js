import { execLogout } from "@/common/function/login/login";
import { useState } from "react";

const UserMenu = ({loginCheck, ballonClose, loginedUser}) => {

    const [userInfo, setUserInfo] = useState(loginedUser); 

    console.log('usermenu----->', loginedUser);
    const logoutHandler = async (e) => {
        e.preventDefault();
        await execLogout();
        ballonClose();
        loginCheck();
    }

    return (
        <>
            <div className="l-header__usermenu">
                <div className="l-header__balloonBoxInner">
                    <p><a>{userInfo.userName} 님</a></p>
                    <p className="lc-usercode">고객코드: <span>{userInfo.userCode}</span></p>
                </div>
                <div className="l-header__balloonBoxInner">
                    <div className="l-header__menu--logout">
                        <a onClick={logoutHandler}>
                        로그아웃
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserMenu;