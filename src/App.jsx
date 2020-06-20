import React, { useReducer } from "react";
import "./styles/styles.scss";
import Form from "./parts/Form";
import reducer, { initialState } from "./store/reducer";
import Comments from "./parts/Comments";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <div className="App">
          <div className="App-header">
            <div className="App-form">
              <Form />
            </div>
          </div>
          <div>chart</div>
          <div>
            <Comments />
          </div>
        </div>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
