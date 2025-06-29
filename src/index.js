import "./index.css";
import { state, subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { addPost, addNewPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} addNewPostText={addNewPostText} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

