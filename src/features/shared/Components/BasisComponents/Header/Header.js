import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PersonIcon from '@mui/icons-material/Person';
import Test from "../../../../images/usrbig.jpg";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerStateToggle, settingsSidebarToggle } from "../../../../../store/Slices/booleanSlice";

const Header = ({handleSettingRef, stateHeaderColor}) => {

  const [openDropDown, setOpenDropDown] = useState(false)
  const dropDownRef = useRef(null)
  const avatarRef = useRef(null);
  const settingsRef = useRef(null);
  const state = useSelector((state) => state.boolean.settingsSidebarState);
  
  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown)
  }

  useEffect(()=>{    
    const handleClickOutside=(event)=>{
      
     if (
        dropDownRef.current && 
        !dropDownRef.current.contains(event.target) && 
        avatarRef.current && 
        !avatarRef.current.contains(event.target)
      ) {
        setOpenDropDown(false);
      }
    }

    document.addEventListener('mousedown',handleClickOutside)

    return ()=>{
      document.removeEventListener('mousedown',handleClickOutside)
    }

  },[dropDownRef])

  const dispatch = useDispatch()

  
  const handleDispatch = () => {
    dispatch(hamburgerStateToggle())
  }

  const openSettingsSideBar=()=>{
    handleSettingRef(settingsRef)
    dispatch(settingsSidebarToggle())
  }

  return (
    <div style={{backgroundColor:stateHeaderColor}} className="w-full h-[60px] relative flex items-center justify-between p-7">
      <div onClick={handleDispatch} className="w-[25px] flex h-[30px]">
        <MenuIcon
          sx={{
            width: "25px",
            height: "30px",
            color: stateHeaderColor === "white" ? "black" : "white",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="flex items-center justify-between w-[200px] gap-4">
        <div>
          <FullscreenIcon
           sx={{
            width: "25px",
            height: "25px",
            color: stateHeaderColor === "white" ? "black" : "white",
            cursor: "pointer",
          }}
          />
        </div>
        <div>
          <NotificationsNoneIcon
            sx={{
              width: "25px",
              height: "25px",
              color: stateHeaderColor === "white" ? "black" : "white",
              cursor: "pointer",
            }}
          />
        </div>
        <div ref={avatarRef} onClick={toggleDropDown} className="cursor-pointer">
          <img className="w-8 h-8 rounded-full object-cover" src={Test} alt="Rounded avatar" />
        </div>
        <div ref={settingsRef} onClick={openSettingsSideBar}>
          <SettingsIcon
          sx={{
            width: "25px",
            height: "25px",
            color: stateHeaderColor === "white" ? "black" : "white",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "rotate(45deg)",
            },
          }}
          />
        </div>
      </div>
      <div ref={dropDownRef} className={`${styles.containerDropDown } ${openDropDown ? styles.open : ''}`}>
          <div className={styles.pyramitContainer}></div>
          <ul>
            <li className={styles.listDropdown}>
              <PersonIcon/>
              <p className="text-[13px] text-[#333333]">Profile</p>
            </li>
            <li className={styles.listDropdown}>
              <InfoIcon/>
              <p className="text-[13px] text-[#333333]">Help</p>
            </li>
            <li className={styles.listDropdown}>
              <PowerSettingsNewIcon/>
              <p className="text-[13px] text-[#333333]">Help</p>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default Header;
