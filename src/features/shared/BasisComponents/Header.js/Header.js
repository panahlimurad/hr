import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Test from "../../../images/test.svg";

const Header = () => {
  return (
    <div className="w-full h-[60px] bg-header-bg flex justify-between">
      <div className="w-[90px] flex justify-center items-center h-full">
        <MenuIcon
          sx={{
            width: "25px",
            height: "30px",
            color: "white",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="flex items-center justify-center w-[200px] gap-4">
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
          <img class="w-8 h-8 rounded-full" src={Test} alt="Rounded avatar" />
        </div>
        <div>
          <SettingsIcon
            sx={{
              width: "25px",
              height: "25px",
              color: "white",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
