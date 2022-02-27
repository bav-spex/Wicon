import React, { useState,useEffect } from "react";
import axios from "axios";

import "./Services.css";
import TopNavbar from "../Components/TopNavbar";
import Navbar from "../Components/Navbar";

import Service_page_banner from "./../assets/Banner/Service_page_banner.jpg";

//Importing Services Images
import service__01 from "./../assets/icon/service__01.png";
import service__02 from "./../assets/icon/service__02.png";
import service__03 from "./../assets/icon/service__03.png";
import service__04 from "./../assets/icon/service__04.png";
import service__05 from "./../assets/icon/service__05.png";
import service__06 from "./../assets/icon/service__06.png";
import service__07 from "./../assets/icon/service__07.png";
import Footer from "../Components/Footer";

function Services() {


  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const getService = async (id) => {
    await axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/bannerList`,
        { banner_name: "services" },
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
        console.log(error.response);
      });

         
      window.scrollTo(0, 0);
      setLoading(false);
    
  };

  useEffect(() => {
    getService(0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loading]);
  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="container_fluid">
        <div className="product__page__banner__block">
          <img className="page__banner" src={bannerData.banner_image} alt="" />
        </div>
      </div>

      <div className="container-fluid section">
        <div className="container page__section">
          <p className="page__section__title">Services</p>
        </div>
      </div>

      <div className="container-fluid section service__block">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-sm-12 col-12 ">
              <img className="service__card__image" src={service__01} alt="" />
              <p className="service__card__title">Design and Engineering</p>
              <p className="service__card__description">
                We have expertise in control system designing across industries.
                Our team works with you to understand your process and create a
                design specific to the need. Our control system design expertise
                can help you to reduce costs, optimise IO counts, minimise
                training costs to plant operators. Our system designs are in
                line with the most preferred technology currently applicable to
                the industry.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
              <img className="service__card__image" src={service__02} alt="" />
              <p className="service__card__title">SCADA Software Development</p>
              <p className="service__card__description">
                Our design expertise spans the spectrum, including electrical,
                instrumentation, mechatronics, PLC, HMI and SCADA
                implementations, I/O point configuration, advanced process
                control, and control and business networks. We ensure that our
                team follows good engineering practices during all phases of
                development. We maintain proper revision control and software
                changes with complete backups for customer data.
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 col-sm-12 col-12 ">
              <img className="service__card__image" src={service__03} alt="" />
              <p className="service__card__title">
                Online Installation and Commissioning
              </p>
              <p className="service__card__description">
                Our specialize skilled Service Engineers perform a wide range of
                work, from basic commissioning to attending after hours,
                emergency breakdowns.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
              <img className="service__card__image" src={service__04} alt="" />
              <p className="service__card__title">
                PLC Programming and HMI Development
              </p>
              <p className="service__card__description">
                Our team is well trained and updated on the latest trends and
                developments in PLC Programming and HMI design.
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 col-sm-12 col-12 ">
              <img className="service__card__image" src={service__05} alt="" />
              <p className="service__card__title">
                Onsite Troubleshooting and support
              </p>
              <p className="service__card__description">
                In Emergency Breakdown our Specialize Team can take Machine or
                system online through our special online software’s like Remote
                Server, Team viewer Etc. to reduce time of Breakdown. Our field
                service engineers are available to you in various capacities
                such as in man days and on project base helping you meet your
                goals. We have well trained engineers in different domains such
                as Machine, Motion, Process etc.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 col-12">
              <img className="service__card__image" src={service__06} alt="" />
              <p className="service__card__title">Maintenance Support</p>
              <p className="service__card__description">
                Our annual contracts include scheduled inspections to maintain
                your equipment at peak efficiency. While Wicon is always on-call
                in the event of an emergency, we have trained engineers to take
                care of any such event.
              </p>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 col-sm-12 col-12 ">
              <img className="service__card__image" src={service__07} alt="" />
              <p className="service__card__title">Retrofitting</p>
              <p className="service__card__description">
                We provide excellent support to our customers to upgrade from
                their legacy systems to newer more advanced automation systems.
                Our expertise for retrofitting helps customers to upgrade to
                newer systems with minimum downtime for their production. Our
                domain expertise also helps during this phase to anticipate any
                urgent issues to be resolved.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 col-12"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;
