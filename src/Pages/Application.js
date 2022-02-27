import React, { useState,useEffect } from "react";

import { useLocation } from 'react-router-dom'
import axios from "axios";

import "./Application.css";
import TopNavbar from "../Components/TopNavbar";
import Navbar from "../Components/Navbar";

import Application_page_banner from "./../assets/Banner/Application_page_banner.jpg";

import Footer from "../Components/Footer";
import ApplicationpageCard from "../Components/ApplicationpageCard";
function Application() {
  const { pathname } = useLocation()
  
  const [application, setApplication] = useState([]);
  const [loading, setLoading] = useState(true);

  const getList = (id) => {
    axios
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
        setLoading(false);
        
      })
      .catch((error) => {
        console.log(error.response);
      });
    };
    useEffect(() => {
      getList(0);
      
  }, []);
    useEffect(() => {
      window.scrollTo(0, 0);
  }, [loading]);

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
        <div className="product__page__banner__block">
          <img className="page__banner" src={application.application_banner} alt="" />
        </div>
      </div>

      <div className="container-fluid section">
        <div className="container page__section">
          <p className="page__section__title">Application</p>
          <div className="application__card__block">
            {application.application_list.map((app)=>{
              return (

                <ApplicationpageCard key={app.id} application={app} />
                )
            })}
            {/* <ApplicationpageCard title="Plasma Research & Development" />
            <ApplicationpageCard title="Chemicals" />
            <ApplicationpageCard title="Pharmaceuticals" />
            <ApplicationpageCard title="Oil & Gas" />
            <ApplicationpageCard title="Dairy" /> */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Application;
