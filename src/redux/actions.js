// Simple actions

export const incremented = {
  type: "counterRedux/incremented",
};

export const decremented = {
  type: "counterRedux/decremented",
};

// export const incrementTwo = {
//   type: "counterRedux/incrementTwo",
// };

// To do
export const todoLoading = {
  type: "counterRedux/todoLoading",
};

export const todosLoaded = (todo) => ({
  type: "counterRedux/todosLoaded",
  payload: todo,
});

// Tabs
export const changeActiveTab = (tab) => ({
  type: "counterRedux/changeActiveTab",
  payload: tab,
});

// Person
export const changePersonStatus = (status) => ({
  type: "counterRedux/changePersonStatus",
  payload: status,
});
