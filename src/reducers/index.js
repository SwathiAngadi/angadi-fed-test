import { combineReducers } from "redux";
import userInfo from "./reducer"; 

export const reducer = combineReducers({    
    userInfo: userInfo
});