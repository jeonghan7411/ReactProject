import { Link } from "react-router-dom";
import { FaListUl, FaRegSquare } from "react-icons/fa";
import "./LinkIcon.css";

function LinkIcon() {
  return (
    <>
      <div className="icon-link-wrap">
        <div className="list-icon-wrap">
          <Link to="/cultural/list">
            <FaListUl className="cultural-list-view" />
          </Link>
        </div>
        <div className="list-icon-wrap">
          <Link to="/cultural">
            <FaRegSquare className="cultural-list-view" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default LinkIcon;
