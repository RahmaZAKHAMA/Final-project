import {
  ADD_VACATION_FAIL,
  ADD_VACATION_LOAD,
  ADD_VACATION_SUCCESS,
  DELETE_VACATION_BYID_FAIL,
  DELETE_VACATION_BYID_LOAD,
  DELETE_VACATION_BYID_SUCCESS,
  EDIT_VACATION_FAIL,
  EDIT_VACATION_LOAD,
  EDIT_VACATION_SUCCESS,
  GET_VACATION_FAIL,
  GET_VACATION_LOAD,
  GET_VACATION_SUCCESS,
  GET_VACATIONCATEGORY_FAIL,
  GET_VACATIONCATEGORY_LOAD,
  GET_VACATIONCATEGORY_SUCCESS,
  GET_VACATION_BYID_FAIL,
  GET_VACATION_BYID_LOAD,
  GET_VACATION_BYID_SUCCESS,
} from "../ActionTypes/VacationActionTypes";

const initialState = {
  load: false,
  success: null,
  error: null,
 Vacations: [],
  Vacation: {},
  deletedVacation: {},
  vacationCategory:[],
};

const VacationReducer = (state = initialState, { type, payload }) => {
 
  switch (type) {
    case GET_VACATION_LOAD:
      return { ...state, load: true };

    case GET_VACATION_SUCCESS:
      return { ...state, load: false, success: true, Vacations: payload };

    case GET_VACATION_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case GET_VACATIONCATEGORY_LOAD:
      return { ...state, load: true };

    case GET_VACATIONCATEGORY_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        VacationsCategory: payload,
      };

    case GET_VACATIONCATEGORY_FAIL:
      return {
        ...state,
        success: null,
        load: false,
        error: payload,
        VacationsCategory: null,
      };
    case ADD_VACATION_SUCCESS:
      return { ...state, load: false, success: true };

    case ADD_VACATION_FAIL:
      return { ...state, success: null, load: false, error: payload };

    case ADD_VACATION_LOAD:
      return { ...state, load: true };
    case GET_VACATION_BYID_LOAD:
      return { ...state, load: true };

    case GET_VACATION_BYID_SUCCESS:
      return { ...state, load: false, success: true, Vacation: payload };

    case GET_VACATION_BYID_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case DELETE_VACATION_BYID_LOAD:
      return { ...state, load: true };

    case DELETE_VACATION_BYID_SUCCESS:
      return {
        ...state,
        load: false,
        success: true,
        deletedVacation: payload,
      };

    case DELETE_VACATION_BYID_FAIL:
      return { ...state, success: null, load: false, error: payload };
    case EDIT_VACATION_LOAD:
      return { ...state, load: true };

    case EDIT_VACATION_SUCCESS:
      return { ...state, load: false, success: true };

    case EDIT_VACATION_FAIL:
      return { ...state, success: null, load: false, error: payload };
    default:
      return state;
  }
};

export default VacationReducer;
