import "./index.css";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

setInterval(() => {
  store.dispatch({type: "FAKE"})
}, 1000)

const root = ReactDOM.createRoot(document.getElementById("root"));
  // debugger
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );

