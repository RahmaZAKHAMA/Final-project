import { combineReducers } from "redux";
import VehicleReducer from "./VehicleReducer";
import RealEstateReducer from "./RealEstateReducer";
import FashionReducer from "./FashionReducer";
import HomeGardenReducer from "./HomeGardenReducer";
import VacationReducer from "./VacationReducer";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  VehicleReducer,
  RealEstateReducer,
  FashionReducer,
  HomeGardenReducer,
  VacationReducer,
  AuthReducer
});

export default rootReducer;
