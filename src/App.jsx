import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Home from "./components/Home/Home"
const App = () => {

  return(<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/audioPlayer" element={<AudioPlayer />} />
      </Routes>
    </BrowserRouter>)
  
};

export default App;
