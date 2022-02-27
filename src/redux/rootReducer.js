import { combineReducers } from "redux";
import loginReducer from "./loginReducer"
// import tourReducer from "./tourReducer"
// import uiReducer from "./uiReducer"
// import userReducer from "./userReducer"

const rootReducer = combineReducers({
    login: loginReducer,
    // tour: tourReducer,
    // uiDesign: uiReducer,
    // user: userReducer
})

export default rootReducer