import React, { useState } from "react";
import Header from "../shared/Components/BasisComponents/Header/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/dashboard";
import Sidebar from "../shared/Components/BasisComponents/Sidebar/Sidebar";
import PageHeader from "../shared/Components/BasisComponents/PageHeader/PageHeader";
import AllCompanies from "../../pages/AllCompanies/AllCompanies";
import EditCompanies from "../../pages/EditCompanies/EditCompanies";
import AddCompanies from "../../pages/AddCompanies/AddCompanies";
import AllDepartments from "../../pages/AllDepartments/AllDepartments";
import AddDepartments from "../../pages/AddDepartments/AddDepartments";
import { useSelector } from "react-redux";
import AddEmployees from "../../pages/AddEmployees/AddEmployees";
import AllEmployees from "../../pages/AllEmployees/AllEmployees";
import EmployeesDetails from "../../pages/EmployeesDetails/EmployeesDetails";
import AccountDetails from "../../pages/AccountDetails/AccountDetails";
import SettingSidebar from '../shared/Components/BasisComponents/SettingsSidebar/SettingsSidebar'

const MainLayouts = () => {
  const state = useSelector((state) => state.boolean.hamburgerState);
  const [settingsRef, setSettingsRef] = useState(null)
  const [stateHeaderColor, setStateHeaderColor] = useState(()=>{
    return localStorage.getItem("headerColor") ? localStorage.getItem("headerColor") : "#343c48"
  })
  const [colorSideBar, setColorSideBar] = useState(() => {
    return localStorage.getItem("sideBarColor") ? localStorage.getItem("sideBarColor") : "light"
  })
  

  const handleColorHeader = (event) => {
    setStateHeaderColor(event)
  }

  const handleSettingRef=(event)=>{
    setSettingsRef(event)
  }

  const handleModeState = (event) => {
    setColorSideBar(event)
  }

  return (
    <div className="flex h-screen">
      <div
        className={`${
          state ? "w-[17%] bg-sidebar-bg" : "w-[5%] bg-sidebar-bg"
        } transition-all duration-500 ease`}
      >
        <Sidebar colorSideBar={colorSideBar} />
      </div>
      <div
        className={`${
          state ? "w-[83%] bg-main-bg sticky" : "w-[95%] bg-main-bg"
        } transition-all duration-500 ease`}
      >
        <Header stateHeaderColor={stateHeaderColor} handleSettingRef={handleSettingRef}/>
        <main className="bg-main-bg p-7 relative">
          <PageHeader />
          <div className="mt-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="employees/all-employees" element={<AllEmployees />} />
              <Route path="employees/add-employees" element={<AddEmployees />} />
              <Route path="employees/employee-details" element={<EmployeesDetails />} />
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
              <Route
                path="account/account-details"
                element={<AccountDetails />}
              />
            </Routes>
          </div>
          <SettingSidebar handleColorHeader={handleColorHeader} handleModeState={handleModeState} settingsRef={settingsRef}/>
        </main>
      </div>
    </div>
  );
};

export default MainLayouts;
