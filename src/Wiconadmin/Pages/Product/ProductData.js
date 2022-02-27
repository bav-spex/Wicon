import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import TopNavbar from "../../TopNavbar";
import "./Product.css";

function ProductData() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const getList = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/productList`,
        { application_id: id },
        {
          headers: {
            "api-key": "Wicon@123",
          },
        }
      )
      .then((res) => {
        setProduct(res.data.data.product_list);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getList(0);
  }, []);
  // console.log(product);

  const deleteProduct = (id) => {
    const token = localStorage.getItem("token");
    // console.log(token);
    axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/productDelete`,
        { product_id: id },
        {
          headers: {
            "api-key": "Wicon@123",
            Authorization: `Bearer ${token.split(" ")[1]}`,
          },
        }
      )
      .then((res) => {
        getList();
        // console.log(res);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

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
          <p className="page__section__title">Product</p>
          <Link to="/admin/product/productCreate">
            <button className="create__button">Create</button>
          </Link>
          {product.map((pro) => {
            return (
              <div className="row single__product">
                <div className="col-md-4 col-sm-12 col-12  product__card__image__block">
                  <img
                    className=" product__car__image"
                    src={pro.product_image}
                    alt=""
                  />
                </div>
                <div className="col-md-8 col-sm-12 col-12 product__car__details">
                  <p className="product__card__title">{pro.product_name}</p>
                  <p className="product__card__description">
                    {pro.product_description}
                  </p>
                </div>
                <div className="product__crud__button">
                  <Link
                    className="edit__button"
                    to={`/admin/product/${pro.id}`}
                  >
                    Edit
                  </Link>
                  <div
                    className="product__delete__button"
                    onClick={() => deleteProduct(pro.id)}
                  >
                    Delete
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

export default ProductData;
{
  /* <Link to="/products" className="homepage__product__card">
        <div ref={tilt} className="homepage__product__card__image__block">
          <img className="homepage__product__card__image" src={product__01} alt="" />
          <div className="homepage__product__card__title__block">
            <div className="inner__homepage__product__card__title__block">
              <p className="homepage__product__card__title">{title}</p>
            </div>
          </div>
        </div>
      </Link> */
}
