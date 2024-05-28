import React from "react";
import { Link } from "react-router-dom";

export const Header = ({justify_content, display}) => {
  return (
    <>
   <header className="sticky-top top-0">
  {/* place navbar here */}
  <nav className="navbar navbar-expand-lg px-4">
    <div className="container-fluid">
      <Link className="navbar-brand text-white" to="/home">
        <img
          src="/images/Serve Biznes logo png.png"
          alt=""
          width="60px"
        />
      </Link>
      <div className="toggle-btn">
        <Link to="/signin" className="d-block d-lg-none">
          <i className="fa-solid fa-user text-light login_icon" />
        </Link>
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
      <div className={`collapse navbar-collapse ${justify_content}`} id="navbarText">
        <ul className={`order-item navbar-nav align-items-center me-auto mb-2 mb-lg-0 ${display}`} >
          <li className="nav-item">
            <Link
              className="nav-link text-light active"
              aria-current="page"
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item dropdown ">
            <Link to="#" className="nav-link">
              <button className="dropbtn">
                Services
                {/* <i className="fas fa-chevron-down" /> */}
              </button>
            </Link>
            <div className="dropdown-content">
              <Link to="/Business_Writing">
                Business Writing
              </Link>
              <Link to="ContentWriting">Content Writing</Link>
              <Link to="/AcademicWriting">
                Academic Writing
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link to="" className="nav-link">
              <button className="dropbtn">
                About Us
                {/* <i className="fas fa-chevron-down" /> */}
              </button>
            </Link>
            <div className="dropdown-content">
              <Link to="/ClassOfServe">About Serve Biznes</Link>
              <Link to="/HowItWorks">How it Works</Link>
              <Link to="/HonorCode">Honor Code</Link>
              <Link to="/sample">Sample</Link>
              <Link to="/Blogs">Blogs</Link>
              <Link to={"/FAQ's"}>FAQ's</Link>
              <Link to="/Contactus">Contact Us</Link>
            </div>
          </li>
        </ul>
        <span className="navbar-text d-none d-lg-block">
          <button className="px-3 py-2 btn btn-light border-2 ">
            <Link to="/signin">Sign In</Link>
          </button>
        </span>
      </div>
    </div>
  </nav>
</header>

    </>
  );
};
