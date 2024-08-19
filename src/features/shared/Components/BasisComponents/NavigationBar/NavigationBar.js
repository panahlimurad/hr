import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupIcon from "@mui/icons-material/Group";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const state = useSelector((state) => state.boolean.hamburgerState);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const [openMenus, setOpenMenus] = useState({
    company: false,
    departments: false,
    employees: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleMenuClick = (menu) => {
    toggleMenu(menu);
    setSelectedMenu(menu);
  };

  return (
    <div className="mt-4 px-3">
      {!state ? 
    <ul className="flex flex-col justify-center items-center">
    <li
        className={styles.mainText}
      >
      <DashboardIcon sx={{ width: "25px", height: "25px", color: "#0D1717" }} />
      </li>
      <li
        className={styles.mainText}
      >
      <AddBusinessIcon sx={{ width: "25px", height: "25px", color: "#0D1717" }} />
      </li>
      <li
        className={styles.mainText}
      >
      <AutoAwesomeMotionIcon sx={{ width: "25px", height: "25px", color: "#0D1717" }} />
      </li>
      <li
        className={styles.mainText}
      >
      <PeopleIcon sx={{ width: "25px", height: "25px", color: "#0D1717" }} />
      </li>
      <li
        className={styles.mainText}
      >
      <BusinessCenterIcon sx={{ width: "25px", height: "25px", color: "#0D1717" }} />
      </li>
    </ul>:   <ul>
        <li
          className={`${styles.mainText} ${
            selectedMenu === "home" ? styles.activeMenu : ""
          }`}
        >
          <Link
            onClick={() => setSelectedMenu("home")}
            className="flex items-center h-[45px] gap-2 w-full"
            to="/"
          >
            <DashboardIcon sx={{ width: "17px", height: "17px" }} />
            Home
          </Link>
        </li>
        <div>
          <li
            className={`${styles.mainText} ${
              selectedMenu === "company" ? styles.activeMenu : ""
            }`}
          >
            <Link
              onClick={() => setSelectedMenu("company")}
              className="flex items-center gap-2 h-[45px] w-full"
              to="/"
            >
              <AddBusinessIcon sx={{ width: "17px", height: "17px" }} />
              Company
            </Link>
            <span
              onClick={() => handleMenuClick("company")}
              className="cursor-pointer"
            >
              {openMenus.company ? <RemoveIcon /> : <AddIcon />}
            </span>{" "}
          </li>
          <ul
            className={`${styles.menu} ${
              openMenus.company ? styles.menuVisible : styles.menuHidden
            } mt-1 px-6 flex flex-col gap-2 text-sm font-light text-color-open-list`}
          >
            <Link
              to={"/companies/all-companies"}
              className={`${styles.LiTagTransition} ${
                openMenus.company ? styles.openLiTagSub : styles.closeLiTagSub
              }`}
            >
              All Companies
            </Link>
            <Link
              to={"/companies/add-companies"}
              className={`${styles.LiTagTransition} ${
                openMenus.company ? styles.openLiTagSub : styles.closeLiTagSub
              }`}
            >
              Add Companies
            </Link>
            <Link
              to={"/companies/edit-companies"}
              className={`${styles.LiTagTransition} ${
                openMenus.company ? styles.openLiTagSub : styles.closeLiTagSub
              }`}
            >
              Edit Companies
            </Link>
          </ul>
        </div>
        <div>
          <li
            className={`${styles.mainText} ${
              selectedMenu === "departments" ? styles.activeMenu : ""
            }`}
          >
            <Link
              onClick={() => setSelectedMenu("departments")}
              className="flex items-center h-[45px] gap-2 w-full"
              to="/"
            >
              <AutoAwesomeMotionIcon sx={{ width: "17px", height: "17px" }} />
              Departments
            </Link>
            <span
              onClick={() => handleMenuClick("departments")}
              className="cursor-pointer"
            >
              {openMenus.departments ? <RemoveIcon /> : <AddIcon />}
            </span>{" "}
          </li>
          <ul
            className={`${styles.menu} ${
              openMenus.departments ? styles.menuVisible : styles.menuHidden
            } mt-1 px-6 flex flex-col gap-2 text-sm font-light text-color-open-list`}
          >
            
            <Link
              to={"/departments/all-departments"}
              className={`${styles.LiTagTransition} ${
                openMenus.departments ? styles.openLiTagSub : styles.closeLiTagSub
              }`}
            >
              All Departments
            </Link>

            <Link
              to={"/departments/add-departments"}
              className={`${styles.LiTagTransition} ${
                openMenus.departments ? styles.openLiTagSub : styles.closeLiTagSub
              }`}
            >
              Add Departments
            </Link>
            
            <li
              className={`${styles.LiTagTransition} ${
                openMenus.departments
                  ? styles.openLiTagSub
                  : styles.closeLiTagSub
              }`}
            >
              Edit Departments
            </li>
          </ul>
        </div>
        <div>
          <li
            className={`${styles.mainText} ${
              selectedMenu === "employees" ? styles.activeMenu : ""
            }`}
          >
            <Link
              onClick={() => setSelectedMenu("employees")}
              className="flex items-center h-[45px] gap-2 w-full"
              to="/"
            >
              <PeopleIcon sx={{ width: "17px", height: "17px" }} />
              Employees
            </Link>
            <span
              onClick={() => handleMenuClick("employees")}
              className="cursor-pointer"
            >
              {openMenus.employees ? <RemoveIcon /> : <AddIcon />}
            </span>{" "}
          </li>
          <ul
            className={`${styles.menu} ${
              openMenus.employees ? styles.menuVisible : styles.menuHidden
            } mt-1 px-6 flex flex-col gap-2 text-sm font-light text-color-open-list`}
          >
            <Link
              to={"/employees/all-employees"}
              className={`${styles.LiTagTransition} ${
                openMenus.employees ? styles.openLiTagSub : styles.closeLiTagSub
              }`}
            >
              All Employees
            </Link>
            <Link
              to={"/employees/add-employees"}
            >
            <li
              className={`${styles.LiTagTransition} ${
                openMenus.employees ? styles.openLiTagSub : styles.closeLiTagSub
              }`}
              >
              Add Employees
            </li>
              </Link>
            <Link
              to={"/employees/edit-employees"}
              className={`${styles.LiTagTransition} ${
                openMenus.employees ? styles.openLiTagSub : styles.closeLiTagSub
              }`}
            >
              Edit Employees
            </Link>
          </ul>
        </div>
        <li
          className={`${styles.mainText} ${
            selectedMenu === "vacncies" ? styles.activeMenu : ""
          }`}
        >
          <Link
            onClick={() => setSelectedMenu("vacncies")}
            className="flex items-center h-[45px] gap-2 w-full"
            to="/"
          >
            <BusinessCenterIcon sx={{ width: "17px", height: "17px" }} />
            Vacncies
          </Link>
        </li>
      </ul> 
    }
      
      
    </div>
  );
};

export default NavigationBar;
