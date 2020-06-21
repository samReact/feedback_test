import React, { useReducer } from "react";
import "./styles/styles.scss";
import Form from "./parts/Form";
import reducer, { initialState } from "./store/reducer";
import Comments from "./parts/Comments";
import Chart from "./parts/Chart";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <div className="App-form">
            <Form />
          </div>
          <div className="App-chart">
            <Chart />
          </div>
          <div className="App-comments">
            <Comments />
          </div>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
