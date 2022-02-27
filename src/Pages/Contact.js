import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Career.css";
import TopNavbar from "../Components/TopNavbar";
import Navbar from "../Components/Navbar";
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import mapIcon from "./../assets/icon/mapIcon.png";
import mail_filled from "./../assets/icon/mail_filled.svg";
import phone_filled from "./../assets/icon/phone_filled.svg";
import career_page_banner from "./../assets/Banner/career_page_banner.jpg";

import MiniFooter from "./../Components/MiniFooter";

function Career() {
  const { pathname } = useLocation();

  // const token = localStorage.getItem("token");

  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const getCareer = async () => {
    await axios
      .post(
        `${process.env.REACT_APP_PROJECT_API_URL}/bannerList`,
        { banner_name: "career" },
        {
          headers: {
            "api-key": "Wicon@123",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);
        setBannerData(res.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });

    window.scrollTo(0, 0);
    setLoading(false);
  };

  useEffect(() => {
    getCareer(0);
  }, []);
  const [candidate, setCandidate] = useState({
    name: "",
    email: "",
    phone_number: "",
    experience: "",
    self_description: "",
    resume:""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCandidate({ ...candidate, [name]: value });
  };
  //   console.log(candidate);
  const customId = "custom-id-yes";
  const handleSubmit = async (e) => {
    setSubmitting(true);

    e.preventDefault();
    if (
      candidate.name &&
      candidate.email &&
      candidate.self_description &&
      candidate.phone_number &&
      candidate.experience &&
      candidate.resume
    ) {
      const data = new FormData(e.target);
      await axios
        .post(`${process.env.REACT_APP_PROJECT_API_URL}/careerPost`, data, {
          headers: {
            // 'application/json' is the modern content-type for JSON, but some
            // older servers may use 'text/json'.
            // See: http://bit.ly/text-json
            "api-key": "Wicon@123",
            // Authorization: `Bearer ${token.split(" ")[1]}`,
          },
        })
        .then((res) => {
          // console.log(res.data.messages[0]);
          setSubmitting(false);
          toast.success("Apply Successfully", {
            toastId: customId,
            transition: Slide,
            autoClose: 2000,
            closeButton: false,
          });
          setCandidate({
            name: "",
            email: "",
            phone_number: "",
            experience: "",
            self_description: "",
            resume:""
          });
        })
        .catch((error) => {
          console.log(error.response);
        });
    } else {
      setSubmitting(false);
      toast.error("Please Fill All Information", {
        toastId: customId,
        transition: Slide,
        autoClose: 2000,
        closeButton: false,
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, loading]);
  return (
    <>
      <ToastContainer />
      <TopNavbar />
      <Navbar />
      <div className="container_fluid">
        <div>
          <img className="page__banner" src={bannerData.banner_image} alt="" />
        </div>
      </div>

      <div className="container-fluid">
        <div className="container career__page__title__block">
          <p className="career__page__title">Career</p>
          <p className="career__page__description">
            "Choose a job you love,
            <br /> and you will never have to work a day in your life."
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container contact__address__block">
          <form onSubmit={handleSubmit} className="contact__form__block">
            <div className="inner__contact__form__block">
              <div className="row form__field__block">
                <div className="col-sm-6 col-12 form__field left__form__field">
                  <input
                    className="input__field"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={candidate.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 col-12 form__field right__form__field">
                  <input
                    className="input__field"
                    type="email"
                    size="30"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    value={candidate.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row form__field__block">
                <div className="col-sm-6 col-12 form__field left__form__field">
                  <input
                    className="input__field"
                    type="number"
                    name="experience"
                    id="experience"
                    placeholder="Experience"
                    value={candidate.experience}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 col-12 form__field right__form__field">
                  <input
                    className="input__field"
                    type="tel"
                    maxLength="10"
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Phone number"
                    value={candidate.phone_number}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row form__field__block">
                <div className="col-sm-6 col-12 form__field left__form__field textarea">
                  <textarea
                    className="input__field"
                    name="self_description"
                    id="self_description"
                    placeholder="Tell us a little about yours"
                    value={candidate.self_description}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6 col-12 form__field right__form__field file__upload__field">
                  <label className="career__page__label">
                    Upload your resume / CV
                  </label>
                  <input
                    className=""
                    type="file"
                    name="resume"
                    id="resume"
                    title=" "
                    placeholder="Upload CV"
                    value={candidate.resume}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form__field__button">
                <input
                  className={
                    submitting
                      ? "submit__button submittting__button"
                      : "submit__button"
                  }
                  type="submit"
                  value={submitting ? "Submitting" : "Submit"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <MiniFooter />
    </>
  );
}

export default Career;
