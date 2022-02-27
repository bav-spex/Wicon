import * as types from "./actionType";

const initialState = {
  token: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
