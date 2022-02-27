/*global google*/
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import mapIcon from "./../assets/icon/mapIcon.png";
import mail_filled from "./../assets/icon/mail_filled.svg";
import phone_filled from "./../assets/icon/phone_filled.svg";
import pin from "./../assets/icon/pin.png";

import wicon__footer__logo from "./../assets/logo/wicon__footer__logo.png";
import "./Footer.css";
import calltoMap from "../Functions/calltoMap";
function Footer() {
  const mapRef = useRef();

  //   function initMap() {
  //   // The location of Uluru
  //   const uluru = { lat: -25.344, lng: 131.036 };
  //   // The map, centered at Uluru
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //     zoom: 4,
  //     center: uluru,
  //   });
  //   // The marker, positioned at Uluru
  //   const marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map,
  //   });
  // }
  // initMap()

  useEffect(() => {
    // const locations = [{ coordinates: [-118.348256, 34.025482] }];

    calltoMap();
    // console.log("top");
    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container_fluid footer__contact__block">
        <div className="inner__footer__contact__block">
          <div className="container footer__contact__title__block">
            <p className="footer__contact__title">
              Looking for the best automation solution for your company?
            </p>
            <Link className="footer__contact__button" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container location__block">
          <div className="row inner__location__block">
            <div className="col-md-5 col-sm-12 address__block">
              <div className="address__title__block">
                <img src={mapIcon} alt="mapIcon" />
                <p className="address__title">Wicon Electronics</p>
              </div>
              <p className="full__address__text">
                K-5, Road no. 5, Diamond Industrial Park,
                <br /> Near Sachin SEZ,
                <br />
                Behind Sachin GIDC, Sachin
                <br /> Surat, Gujarat - 394230
              </p>
              <p className="footer__contact__tab">
                <img
                  className="footer__tab__icon"
                  src={mail_filled}
                  alt="mail"
                />
                <a href="mailto:sales1@wicon.in">sales@wicon.in </a>
              </p>
              <p className="footer__contact__tab">
                <img
                  className="footer__tab__icon"
                  src={phone_filled}
                  alt="phone"
                />
                <a href="tel:9898603537">+91 9898603537</a>
              </p>
              <p className="footer__contact__tab">
                <img
                  className="footer__tab__icon"
                  src={phone_filled}
                  alt="phone"
                />
                <a href="tel:9898379703">+91 9898379703</a>
              </p>
            </div>
            <div
              ref={mapRef}
              id="map"
              className="col-md-7 col-sm-12 map__Container map__block"
            ></div>
            {/* <Map
              google={google}
              containerStyle={{
                position: "static",
                width: "100%",
                height: "100%",
              }}
              style={{
                width: "100%",
                height: "100%",
              }}
              center={locations[0]}
              initialCenter={locations[0]}
              zoom={locations.length === 1 ? 18 : 13}
              disableDefaultUI={true}
            >
              {locations.map((coords) => (
                <Marker position={coords} />
              ))}
            </Map> */}
          </div>
        </div>
      </div>
      {/* <div
        ref={mapRef2}
        id="map"
        className=" map__Container map__block"
      ></div> */}
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
