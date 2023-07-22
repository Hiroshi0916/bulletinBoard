import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <div className="navbar">
    {" "}
    {/* CSS classを適用 */}
    <Link to="/" className="large-text">
      掲示板
    </Link>
    <Link to="/thread/new" className="small-text">
      スレッドを立てる
    </Link>
  </div>
);

export default NavBar;
