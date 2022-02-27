import React, { useState,useEffect } from "react";
import Navbar from "../../Navbar";
import TopNavbar from "../../TopNavbar";
import "./../form.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

function ProductUpdate() {
    const { id } = useParams();
    // console.log(id);
    const history = useNavigate();
  
    const token = localStorage.getItem("token");
  
    const [product, setProduct] = useState({
        product_name: "",
        product_description: "",
      });

      const [loading, setLoading] = useState(true);

      
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
  };
  const getList = (proid) => {
    axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/productList`,
        { product_id: proid },
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
  // console.log();
  useEffect(() => {
    getList(id);
  }, []);

  const handleUpdate = async (e) => {
    const data = new FormData(e.target);
    e.preventDefault();
    if (product.product_name && product.product_description) {
      await axios
        .post(
          `${process.env.REACT_APP_PROJECT_API_URL}/productAddUpdate`,
          data,
          {
            headers: {
              // 'application/json' is the modern content-type for JSON, but some
              // older servers may use 'text/json'.
              // See: http://bit.ly/text-json
              "api-key": "Wicon@123",
              Authorization: `Bearer ${token.split(" ")[1]}`,
            },
          }
        )
        .then((res) => {
          // console.log(res.data);
          // console.log(res.data.messages);
          history("./../../productData");
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      alert("please fill information");
    }
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
        <TopNavbar/>
        <Navbar/>
        <div className="container-fluid crud__container">
        <div className="container">
          <p className="page__title">Add Product</p>
          <form onSubmit={handleUpdate} className="form__container">
            <div style={{display:"none"}} className="create__form__field">
              <label className="form__field__label" htmlFor="product_id">
                ID
              </label>
              <input
                className="form__input__field"
                type="text"
                name="product_id"
                id="product_id"
                value={product.id}
              />
            </div>
            <div className="create__form__field">
              <label className="form__field__label" htmlFor="product_name">
                Title
              </label>
              <input
                className="form__input__field"
                type="text"
                name="product_name"
                id="product_name"
                value={product.product_name}
                onChange={handleChange}
              />
            </div>
            <div className="create__form__field">
              <label
                className="form__field__label"
                htmlFor="product_description"
              >
               Description
              </label>
              <textarea rows="4" cols="50"
                className="form__input__field"
                type="text"
                name="product_description"
                id="product_description"
                value={product.product_description}
                onChange={handleChange}
              />
            </div>
            <div className="create__form__field">
              <label
                className="form__field__label"
                htmlFor="product_image"
              >
                Image
              </label>
              <input
                className="form__file__field"
                type="file"
                name="product_image"
                id="product_image"
                // onChange={handleChange}
              />
            </div>
            <div className="create__form__field">
              <label
                className="form__field__label"
                htmlFor="product_description"
              ></label>
              <div className="form__file__field">
                <input
                  className="submit__button"
                  type="submit"
                  value="Update"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
        </>
    )
}

export default ProductUpdate
