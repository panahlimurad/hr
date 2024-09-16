import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarColor, settingsSidebarToggle } from "../../../../../store/Slices/booleanSlice";
const SettingsSidebar = ({ settingsRef, handleModeState }) => {
  const state = useSelector((state) => state.boolean.settingsSidebarState);

  const [stateSideBarColor, setStateSideBarColor] = useState(()=>{
   return localStorage.getItem("sideBarColor") ? localStorage.getItem("sideBarColor") : "light"
  })

  const handleMode = (event) => {
    handleModeState(event);
  }

  const sideBarRef = useRef(null);
  const dispatch = useDispatch();
  

  const changeColorSideBar = (color) => {
    localStorage.setItem("sideBarColor", color)
    setStateSideBarColor(color)
    handleMode(color)
  };
  

  
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsRef?.current && 
        !settingsRef.current.contains(event.target) && 
        sideBarRef?.current && 
        !sideBarRef.current.contains(event.target) 
      ) {
        dispatch(settingsSidebarToggle());
      }
    };

    if (state) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [state, sideBarRef, settingsRef]);

  return (
    <div
      ref={sideBarRef}
      className={`${
        state ? styles.sidebarContainer : styles.sidebarContainerHidden
      }`}
    >
      <div className={styles.sidebarTop}>
        <p>SKINS</p>
      </div>
      <div className={styles.sidebarBottom}>
        <div className="flex flex-col gap-2">
          <p>SIDEBAR COLOR</p>
          <div className="flex gap-4">
            <div onClick={() => changeColorSideBar("light")} className={`${stateSideBarColor === "light" ? styles.activeIconMode : styles.iconMode}`}>
              <WbSunnyIcon
                sx={{ width: "15px", height: "15px", color: stateSideBarColor === "light" ? "white" : "black" }}
              />
            </div>
            <div onClick={() => changeColorSideBar("dark")} className={`${stateSideBarColor === "dark" ? styles.activeIconMode : styles.iconMode}`}>
              <NightsStayIcon
                sx={{ width: "15px", height: "15px", color: stateSideBarColor === "dark" ? "white" : "black" }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>THEME COLOR</p>
          <div className="flex gap-4">
            <div className={styles.themeTextContainer}>
              <div>Light</div>
              <div>Dark</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>SKINS</p>
          <div className="flex gap-4">
            <ul className="flex gap-2 mt-2">
              <li className={styles.list}></li>
              <li className={styles.list2}></li>
              <li className={styles.list3}></li>
              <li className={styles.list4}></li>
              <li className={styles.list5}></li>
              <li className={styles.list6}></li>
              <li className={styles.list7}></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
