import React from 'react';
import './List.css'
import '../../styles/common.css'

function List() {
    return (
        <>
        <div className="container">
        <header>
            <h1 className="logo">WeBucks</h1>
            <nav>
                <ul className="menu">
                    <li>COFFEE</li>
                    <li>MENU</li>
                    <li>STORE</li>
                    <li>WHAT'S NEW</li>
                </ul>
            </nav>
        </header>
        <main>
            <section className="section1">
                <article className="title-box">
                    <h2>콜드 브루 커피</h2>
                    <span>☕️</span>
                    <p>디카페인 에스포레소 샷 추가 가능 (일부 음료 제외)</p>
                </article>
                <article className="coffee-contents">
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee1" src="/images/coffeeImg1.jpeg" />
                        </div>
                        <p className="coffee-name">나이트로 바닐라 크림 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee"src="/images/coffeeImg2.jpeg" />
                        </div>
                        <p className="coffee-name">돌체 콜드 브루 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="/images/coffeeImg3.jpeg" />
                        </div>
                        <p className="coffee-name">바닐라 크림 콜드 브루 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="/images/coffeeImg4.jpeg" />
                        </div>
                        <p className="coffee-name">벨벳 다크 모카 나이트로 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee5" src="/images/coffeeImg5.jpeg" />
                        </div>
                        <p className="coffee-name">시그니처 더 블랙 콜드 브루 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="/images/coffeeImg6.jpeg" />
                        </div>
                        <p className="coffee-name">제주 비자림 콜드 브루 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="/images/coffeeImg7.jpeg" />
                        </div>
                        <p className="coffee-name">콜드 브루 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="/images/coffeeImg8.jpeg" />
                        </div>
                        <p className="coffee-name">콜드 브루 몰트 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="/images/coffeeImg9.jpeg"  />
                        </div>
                        <p className="coffee-name">콜드 브루 오트 라떼 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="/images/coffeeImg10.jpeg" />
                        </div>
                        <p className="coffee-name">나이트로 콜드 브루 ♡</p>
                    </div>
                </article>
            </section>
            <section className="section1">
                <div className="title-box">
                    <h2>브루드 커피</h2>
                    <span>☕️</span>
                    <p>디카페인 에스포레소 샷 추가 가능 (일부 음료 제외)</p>
                </div>
                <div className="coffee-contents">
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee1" src="/images/IcedCoffee1.jpeg" />
                        </div>
                        <p className="coffee-name">아이스 커피 ♡</p>
                    </div>
                    <div className="coffee-item">
                        <div className="coffee-imgbox">
                            <img alt="coffee" src="/images/IcedCoffee2.jpeg"  />
                        </div>
                        <p className="coffee-name">오늘의 커피 ♡</p>
                    </div>
                </div>
            </section>
        </main>
    </div>   
        </>
    );
}

export default List;