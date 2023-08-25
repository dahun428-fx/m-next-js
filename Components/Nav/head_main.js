import Link from "next/link";
import HeadSearch from "./head_search";
import HeaderAside from "./head_aside";

const HeaderMain = (props) => {
    return (
        <header>
            <div>
                <div>
                    <div className="l-headerWrap">
                        <div className="l-header">
                            <div className="l-header__main">
                                <div className="l-header__logoWrap">
                                    <div className="l-header__logo">
                                        <span>
                                        <Link href={`/`}>MISUMI | Your Time, Our Priority</Link>
                                        </span>
                                    </div>
                                    <div className="l-header__lead">
                                        <div className="lc-lead" data-component-header="lead">1,300만점, 4,000메이커 상품 라인업 재고 다량보유 정확하고 빠른 납기 실속있는 제품 가격 e카탈로그 간단검색</div>
                                    </div>
                                </div>
                                <HeadSearch />
                            </div>
                            <div className="l-header__aside">
                                <HeaderAside {...props} />
                                {/* head_navi_aside */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderMain;