import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const CompanyCards = () => {
  return (
    <div className="w-[24%] flex flex-col gap-6 p-4 bg-[#fff] rounded-xl cursor-pointer">
      <div className="relative">
        <img
          className="rounded-xl"
          src="https://i.ytimg.com/vi/GV3HUDMQ-F8/maxresdefault.jpg"
        />
        <div className="flex justify-around absolute gap-6 transform translate-x-[13%] translate-y-[-50%]">
          <div className="flex justify-center gap-2 items-center bg-[#343c48] w-[90px] h-[30px] rounded-lg text-white">
            <FavoriteIcon
              sx={{ color: "red", width: "20px", height: "20px" }}
            />
            <p className="text-[14px] font-semibold">345</p>
          </div>
          <div className="flex justify-center gap-2 items-center bg-[#343c48] w-[90px] h-[30px] rounded-lg text-white">
            <ChatBubbleIcon
              sx={{ color: "green", width: "20px", height: "20px" }}
            />
            <p className="text-[14px] font-semibold">345</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold">Company Name</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        </p>
      </div>
    </div>
  );
};

export default CompanyCards;
