import { FORM_REQUEST, DELETE_SINGLE_DATA,UPDATE_SINGLE_DATA,DELETE_MULTIPLE_DATA } from "../constants/actionTypes.js";

export const formRequest = (data) => {
  console.log("formAction", data);
  return {
    type: FORM_REQUEST,
    payload: {
      data,
    },
  };
};

export const delFormData = (data) => {
  console.log("formAction", data);
  return {
    type: DELETE_SINGLE_DATA,
    payload: {
      data,
    },
  };
};

export const updateFormData = (data) => {
  console.log("formAction", data);
  return {
    type: UPDATE_SINGLE_DATA,
    payload: {
      data,
    },
  };
};

export const deleteMultipleData = (data) => {
  console.log("formAction", data);
  return {
    type: DELETE_MULTIPLE_DATA,
    payload: {
      data,
    },
  };
};

