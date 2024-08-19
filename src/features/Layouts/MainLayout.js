import React from "react";
import Header from "../shared/Components/BasisComponents/Header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/dashboard";
import Employees from "../../pages/Employees/employees";
import Sidebar from "../shared/Components/BasisComponents/Sidebar/Sidebar";
import PageHeader from "../shared/Components/BasisComponents/PageHeader/PageHeader";
import AllCompanies from "../../pages/AllCompanies/AllCompanies";
import EditCompanies from "../../pages/EditCompanies/EditCompanies";
import AddTable from "../shared/Components/BasisComponents/AddTable/AddTable";
import AddCompanies from "../../pages/AddCompanies/AddCompanies";

import AllDepartments from "../../pages/AllDepartments/AllDepartments";
import AddDepartments from "../../pages/AddDepartments/AddDepartments";

const MainLayouts = () => {

  const location = useLocation()

  return (
    <div className="flex h-screen">
      <div className="w-[17%]">
        <Sidebar />
      </div>
      <div className="w-[83%]">
        <Header />
        <main className="bg-main-bg p-7">
          <PageHeader/>
          <div className="mt-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="employees/all-employees" element={<Employees />} />
            <Route path="companies/all-companies" element={<AllCompanies />} />
            <Route path="companies/edit-companies" element={<EditCompanies />} />
            <Route path="companies/add-companies" element={<AddCompanies />} />
            <Route path="departments/all-departments" element={<AllDepartments />} />
            <Route path="departments/add-departments" element={<AddDepartments />} />
          </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayouts;
