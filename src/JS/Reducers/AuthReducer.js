const {
  GET_USER_BYID_SUCCESS,
  GET_USER_BYID_FAIL,
  GET_USER_BYID_LOAD,
  REGISTER_USER_LOAD,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_LOAD,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  CURRENT_USER,
  CLEAR_ERRORS_AUTH,
  CLEAR_SUCCESS_AUTH,
} = require("../ActionTypes/AuthActionTypes");


const initialState = {
  user: null,
  loadUser: false,
  success: "",
  errors: null,
  isAuth: false,
  AdminAnnounce:null,
};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_LOAD:
      return { ...state, loadUser: true };

    case REGISTER_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.newUser,
        loadUser: false,
        success: payload.success,
        isAuth: true,
      };

    case REGISTER_USER_FAIL:
      return { ...state, load: false, errors: payload.error, success: null };

    case LOGIN_USER_LOAD:
      return { ...state, loadUser: true };

    case LOGIN_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.foundUser,
        loadUser: false,
        success: payload.success,
        isAuth: true,
      };

    case LOGIN_USER_FAIL:
      return { ...state, loadUser: false, errors: payload, success: null };

    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { ...state, user: null, isAuth: false };

    case CURRENT_USER:
      return { ...state, user: payload, loadUser: false, isAuth: true };

    case CLEAR_ERRORS_AUTH:
      return { ...state, errors: null };

    case CLEAR_SUCCESS_AUTH:
      return { ...state, success: null };

    case GET_USER_BYID_LOAD:
      return { ...state, load: true };

    case GET_USER_BYID_SUCCESS:
      return { ...state, load: false, success: true, AdminAnnounce: payload };

    case GET_USER_BYID_FAIL:
      return { ...state, success: null, load: false, error: payload };
    default:
      return state;
  }
};


export default AuthReducer;