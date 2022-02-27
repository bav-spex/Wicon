import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"
import reduxThunk from "redux-thunk"
import rootReducer from "./rootReducer"

const middlwares = [reduxThunk]

if (process.env.NODE_ENV === 'development') {
    middlwares.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middlwares))

export default store