import React from "react";
import "./App.css";
import { useAuth } from "./contexts/AuthContext";
import NavBar from "./components/Layout/NavBar";
import Sidebar from "./components/Layout/Sidebar";
import { Outlet } from "react-router-dom";

const App = () => {
  const { user } = useAuth();

  return (
    <div className="flex relative">
      <Sidebar />
      <div className="relative w-full">
        <NavBar />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default App;
