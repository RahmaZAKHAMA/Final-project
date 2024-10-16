import {
  ADD_VEHICLES_FAIL,
  ADD_VEHICLES_LOAD,
  ADD_VEHICLES_SUCCESS,
  DELETE_VEHICLES_BYID_FAIL,
  DELETE_VEHICLES_BYID_LOAD,
  DELETE_VEHICLES_BYID_SUCCESS,
  EDIT_VEHICLES_FAIL,
  EDIT_VEHICLES_LOAD,
  EDIT_VEHICLES_SUCCESS,
  GET_VEHICLES_FAIL,
  GET_VEHICLES_LOAD,
  GET_VEHICLES_SUCCESS,
  GET_VEHICLESCATEGORY_FAIL,
  GET_VEHICLESCATEGORY_LOAD,
  GET_VEHICLESCATEGORY_SUCCESS,
  GET_VEHICLESCATEGORYSUBCATEGORY_FAIL,
  GET_VEHICLESCATEGORYSUBCATEGORY_LOAD,
  GET_VEHICLESCATEGORYSUBCATEGORY_SUCCESS,
  GET_VEHICLE_BYID_FAIL,
  GET_VEHICLE_BYID_LOAD,
  GET_VEHICLE_BYID_SUCCESS,
} from "../ActionTypes/VehicleActionTypes";

const initialState = {
  load: false,
  success: null,
  error: null,
  vehicles: [],
  vehiclesCategory: [],
  vehicle: {},
  deletedVehicle: {},
  vehiclesCategorySubCategory: [],
};

const VehicleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_VEHICLES_LOAD:
      return { ...state, load: true };

    case GET_VEHICLES_SUCCESS:
      return { ...state, load: false, success: true, vehicles: payload };

    case GET_VEHICLES_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case GET_VEHICLESCATEGORY_LOAD:
      return { ...state, load: true };

    case GET_VEHICLESCATEGORY_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        vehiclesCategory: payload,
      };

    case GET_VEHICLESCATEGORY_FAIL:
      return {
        ...state,
        success: null,
        load: false,
        error: payload,
        vehiclesCategory: null,
      };

    case GET_VEHICLESCATEGORYSUBCATEGORY_LOAD:
      return { ...state, load: true };

    case GET_VEHICLESCATEGORYSUBCATEGORY_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        vehiclesCategorySubCategory: payload,
      };

    case GET_VEHICLESCATEGORYSUBCATEGORY_FAIL:
      return {
        ...state,
        success: null,
        load: false,
        error: payload,
        vehiclesCategorySubCategory: null,
      };
    case ADD_VEHICLES_SUCCESS:
      return { ...state, load: false, success: true };

    case ADD_VEHICLES_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case ADD_VEHICLES_LOAD:
      return { ...state, load: true };
    case GET_VEHICLE_BYID_LOAD:
      return { ...state, load: true };

    case GET_VEHICLE_BYID_SUCCESS:
      return { ...state, load: false, success: true, vehicle: payload };

    case GET_VEHICLE_BYID_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case DELETE_VEHICLES_BYID_LOAD:
      return { ...state, load: true };

    case DELETE_VEHICLES_BYID_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        deletedVehicle: payload,
      };

    case DELETE_VEHICLES_BYID_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case EDIT_VEHICLES_LOAD:
      return { ...state, load: true };

    case EDIT_VEHICLES_SUCCESS:
      return { ...state, load: false, success: true };

    case EDIT_VEHICLES_FAIL:
      return { ...state, success: null, load: false, error: payload };

    default:
      return state;
  }
};

export default VehicleReducer;
