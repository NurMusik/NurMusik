import React, { Component } from "react";
import "./App.css";
import Player from "./jsx/Player";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const App = () => {
  return (
    <div>
      <h1>Nur Musik</h1>
      <Player />
      {/* <AudioPlayer /> */}
    </div>
  );
};

export default App;
