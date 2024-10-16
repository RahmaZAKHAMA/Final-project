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
import axios from "axios";

// get cars action
export const getVacations = () => async (dispatch) => {
  dispatch({ type: GET_VACATION_LOAD });
  
  try {
    const result = await axios.get("/api/Vacation/getVacations");
    dispatch({ type: GET_VACATION_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_VACATION_FAIL, payload: error });
  }
};

export const getVacationsByCategory = (category) => async (dispatch) => {
  dispatch({ type: GET_VACATIONCATEGORY_LOAD });
  try {
    const result = await axios.get(
      `/api/Vacation/getVacationByCategory/${category}`
    );
    dispatch({ type: GET_VACATIONCATEGORY_SUCCESS, payload: result.data });
    console.log("data" + result.data);
  } catch (error) {
    dispatch({ type: GET_VACATIONCATEGORY_FAIL, payload: error });
  }
};

export const addVacation = (newVacation) => async (dispatch) => {
  console.log("Action", newVacation);
  dispatch({ type: ADD_VACATION_LOAD });
  try {
    const result = await axios.post("/api/Vacation/addVacation", newVacation);
    dispatch({ type: ADD_VACATION_SUCCESS, payload: result.data });

    //  dispatch(getCars());
  } catch (error) {
    dispatch({ type: ADD_VACATION_FAIL, payload: error });
  }
};

   export const getVacationById = (id) => async (dispatch) => {
     dispatch({ type: GET_VACATION_BYID_LOAD });
     try {
       const result = await axios.get(`/api/Vacation/getVacationById/${id}`);
       dispatch({ type: GET_VACATION_BYID_SUCCESS, payload: result.data });
     } catch (error) {
       dispatch({ type: GET_VACATION_BYID_FAIL, payload: error });
     }
   };
       export const deleteVacationById =
         (id) =>
         async (dispatch) => {
           dispatch({ type: DELETE_VACATION_BYID_LOAD });
           try {
             const result = await axios.delete(
               `/api/Vacation/deleteVacation/${id}`
             );
             dispatch({
               type: DELETE_VACATION_BYID_SUCCESS,
               payload: result.data,
             });
            
           } catch (error) {
             dispatch({ type: DELETE_VACATION_BYID_FAIL, payload: error });
           }
         };

            export const editVacation =
              (id, newCar) =>
              async (dispatch) => {
                dispatch({ type: EDIT_VACATION_LOAD });
                try {
                  const result = await axios.put(
                    `/api/Vacation/editVacation/${id}`,
                    newCar
                  );
                  dispatch({
                    type: EDIT_VACATION_SUCCESS,
                    payload: result.data,
                  });
                  dispatch(getVacationById(id));
                } catch (error) {
                  dispatch({ type: EDIT_VACATION_FAIL, payload: error });
                }
              };   
