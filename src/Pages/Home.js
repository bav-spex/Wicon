import React, { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom'

import YouTube from "react-youtube";
import ReactPlayer from "react-player/youtube";
import Carousel from "react-elastic-carousel";
import axios from "axios";

import "./Home.css";
import TopNavbar from "../Components/TopNavbar";
import Navbar from "../Components/Navbar";

import leftarrow from "./../assets/icon/left.svg";
import rightarrow from "./../assets/icon/right.svg";

import homepagebanner from "./../assets/Banner/Home_page_banner.jpg";
import footer__image from "./../assets/Footer/footer__image.jpg";

// Importing Success Stories Icon
import bulletIcon from "./../assets/icon/bullet.svg";

// Importing Certifactes
import ERDA from "./../assets/certificate/ERDA.jpg";
import CPRI from "./../assets/certificate/CPRI.jpg";
import ISO from "./../assets/certificate/ISO.jpg";

//Importing Clients Logos
import client_01 from "./../assets/Clientslogo/client_01.png";
import client_02 from "./../assets/Clientslogo/client_02.png";
import client_03 from "./../assets/Clientslogo/client_03.png";
import client_04 from "./../assets/Clientslogo/client_04.png";
import client_05 from "./../assets/Clientslogo/client_05.png";
import client_06 from "./../assets/Clientslogo/client_06.png";
import client_07 from "./../assets/Clientslogo/client_07.png";
import client_08 from "./../assets/Clientslogo/client_08.png";
import client_09 from "./../assets/Clientslogo/client_09.png";
import client_10 from "./../assets/Clientslogo/client_10.png";
import client_11 from "./../assets/Clientslogo/client_11.png";
import client_12 from "./../assets/Clientslogo/client_12.png";
import client_13 from "./../assets/Clientslogo/client_13.png";
import client_14 from "./../assets/Clientslogo/client_14.png";

import HomepageProducts from "../Components/HomepageProducts";
import HomepageApplication from "../Components/HomepageApplication";
import { Link } from "react-router-dom";
import Certificate from "../Components/Certificate";
import Footer from "../Components/Footer";

function Home() {
  const { pathname } = useLocation()


  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  const options = {
    scale: 1,
    speed: 1000,
    max: 20,
    // reverse: true,
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 414, itemsToShow: 2 },
    { width: 578, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 992, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];
  const carouselRef = useRef();
  const [bannerData, setBannerData] = useState([]);

  const [product, setProduct] = useState([]);
  const [application, setApplication] = useState([]);
  const [loading, setLoading] = useState(true);

  const getHome = async (id) => {
    await axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/bannerList`,
        { banner_name: "home" },
        {
          headers: {
            "api-key": "Wicon@123",
          },
        }
      )
      .then((res) => {
        // console.log(res);
        setBannerData(res.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });

    await axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/productList`,
        { product_id: id },
        {
          headers: {
            "api-key": "Wicon@123",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setProduct(res.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });

    await axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/applicationList`,
        { application_id: id },
        {
          headers: {
            "api-key": "Wicon@123",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setApplication(res.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  useEffect(() => {
    getHome(0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname,loading])
  // console.log(bannerData);
  if (loading) {
    return (
      <>
        <TopNavbar />
        <Navbar />
        <h1></h1>
      </>
    );
  }
  return (
    <>
      <TopNavbar />
      <Navbar />
      <div className="container_fluid">
        <div className="homepage__banner__block">
          <img
            className="homepage__banner"
            src={bannerData.banner_image}
            alt=""
          />
        </div>
      </div>

      <div className="container-fluid">
        <div className="container home__page__title__block">
          <p className="home__page__title">
            Wicon Electronics is one stop solution provider for all Automation
            Solution
          </p>
          <p className="home__page__description">
            Wicon Electronics is founded in 2014 to bring the benefits of
            process automation to customers. Wicon Electronics is one stop
            solution provider for all Automation solution need of customers. We
            are determined to use leading edge technology, years of experience
            and knowledge in providing innovative solutions delivering high
            return on investment. We take pride in finding optimal solutions
            right at the first time to fulfill customer needs, suit customer
            budget and add value to operations and services.
          </p>
        </div>
      </div>

      <div className="container-fluid homepage__products__block">
        <div className="container inner__homepage__products__block">
          <p className="section__title"> Products</p>
          <div className="product__card__block">
            {!loading &&
              product.product_list.map((pro) => {
                return (
                  <HomepageProducts
                    key={pro.id}
                    options={options}
                    products={pro}
                  />
                );
              })}
          </div>
        </div>
      </div>

      <div className="container-fluid homepage__application__block">
        <div className="container inner__homepage__application__block">
          <p className="section__title">Application</p>
          <div className="application__card__block">
            {!loading &&
              application &&
              application.application_list.map((app) => {
                // console.log(app);
                return (
                  <HomepageApplication
                    options={options}
                    key={app.id}
                    applications={app}
                  />
                );
              })}
          </div>
        </div>
      </div>

      {/* <YouTube
            className="youtube__video"
            videoId="wUC2VvKiZjI"
            opts={opts}
          /> */}

      <div className="container-fluid success__stories__block">
        <div className="container inner__success__stories__block">
          <p className="section__title">Success Stories</p>
          {/* <div className="row first__story">
            <div className="col-lg-7 col-md-6  col-sm-12 col-12 story__text__block">
              <p className="first__story__title">20 MLD CETP Plant</p>
              
              <p className="first__story__text">
                <img className="bullet__icon" src={bulletIcon} alt="" /> Total
                Automation and Instrumentation solution deliver by Wicon
              </p>
              <p className="first__story__text">
                <img className="bullet__icon" src={bulletIcon} alt="" /> Siemens
                S7-1500 PLC system
              </p>
              <p className="first__story__text">
                <img className="bullet__icon" src={bulletIcon} alt="" /> Siemens
                WinCC SCADA system
              </p>
              <p className="first__story__text">
                <img className="bullet__icon" src={bulletIcon} alt="" /> SCADA
                Development with Trends, Alarm and Report Facility
              </p>
              <p className="first__story__text">
                <img className="bullet__icon" src={bulletIcon} alt="" /> Reputed
                Make Instruments
              </p>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 first__story__video">
              <ReactPlayer
                className="youtube__video"
                url="https://www.youtube.com/watch?v=wUC2VvKiZjI&ab_channel=WiconElectronics"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div> */}
          <div className="row second__story">
            <div className="col-lg-5 col-md-6 col-sm-12 second__story__video">
              <ReactPlayer
                className="youtube__video"
                url="https://www.youtube.com/watch?v=wUC2VvKiZjI&ab_channel=WiconElectronics"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
            <div className="col-lg-7 col-md-6  col-sm-12 col-12 second__story__text__block">
              <p className="second__story__title"> 3.3 MLD RO UF Plant</p>
              <p className="second__story__text">
                {" "}
                <img className="bullet__icon" src={bulletIcon} alt="" /> Fully
                Automated Plant
              </p>
              <p className="second__story__text">
                {" "}
                <img className="bullet__icon" src={bulletIcon} alt="" /> PMCC
                with 1600A ACB Panel
              </p>
              <p className="second__story__text">
                {" "}
                <img className="bullet__icon" src={bulletIcon} alt="" />{" "}
                Rockwell PLC System
              </p>
              <p className="second__story__text">
                <img className="bullet__icon" src={bulletIcon} alt="" />{" "}
                Rockwell Factory Talk-view Studio SCADA System
              </p>
            </div>
            <div className="col-12 hide__second__story__video">
              <ReactPlayer
                className="youtube__video"
                url="https://www.youtube.com/watch?v=wUC2VvKiZjI&ab_channel=WiconElectronics"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div>
        </div>
      </div>

      <Certificate />

      <div className="container-fluid">
        <div className="container clients__block ">
          <p className="section__title client__title">
            Our Esteemed Clients & End Clients
          </p>

          <div className="inner__clients__block">
            <div className="arrow left__arrow">
              <img src={leftarrow} alt="" />
            </div>
            <Carousel
              breakPoints={breakPoints}
              enableAutoPlay={true}
              autoPlaySpeed={2500}
              enableMouseSwipe={false}
              ref={carouselRef}
            
            >
              <img className="client__image" src={client_01} alt="client_01" />
              {/* <img className="client__image" src={client_02} alt="client_02" /> */}
              <img className="client__image" src={client_03} alt="client_03" />
              <img className="client__image" src={client_04} alt="client_04" />
              <img className="client__image" src={client_05} alt="client_05" />
              <img className="client__image" src={client_06} alt="client_06" />
              <img className="client__image" src={client_07} alt="client_07" />
              <img className="client__image" src={client_08} alt="client_08" />
              <img className="client__image" src={client_09} alt="client_09" />
              <img className="client__image" src={client_10} alt="client_10" />
              <img className="client__image" src={client_11} alt="client_11" />
              <img className="client__image" src={client_12} alt="client_12" />
              <img className="client__image" src={client_13} alt="client_13" />
              <img className="client__image" src={client_14} alt="client_14" />

              <img className="client__image" src={client_01} alt="client_01" />
              {/* <img className="client__image" src={client_02} alt="client_02" /> */}
              <img className="client__image" src={client_03} alt="client_03" />
              <img className="client__image" src={client_04} alt="client_04" />
              <img className="client__image" src={client_05} alt="client_05" />
              <img className="client__image" src={client_06} alt="client_06" />
              <img className="client__image" src={client_07} alt="client_07" />
              <img className="client__image" src={client_08} alt="client_08" />
              <img className="client__image" src={client_09} alt="client_09" />
              <img className="client__image" src={client_10} alt="client_10" />
              <img className="client__image" src={client_11} alt="client_11" />
              <img className="client__image" src={client_12} alt="client_12" />
              <img className="client__image" src={client_13} alt="client_13" />
              <img className="client__image" src={client_14} alt="client_14" />

              <img className="client__image" src={client_01} alt="client_01" />
              {/* <img className="client__image" src={client_02} alt="client_02" /> */}
              <img className="client__image" src={client_03} alt="client_03" />
              <img className="client__image" src={client_04} alt="client_04" />
              <img className="client__image" src={client_05} alt="client_05" />
              <img className="client__image" src={client_06} alt="client_06" />
              <img className="client__image" src={client_07} alt="client_07" />
              <img className="client__image" src={client_08} alt="client_08" />
              <img className="client__image" src={client_09} alt="client_09" />
              <img className="client__image" src={client_10} alt="client_10" />
              <img className="client__image" src={client_11} alt="client_11" />
              <img className="client__image" src={client_12} alt="client_12" />
              <img className="client__image" src={client_13} alt="client_13" />
              <img className="client__image" src={client_14} alt="client_14" />

              <img className="client__image" src={client_01} alt="client_01" />
              {/* <img className="client__image" src={client_02} alt="client_02" /> */}
              <img className="client__image" src={client_03} alt="client_03" />
              <img className="client__image" src={client_04} alt="client_04" />
              <img className="client__image" src={client_05} alt="client_05" />
              <img className="client__image" src={client_06} alt="client_06" />
              <img className="client__image" src={client_07} alt="client_07" />
              <img className="client__image" src={client_08} alt="client_08" />
              <img className="client__image" src={client_09} alt="client_09" />
              <img className="client__image" src={client_10} alt="client_10" />
              <img className="client__image" src={client_11} alt="client_11" />
              <img className="client__image" src={client_12} alt="client_12" />
              <img className="client__image" src={client_13} alt="client_13" />
              <img className="client__image" src={client_14} alt="client_14" />

              <img className="client__image" src={client_01} alt="client_01" />
              {/* <img className="client__image" src={client_02} alt="client_02" /> */}
              <img className="client__image" src={client_03} alt="client_03" />
              <img className="client__image" src={client_04} alt="client_04" />
              <img className="client__image" src={client_05} alt="client_05" />
              <img className="client__image" src={client_06} alt="client_06" />
              <img className="client__image" src={client_07} alt="client_07" />
              <img className="client__image" src={client_08} alt="client_08" />
              <img className="client__image" src={client_09} alt="client_09" />
              <img className="client__image" src={client_10} alt="client_10" />
              <img className="client__image" src={client_11} alt="client_11" />
              <img className="client__image" src={client_12} alt="client_12" />
              <img className="client__image" src={client_13} alt="client_13" />
              <img className="client__image" src={client_14} alt="client_14" />

              
            </Carousel>
            <div className="arrow right__arrow">
              <img src={rightarrow} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
