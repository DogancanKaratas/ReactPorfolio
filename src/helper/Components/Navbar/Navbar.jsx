import { NavLink } from "react-router-dom";
import "./Navbar.scss";

import React from "react";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Project</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navbar;
