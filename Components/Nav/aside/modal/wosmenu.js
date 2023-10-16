const WosMenu = () => {

    return (
        <>
            <div className="l-header__order">
                <ul className="l-header__order__function">
                    <li><a className="m-btn--headerOrder">견적</a></li>
                    <li><a className="m-btn--headerOrder">주문</a></li>
                </ul>
            </div>
            <ul className="l-header__order__function">
                <li><a className="m-btn--headerOrderHistory">견적이력</a></li>
                <li><a className="m-btn--headerOrderHistory">주문이력</a></li>
            </ul>
            <div className="l-header__balloonBoxInner">
                <ul className="l-header__order__upload est-topBox">
                    <li>
                        <span className="lc-type">복사&붙여넣기</span>&nbsp;
                        <a>견적&nbsp;</a>|
                        <a>&nbsp;주문</a>
                    </li>
                    <li>
                        <span className="lc-type">파일 업로드</span>&nbsp;
                        <a>견적&nbsp;</a>|
                        <a>&nbsp;주문</a>
                    </li>
                </ul>
            </div>
            <div className="l-header__balloonBoxInner">
                <ul className="l-header__order__upload est-topBox">
                    <li><a>출하이력</a></li>
                </ul>
            </div>
            <div className="l-header__balloonBoxInner">
                <ul className="l-header__linkList">
                    <li><a target="_blank">형번확인</a></li>
                </ul>
            </div>
        </>
    )
}
export default WosMenu;