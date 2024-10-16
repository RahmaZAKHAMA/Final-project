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
import axios from "axios";

// get cars action
export const getHomeGardens = () => async (dispatch) => {console.log("hello");
  dispatch({ type: GET_HOMEGARDEN_LOAD });
  console.log("hello");
  try {
    const result = await axios.get("/api/HomeGarden/getHomeGardens");
    dispatch({ type: GET_HOMEGARDEN_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_HOMEGARDEN_FAIL, payload: error });
  }
};

export const getHomeGardensByCategory = (category) => async (dispatch) => {
  dispatch({ type: GET_HOMEGARDENCATEGORY_LOAD });
  try {
    const result = await axios.get(
      `/api/HomeGarden/getHomeGardenByCategory/${category}`
    );
    dispatch({ type: GET_HOMEGARDENCATEGORY_SUCCESS, payload: result.data });
    console.log("datahomegardendecor" + result.data);
  } catch (error) {
    dispatch({ type: GET_HOMEGARDENCATEGORY_FAIL, payload: error });
  }
};
export const addHomeGarden = (newHG) => async (dispatch) => {
  console.log("Action", newHG);
  dispatch({ type: ADD_HOMEGARDEN_LOAD });
  try {
    const result = await axios.post("/api/HomeGarden/addHomeGarden", newHG);
    dispatch({ type: ADD_HOMEGARDEN_SUCCESS, payload: result.data });

    //  dispatch(getCars());
  } catch (error) {
    dispatch({ type: ADD_HOMEGARDEN_FAIL, payload: error });
  }
};
  export const getHomeGardenById = (id) => async (dispatch) => {
    dispatch({ type: GET_HOMEGARDEN_BYID_LOAD });

    try {
      const result = await axios.get(`/api/HomeGarden/getHomeGardenById/${id}`);
      dispatch({ type: GET_HOMEGARDEN_BYID_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: GET_HOMEGARDEN_BYID_FAIL, payload: error });
    }
  };

    export const deleteHomeGardenById =
      (id) =>
      async (dispatch) => {
        console.log("first delete")
        dispatch({ type: DELETE_HOMEGARDEN_BYID_LOAD });
        try {
          const result = await axios.delete(
            `/api/HomeGarden/deleteHomeGarden/${id}`
          );
          dispatch({
            type: DELETE_HOMEGARDEN_BYID_SUCCESS,
            payload: result.data,
          });
          
        } catch (error) {
          dispatch({ type: DELETE_HOMEGARDEN_BYID_FAIL, payload: error });
        }
      };

       export const editHomeGarden =
         (id, newCar) =>
         async (dispatch) => {
           dispatch({ type: EDIT_HOMEGARDEN_LOAD });
           try {
             const result = await axios.put(
               `/api/HomeGarden/editHomeGarden/${id}`,
               newCar
             );
             dispatch({ type: EDIT_HOMEGARDEN_SUCCESS, payload: result.data });
             dispatch(getHomeGardenById(id));
           } catch (error) {
             dispatch({ type: EDIT_HOMEGARDEN_FAIL, payload: error });
           }
         }; 
