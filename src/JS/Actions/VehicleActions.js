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
import axios from "axios";

// get cars action
export const getVehicles = () => async (dispatch) => {
  dispatch({ type: GET_VEHICLES_LOAD });
  try {
    const result = await axios.get("/api/Vehicles/getVehicles");
    dispatch({ type: GET_VEHICLES_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_VEHICLES_FAIL, payload: error });
  }
};
export const getVehiclesByCategorySubCategory =
  (category, subcategory) => async (dispatch) => {
    dispatch({ type: GET_VEHICLESCATEGORYSUBCATEGORY_LOAD });
    try {
      const result = await axios.get(
        `/api/Vehicles/getVehicleByCategoryAndSubcategory/${category}/${subcategory}`
      );
      dispatch({
        type: GET_VEHICLESCATEGORYSUBCATEGORY_SUCCESS,
        payload: result.data,
      });

      console.log("data" + result.data);
    } catch (error) {
      dispatch({ type: GET_VEHICLESCATEGORYSUBCATEGORY_FAIL, payload: error });
    }
  };

  export const getVehiclesByCategory = (category) => async (dispatch) => {
    dispatch({ type: GET_VEHICLESCATEGORY_LOAD });
    try {
      const result = await axios.get(
        `/api/Vehicles/getVehicleByCategory/${category}`
      );
      dispatch({ type: GET_VEHICLESCATEGORY_SUCCESS, payload: result.data });
      console.log("data" + result.data);
    } catch (error) {
      dispatch({ type: GET_VEHICLESCATEGORY_FAIL, payload: error });
    }
  };

  export const addVehicle= (newVehicle) => async (dispatch) => {
    console.log("Action", newVehicle);
    dispatch({ type: ADD_VEHICLES_LOAD });
    try {
      const result = await axios.post("/api/Vehicles/addVehicle", newVehicle);
      dispatch({ type: ADD_VEHICLES_SUCCESS, payload: result.data });

      //  dispatch(getCars());
    } catch (error) {
      dispatch({ type: ADD_VEHICLES_FAIL, payload: error });
    }
  };

   export const getVehicleById = (id) => async (dispatch) => {
     dispatch({ type: GET_VEHICLE_BYID_LOAD });
     try {
       const result = await axios.get(
         `/api/Vehicles/getVehiclesById/${id}`
       );
       dispatch({ type: GET_VEHICLE_BYID_SUCCESS, payload: result.data });
     } catch (error) {
       dispatch({ type: GET_VEHICLE_BYID_FAIL, payload: error });
     }
   };

       export const deleteVehicleById =
         (id) =>
         async (dispatch) => {
           dispatch({ type: DELETE_VEHICLES_BYID_LOAD });
           try {
             const result = await axios.delete(
               `/api/Vehicles/deleteVehicles/${id}`
             );
             dispatch({
               type: DELETE_VEHICLES_BYID_SUCCESS,
               payload: result.data,
             });
             
           } catch (error) {
             dispatch({ type: DELETE_VEHICLES_BYID_FAIL, payload: error });
           }
         };

   export const editVehicle =
     (id, newCar) =>
     async (dispatch) => {
       dispatch({ type: EDIT_VEHICLES_LOAD });
       try {
         const result = await axios.put(
           `/api/Vehicles/editVehicles/${id}`,
           newCar
         );
         dispatch({ type: EDIT_VEHICLES_SUCCESS, payload: result.data });
         dispatch(getVehicleById(id));
       } catch (error) {
         dispatch({ type: EDIT_VEHICLES_FAIL, payload: error });
       }
     };      
