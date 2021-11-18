import { createStore } from "redux";

// let initState = {
//   counter: 0,
// };

const counterReducer = (state = { counter: "0" }, action) => {
  if (action.type === "INC") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DEC") {
    return {
      counter: state.counter - 1,
    };
  }
  console.log(state.counter);
};

const store = createStore(counterReducer);

export default store;
