import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Battle from "./components/battle/Battle";
import PopularRepos from "./components/popular/PopularRepos";
import { ThemeProvider } from "./contexts/theme";
import Nav from "./components/nav/Nav";
import BattleResults from "./components/battle/BattleResult";

export default () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={theme}>
          <Nav toggleTheme={toggleTheme} />
          <Switch>
            <Route exact path="/" component={PopularRepos} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={BattleResults} />
            <Route render={() => <h1>Page Not found 404</h1>} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
};

