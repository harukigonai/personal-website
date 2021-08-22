import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburger } from "../assets/svgs/hamburger.svg";

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
        <Link className="hamburgerLink" to="/contactMe">
          Contact Me
        </Link>
      </div>
    </div>
  );
}
