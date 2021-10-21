import React from "react";
import "./styles/Navbar.css";
import logo from "../logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar sticky-top navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Mattix Logo" className="logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">+</span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-0 mb-lg-0">
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange("Projects")}
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange("About")}
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
