const personInitialState = {
  name: "Bob",
  lastName: "Rodriguez",
  age: "26",
  status: "safe",
};

const personReducer = (state = personInitialState, action) => {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case "counterRedux/changePersonStatus":
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export default personReducer;
