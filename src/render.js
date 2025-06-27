import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { addPost, addInput } from "./redux/state";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

export const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} addInput={addInput} />
      </BrowserRouter>
    </React.StrictMode>
  );
};