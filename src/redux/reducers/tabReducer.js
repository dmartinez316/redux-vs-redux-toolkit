const tabInitialState = {
  activeTab: undefined,
};
const tabReducer = (state = tabInitialState, action) => {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case "counterRedux/changeActiveTab":
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};

export default tabReducer;
