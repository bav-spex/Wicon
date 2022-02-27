import axios from "axios";
import * as types from "./actionType";

const loginAdmin = (value) => ({
  type: types.LOGIN,
  payload: value,
});

export const login = (value) => {
  return function (dispatch) {
    // console.log(value);
    dispatch(loginAdmin(value));
  };
};

export const logout = async () => {
  // console.log("logout");
  localStorage.removeItem("token")
 await axios
    .post(
      `${process.env.REACT_APP_PROJECT_API_URL}/logout`,

      {
        headers: {
          "api-key": "Wicon@123",
        },
      }
    )
    .then((res) => {
      // console.log(res.data.data);
    })
    .catch((error) => {
      console.log(error.response);
    });
};
