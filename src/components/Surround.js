import { MdFoodBank, MdDirectionsTransitFilled, MdHouse } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import "./Surround.css";

function Surround() {
  return (
    <>
      <div className="surround-wrap">
        <div className="surround-top-wrap">
          <div className="srd-top-icon-wrap">
            <Link to="/surround">
              <MdFoodBank className="srd-top-icon food" />
            </Link>
            <span>식당</span>
          </div>

          <div className="srd-top-icon-wrap">
            <Link to="trans">
              <MdDirectionsTransitFilled className="srd-top-icon trans" />
            </Link>
            <span>교통</span>
          </div>

          <div className="srd-top-icon-wrap">
            <Link to="house">
              <MdHouse className="srd-top-icon house" />
            </Link>
            <span>숙소</span>
          </div>
        </div>
        <hr className="srdHr" />
        <Outlet />
      </div>
    </>
  );
}

export default Surround;
