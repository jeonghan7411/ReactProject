import { NavLink } from "react-router-dom";

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
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/cultural"
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
          end
        >
          문화재
        </NavLink>

        <NavLink
          to="/sadsa"
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
          end
        >
          참여/소식
        </NavLink>

        <NavLink
          to="/sads"
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
          end
        >
          기관소개
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
