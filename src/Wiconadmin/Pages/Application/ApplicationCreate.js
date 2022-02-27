import React, { useState } from "react";
import Navbar from "../../Navbar";
import TopNavbar from "../../TopNavbar";
import "./../form.css";
import axios from "axios";
import { useNavigate } from "react-router";
function ApplicationCreate() {

    const history = useNavigate()
    
  const token = localStorage.getItem("token");

  const [application, setApplication] = useState({
    application_name: "",
    application_description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setApplication({ ...application, [name]: value });
  };

  const handleCreate = async (e) => {
    const data = new FormData(e.target);
    e.preventDefault();
    if (application.application_name && application.application_description) {
      await axios
        .post(
          `${process.env.REACT_APP_PROJECT_API_URL}/applicationAddUpdate`,
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
          history("./../../applicationData");

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
      <div className="container-fluid crud__container">
        <div className="container">
          <p className="page__title">Add Application</p>
          <form onSubmit={handleCreate} className="form__container">
            <div style={{display:"none"}} className="create__form__field">
              <label className="form__field__label" htmlFor="application_id">
                ID
              </label>
              <input
                className="form__input__field"
                type="text"
                name="application_id"
                id="application_id"
                value={0}
              />
            </div>
            <div className="create__form__field">
              <label className="form__field__label" htmlFor="application_name">
                Title
              </label>
              <input
                className="form__input__field"
                type="text"
                name="application_name"
                id="application_name"
                value={application.application_name}
                onChange={handleChange}
              />
            </div>
            <div className="create__form__field">
              <label
                className="form__field__label"
                htmlFor="application_description"
              >
                Application
              </label>
              <input
                className="form__input__field"
                type="text"
                name="application_description"
                id="application_description"
                value={application.application_description}
                onChange={handleChange}
              />
            </div>
            <div className="create__form__field">
              <label
                className="form__field__label"
                htmlFor="application_image"
              >
                Image
              </label>
              <input
                className="form__file__field"
                type="file"
                name="application_image"
                id="application_image"
                // onChange={handleChange}
              />
            </div>
            <div className="create__form__field">
              <label
                className="form__field__label"
                htmlFor="application_description"
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
    </>
  );
}

export default ApplicationCreate;
