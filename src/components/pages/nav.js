import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logout.png";
import "../css/nav.css";

function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ height: "100%" }}
      >
        <Link to="/Home" className="garamond-text logo">
          Taalib
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link active garamond-text">
              <div className="garamond-text">
                <h4>Logout</h4>
                <img src={logo} alt="Logout" className="logout-image" />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
