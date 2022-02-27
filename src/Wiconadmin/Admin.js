import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Admin.css"
import Navbar from "./Navbar";
import TopNavbar from "./TopNavbar";
import "./WiconAdmin.css";
import page__not__found from "./../assets/Images/page__not__found.png"


function Admin() {
  // const history = useNavigate();
  // const handlelogin = () => {
  //   history("./aboutus");
  // };

  return (
    <>
      {/* <TopNavbar /> */}
      <div id="page404">
            <div className="wrapper">
                <h1>404</h1>
                <h3>This page could not be found</h3>
                <img className="page_note_found_iamge" src={page__not__found} />
            </div>
        </div >
      {/* <Navbar /> */}
      {/* <h1>Welcome</h1> */}
    </>
  );
}

export default Admin;
