import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const activeStyle = {
    color: "red",
    fontWeight: "bold",
  };

  const nonActiveStyle = {
    color: "black",
  };
  return (
    <div>
      <div className="nav-wrap">
        <div>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
            end
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/cultural"
            style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
            end
          >
            문화재
          </NavLink>
        </div>

        <div>
          <NavLink
            to="/surround"
            style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
            end
          >
            주변정보
          </NavLink>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default NavBar;
