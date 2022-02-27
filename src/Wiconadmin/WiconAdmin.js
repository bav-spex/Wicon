import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/loginAction";
import TopNavbar from "./TopNavbar";
import "./WiconAdmin.css";

function WiconAdmin() {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdmin({ ...admin, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (admin.email && admin.password) {
      let data;
      await axios
        .post(`${process.env.REACT_APP_PROJECT_API_URL}/login`, admin, {
          headers: {
            // 'application/json' is the modern content-type for JSON, but some
            // older servers may use 'text/json'.
            // See: http://bit.ly/text-json
            "api-key": "Wicon@123",
          },
        })
        .then((res) => {
          // console.log(res.data);
          data = res.data;
        })
        .catch((error) => {
          console.log(error.response);
        });

      if (data.status === "true") {
        history("./../admin/bannerData");
        // console.log("success");
        localStorage.setItem("token", JSON.stringify(data.data.token))
        dispatch(login(data.data.token));
      } else {
        alert("invalid credentials");
        // console.log(data.messages[0]);
      }
    } else {
      alert("please fill information");
    }
  };
  return (
    <>
      <div className="login__background">
        <TopNavbar />

        <div className="login__container">
          <form autoComplete="off" onSubmit={handleLogin} className="login__box">
            <p className="login__title">Wicon Login</p>

            <label className="login__form__field__label">Username</label>
            <input
              className="login__field"
              type="text"
              name="email"
              id="email"
              value={admin.email}
              onChange={handleChange}
            />
            <label className="login__form__field__label">Password</label>
            <input
              className="login__field"
              type="text"
              name="password"
              id="password"
              value={admin.password}
              onChange={handleChange}
            />
            <div className="login__button">
              <input
                className="login__submit__button"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default WiconAdmin;
