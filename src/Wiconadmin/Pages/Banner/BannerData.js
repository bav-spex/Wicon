import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import TopNavbar from "../../TopNavbar";
import "./Banner.css"

function BannerData() {

  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getList = (id)=>{
    axios
    .post(
      `${process.env.REACT_APP_PROJECT_API_URL}/bannerList`,
      { banner_name:"" },
      {
        headers: {
          "api-key": "Wicon@123",
        },
      }
    )
    .then((res) => {
      // console.log(res.data.data);
      setBannerData(res.data.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error.response);
    });
  }
  useEffect(() => {
    getList(0)
  
  }, []);

  
 
  return (
    <>
    <TopNavbar/>
    <Navbar/>
    <div className="container-fluid section product__block">
          <div className="container ">
          <p className="page__section__title">Banner</p>
          <Link to="/admin/banner/bannerCreate">
            <button className="create__button">Create</button>
          </Link>
            {bannerData.map((ban) => {
              return (
                <div key={ban.banner_name} className="row single__product">
                 
                    <img
                      className=" product__car__image"
                      src={ban.banner_image}
                      alt=""
                    />
                  
                  <div className="col-md-8 col-sm-12 col-12 banner__details__box">
                    <p className="product__card__title">{ban.banner_name}</p>
                    <div className="crud__button">
                    <Link
                      className="edit__button"
                      to={`/admin/banner/${ban.banner_name}`}
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
    
    </>
  );
}

export default BannerData;
