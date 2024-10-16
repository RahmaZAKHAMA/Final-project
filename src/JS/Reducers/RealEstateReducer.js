import {
  ADD_REALESTATE_FAIL,
  ADD_REALESTATE_LOAD,
  ADD_REALESTATE_SUCCESS,
  DELETE_REALESTATE_BYID_FAIL,
  DELETE_REALESTATE_BYID_LOAD,
  DELETE_REALESTATE_BYID_SUCCESS,
  EDIT_REALESTATE_FAIL,
  EDIT_REALESTATE_LOAD,
  EDIT_REALESTATE_SUCCESS,
  GET_REALESTATE_FAIL,
  GET_REALESTATE_LOAD,
  GET_REALESTATE_SUCCESS,
  GET_REALESTATECATEGORY_FAIL,
  GET_REALESTATECATEGORY_LOAD,
  GET_REALESTATECATEGORY_SUCCESS,
  GET_REALESTATE_BYID_FAIL,
  GET_REALESTATE_BYID_LOAD,
  GET_REALESTATE_BYID_SUCCESS,
} from "../ActionTypes/RealEstateActionTypes";

const initialState = {
  load: false,
  success: null,
  error: null,
  RealEstates: [],
  RealEstate: {},
  deletedRealEstate: {},
  RealEstateCategory: [],
};

const RealEstateReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case GET_REALESTATE_LOAD:
      return { ...state, load: true };

    case GET_REALESTATE_SUCCESS:
      return { ...state, load: false, success: true, RealEstates: payload };

    case GET_REALESTATE_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case GET_REALESTATECATEGORY_LOAD:
      return { ...state, load: true };

    case GET_REALESTATECATEGORY_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        RealEstateCategory: payload,
      };

    case GET_REALESTATECATEGORY_FAIL:
      return {
        ...state,
        success: null,
        load: false,
        error: payload,
        RealEstateCategory: null,
      };
    case ADD_REALESTATE_SUCCESS:
      return { ...state, load: false, success: true };

    case ADD_REALESTATE_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case ADD_REALESTATE_LOAD:
      return { ...state, load: true };
    case GET_REALESTATE_BYID_LOAD:
      return { ...state, load: true };

    case GET_REALESTATE_BYID_SUCCESS:
      return { ...state, load: false, success: true, RealEstate: payload };

    case GET_REALESTATE_BYID_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case DELETE_REALESTATE_BYID_LOAD:
      return { ...state, load: true };

    case DELETE_REALESTATE_BYID_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        deletedRealEstate: payload,
      };

    case DELETE_REALESTATE_BYID_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case EDIT_REALESTATE_LOAD:
      return { ...state, load: true };

    case EDIT_REALESTATE_SUCCESS:
      return { ...state, load: false, success: true };

    case EDIT_REALESTATE_FAIL:
      return { ...state, success: null, load: false, error: payload };
    default:
      return state;
  }
};

export default RealEstateReducer;
