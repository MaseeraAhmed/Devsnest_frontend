import GetPlaceReducer from "./GetPlaceReducer";
import GetPlaceDataReducer from "./GetPlaceDataReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  GetPlace: GetPlaceReducer,
  GetPlaceData: GetPlaceDataReducer,
});

export default rootReducer;
