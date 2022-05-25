const counterInitialState = {
  value: 0,
};
const counterReducer = (state = counterInitialState, action) => {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case "counterRedux/incremented":
      return { ...state, value: state.value + 1 };
    case "counterRedux/decremented":
      return { ...state, value: state.value - 1 };
    // case "counterRedux/incrementTwo":
    //   return { ...state, value: state.value + 2 };
    default:
      return state;
  }
};

export default counterReducer;
