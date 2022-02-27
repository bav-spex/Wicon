import React, { useState,useEffect } from "react";
import Navbar from "../../Navbar";
import TopNavbar from "../../TopNavbar";
import "./../form.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router";


function AboutusUpdate() {
    const { id } = useParams();
    // console.log(id);
  const history = useNavigate();

  const token = localStorage.getItem("token");

  const [aboutus, setAboutus] = useState({
    manufacturing_facility_id: "",
 
  });
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAboutus({ ...aboutus, [name]: value });
  };

  const getList = (manuid) => {
    axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/manufacturingFacilityList`,
        { id: manuid },
        {
          headers: {
            "api-key": "Wicon@123",
          },
        }
      )
      .then((res) => {
          // console.log(res.data.data);
          setAboutus(res.data.data);
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
    if (true) {
      await axios
        .post(
          `${process.env.REACT_APP_PROJECT_API_URL}/manufacturingFacilityAddUpdate`,
          data,
          {
            headers: {
              "api-key": "Wicon@123",
              Authorization: `Bearer ${token.split(" ")[1]}`,
            },
          }
        )
        .then((res) => {
          // console.log(res.data);
          // console.log(res.data.messages);
          history("./../../aboutusData");
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
      <TopNavbar />
      <Navbar />
      {/* <img className="update__banner__image" src={aboutus.filter((ab)=>ab.id === +id).manufacturing_facility_image} alt="" /> */}
      <div className="container-fluid crud__container">
        <div className="container">
          <p className="page__title">Add Manufacturer Facility Image</p>
          <form onSubmit={handleUpdate} className="form__container">
            <div style={{ display: "none" }} className="create__form__field">
              <label
                className="form__field__label"
                htmlFor="manufacturing_facility_id"
              >
                ID
              </label>
              <input
                className="form__input__field"
                type="text"
                name="manufacturing_facility_id"
                id="manufacturing_facility_id"
                value={aboutus.id}
              />
            </div>
            <div className="create__form__field">
              <label
                className="form__field__label"
                htmlFor="manufacturing_facility_image"
              >
                Image
              </label>
              <input
                className="form__file__field"
                type="file"
                name="manufacturing_facility_image"
                id="manufacturing_facility_image"
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

export default AboutusUpdate;
