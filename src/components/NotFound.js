import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <div className="notfound-wrap">
        <div>
          <p>잘못된 접근입니다...</p>
        </div>
        <div>
          <Link to="/">홈으로</Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
