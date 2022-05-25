import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActiveTab } from "./features/tab/tabSlice";
import "./ReduxTKExample.css";

import { MockList } from "./features/mockList/MockList";
import { Counter } from "./features/counter/Counter";
import { Todo } from "./features/todo/Todo";
import Person from "./features/person/Person";

const Tabs = () => {
  const activeTab = useSelector((state) => state.tab.activeTab);
  const dispatch = useDispatch();

  const changeTab = (tab) => {
    dispatch(changeActiveTab(tab));
  };

  const componentByTab = (tab) => {
    switch (tab) {
      case "list":
        return <MockList />;
      case "counter":
        return <Counter />;
      case "status":
        return <Person />;
      case "todo":
        return <Todo />;
      default:
        return <h3>Pick an option</h3>;
    }
  };

  const tabsOptions = [
    { id: "list", label: "List" },
    { id: "status", label: "Status" },
    { id: "counter", label: "Counter" },
    { id: "todo", label: "To do" },
  ];

  return (
    <div className="Tabs">
      <ul className="nav">
        {tabsOptions.map((tab) => {
          return (
            <li
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => changeTab(tab.id)}
            >
              {tab.label}
            </li>
          );
        })}
      </ul>
      <div className="outlet">{componentByTab(activeTab)}</div>
    </div>
  );
};

function ReduxTKExample() {
  return (
    <div>
      <h3>Redux Toolkit Example</h3>
      <Tabs />
    </div>
  );
}

export default ReduxTKExample;
