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
import axios from "axios";

// get cars action
export const getFashions = () => async (dispatch) => {console.log("hello");
  dispatch({ type: GET_FASHION_LOAD });
  console.log("hello");
  try {
    const result = await axios.get("/api/Fashion/getFashions");
    dispatch({ type: GET_FASHION_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_FASHION_FAIL, payload: error });
  }
};

export const getFashionByCategory = (category) => async (dispatch) => {
  dispatch({ type: GET_FASHIONCATEGORY_LOAD });
  try {
    const result = await axios.get(
      `/api/Fashion/getFashionByCategory/${category}`
    );
    dispatch({ type: GET_FASHIONCATEGORY_SUCCESS, payload: result.data });
    console.log("data" + result.data);
  } catch (error) {
    dispatch({ type: GET_FASHIONCATEGORY_FAIL, payload: error });
  }
};

export const getFashionByCategorySubCategory = (category,subcategory) => async (dispatch) => {
  
  dispatch({ type: GET_FASHIONCATEGORYSUBCATEGORY_LOAD });
  try {
    const result = await axios.get(
      `/api/Fashion/getFashionByCategoryAndSubcategory/${category}/${subcategory}`
    );
    dispatch({
      type: GET_FASHIONCATEGORYSUBCATEGORY_SUCCESS,
      payload: result.data,
    });
   
    console.log("data" + result.data);
  } catch (error) {
    dispatch({ type: GET_FASHIONCATEGORYSUBCATEGORY_FAIL, payload: error });
  }
};

export const addFashion = (newFashion) => async (dispatch) => {
  console.log("Action", newFashion);
  dispatch({ type: ADD_FASHION_LOAD });
  try {
    const result = await axios.post("/api/Fashion/addFashion", newFashion);
    dispatch({ type: ADD_FASHION_SUCCESS, payload: result.data });

    //  dispatch(getCars());
  } catch (error) {
    dispatch({ type: ADD_FASHION_FAIL, payload: error });
  }
};


  export const getFashionById = (id) => async (dispatch) => {
    dispatch({ type: GET_FASHION_BYID_LOAD });

    try {
      const result = await axios.get(`/api/Fashion/getFashionById/${id}`);
      dispatch({ type: GET_FASHION_BYID_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: GET_FASHION_BYID_FAIL, payload: error });
    }
  };
    export const deleteFashionById =
      (id) =>
      async (dispatch) => {
        dispatch({ type: DELETE_FASHION_BYID_LOAD });
        try {
          const result = await axios.delete(`/api/Fashion/deleteFashion/${id}`);
          dispatch({
            type: DELETE_FASHION_BYID_SUCCESS,
            payload: result.data,
          });
          
        } catch (error) {
          dispatch({ type: DELETE_FASHION_BYID_FAIL, payload: error });
        }
      };

        export const editFashion =
          (id, newCar) =>
          async (dispatch) => {
            dispatch({ type: EDIT_FASHION_LOAD });
            try {
              const result = await axios.put(
                `/api/Fashion/editFashion/${id}`,
                newCar
              );
              dispatch({ type: EDIT_FASHION_SUCCESS, payload: result.data });
              dispatch(getFashionById(id));
            } catch (error) {
              dispatch({ type: EDIT_FASHION_FAIL, payload: error });
            }
          }; 