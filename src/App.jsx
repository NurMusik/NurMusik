import React, { Component } from "react";
import "./App.css";
import Player from "./jsx/Player";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <div>
      <h1>Nur Musik</h1>
      <AudioPlayer />
    </div>
  );
};

export default App;
