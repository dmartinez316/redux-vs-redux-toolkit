const listInitialState = {
  title: "Mock List",
  elements: ["Element 1", "Element 2", "Element 3"],
};
const listReducer = (state = listInitialState, action) => {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;
