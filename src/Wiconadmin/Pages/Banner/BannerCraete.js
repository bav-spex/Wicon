import React, { useState } from "react";
import Navbar from "../../Navbar";
import TopNavbar from "../../TopNavbar";
import "./../form.css";
import axios from "axios";
import { useNavigate } from "react-router";

function BannerCraete() {
  const history = useNavigate();

  const token = localStorage.getItem("token");
  const [banner, setBanner] = useState({
    banner_name: "contact_us",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBanner({ ...banner, [name]: value });
  };
  // console.log(banner);

  const handleCreate = async (e) => {
    const data = new FormData(e.target);
    e.preventDefault();
    if (banner.banner_name) {
      await axios
        .post(`${process.env.REACT_APP_PROJECT_API_URL}/bannerPost`, data, {
          headers: {
            "api-key": "Wicon@123",
            Authorization: `Bearer ${token.split(" ")[1]}`,
          },
        })
        .then((res) => {
          // console.log(res.data);
          // console.log(res.data.messages);
          history("./../../bannerData");
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      alert("please fill information");
    }
  };

  return (
    <div>
      <TopNavbar />
      <Navbar />
      <div className="container-fluid crud__container">
        <div className="container">
          <p className="page__title">Add Product</p>
          <form onSubmit={handleCreate} className="form__container">
            <div className="create__form__field">
              <label className="form__field__label" htmlFor="banner_name">
                Title
              </label>
              <select
                className="form__file__field"
                name="banner_name"
                value={banner.banner_name}
                onChange={handleChange}
              >
                <option value="home">Home</option>
                <option value="about_us">About Us</option>
                <option value="products">Product</option>
                <option value="services">Services</option>
                <option value="application">Application</option>
                <option value="career">Career</option>
                <option value="contact_us">Contact Us</option>
              </select>
            </div>

            <div className="create__form__field">
              <label className="form__field__label" htmlFor="banner_image">
                Image
              </label>
              <input
                className="form__file__field"
                type="file"
                name="banner_image"
                id="banner_image"
                // onChange={handleChange}
              />
            </div>
            <div className="create__form__field">
              <label
                className="form__field__label"
                htmlFor="banner_description"
              ></label>
              <div className="form__file__field">
                <input
                  className="submit__button"
                  type="submit"
                  value="Create"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BannerCraete;
