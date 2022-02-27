/*global google*/
import React from "react";
import { Link } from "react-router-dom";


import wicon__footer__logo from "./../assets/logo/wicon__footer__logo.png";
import "./MiniFooter.css";
function Footer() {


  return (
    <>
      <div className="container-fluid footer__block">
        <div className="container inner__footer__block">
          <div className="footer__left__side">
            <img className="footer__logo" src={wicon__footer__logo} alt="" />
            <div className="footer__link__block">
              <Link to="/" className="footer__link">
                Home
              </Link>
              <Link to="/aboutus" className="footer__link">
                About Us
              </Link>
              <Link to="/products" className="footer__link">
                Products
              </Link>
              <Link to="/services" className="footer__link">
                Services
              </Link>
              <Link to="/application" className="footer__link">
                Application
              </Link>
              <Link to="/career" className="footer__link">
                Career
              </Link>
              <Link to="/contact" className="footer__link">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="footer__right__side">
            <p className="footer__contact__link">
              <a href="mailto:sales1@wicon.in">sales@wicon.in </a>
            </p>
            <p className="footer__contact__link">
              <a href="tel:9898603537">+91 9898603537</a>
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container copyright__block">
          <p className="empty__copyright__text"></p>
          <p className="copright__text">
            &copy; Copyright 2021 Wicon Electronics. All Rights Reserved.
            Developed By @Bhavik Bavishi{" "}
          </p>
        </div>
      </div>
    </>
  );
}
export default Footer;
