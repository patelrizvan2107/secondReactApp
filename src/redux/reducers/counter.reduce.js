import { DECREMENT_HANDLE, INCREMENT_HANDLE } from "../actionType";

const intialState = {
  count: 0,
};

export const counterReducer = ( state = intialState, action) => {
console.log(action);

  switch (action.type) {
    case INCREMENT_HANDLE:
      return {
        count: state.count + 1,
      };

    case DECREMENT_HANDLE:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};
