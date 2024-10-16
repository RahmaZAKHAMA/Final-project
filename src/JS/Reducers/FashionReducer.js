import {
  ADD_FASHION_FAIL,
  ADD_FASHION_LOAD,
  ADD_FASHION_SUCCESS,
  DELETE_FASHION_BYID_FAIL,
  DELETE_FASHION_BYID_LOAD,
  DELETE_FASHION_BYID_SUCCESS,
  EDIT_FASHION_FAIL,
  EDIT_FASHION_LOAD,
  EDIT_FASHION_SUCCESS,
  GET_FASHION_FAIL,
  GET_FASHION_LOAD,
  GET_FASHION_SUCCESS,
  GET_FASHIONCATEGORY_FAIL,
  GET_FASHIONCATEGORY_LOAD,
  GET_FASHIONCATEGORY_SUCCESS,
  GET_FASHIONCATEGORYSUBCATEGORY_FAIL,
  GET_FASHIONCATEGORYSUBCATEGORY_LOAD,
  GET_FASHIONCATEGORYSUBCATEGORY_SUCCESS,
  GET_FASHION_BYID_FAIL,
  GET_FASHION_BYID_LOAD,
  GET_FASHION_BYID_SUCCESS,
} from "../ActionTypes/FashionActionTypes";

const initialState = {
  load: false,
  success: null,
  error: null,
  Fashions: [],
  FashionCategory: [],
  FashionCategorySubCategory:[],
  Fashion: {},
  deletedFashion: {},
};

const FashionReducer = (state = initialState, { type, payload }) => {
 
  switch (type) {
    case GET_FASHION_LOAD:
      return { ...state, load: true };

    case GET_FASHION_SUCCESS:
      return { ...state, load: false, success: true, Fashions: payload };

    case GET_FASHION_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case GET_FASHIONCATEGORY_LOAD:
      return { ...state, load: true };

    case GET_FASHIONCATEGORY_SUCCESS:
      return { ...state, load: false, success: true, FashionCategory: payload };

    case GET_FASHIONCATEGORY_FAIL:
      return {
        ...state,
        success: null,
        load: false,
        error: payload,
        FashionCategory: null,
      };

    case GET_FASHIONCATEGORY_LOAD:
      return { ...state, load: true };

    case GET_FASHIONCATEGORY_SUCCESS:
      return { ...state, load: false, success: true, FashionCategory: payload };

    case GET_FASHIONCATEGORY_FAIL:
      return {
        ...state,
        success: null,
        load: false,
        error: payload,
        FashionCategory: null,
      };
    case GET_FASHIONCATEGORYSUBCATEGORY_LOAD:
      return { ...state, load: true };

    case GET_FASHIONCATEGORYSUBCATEGORY_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        FashionCategorySubCategory: payload,
      };

    case GET_FASHIONCATEGORYSUBCATEGORY_FAIL:
      return {
        ...state,
        success: null,
        load: false,
        error: payload,
        FashionCategorySubCategory: null,
      };
    case ADD_FASHION_SUCCESS:
      return { ...state, load: false, success: true };

    case ADD_FASHION_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case ADD_FASHION_LOAD:
      return { ...state, load: true };
    case GET_FASHION_BYID_LOAD:
      return { ...state, load: true };

    case GET_FASHION_BYID_SUCCESS:
      return { ...state, load: false, success: true, Fashion: payload };

    case GET_FASHION_BYID_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case DELETE_FASHION_BYID_LOAD:
      return { ...state, load: true };

    case DELETE_FASHION_BYID_SUCCESS:
      return { ...state, load: false, success: true, deletedFashion: payload };

    case DELETE_FASHION_BYID_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case EDIT_FASHION_LOAD:
      return { ...state, load: true };

    case EDIT_FASHION_SUCCESS:
      return { ...state, load: false, success: true };

    case EDIT_FASHION_FAIL:
      return { ...state, success: null, load: false, error: payload };

    default:
      return state;
  }
};

export default FashionReducer;
