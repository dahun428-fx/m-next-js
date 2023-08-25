import { execLogin, execLogout } from "@/common/function/login/login";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import LoginHeadForm from "./aside/modal/LoginHeadForm";
import LogoutAside from "./aside/logout_aside";
import LoginAside from "./aside/login_aside";

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

    return (
        <>
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
            </div>

        </>
    )
}

export default HeadAside;