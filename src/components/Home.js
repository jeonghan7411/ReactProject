import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home({ cultural }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderTotal = cultural.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === sliderTotal - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? sliderTotal - 1 : currentSlide - 1);
  };

  return (
    <>
      <div className="home-total-wrap">
        <div className="home-text-wrap">
          경상도는 지금의 경상남북도를 합하여 부르는 이름으로 '경상'이라는
          지명은 고려 때 <br />이 지방의 대표적 고을인 경주와 상주 두 고을의
          머리글자를 합하여 만든 합성 지명이다. <br />
          995년(고려 성종 14년) 9월 처음으로 전국을 10도로 나눌 때 상주에 딸린
          고을을 영남도, <br />
          금주(지금의 김해)에 딸린 고을은 영동도(嶺東道), 진주에 딸린 고을은
          산양도(山陽道)라고 하였다. <br />
          경상좌도(慶尙左道)와 경상우도(慶尙右道)는 조선시대에 경상도 지방을
          동서로 나누었을 때 <br />
          부른 행정구역 이름이다. 1407년(태종 7년) 9월 군사 행정상의 편의를
          위하여 <br />
          경상도를 좌도와 우도로 나누어 낙동강 동쪽을 경상좌도, 서쪽을
          경상우도라 하였다. <br />
          경상남도가 지금의 행정 구역 이름으로 등장하여 확정된 것은 조선조
          <br /> 말엽 1896년(고종 33년, 건양원년) 8월 4일 칙령 제36호로 지방제도
          관제 등을 <br />
          개정하여 종전 23부를 13도로 고쳐 둘 때 경상도를 남ㆍ북 2개 도로
          나누면서부터 비롯되었다.
        </div>
        <div className="home-btn-wrap">
          <div>
            <Link to="/cultural">문화재 안내</Link>
          </div>
          <div>
            <Link to="/cultural">주변 정보</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
