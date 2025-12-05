import "./index.css";
import reduxStore from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store";
import AppToolkit from "./AppToolkit";

setInterval(() => {
  reduxStore.dispatch({type: "FAKE"})
}, 1000)

const root = ReactDOM.createRoot(document.getElementById("root"));
  // debugger
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={reduxStore}>
          <App />
        </Provider>
        {/* <Provider store={store}>
          <AppToolkit />
        </Provider> */}
      </BrowserRouter>
    </React.StrictMode>
  );

