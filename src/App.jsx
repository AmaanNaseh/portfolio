import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VoiceNavigation from "./components/VoiceNavigation";

const App = () => {
  return (
    <>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <VoiceNavigation />
      </div>
    </>
  );
};

export default App;
