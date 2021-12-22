import React from 'react';
import Cookies from 'react-cookie';
//import Navigation from './components/Navigation';
//import Header from './components/Header';
//import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  window.onload = function(){
    window.open('img/popup_datavoucher.png', '_blank', 'height=600, width=600');
    window.open('img/popup_mydata.png', '_blank', 'height=700, width=500, left=600');
  }
  return (
    <div className="App">
        {/*
        <a 
          className="menu-toggle rounded"
          href="#"
        >
          <i className="fas fa-bars"></i>
        </a>
        <Navigation />
        */}
        {/**<Header />
        <About />
        <Portfolio />
        **/}
        {/* Header */}
        <header className="masthead d-flex">
          <div className="container text-center my-auto">
            <h1 className="mb-1">FITDATA</h1>
            <h3 className="mb-5 fit-title">
              아마추어를 위한 스포츠 에이전트
            </h3>
            {/* <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a> */}
          </div>
          <div className="overlay"></div>
        </header>

        {/* About */}
        <section className="content-section" id="about">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h2>전담 에이전시를 통해 경기에만 집중하세요!</h2>
                <p className="lead mb-5">잠재능력을 파악해 선수 가치를 높여드립니다.</p>
                <a className="btn btn-fit btn-xl js-scroll-trigger" href="#services">제공서비스</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="content-section section-fit text-white text-center" id="services">
          <div className="container">
            <div className="content-section-heading">
              <h3 className="text-secondary mb-0">제공서비스</h3>
              <h2 className="mb-5">에이전시 업무</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  {/* <i className="icon-screen-smartphone"></i> */}
                  <img className="icon-img" src="img/icon_1.png"/>
                </span>
                <h4>
                  <strong>통산 커리어</strong>
                </h4>
                <p className="text-faded mb-0">이름검색을 통한 기록 찾기</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  {/* <i className="icon-pencil"></i> */}
                  <img className="icon-img" src="img/icon_2.png"/>
                </span>
                <h4>
                  <strong>스카우팅 리포트</strong>
                </h4>
                <p className="text-faded mb-0">세이버메트릭스기반의 개인 페이지 제공</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  {/* <i className="icon-like"></i> */}
                  <img className="icon-img" src="img/icon_3.png"/>
                </span>
                <h4>
                  <strong>성적향상</strong>
                </h4>
                <p className="text-faded mb-0">AI가 추천하는 훈련 솔루션 제공</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  {/* <i className="icon-mustache"></i> */}
                  <img className="icon-img" src="img/icon_4.png"/>
                </span>
                <h4>
                  <strong>밴드형 홈페이지</strong>
                </h4>
                <p className="text-faded mb-0">익숙한 UI를 통한 팀 관리</p>
              </div>
            </div>
          </div>
        </section>

        {/* Callout */}
        <section className="callout">
          <div className="container text-center">
            <h2 className="mx-auto mb-5 middle-text">선수가치를 올려보세요</h2>
            {/* <a className="btn btn-primary btn-xl" href="https://startbootstrap.com/theme/stylish-portfolio/">Download Now!</a> */}
          </div>
        </section>

        {/* Portfolio */}
        <section className="content-section" id="portfolio">
          <div className="container">
            <div className="content-section-heading text-center">
              <h3 className="text-secondary mb-0">스포지지</h3>
              <h2 className="mb-5">체험하기</h2>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6">
                <a className="portfolio-item" href="https://spo.gg">
                  <div className="caption">
                    <div className="caption-content">
                      <div className="h2">스포지지</div>
                      <p className="mb-0">이름검색을 통한 기록찾기</p>
                    </div>
                  </div>
                  <img className="img-fluid img-service" src="img/service_1.png" alt="" />
                </a>
              </div>
              <div className="col-lg-6">
                <a className="portfolio-item" href="https://spo.gg/report_landing.html">
                  <div className="caption">
                    <div className="caption-content">
                      <div className="h2">스카우팅리포트</div>
                      <p className="mb-0">내 통산, 방어율은 얼마일까?</p>
                    </div>
                  </div>
                  <img className="img-fluid img-service" src="img/service_2.png" alt="" />
                </a>
              </div>
              <div className="col-lg-6">
                <a className="portfolio-item" href="https://m.spo.gg">
                  <div className="caption">
                    <div className="caption-content">
                      <div className="h2">소속팀</div>
                      <p className="mb-0">우리팀은 어떤 특성일까?</p>
                    </div>
                  </div>
                  <img className="img-fluid img-service" src="img/service_3.png" alt="" />
                </a>
              </div>
              <div className="col-lg-6">
                <a className="portfolio-item" href="https://spo.gg/league.html">
                  <div className="caption">
                    <div className="caption-content">
                      <div className="h2">참가리그</div>
                      <p className="mb-0">우리가 뛰고 있는 리그는 몇 등?</p>
                    </div>
                  </div>
                  <img className="img-fluid img-service" src="img/service_4.png" alt="" />
                </a>
              </div>
            </div>
          </div>
      </section>

      {/* Call To Action */}
      <section className="content-section bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">무료 에이전시 고용</h2>
          <a href="https://spo.gg/login.html" className="btn btn-xl btn-light mr-4 btn-fit-login" >로그인</a>
          <a href="https://spo.gg/join_agree.html" className="btn btn-xl btn-dark btn-fit-login">회원가입</a>
        </div>
      </section>

      {/* Map */}
      {/*<div id="contact" className="map">
        <iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"></iframe>
        <br />
        <small>
          <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
        </small>
      </div>*/}
      <Footer />
      <a className="scroll-to-top rounded js-scroll-trigger" href="#root">
        <i className="fas fa-angle-up"></i>
      </a>
    </div>
  );
}

export default App;
