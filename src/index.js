import "./index.css";
import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  // debugger
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App state={state} store={store} />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => rerenderEntireTree(store.getState()));

