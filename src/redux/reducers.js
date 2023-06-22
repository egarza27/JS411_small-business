import { combineReducers } from "redux";

const listings = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.payload];
    case "REMOVE_LISTING":
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ listings });
