import React from "react";
import Header from "../shared/BasisComponents/Header.js/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/dashboard";
import Employees from "../../pages/Employees/employees";
import Sidebar from "../shared/BasisComponents/Sidebar/Sidebar";

const MainLayouts = () => {
  return (
    <div className="flex bg-red-400 h-screen">
      <div className="w-[17%]">
        <Sidebar />
      </div>
      <div className="w-[83%]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default MainLayouts;
