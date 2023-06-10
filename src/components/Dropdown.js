import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburger } from "../assets/svgs/hamburger.svg";

import Resume from "../resume_haruki_gonai.pdf";
import TutoringResume from "../tutoring_resume_haruki_gonai.pdf";

export default function Dropdown() {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef();
  const onClick = () => setActive(!active);

  useEffect(() => {
    const onClick = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setActive(false);
      }
    };

    window.addEventListener("click", onClick);
  }, []);

  return (
    <div id="hamburgerContainer">
      <Hamburger
        id="hamburger"
        className={active && "hamburgerActive"}
        onClick={onClick}
        ref={dropdownRef}
      />
      <div id="hamburgerMenu" className={active && "hamburgerMenuActive"}>
        <Link className="hamburgerLink" to="/">
          Home
        </Link>
        <Link className="hamburgerLink" to="/projects">
          Projects
        </Link>
        <Link className="hamburgerLink" to="/experience">
          Experience
        </Link>
        <Link className="hamburgerLink" to="/ta-course-evaluations">
          TA Course Evaluations
        </Link>
        <a className="hamburgerLink" href={Resume} target="_blank">
          Resume
        </a>
        <a className="hamburgerLink" href={TutoringResume} target="_blank">
          Tutoring Resume
        </a>
        <Link className="hamburgerLink" to="/contact-me">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
