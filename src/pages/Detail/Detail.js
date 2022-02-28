import React from 'react';
import './Detail.scss'
import styles from '../../styles/common.module.scss'

function Detail() {
    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.logo}>WeBucks</h1>
                    <nav>
                        <ul className={styles.menu}>
                            <li>COFFEE</li>
                            <li>MENU</li>
                            <li>STORE</li>
                            <li>WHAT'S NEW</li>
                        </ul>
                    </nav>
                </header>
                <section className="sub-title">
                    <h2>콜드 브루</h2>
                    <ul>
                        <li>홈</li>
                        <li>음료</li>
                        <li>에스프레소</li>
                        <li>화이트 초콜릿 모카</li>
                    </ul>
                </section>
                <section className="contents">
                    <article className="imageBox">
                        <img src="/images/coffeeImg1.jpeg" alt="coffee" />
                    </article>
                    <aside className="details">
                        <div className="coffee-title">
                            <h2>화이트 초콜릿 모카</h2>
                            <p>White Chocolate Mocha</p>
                            <button className="heart">🤍</button>
                        </div>
                        <div className="description">
                            달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어 휘핑크림으로 마무
                            리한 음료를 달콤함과 강렬한 에스프레소가 부드럽게 어우러진 커피
                        </div>
                        <div className="product-info">
                            <div className="product-head">
                                <h3>제품 영양 정보</h3>
                                <h3>Tall(톨) / 355ml(12 fl oz)</h3>
                            </div>
                            <div className="product-content">
                                <ul>
                                    <li>
                                        <dl>
                                            <dt>1회 제공량 (kcal)</dt>
                                            <dd>345</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>포화지방 (g)</dt>
                                            <dd>11</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>단백질 (g)</dt>
                                            <dd>11</dd>
                                        </dl>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <dl>
                                            <dt>나트륨 (mg)</dt>
                                            <dd>150</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>당류 (g)</dt>
                                            <dd>35</dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>카페인 (mg)</dt>
                                            <dd>75</dd>
                                        </dl>
                                    </li>
                                </ul>
                            </div>
                            <div className="allergy">알레르기 유발 요인 : 우유</div>
                        </div>
                        <div className="review">
                            <span className="review-title">리뷰</span>
                            <div className="review-box">
                                <p><span className="userId">coffeelovers</span>너무 맛있어요!</p>
                                <p><span className="userId">choco</span>오늘도 화이트 초콜릿모카 먹으러 갑시다</p>
                                <p><span className="userId">legend_dev</span>진짜 화이트 초콜릿 모카는 전설이다.진짜 화이트 초콜릿 모카는 전설이다.진짜 화이트 초콜릿 모카는 전설이다.</p>
                            </div>
                            <section className="reivewInput-wrapper">
                                <input className="reviewInput" type="text" placeholder="리뷰를 입력해주세요!" />
                            </section>
                        </div>
                    </aside>
                </section>
            </div>
            <footer class="footer">
                <ul>
                    COMPANY
                    <li>한눈에 보기</li>
                    <li>스타벅스 사명</li>
                    <li>스타벅스 소개</li>
                    <li>국내 뉴스룸</li>
                    <li>세계의 스타벅스</li>
                    <li>글로벌뉴스룸</li>
                </ul>
                <ul>CORPORATES SALES
                    <li>단체 및 기업 구매</li>
                </ul>
                <ul>PARTNERSHIP
                    <li>신규 입점 제의</li>
                    <li>협력 고객사 등록 신청</li>
                </ul>
                <ul>ONLINE COMMUNITY
                    <li>페이스북</li>
                    <li>트위터</li>
                    <li>유튜브</li>
                    <li>블로그</li>
                    <li>인스타그램</li>
                </ul>
                <ul>RECRUIT
                    <li>채용 소개</li>
                    <li>채용 지원하기</li>
                </ul>
                <ul>WEBUCKS</ul>
            </footer>
        </>
    );
}

export default Detail;