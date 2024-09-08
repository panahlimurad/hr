import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useDispatch, useSelector } from "react-redux";
import { settingsSidebarToggle } from "../../../../../store/Slices/booleanSlice";
const SettingsSidebar = ({ settingsRef }) => {
  const state = useSelector((state) => state.boolean.settingsSidebarState);

  const dispatch = useDispatch();
  
  const sideBarRef = useRef(null);
  
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
            <div className={styles.iconMode}>
              <WbSunnyIcon
                sx={{ width: "15px", height: "15px", color: "white" }}
              />
            </div>
            <div className={styles.iconMode}>
              <NightsStayIcon
                sx={{ width: "15px", height: "15px", color: "white" }}
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
