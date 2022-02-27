import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
import TopNavbar from "../../TopNavbar";



function ApplicationData() {
  // const token = useSelector(state => state.login.token)
  // useEffect(() => {
  //   console.log(token);
  // },[token]);
  const [applicationData, setApplicationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getList = (id)=>{
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
      setApplicationData(res.data.data.application_list);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error.response);
    });
  }
  useEffect(() => {
    getList(0)
  
  }, []);
  // console.log(applicationData);

  const deleteApplication = (id) => {
    const token = localStorage.getItem("token");
    // console.log(token);
    axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/applicationDelete`,
        { application_id: id },
        {
          headers: {
            "api-key": "Wicon@123",
            Authorization: `Bearer ${token.split(" ")[1]}`,
          },
        }
      )
      .then((res) => {
        getList()
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

      <div className="container-fluid section">
        <div className="container page__section">
          <p className="page__section__title">Application</p>
          <Link to="/admin/application/applicationCreate">
            <button  className="create__button">Create</button>
          </Link>
          <div className="application__card__block">
            {applicationData.map((app) => {
              return (
                <div
                  key={app.id}
                  to="/application"
                  className="application__page__card admin__application__page__card"
                >
                  <img
                    className="application__page__card__image"
                    src={app.application_image}
                    alt=""
                  />
                  <div className="application__page__card__title__block admin__application__card">
                    <p className="application__page__card__title">
                      {app.application_name}
                    </p>
                    {app.application_description
                      .split("/ ")
                      .map((detail, index) => {
                        return (
                          <p
                            key={index}
                            className="application__page__card__points"
                          >
                            {detail}
                          </p>
                        );
                      })}
                  </div>
                  <div className="crud__button">
                    <Link
                      className="edit__button"
                      to={`/admin/application/${app.id}`}
                    >
                      Edit
                    </Link>
                    <div
                      className="delete__button"
                      onClick={() => deleteApplication(app.id)}
                    >
                      Delete
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container"></div>
      </div>
    </>
  );
}

export default ApplicationData;

{
  /* <div to="/application" className="application__page__card">
<img className="application__page__card__image" src={application_01} alt="" />
<div className="application__page__card__title__block">
    <p className="application__page__card__title">{title}</p>
    <p className="application__page__card__points">Storm water pumping station</p>
    <p className="application__page__card__points">Municipal pumping & distribution</p>
    <p className="application__page__card__points">WTP, ETP and STP</p>
</div>
</div> */
}
