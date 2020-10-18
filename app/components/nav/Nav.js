import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import ThemeContext from "../../contexts/theme";

export default ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  return (
    <nav className="nav-container">
      <ul className="nav-list-container">
        <li className="nav-list-item">
          <NavLink
            exact
            activeStyle={{ color: "#04d9ff", fontWeight: 700 }}
            to="/"
          >
            Popular
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            to="/battle"
            activeStyle={{ color: "#04d9ff", fontWeight: 700 }}
          >
            Battle
          </NavLink>
        </li>
      </ul>
      <button
        style={{ fontSize: 30, backgroundColor: "#04d9ff", border: "none" }}
        className="toggle-btn"
        onClick={toggleTheme}
      >
        {theme === "light" ? "🔦" : "💡"}
      </button>
    </nav>
  );
};
