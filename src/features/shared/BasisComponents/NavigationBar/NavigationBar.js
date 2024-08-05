import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import GroupIcon from '@mui/icons-material/Group';
import styles from "./style.module.css";
import { Link } from "react-router-dom";


const NavigationBar = () => {

const [selectedMenu, setSelectedMenu] = useState(null);

  const [openMenus, setOpenMenus] = useState({
    company: false,
    departments: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
        ...prev,
        [menu]: !prev[menu]
    }))
  }

  const handleMenuClick = (menu) => {
    toggleMenu(menu);
    setSelectedMenu(menu); 
  };

  return (
    <div className="mt-4 px-4">
      <ul>
        <li className={`${styles.mainText} ${selectedMenu === 'home' ? styles.activeMenu : ''}`}>
          <Link onClick={() => setSelectedMenu('home')} className="flex items-center gap-2" to="/">
            <DashboardIcon sx={{ width: "17px", height: "17px" }} />
            Home
          </Link>
        </li>
        <div>
        <li className={`${styles.mainText} ${selectedMenu === 'company' ? styles.activeMenu : ''}`}>
          <Link onClick={() => setSelectedMenu('company')} className="flex items-center gap-2" to="/">
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
          <ul className={`${styles.menu} ${openMenus.company ? styles.menuVisible : styles.menuHidden} px-6 flex flex-col gap-2 text-sm font-light text-color-open-list`}>
                <li className={`${styles.LiTagTransition} ${openMenus.company ? styles.openLiTagSub : styles.closeLiTagSub}`}>
                    All Companies
                </li>
                <li className={`${styles.LiTagTransition} ${openMenus.company ? styles.openLiTagSub : styles.closeLiTagSub}`}>
                    Add Companies
                </li>
                <li className={`${styles.LiTagTransition} ${openMenus.company ? styles.openLiTagSub : styles.closeLiTagSub}`}>
                    Edit Companies
                </li>
          </ul>
        </div>
        <div>
        <li className={`${styles.mainText} ${selectedMenu === 'departments' ? styles.activeMenu : ''}`}>
          <Link onClick={() => setSelectedMenu('departments')} className="flex items-center gap-2" to="/">
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
          <ul className={`${styles.menu} ${openMenus.departments ? styles.menuVisible : styles.menuHidden} px-6 flex flex-col gap-2 text-sm font-light text-color-open-list`}>
                <li className={`${styles.LiTagTransition} ${openMenus.departments ? styles.openLiTagSub : styles.closeLiTagSub}`}>
                    All Departments
                </li>
                <li className={`${styles.LiTagTransition} ${openMenus.departments ? styles.openLiTagSub : styles.closeLiTagSub}`}>
                    Add Departments
                </li>
                <li className={`${styles.LiTagTransition} ${openMenus.departments ? styles.openLiTagSub : styles.closeLiTagSub}`}>
                    Edit Departments
                </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default NavigationBar;
