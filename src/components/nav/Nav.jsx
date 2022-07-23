import React from "react";
import "./nav.css";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        b
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        about
      </a>
      <a
        href="#experiance"
        onClick={() => setActiveNav("#experiance")}
        className={activeNav === "#experiance" ? "active" : ""}
      >
        experiance
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        services
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        contact
      </a>
    </nav>
  );
};

export default Nav;
