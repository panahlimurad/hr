import React from "react";
import Header from "../shared/Components/BasisComponents/Header/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/dashboard";
import Employees from "../../pages/Employees/employees";
import Sidebar from "../shared/Components/BasisComponents/Sidebar/Sidebar";
import PageHeader from "../shared/Components/BasisComponents/PageHeader/PageHeader";
import AllCompanies from "../../pages/AllCompanies/AllCompanies";
import EditCompanies from "../../pages/EditCompanies/EditCompanies";
import AddCompanies from "../../pages/AddCompanies/AddCompanies";

import AllDepartments from "../../pages/AllDepartments/AllDepartments";
import AddDepartments from "../../pages/AddDepartments/AddDepartments";
import { useSelector } from "react-redux";
import AddEmployees from "../../pages/AddEmployees/AddEmployees";

const MainLayouts = () => {
  const state = useSelector((state) => state.boolean.hamburgerState);

  console.log(state);

  return (
    <div className="flex h-screen">
      <div
        className={`${
          state ? "w-[17%] bg-sidebar-bg" : "w-[5%] bg-sidebar-bg"
        } transition-all duration-500 ease`}
      >
        <Sidebar />
      </div>
      <div
        className={`${
          state ? "w-[83%] bg-main-bg" : "w-[95%] bg-main-bg"
        } transition-all duration-500 ease`}
      >
        <Header />
        <main className="bg-main-bg p-7">
          <PageHeader />
          <div className="mt-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="employees/all-employees" element={<Employees />} />
              <Route path="employees/add-employees" element={<AddEmployees />} />
              <Route
                path="companies/all-companies"
                element={<AllCompanies />}
              />
              <Route
                path="companies/edit-companies"
                element={<EditCompanies />}
              />
              <Route
                path="companies/add-companies"
                element={<AddCompanies />}
              />
              <Route
                path="departments/all-departments"
                element={<AllDepartments />}
              />
              <Route
                path="departments/add-departments"
                element={<AddDepartments />}
              />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayouts;
