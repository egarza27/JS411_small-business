import { combineReducers } from "redux";

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      console.log(state, action);
      return [...state, action.value];
    case "REMOVE_LISTING":
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ listings });
