import React from "react";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Drawing from "./pages/Drawing";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-[rgba(0,0,0,0.9)] text-white">
      <Drawing />
    </div>
  );
};

export default App;
