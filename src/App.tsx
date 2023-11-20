import "./App.css";
import Nav from "./nav/Nav";
import Splash from "./splash/Splash";
import Tiles from "./tiles/Tiles";
import React from "react";

function App() {
  return (
    <body className="bg-gray-100 font-sans">
      <Nav />
      <Splash />
      <Tiles />
    </body>
  );
}

export default App;
