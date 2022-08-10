import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const [className, setClassName] = useState({
    home: "navbar__contact__tab  active__navbar__link",
    about: "navbar__contact__tab ",
    products: "navbar__contact__tab ",
    services: "navbar__contact__tab ",
    application: "navbar__contact__tab ",
    career: "navbar__contact__tab ",
    contact: "navbar__contact__tab ",
  });
  useEffect(() => {
    let path = {
      home: "navbar__contact__tab ",
      about: "navbar__contact__tab ",
      products: "navbar__contact__tab ",
      services: "navbar__contact__tab ",
      application: "navbar__contact__tab ",
      career: "navbar__contact__tab ",
      contact: "navbar__contact__tab ",
    };

    if (pathname.includes("/about")) {
      path.about = "active__navbar__link navbar__contact__tab ";
    } else if (pathname.includes("/products")) {
      path.products = "active__navbar__link navbar__contact__tab ";
    } else if (pathname.includes("/services")) {
      path.services = "active__navbar__link navbar__contact__tab ";
    } else if (pathname.includes("/application")) {
      path.application = "active__navbar__link navbar__contact__tab ";
    } else if (pathname.includes("/career")) {
      path.career = "active__navbar__link navbar__contact__tab ";
    } else if (pathname.includes("/contact")) {
      path.contact = "active__navbar__link navbar__contact__tab ";
    } else {
      path.home = "active__navbar__link navbar__contact__tab ";
    }
    setClassName(path);
  }, [pathname]);

  return (
    <>
      <div className="container-fluid navbar__block navbar-light">
        <div className="container inner__navbar__block">
          <nav className="navbar navbar-expand-lg ">
            <Link className="navbar-brand " to="/"></Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link to="/" className={className.home}>
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/aboutus" className={className.about}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className={className.products}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className={className.services}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/application" className={className.application}>
                    Application
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/career" className={className.career}>
                    Career 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={className.contact}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
