import React from "react";
import "./HomepageApplication.css";
import application_01 from "./../assets/Applicationpage/application_01.jpg";
import { Link } from "react-router-dom";

function HomepageApplication(props) {
  const { applications } = props;
  // console.log(applications);
  return (
    <>
      <Link to="/application" className="application__card">
        <img className="application__card__image" src={applications.application_image} alt="" />
        <div className="application__card__title__block">
          <p className="application__card__title">{applications.application_name}</p>
        </div>
      </Link>
    </>
  );
}

export default HomepageApplication;
