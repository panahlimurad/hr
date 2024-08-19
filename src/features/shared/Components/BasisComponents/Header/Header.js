import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Test from "../../../../images/usrbig.jpg";
import { useDispatch, useSelector } from "react-redux";
import { hamburgerStateToggle } from "../../../../../store/Slices/booleanSlice";

const Header = () => {


  const dispatch = useDispatch()

  const state = useSelector((state) => state.boolean.hamburgerState)
  
  const handleDispatch = () => {
    dispatch(hamburgerStateToggle())
  }

  return (
    <div className="w-full h-[60px] bg-header-bg flex items-center justify-between p-7">
      <div onClick={handleDispatch} className="w-[25px] flex h-[30px]">
        <MenuIcon
          sx={{
            width: "25px",
            height: "30px",
            color: "white",
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
            color: "white",
            cursor: "pointer",
          }}
          />
        </div>
        <div>
          <NotificationsNoneIcon
            sx={{
              width: "25px",
              height: "25px",
              color: "white",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="cursor-pointer">
          <img className="w-8 h-8 rounded-full object-cover" src={Test} alt="Rounded avatar" />
        </div>
        <div>
          <SettingsIcon
          sx={{
            width: "25px",
            height: "25px",
            color: "white",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "rotate(45deg)",
            },
          }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
