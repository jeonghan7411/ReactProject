import { Link } from "react-router-dom";
import "./CulturalSlider.css";

function CulturalSlider({ cultural }) {
  return (
    <>
      <div className="cultural-items">
        <div className="cultural-img-wrap">
          <img
            src={
              cultural.fileurl1 !== "" ? cultural.fileurl1 : "/img/noimg.png"
            }
            alt={cultural.title}
          />
        </div>
        <div className="cultural-title-wrap">
          <h3>
            {cultural.DOJIJUNG_NO == null ? "명칭없음" : cultural.DOJIJUNG_NO}
          </h3>
          <div className="cultural-item-title-wrap align-center">
            <div className="title-bold">명칭 :</div>
            <div>
              <Link to={`show/${cultural.MYONGCHING}`}>
                <h4>{cultural.MYONGCHING}</h4>
              </Link>
            </div>
          </div>

          <div className="cultural-item-addr-wrap align-center">
            <div className="title-bold">위치 :</div>
            <div>{cultural.ADDRESS1}</div>
          </div>

          <div className="cultural-item-sidae-wrap align-center">
            <div className="title-bold">시대 :</div>
            <div>
              {cultural.SIDAE == null ? "시대 알 수 없음" : cultural.SIDAE}
            </div>
          </div>

          <div className="cultural-item-content-wrap  ">
            <div className="title-bold">내용 :</div>
            <div>
              {cultural.CONTENT == null
                ? "내용 없음"
                : cultural.CONTENT.substring(0, 350) + "...."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CulturalSlider;
