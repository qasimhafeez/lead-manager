import axios from "axios";
import { createMessage, returnErrors } from "./messages";
// Get Types
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

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
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE_LEAD
export const deleteLead = (id) => (dispatch) => {
  axios
    .delete(`/api/leads/${id}/`)
    .then((res) => {
      dispatch(createMessage({ leadDeleted: "Lead Deleted!" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD_LEAD
export const addLead = (lead) => (dispatch) => {
  axios
    .post("/api/leads/", lead)
    .then((res) => {
      dispatch(createMessage({ leadAdded: "Lead Added!" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
