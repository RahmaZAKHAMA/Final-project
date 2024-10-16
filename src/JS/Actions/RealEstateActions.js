
import {
  ADD_REALESTATE_FAIL,
  ADD_REALESTATE_LOAD,
  ADD_REALESTATE_SUCCESS,
  GET_REALESTATE_BYID_FAIL,
  GET_REALESTATE_BYID_LOAD,
  GET_REALESTATE_BYID_SUCCESS,
  EDIT_REALESTATE_FAIL,
  EDIT_REALESTATE_LOAD,
  EDIT_REALESTATE_SUCCESS,
  GET_REALESTATE_FAIL,
  GET_REALESTATE_LOAD,
  GET_REALESTATE_SUCCESS,
  GET_REALESTATECATEGORY_FAIL,
  GET_REALESTATECATEGORY_LOAD,
  GET_REALESTATECATEGORY_SUCCESS,
  DELETE_REALESTATE_BYID_FAIL,
  DELETE_REALESTATE_BYID_LOAD,
  DELETE_REALESTATE_BYID_SUCCESS,
} from "../ActionTypes/RealEstateActionTypes";
import axios from "axios";

// get cars action
export const getRealEstates = () => async (dispatch) => {
  dispatch({ type: GET_REALESTATE_LOAD });
  try {
    const result = await axios.get("/api/RealEstate/getRealEstates");
    dispatch({ type: GET_REALESTATE_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_REALESTATE_FAIL, payload: error });
  }
};


export const getRealEstateByCategory = (category) => async (dispatch) => {
 
  dispatch({ type: GET_REALESTATECATEGORY_LOAD });
  try {
    const result = await axios.get(
      `/api/RealEstate/getRealEstatesByCategory/${category}`
    );
    dispatch({ type: GET_REALESTATECATEGORY_SUCCESS, payload: result.data });
    console.log("data"+result.data);
  } catch (error) {
    dispatch({ type: GET_REALESTATECATEGORY_FAIL, payload: error });
  }
};

export const addRealEstate =
  (newRealEstate ) =>
  async (dispatch) => {
    console.log("Action",newRealEstate);
    dispatch({ type: ADD_REALESTATE_LOAD });
    try {
      const result = await axios.post(
        "/api/RealEstate/addRealEstate",
        newRealEstate
      );
      dispatch({ type: ADD_REALESTATE_SUCCESS, payload: result.data });
   
    //  dispatch(getCars());
    } catch (error) {
      dispatch({ type: ADD_REALESTATE_FAIL, payload: error });
    }
  };

  export const getRealEstateById = (id) => async (dispatch) => {
    dispatch({ type: GET_REALESTATE_BYID_LOAD });
    try {
      const result = await axios.get(`/api/RealEstate/getRealEstateById/${id}`);
      dispatch({ type: GET_REALESTATE_BYID_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: GET_REALESTATE_BYID_FAIL, payload: error });
    }
  };
  
  export const deleteRealEstateById =
    (id, navigate) =>
    async (dispatch) => {
      dispatch({ type: DELETE_REALESTATE_BYID_LOAD });
      try {
        const result = await axios.delete(
          `/api/RealEstate/deleteRealEstate/${id}`
        );
        dispatch({
          type: DELETE_REALESTATE_BYID_SUCCESS,
          payload: result.data,
        });
        
      } catch (error) {
        dispatch({ type: DELETE_REALESTATE_BYID_FAIL, payload: error });
      }
    };

       export const editRealEstate =
         ( id, newCar) =>
         async (dispatch) => {
          console.log("realEstate edit:", newCar);
           dispatch({ type: EDIT_REALESTATE_LOAD });
           try {
             const result = await axios.put(
               `/api/RealEstate/editRealEstate/${id}`,
               newCar
             );
             dispatch({ type: EDIT_REALESTATE_SUCCESS, payload: result.data });
             dispatch(getRealEstateById(id));
           } catch (error) {
             dispatch({ type: EDIT_REALESTATE_FAIL, payload: error });
           }
         }; 