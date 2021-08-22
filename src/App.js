import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactMe from "./pages/ContactMe";
import RelevantCoursework from "./pages/RelevantCoursework";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Dropdown from "./components/Dropdown";

import Resume from "./resume_haruki_gonai.pdf";

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
          <Link className="navbarLink" to="/projects">
            Projects
          </Link>
          <Link className="navbarLink" to="/experience">
            Experience
          </Link>
          <a className="navbarLink" href={Resume} target="_blank">
            Resume
          </a>
          <Link className="navbarLink" to="/relevant-coursework">
            Relevant Coursework
          </Link>
          <Link className="navbarLink" to="/contact-me">
            Contact Me
          </Link>
          <Dropdown />
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
          <Route path="/relevant-coursework">
            <RelevantCoursework />
          </Route>
          <Route path="/contact-me">
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
