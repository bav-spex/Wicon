import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import TopNavbar from "../Components/TopNavbar";
import Navbar from "../Components/Navbar";

import Product_banner from "./../assets/Banner/Product_Page_Banner.jpg";
import ProductpageCard from "../Components/ProductpageCard";
import Footer from "../Components/Footer";

function Products() {
  

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const getList = (id) => {
    axios
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
  // useEffect(() => {
  // }, []);
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
          <img className="page__banner" src={product.product_banner} alt="" />
        </div>
      </div>

      <div className="container-fluid section">
        <div className="container page__section">
          <p className="page__section__title">Products</p>
        </div>
      </div>

      <div className="container-fluid section product__block">
        <div className="container ">
          {product.product_list.map((pro) => {
            return <ProductpageCard key={pro.id} product={pro} />;
          })}
          {/* <ProductpageCard title="LT Panels" />
          <ProductpageCard title="SCADA Systems" />
          <ProductpageCard title="Remote Monitoring System" />
          <ProductpageCard title="Turnkey Projects" />
          <ProductpageCard title="Process Instruments" /> */}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
