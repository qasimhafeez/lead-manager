import axios from "axios";
// Get Types
import { GET_LEADS } from "./types";

// GET_LEADS
export const getLeads = () => (dispatch) => {
  axios
    .get("/api/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE_LEAD
export const deleteLead = (id) => (dispatch) => {
  axios
    .get(`/api/leads/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};