import { combineReducers } from "redux";

const user = (state = null) => state;

// add switch statements in here
const cars = (state = [], action) => {
  switch (action.type) {
    case "ADD_CAR":
      return [...state, action.value];
    case "REMOVE_CAR":
      let newState = [...state];
      let findCar = newState.find(x => x.id === action.value)
      let index = newState.indexOf(findCar)
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({ user, cars });
