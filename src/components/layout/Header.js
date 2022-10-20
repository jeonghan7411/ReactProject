import {
  FaSearch,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { useRef } from "react";

function Header({ cultural }) {
  return (
    <div>
      <header className="nav-header-wrap">
        <div className="logo-wrap">
          <img
            src={`${process.env.PUBLIC_URL}/public_assets/logo.png`}
            alt=""
          />
        </div>
        <div className="nav-header-center-wrap">
          <div>
            <input type="text" placeholder="검색어를 입력해주세요" />
          </div>
          <div className="nav-header-center-btn">
            <button>
              <FaSearch className="serachIcon" />
            </button>
          </div>
        </div>
        <div className="nav-header-right-wrap">
          <div>로그인</div>
          <div>
            <FaYoutube className="headerWriteIcon" />
          </div>
          <div>
            <FaInstagram className="headerWriteIcon" />
          </div>
          <div>
            <FaGithub className="headerWriteIcon" />
          </div>
          <div>
            <FaFacebook className="headerWriteIcon" />
          </div>
        </div>
      </header>
      <hr />
    </div>
  );
}

export default Header;
