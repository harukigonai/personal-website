import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";
import "./fonts.css";

function App() {
  return (
    <Router basename="/personal-website">
      <div id="navbar">
        <Link id="harukiGonai" to="/">
          harukiGonai
        </Link>
        <div id="navbarLinks">
          <Link className="navbarLink" to="/">
            Home
          </Link>
          <Link className="navbarLink" to="/">
            Projects
          </Link>
          <Link className="navbarLink" to="/">
            Contact Me
          </Link>
        </div>
      </div>

      <div id="contentWrapper">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contactMe">
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
