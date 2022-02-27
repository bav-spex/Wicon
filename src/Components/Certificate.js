import React from "react";
import "./Certificate.css";


// Importing Certifactes
import ERDA from "./../assets/certificate/ERDA.jpg";
import CPRI from "./../assets/certificate/CPRI.jpg";
import ISO from "./../assets/certificate/ISO.jpg";

function Certificate() {
  return (
    <>
      <div className="container-fluid certificate__block">
        <div className="container inner__certificate__block">
          <p className="section__title">Certifications & Quality Policy</p>
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-6 col certificate__block">
              <img className="certificate__image" src={ERDA} alt="" />
            </div>
            <div className="col-lg-4 col-sm-4 col-6 col certificate__block">
              <img className="certificate__image" src={CPRI} alt="" />
            </div>
            <div className="col-lg-4 col-sm-4 col-12 col certificate__block">
              <img className="certificate__image" src={ISO} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificate;
