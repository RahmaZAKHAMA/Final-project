import {
  ADD_HOMEGARDEN_FAIL,
  ADD_HOMEGARDEN_LOAD,
  ADD_HOMEGARDEN_SUCCESS,
  DELETE_HOMEGARDEN_BYID_FAIL,
  DELETE_HOMEGARDEN_BYID_LOAD,
  DELETE_HOMEGARDEN_BYID_SUCCESS,
  EDIT_HOMEGARDEN_FAIL,
  EDIT_HOMEGARDEN_LOAD,
  EDIT_HOMEGARDEN_SUCCESS,
  GET_HOMEGARDEN_FAIL,
  GET_HOMEGARDEN_LOAD,
  GET_HOMEGARDEN_SUCCESS,
  GET_HOMEGARDENCATEGORY_FAIL,
  GET_HOMEGARDENCATEGORY_LOAD,
  GET_HOMEGARDENCATEGORY_SUCCESS,
  GET_HOMEGARDEN_BYID_FAIL,
  GET_HOMEGARDEN_BYID_LOAD,
  GET_HOMEGARDEN_BYID_SUCCESS,
} from "../ActionTypes/HomeGardenActionTypes";

const initialState = {
  load: false,
  success: null,
  error: null,
  HomeGardens: [],
  HomeGarden: {},
  deletedHomeGarden: {},
  HomeGardensCategory: [],
 
};

const HomeGardenReducer = (state = initialState, { type, payload }) => {
  
  switch (type) {
    case GET_HOMEGARDEN_LOAD:
      return { ...state, load: true };

    case GET_HOMEGARDEN_SUCCESS:
      return { ...state, load: false, success: true, HomeGardens: payload };

    case GET_HOMEGARDEN_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case GET_HOMEGARDENCATEGORY_LOAD:
      return { ...state, load: true };

    case GET_HOMEGARDENCATEGORY_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        HomeGardensCategory: payload,
      };

    case GET_HOMEGARDENCATEGORY_FAIL:
      return {
        ...state,
        success: null,
        load: false,
        error: payload,
        HomeGardensCategory: null,
      };
    case ADD_HOMEGARDEN_SUCCESS:
      return { ...state, load: false, success: true };

    case ADD_HOMEGARDEN_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case ADD_HOMEGARDEN_LOAD:
      return { ...state, load: true };
    case GET_HOMEGARDEN_BYID_LOAD:
      return { ...state, load: true };

    case GET_HOMEGARDEN_BYID_SUCCESS:
      return { ...state, load: false, success: true, HomeGarden: payload };

    case GET_HOMEGARDEN_BYID_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case DELETE_HOMEGARDEN_BYID_LOAD:
      return { ...state, load: true };

    case DELETE_HOMEGARDEN_BYID_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        deletedHomeGarden: payload,
      };

    case DELETE_HOMEGARDEN_BYID_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case EDIT_HOMEGARDEN_LOAD:
      return { ...state, load: true };

    case EDIT_HOMEGARDEN_SUCCESS:
      return { ...state, load: false, success: true };

    case EDIT_HOMEGARDEN_FAIL:
      return { ...state, success: null, load: false, error: payload };
    default:
      return state;
  }
};

export default HomeGardenReducer;
