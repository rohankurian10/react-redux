import { createStore } from "redux";

let initState = {
  counter: 0,
  flag: true,
};

const counterReducer = (state = { initState }, action) => {
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
};

const store = createStore(counterReducer);

export default store;
