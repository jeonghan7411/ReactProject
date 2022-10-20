import { useParams } from "react-router-dom";
import LinkIcon from "./layout/LinkIcon";

function CulturalShow({ cultural }) {
  const { id } = useParams();
  return (
    <>
      {cultural.map((cultural, key) => {
        if (cultural.MYONGCHING === id) {
          return (
            <div key={key}>
              <LinkIcon />
              <div className="cultural-show-item-wrap">
                <div className="show-title-wrap">
                  <div>
                    <h2>{cultural.DOJIJUNG_NO}</h2>
                  </div>
                  <div>
                    <h1>{cultural.MYONGCHING}</h1>
                  </div>
                  <hr />
                  <div className="title-hanmun">
                    ({cultural.MYONGCHING_HANMUN})
                  </div>
                </div>

                <div className="show-img-wrap">
                  <div className="show-img">
                    <img
                      src={
                        cultural.fileurl1 !== ""
                          ? cultural.fileurl1
                          : "/img/noimg.png"
                      }
                      alt={cultural.MYONGCHING}
                    />
                  </div>
                  <div className="show-img">
                    <img
                      src={
                        cultural.fileurl2 !== ""
                          ? cultural.fileurl2
                          : "/img/noimg.png"
                      }
                      alt={cultural.MYONGCHING}
                    />
                  </div>
                  <div className="show-img">
                    <img
                      src={
                        cultural.fileurl3 !== ""
                          ? cultural.fileurl3
                          : "/img/noimg.png"
                      }
                      alt={cultural.MYONGCHING}
                    />
                  </div>
                </div>

                <div className="show-content-wrap">
                  <hr />
                  <div>
                    <span className="show-content-title">주소 : </span>
                    <span className="show-content-addr">
                      {cultural.ADDRESS1}
                    </span>
                  </div>

                  <div>
                    <span className="show-content-title">면적 : </span>
                    <span className="show-content-myonjuk">
                      {cultural.MYONJUK}
                    </span>
                  </div>

                  <div>
                    <span className="show-content-title">시대 : </span>
                    <span className="show-content-sidae">{cultural.SIDAE}</span>
                  </div>

                  <div>
                    <span className="show-content-title">소유지 : </span>
                    <span className="show-content-soyouja">
                      {cultural.SOYOUJA_NAME}
                    </span>
                  </div>

                  <div>
                    <span className="show-content-title">내용 : </span>
                    <span className="show-content-content">
                      {cultural.CONTENT}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default CulturalShow;
