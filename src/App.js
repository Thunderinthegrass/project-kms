import React from "react";
import "./App.css";
import Header from "./Header";
import Technologies from "./Technologies";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Привет</h1>
      <Header />
      <Technologies />
      <Footer />
    </div>
  );
};

export default App;
