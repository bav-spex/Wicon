import React from "react";
import "./TopNavbar.css";
import wicon_white_logo from "./../assets/logo/wicon_white_red_170.png";
import mailIcon from "./../assets/icon/mail.svg";
import phoneIcon from "./../assets/icon/phone.svg";
import { Link } from "react-router-dom";
function TopNavbar() {
  return (
    <>
      <div className="container-fluid main__top__navbar">
        <div className="container top__navbar">
          <Link to="/">
            <img src={wicon_white_logo} alt="wicon_white_logo" />
          </Link>
          <div className="topnavbar__contact__tab__block">
            <Link to="/contact">
              <p className="topnavbar__contact__tab topnavbar__tab__text">Have any questions?</p>
            </Link>
            <p className="topnavbar__contact__tab">
              <img className="topnavbar__tab__icon" src={mailIcon} alt="mail" />
              <a className="topnavbar__tab__text" href="mailto:sales@wicon.in">sales@wicon.in </a>
            </p>
            <p className="topnavbar__contact__tab">
              <img
                className="topnavbar__tab__icon"
                src={phoneIcon}
                alt="phone"
              />
              <a className="topnavbar__tab__text" href="tel:9898603537">+91 9898603537</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;
