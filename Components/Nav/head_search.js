const HeadSearch = () => {
    return (
        <>
            <div className="l-header__searchWrap">
                <nav className="l-header__maganav">
                    <div className="l-meganav" data-cts="meganav">
                    <h2 className="lc-h2">카테고리 / 브랜드</h2>
                    <div className="l-meganav__body">
                        <div className="l-meganav__search">
                        <h3 className="lc-h3">전체 메뉴 보기</h3>
                        <div className="l-meganav__category" data-cts="meganav-balloon">
                            <ul>
                            {/* <!--#include virtual="/vona2/megaNavi.html" --> */}
                            </ul>
                        </div>
                        </div>
                        {/* <!-- 신규배너 추가 start // 201808 EY.PARK --> */}
                        <div className="new-maganav_banner">
                        <ul>
                            <li>
                            {/* <a href="/vona2/maker/" style="width:248px;height:58px;background-image:url('/operation/top/include/img/meganavi_banner/brand_banner.jpg');">브랜드 전체보기</a> */}
                            </li>
                            {/* <li style="background-repeat:repeat;background-image:url('/operation/top/include/img/meganavi_banner/mro_banner_bg_20200707.png');"> */}
                            {/* <a href="/economy/?bid=bid_pdct_kr_m-mech_KR210068_55166" style="width: 248px; height: 184px; background-image: url('/operation/top/include/img/meganavi_banner/mro_banner_20200707.png');">미스미 경제형 가격 절감 최대 70%</a> */}
                            {/* </li> */}
                        </ul>
                        </div>
                        {/* <!-- 신규배너 추가 end --> */}
                    </div>
                    </div>
                    {/* <!-- /meganav --> */}
                </nav>
                <div className="l-header__search">
                    <div className="l-header__searchForm" data-keyword-suggest="wrap">

                    <input id="keyword_input" className="lc-input" name="keyword_placeholder" type="text"  placeholder="" maxLength="200" autoComplete="off" data-ad-link=""/>
                    <div className="lc-btnSubmitWrap">
                        <div id="keyword_btn">
                        <input id="keyword_go" className="lc-btn" type="submit" />
                        <input id="typecode_go" className="lc-btn" type="submit" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default HeadSearch;