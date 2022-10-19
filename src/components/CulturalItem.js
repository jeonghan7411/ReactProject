import { Link, Outlet } from "react-router-dom";

function CurturalItem({ cultural }) {
  return (
    <>
      <div className="cultural-list-items">
        <div className="cultural-list-img-wrap">
          <img
            src={
              cultural.fileurl1 !== "" ? cultural.fileurl1 : "/img/noimg.png"
            }
            alt={cultural.title}
          />
        </div>
        <div className="">
          <h3>
            {cultural.DOJIJUNG_NO == null ? "명칭없음" : cultural.DOJIJUNG_NO}
          </h3>
          <div className="">
            <div className="title-bold">명칭 :</div>
            <div>
              <Link to={`show/${cultural.MYONGCHING}`}>
                <h4>{cultural.MYONGCHING}</h4>
              </Link>
            </div>
          </div>

          <div className="">
            <div className="title-bold">위치 :</div>
            <div>{cultural.ADDRESS1}</div>
          </div>

          <div className="">
            <div className="title-bold">시대 :</div>
            <div>
              {cultural.SIDAE == null ? "시대 알 수 없음" : cultural.SIDAE}
            </div>
          </div>

          <div className="  ">
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

export default CurturalItem;
