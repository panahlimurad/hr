import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useDispatch, useSelector } from "react-redux";
import { settingsSidebarToggle } from "../../../../../store/Slices/booleanSlice";
import DoneIcon from '@mui/icons-material/Done';
const SettingsSidebar = ({ settingsRef, handleModeState, handleColorHeader }) => {
  const state = useSelector((state) => state.boolean.settingsSidebarState);
  const [stateSideBarColor, setStateSideBarColor] = useState(()=>{
   return localStorage.getItem("sideBarColor") ? localStorage.getItem("sideBarColor") : "light"
  })
  const [selectedColor, setSelectedColor] = useState(()=>{
    return localStorage.getItem("headerColor") ? localStorage.getItem("headerColor") : "#343c48"
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
  
  const list = [
    {
      name:"black",
      className:"list",
      id:"#343c48"
    },
    {
      name:"white",
      className:"list2",
      id:"white"
    },
    {
      name:"blue",
      className:"list3",
      id:"#05a8f4"
    },
    {
      name:"cyan",
      className:"list4",
      id:"#00d8da"
    },
    {
      name:"green",
      className:"list5",
      id:"#57d690"
    },
    {
      name:"orange",
      className:"list6",
      id:"#feb364"
    },
    {
      name:"purple",
      className:"list7",
      id:"#8f9de4"
    },

  ]

  const selectColorOption=(id)=>{
    localStorage.setItem("headerColor", id)
    handleColorHeader(id)
    setSelectedColor(id)
  }
  
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
              {list.map((item, index) => (
              <li onClick={() => selectColorOption(item.id)} key={index} className={styles[item.className]}>
                {selectedColor === item.id &&(
                  <DoneIcon
                  sx={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: selectedColor !== "white" ? "white" : "black", 
                    fontSize: 20 
                  }} 
                  />
                )}
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
