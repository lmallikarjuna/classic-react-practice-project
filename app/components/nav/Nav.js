import React from "react";
import { NavLink } from "react-router-dom";

import { ThemeConsumer } from "../../contexts/theme";

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="nav-container">
          <ul className="nav-list-container">
            <li className="nav-list-item">
              <NavLink to="/">Popular</NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink to="/battle">Battle</NavLink>
            </li>
          </ul>
          <button
            style={{ fontSize: 30 }}
            className="btn-clear"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🔦" : "💡"}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
