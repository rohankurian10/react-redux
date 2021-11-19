/* eslint-disable default-case */
import { createStore } from "redux";

// let initState = {
//   counter: 0,
// };

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
