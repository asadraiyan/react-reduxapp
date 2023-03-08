import changeNumber from "./upDown";
import multdivNumber from "./multdiv";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber, multdivNumber
})

export default rootReducer