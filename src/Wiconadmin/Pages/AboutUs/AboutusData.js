import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import TopNavbar from "../../TopNavbar";
import "./AboutUs.css"
function AboutusData() {
  const [aboutusData, setAboutusData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getList = async(id) => {
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
  };
  useEffect(() => {
    getList(0);
  }, []);

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

      <div className="container-fluid section product__block">
        <div className="container ">
          <p className="page__section__title">About</p>
          <Link to="/admin/aboutus/aboutusCreate">
            <button  className="create__button">Create</button>
          </Link>
          <div className="row">

        
          {aboutusData.map((manufacturer) => {
            return (
              <div key={manufacturer.id} className="col-md-4 col-4">
                <div className="manu__box ">
                  <img
                    className="homepage__product__card__image"
                    src={manufacturer.manufacturing_facility_image}
                    alt=""
                  />

                  <div className="about__us__crud__button">
                    <Link
                      className="edit__button"
                      to={`/admin/aboutus/${manufacturer.id}`}
                    >
                      Edit
                    </Link>
                    {/* <div
                      className="delete__button"
                      onClick={() => deleteProduct(ban.id)}
                      >
                      Delete
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
            </div>
        </div>
      </div>
   
    </>
  );
}

export default AboutusData;
