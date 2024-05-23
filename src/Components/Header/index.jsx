import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
   <header className="sticky-top top-0">
  {/* place navbar here */}
  <nav className="navbar navbar-expand-lg px-4">
    <div className="container-fluid">
      <a className="navbar-brand text-white" href="/">
        <img
          src="/images/Serve Biznes logo png.png"
          alt=""
          width="60px"
        />
      </a>
      <div className="toggle-btn">
        <a href="login.html" className="d-block d-lg-none">
          <i className="fa-solid fa-user text-light login_icon" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="order-item navbar-nav align-items-center me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a
              className="nav-link text-light active"
              aria-current="page"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="nav-item dropdown ">
            <a href="#" className="nav-link">
              <button className="dropbtn">
                Services
                {/* <i className="fas fa-chevron-down" /> */}
              </button>
            </a>
            <div className="dropdown-content">
              <a href="/BusinessWriting">
                Business Writing
              </a>
              <a href="ContentWriting">Content Writing</a>
              <a href="/AcademicWriting">
                Academic Writing
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="" className="nav-link">
              <button className="dropbtn">
                About Us
                {/* <i className="fas fa-chevron-down" /> */}
              </button>
            </a>
            <div className="dropdown-content">
              <a href="/ClassOfServe">About Serve Biznes</a>
              <a href="/HowItWorks">How it Works</a>
              <a href="/HonorCode">Honor Code</a>
              <a href="/Blogs">Blogs</a>
              <Link to={"/FAQ's"}>FAQ's</Link>
              <a href="/Contactus">Contact Us</a>
            </div>
          </li>
        </ul>
        <span className="navbar-text d-none d-lg-block">
          <button className="px-3 py-2 btn btn-light border-2">
            <a href="/signin">Sign In</a>
          </button>
        </span>
      </div>
    </div>
  </nav>
</header>

    </>
  );
};
