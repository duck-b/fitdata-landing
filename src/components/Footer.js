const Footer = () => {
    return (
        <footer className="footer text-left">
            <div className="container footer_info footer_info_1st">
                <ul>
                    <li><a href="#root">회사소개</a></li>
                    <li><a href="https://spo.gg/info.html?info=terms">이용약관</a></li>
                    <li><a href="https://spo.gg/info.html?info=notice">공지사항</a></li>
                    <li><a href="https://spo.gg/info.html?info=info">개인정보취급방침</a></li>
                    <li><a href="https://spo.gg/info.html?info=help">도움말</a></li>
                    <li><a href="https://spo.gg/info.html?info=question">문의하기</a></li>
                </ul>
            </div>
            <div className="container footer_info footer_info_2nd">
                <ul>
                    <li>상호명 : (주)핏데이터</li>
                    <li>대표이사 : 김경민</li>
                    <li>소재지 : 부산광역시 해운대구 센텀동로 41 센텀벤처타운 3층 308호 스포지지</li>
                    <li>사업자등록번호 : 889-87-01970</li>
                    <li>통신판매번호 : 2020-부산해운대-1311</li>
                    <li>Tel : 010-2239-6702</li>
                    <li>E-mail : info@spo.gg</li>
                </ul>
            </div>
            <div className="container">
                <p className="text-muted small mb-0">&copy; 2020. FITDATA Inc. All Rights Reserved.</p>
            </div>
        </footer>
    );
  };
  
  export default Footer;