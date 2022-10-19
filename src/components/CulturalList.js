import { Link } from "react-router-dom";
import { FaRegSquare } from "react-icons/fa";
import CulturalItem from "./CulturalItem";
function CurturalList({ cultural }) {
  return (
    <>
      <div className="list-icon-wrap">
        <Link to="/cultural">
          <FaRegSquare className="cultural-list-view" />
        </Link>
      </div>

      <div className="cultural-list-wrap">
        {cultural.map((cultural, key) => {
          return (
            <div key={key}>
              <CulturalItem cultural={cultural} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CurturalList;
