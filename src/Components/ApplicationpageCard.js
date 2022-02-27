import React from "react";
import "./ApplicationpageCard.css";
import application_01 from "./../assets/Applicationpage/application_01.jpg";
import { Link } from "react-router-dom";

function ApplicationpageCard(props) {
    const {application} =props
  return (
    <>
      <div to="/application" className="application__page__card">
          <img className="application__page__card__image" src={application.application_image} alt="" />
          <div className="application__page__card__title__block">
              <p className="application__page__card__title">{application.application_name}</p>
              {application.application_description.split("/ ").map((detail, index)=>{
                return(

                  <p key={index} className="application__page__card__points">{detail}</p>
                )
              })}
             
          </div>
      </div>
    </>
  );
}

export default ApplicationpageCard;
