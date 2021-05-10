import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import NotesContainer from "./pages/myNotes/NotesContainer";
import styles from "./styles.module.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <nav className={styles.mainNav}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <Link to="/" className={styles.menuLink}>
                Home
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/notes" className={styles.menuLink}>
                Notes
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/notes" component={NotesContainer} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
