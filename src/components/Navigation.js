import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link className="btn" to="/">Home</Link>
      <Link className="btn" to="/about">About</Link>
    </div>
  );
}

export default Navigation;
