import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ResponsiveDrawer from "./components/Drawer/Drawer";
import Login from "./components/Login/Login";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ResponsiveDrawer />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
