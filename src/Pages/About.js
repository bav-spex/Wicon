import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'

import axios from "axios";

import Navbar from "../Components/Navbar";
import TopNavbar from "../Components/TopNavbar";
import "./About.css";

import about_us_banner from "./../assets/Banner/About_us_banner.jpg";
import AboutUsCard from "../Components/AboutUsCard";
import Certificate from "../Components/Certificate";

// Importing Partner Images
import partner_01 from "./../assets/Aboutuspage/Partner_01.png";
import partner_02 from "./../assets/Aboutuspage/Partner_02.png";
import partner_03 from "./../assets/Aboutuspage/Partner_03.png";
import Footer from "../Components/Footer";

function About() {
  const { pathname } = useLocation()

  const [bannerData, setBannerData] = useState([]);
  const [aboutusData, setAboutusData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAbout = async (id) => {
    await axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/bannerList`,
        { banner_name: "about_us" },
        {
          headers: {
            "api-key": "Wicon@123",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setBannerData(res.data.data);
      })
      .catch((error) => {
        // console.log(error.response);
      });

    await axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/manufacturingFacilityList`,
        { manufacturing_facility_id: id },
        {
          headers: {
            "api-key": "Wicon@123",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setAboutusData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });

    window.scrollTo(0, 0);
    setLoading(false);
  };

  useEffect(() => {
    getAbout(0);
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, loading]);

  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="container_fluid">
        <div className="page__banner__block">
          <img className="page__banner" src={bannerData.banner_image} alt="" />
        </div>
      </div>

      <div className="container-fluid section">
        <div className="container page__section">
          <p className="page__section__title">About Us</p>
          <div className="row">
            <div className="col-lg-6 about__us__left__block">
              <p className="about__us__text">
                Wicon Electronics is founded in 2014 to bring the benefits of
                process automation to customers. Wicon Electronics is one stop
                solution provider for all Automation solution need of customers.
                We are determined to use leading edge technology, years of
                experience and knowledge in providing innovative solutions
                delivering high return on investment. We take pride in finding
                optimal solutions right at the first time to fulfill customer
                needs, suit customer budget and add value to operations and
                services.
              </p>
              <p className="about__us__text">
                We strive to add value to our clients business through all these
                factors on a sustained basis. Our focused produce management
                team-work in unison with our principals to support our sales
                teams in their endeavor to offer our clients an un-paralleled
                level of service over the years.
              </p>
            </div>
            <div className="col-lg-6 about__us__right__block">
              <p className="about__us__text">
                Wicon Electronics has emerged as a one stop automation provider
                to OEM's and end users for all industrial automation
                applications and to provide complete range of products .We have
                progressively expanded our product portfolio without diluting
                the technical focus in each category.
              </p>
              <p className="about__us__text">
                We are deal in Rockwell, Siemens and Schneider automation
                Product. Our close working relationships with them enable us to
                be at the forefront of developments in automation technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section">
        <div className="container">
          <p className="page__section__title">Manufacturing Facility</p>
          <div className="row">
            <div className="col-lg-6 about__us__left__block">
              <p className="about__us__text">
                Our in-house control panel manufacturing capabilities help us
                provide complete solution to clients. Through our 10000 sq. ft
                manufacturing facility that is operated by skilled technicians
                and wiremen , we are able to take better control of the overall
                process as well as ensure quality of the final product.
              </p>
            </div>
            <div className="col-lg-6 about__us__right__block">
              <p className="about__us__text">
                We have been successfully helping our clients to save their time
                as the need for coordinating with manufacturers and integrators
                is liminated. As all functions of control panel manufacturing
                are in house we reduce the overall turnaround time for delivery
                without compromising on the quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid section about__us__mfg__facility__block">
        <div className="container">
          <div className="mfg__facility__block">
            {!loading &&
              aboutusData.slice(0, 3).map((about) => {
                return <AboutUsCard key={about.id} manufacturer={about} />;
              })}
          </div>
        </div>
      </div>

      <div className="container-fluid section facility__block">
        <div className="container inner__facility__block">
          <div className="first__facility__block">
            <div className="facility">
              In-house FAT area (Complete simulation before dispatch)
            </div>
            <div className="facility">
              Conforming to IEC standard for panel building
            </div>
          </div>
          <div className="first__facility__block">
            <div className="facility">
              Manufaturing capability of large process panels, MCC, PCC, APFC,
              FLP, JB, PLC and RIO panels, VFD and Starter Panels, Instrument
              Mimic
            </div>
          </div>
          <div className="first__facility__block">
            <div className="facility">In-house control panel manufacturing</div>
            <div className="facility">Calibrated test equipment</div>
          </div>
        </div>
      </div>

      <div className="section about__us__certificate__block">
        <Certificate />
      </div>

      <div className="container-fluid section partner__block">
        <div className="container inner__partner__block">
          <p className="section__title">Our Partners</p>
          <div className="row partner__flex__block">
            <div className="col-lg-4 col-sm-4 col-4 partner__block">
              <img className="partner__image" src={partner_01} alt="" />
            </div>
            <div className="col-lg-4 col-sm-4 col-4 partner__block">
              <img className="partner__image" src={partner_02} alt="" />
            </div>
            <div className="col-lg-4 col-sm-4 col-4 partner__block">
              <img className="partner__image" src={partner_03} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
