import { execLogin, execLogout } from "@/common/function/login/login";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import LoginHeadForm from "./aside/modal/LoginHeadForm";
import LogoutAside from "./aside/logout_aside";
import LoginAside from "./aside/login_aside";
import WosMenu from "./aside/modal/wosmenu";

const HeadAside = ({isLoginUser, loginCheck, loginedUser}) => {
    const router = useRouter();
    const [isLogined, setIsLogined] = useState(isLoginUser);
    const [isBalloonShow, setIsBalloonShow] = useState("");

    const wrapperRef = useRef(null);

    const useOutsideClickEvent = (ref) => {
        useEffect(()=>{
            function handleClickOutSide(event) {
                if(ref.current && !ref.current.contains(event.target)) {
                    setIsBalloonShow('');
                }
            }
            document.addEventListener('mousedown', handleClickOutSide);
            return()=>{
                document.removeEventListener('mousedown', handleClickOutSide);
            }
        },[ref]);
    }

    useOutsideClickEvent(wrapperRef);

    useEffect(()=>{
        setIsLogined(isLoginUser);
    },[isLoginUser])

    const ballonShow = (type) => {
        setIsBalloonShow(type);
    }

    const ballonClose = () => {
        setIsBalloonShow('');
    }

    const addFavorite = () => {
        alert('Ctrl+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.');
    }


    return (
        <>
            <div className="l-header__balloonBoxWrap">
                <ul className="l-header__function">
                    <li className="bookmark">
                        <a onClick={addFavorite}>
                            <span>즐겨찾기에 추가</span>
                        </a>
                    </li>
                    <li className="lc-help">
                        <a>
                            문의하기
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className="l-header__balloonBoxWrap" ref={wrapperRef}>
            { !isLogined ? 
                <LogoutAside 
                    ballonShow={ballonShow} 
                    isBalloonShow={isBalloonShow} 
                    loginCheck={loginCheck}
                    ballonClose={ballonClose}
                />
                : 
                <LoginAside 
                    ballonShow={ballonShow} 
                    isBalloonShow={isBalloonShow} 
                    loginCheck={loginCheck}
                    ballonClose={ballonClose}
                    loginedUser={loginedUser}
                />
            }
            {
                isBalloonShow === "wos" &&
                <div className="l-header__balloonBox--left balloonBoxOrder">
                    <WosMenu />
                </div>

            }
            </div>
        </>
    )
}

export default HeadAside;