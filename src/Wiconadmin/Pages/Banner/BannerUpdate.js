import React, { useState, useEffect } from "react";
import "./../form.css";
import axios from "axios";
import Navbar from "./../../Navbar"
import { useNavigate, useParams } from "react-router";

function BannerUpdate() {
  const { id } = useParams();
  // console.log(id);
  const history = useNavigate();

  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const [banner, setBanner] = useState({
    banner_name: id,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBanner({ ...banner, [name]: value });
  };
  // console.log(banner);

  const getList = (banid) => {
    axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/bannerList`,
        { banner_name: banid },
        {
          headers: {
            "api-key": "Wicon@123",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setBanner(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getList(id);
  }, []);

  const handleUpdate = async (e) => {
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
    <>
      <Navbar />
      <div className="container-fluid crud__container">
        <div className="container">
          <p className="page__title">Add Product</p>
        <img className="update__banner__image" src={banner.banner_image} alt="" />
          <form onSubmit={handleUpdate} className="form__container">
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
                <option value={id}>{id}</option>
        
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
                  value="Update"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
   
    </>
  );
}

export default BannerUpdate;
