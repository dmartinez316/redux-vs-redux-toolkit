import sharing from "./sharing.png";
import "./App.css";
import storeRedux from "./redux/storeRedux";
import { storeRTK } from "./redux-toolkit/storeRTK";
import ReduxExample from "./redux/ReduxExample";
import ReduxTKExample from "./redux-toolkit/ReduxTKExample.jsx";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={sharing} className="App-logo" alt="logo" />
        <h2 className="title">REDUX VS REDUX TOOLKIT</h2>
        <div className="examples-container">
          <div className="redux-example-container">
            <Provider store={storeRedux}>
              <ReduxExample />
            </Provider>
          </div>
          <div className="rtk-example-container">
            <Provider store={storeRTK}>
              <ReduxTKExample />
            </Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
