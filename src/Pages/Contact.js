import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Contact.css";
import TopNavbar from "../Components/TopNavbar";
import Navbar from "../Components/Navbar";
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./../Components/Footer.css";
import mapIcon from "./../assets/icon/mapIcon.png";
import mail_filled from "./../assets/icon/mail_filled.svg";
import phone_filled from "./../assets/icon/phone_filled.svg";
import calltoMap from "../Functions/calltoMap";

import MiniFooter from "../Components/MiniFooter";

function Contact() {
  const mapRef = useRef();

  useEffect(() => {
    calltoMap();
  }, []);

  const [submitting, setSubmitting] = useState(false);

  const [client, setclient] = useState({
    name: "",
    email: "",
    phone_number: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setclient({ ...client, [name]: value });
  };
  //   console.log(client);

  const customId = "custom-id-yes";

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const handleSubmit = async (e) => {
    setSubmitting(true);

    e.preventDefault();
    if (
      client.name &&
      client.email &&
      client.phone_number &&
      client.subject &&
      client.description
    ) {
      const data = new FormData(e.target);

      await axios
        .post(`${process.env.REACT_APP_PROJECT_API_URL}/contactUsPost`, data, {
          headers: {
            // 'application/json' is the modern content-type for JSON, but some
            // older servers may use 'text/json'.
            // See: http://bit.ly/text-json
            "api-key": "Wicon@123",
            // Authorization: `Bearer ${token.split(" ")[1]}`,
          },
        })
        .then((res) => {
          // console.log(res.data);
          // alert(res.data.messages[0]);
          setSubmitting(false);
          toast.success("Submit Successfully", {
            toastId: customId,
            transition: Slide,
            autoClose: 2000,
            closeButton: false,
          });
          // history("./../../applicationData");
          setclient({
            name: "",
            email: "",
            phone_number: "",
            subject: "",
            description: "",
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

  const handlefix = (e) => debounce(handleSubmit(e), 10000);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ToastContainer />

      <TopNavbar />
      <Navbar />
      <div className="container_fluid">
        <div>
          <div
            ref={mapRef}
            id="map"
            className="map__Container contact__map__block"
          ></div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container contact__page__title__block">
          <p className="contact__page__title">Wicon Electonics</p>
          <p className="contact__page__description">
            Wicon Electronics is an established industrial automation and
            control system solutions company. we are a professionally managed
            organization.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container contact__address__block">
          <div className="row inner__contact__address__block">
            <form
              onSubmit={handlefix}
              className="col-md-8 col-sm-12 col-12 contact__form__block"
            >
              <div className="inner__contact__form__block">
                <div className="row form__field__block">
                  <div className="col-sm-6 col-12 form__field left__form__field">
                    <input
                      className="input__field"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      value={client.name}
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
                      placeholder="Your email address"
                      value={client.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row form__field__block">
                  <div className="col-sm-6 col-12 form__field left__form__field">
                    <input
                      className="input__field"
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      value={client.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-sm-6 col-12 form__field right__form__field">
                    <input
                      className="input__field"
                      type="tel"
                      maxlength="10"
                      pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                      name="phone_number"
                      id="phone_number"
                      placeholder="Phone Number"
                      value={client.phone_number}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form__field textarea">
                  <textarea
                    className="input__field"
                    name="description"
                    id="description"
                    placeholder="Message"
                    value={client.description}
                    onChange={handleChange}
                  />
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

            <div className="col-md-4 col-sm-12 col-12 contact__page__address__block address__block">
              <div className="address__title__block">
                <img src={mapIcon} alt="mapIcon" />
                <p className="address__title">Wicon Electronics</p>
              </div>
              <p className="full__address__text">
                K-5, Road no. 5, Diamond Industrial Park,
                <br /> Near Sachin SEZ,
                <br />
                Behind Sachin GIDC, Sachin
                <br /> Surat, Gujarat - 394230
              </p>
              <p className="footer__contact__tab">
                <img
                  className="footer__tab__icon"
                  src={mail_filled}
                  alt="mail"
                />
                <a href="mailto:sales1@wicon.in">sales@wicon.in </a>
              </p>
              <p className="footer__contact__tab">
                <img
                  className="footer__tab__icon"
                  src={phone_filled}
                  alt="phone"
                />
                <a href="tel:9898603537">+91 9898603537</a>
              </p>
              <p className="footer__contact__tab">
                <img
                  className="footer__tab__icon"
                  src={phone_filled}
                  alt="phone"
                />
                <a href="tel:9898379703">+91 9898379703</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <MiniFooter />
    </>
  );
}

export default Contact;
