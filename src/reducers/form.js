import * as actions from "../constants/actionTypes.js";
export const INITIAL_STATE = {
  userData: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.FORM_REQUEST:
      let userDataArr = Array.from(state.userData);
      userDataArr.push(action.payload.data);
      return {
        ...state,
        userData: userDataArr,
      };
    case actions.DELETE_SINGLE_DATA:
      let userDataArray = Array.from(state.userData);
      userDataArray.splice(action.payload.data, 1);
      return {
        ...state,
        userData: userDataArray,
      };
    case actions.UPDATE_SINGLE_DATA:
      let updateUserDataArray = Array.from(state.userData);
      updateUserDataArray[action.payload.data.index] = action.payload.data.data;
      return {
        ...state,
        userData: updateUserDataArray,
      };
    case actions.DELETE_MULTIPLE_DATA:
      let deleteUserData = Array.from(state.userData);
      console.log("action.payload.data", action.payload.data);

      let newUserData = [];

      deleteUserData.forEach((element, index) => {
        if (action.payload.data.indexOf(index) === -1) {
          newUserData.push(element);
        }
      });

      // action.payload.data.forEach((element) => {
      //   deleteUserData.splice(element, 1);
      // });
      console.log("deleteUserData", newUserData);
      return {
        ...state,
        userData: newUserData,
      };

    default:
      return state;
  }
};
