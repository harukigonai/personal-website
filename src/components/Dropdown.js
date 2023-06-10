import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburger } from "../assets/svgs/hamburger.svg";

import Resume from "../resume_haruki_gonai.pdf";

import course_eval_1 from "../course_evals/COMS_W3203_Discrete_Mathematics_Fall_2022.pdf";
import course_eval_2 from "../course_evals/COMS_W3251_Computational_Linear_Algebra_Fall_2021.pdf";
import course_eval_3 from "../course_evals/COMS_W3251_Computational_Linear_Algebra_Spring_2022.pdf";
import course_eval_4 from "../course_evals/COMS_W3251_Computational_Linear_Algebra_Spring_2023.pdf";
import course_eval_5 from "../course_evals/COMS_W4118_Operating_Systems_I_Fall_2022.pdf";
import course_eval_6 from "../course_evals/COMS_W4701_Artificial_Intelligence_Spring_2023.pdf";


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
        <Link className="hamburgerLink" to="/contact-me">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
