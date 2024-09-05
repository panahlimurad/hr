import React from "react";
import styles from "./style.module.css";
import Test from "../../../../images/usrbig.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
import { shortText } from "../../../../utils/Functions/ShortText/shortText";

const EmployeesDetailsComponent = () => {
  return (
    <div className="flex gap-5">
      <div className="w-[33%] flex flex-col gap-4">
        <div className={styles.card}>
          <div className="bg-[#21252b] h-[150px] py-2 flex justify-start items-center flex-col relative">
            <p className="text-[22px] text-white">John Smith</p>
            <p className="text-[13px] text-white">Software Engineer</p>
            <div className="shadow-4xl w-[113px] h-[113px] rounded-full bg-white border-2 absolute bottom-[-40px] border-white">
              <img
                className="w-full h-full rounded-full"
                src={Test}
                alt="profile"
              />
            </div>
          </div>
          <div className="mt-16 flex flex-col py-4 gap-4 justify-center items-center">
            <div className="w-[220px] text-center">
              <p className="text-[13px] text-[#212529]">
                456, Estern evenue, Courtage area, New York
              </p>
            </div>
            <div className="flex gap-1">
              <PhoneIcon
                sx={{ width: "20px", height: "20px", color: "#212529" }}
              />
              <p className="text-[13px] text-[#212529]">+994-55-000-00-00</p>
            </div>
          </div>
        </div>
        <div className={styles.aboutContainer}>
          <div className="h-[50px] px-2 border-b border-[#dee2e6] flex items-center">
            {" "}
            About{" "}
          </div>
          <div className="px-2 mt-4">
            <ul className="flex flex-col gap-2 justify-center">
              <li className="border-b border-[#dee2e6] py-2 h-[60px]">
                <p className="text-[#919aa3] text-xs">Email address</p>
                <p className="text-[14px] text-[#555555]">john@gmail.com</p>
              </li>
              <li className="border-b border-[#dee2e6] py-2 h-[60px]">
                <p className="text-[#919aa3] text-xs">Phone</p>
                <p className="text-[14px] text-[#555555]">+994-55-000-00-00</p>
              </li>
              <li className="border-b border-[#dee2e6] py-2 h-[60px]">
                <p className="text-[#919aa3] text-xs">Date of birth</p>
                <p className="text-[14px] text-[#555555]">01.01.2000</p>
              </li>
              <li className="border-b border-[#dee2e6] py-2 h-[60px]">
                <p className="text-[#919aa3] text-xs">Marital status</p>
                <p className="text-[14px] text-[#555555]">Single</p>
              </li>
              <li className="border-b border-[#dee2e6] py-2 h-[60px]">
                <p className="text-[#919aa3] text-xs">Gender</p>
                <p className="text-[14px] text-[#555555]">Male</p>
              </li>
              <li className="border-b border-[#dee2e6] py-2 h-[60px]">
                <p className="text-[#919aa3] text-xs">Address</p>
                <p className="text-[14px] text-[#555555]">
                  456, Estern evenue, Courtage area, New York
                </p>
              </li>
              <li className="border-b border-[#dee2e6] py-2 h-[60px]">
                <p className="text-[#919aa3] text-xs">Wortk type</p>
                <p className="text-[14px] text-[#555555]">Full time</p>
              </li>
              <li className="border-b border-[#dee2e6] py-2 h-[60px]">
                <p className="text-[#919aa3] text-xs">Army</p>
                <p className="text-[14px] text-[#555555]">No</p>
              </li>
              <li className="border-b border-[#dee2e6] py-2 h-[60px]">
                <p className="text-[#919aa3] text-xs">Date of joining</p>
                <p className="text-[14px] text-[#555555]">01.01.2000</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-[67%] flex flex-col gap-4">
        <div className={styles.descriptionContainer}>
          <div className="h-[50px] text-base font-semibold  text-[#12171d] flex items-center">
            About
          </div>
          <div>
            <ul className="flex justify-between">
              <li className="w-full">
                <p className="text-[14px] text-[#555555] ">Full Name</p>
                <p className="text-[#919aa3] text-xs">John Doe</p>
              </li>
              <li className="w-full">
                <p className="text-[14px] text-[#555555] ">Mobile</p>
                <p className="text-[#919aa3] text-xs">+994-55-000-00-00</p>
              </li>
              <li className="w-full">
                <p className="text-[14px] text-[#555555] ">Email address</p>
                <p className="text-[#919aa3] text-xs">john@gmail.com</p>
              </li>
              <li className="w-full">
                <p className="text-[14px] text-[#555555] ">Location</p>
                <p className="text-[#919aa3] text-xs">Baku</p>
              </li>
            </ul>
          </div>
          <div className="mt-4 overflow-scroll h-[160px]">
            <p>Description</p>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis
              sem, blandit ac nunc in, accumsan mattis velit. Sed sed imperdiet
              risus, sit amet maximus risus. Nulla facilisi. Sed convallis mi a
              tortor pulvinar, at euismod lacus sodales. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Cras augue purus, consectetur ut tempor a, dictum id
              metus. Praesent sem ipsum, ultrices nec tempus eu, pharetra sed
              ipsum. Pellentesque dolor massa, bibendum a cursus in, consectetur
              posuere est. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vestibulum nec malesuada ipsum.
              Donec sodales id enim nec dapibus. Nullam non leo id orci pretium
              feugiat.
            </p>
          </div>
        </div>
        <div className={styles.educationContainer}>
          <div className="h-[50px] text-base font-semibold  text-[#12171d] flex items-center">
            Education
          </div>
          <ul>
            <li>
              <p className="text-[14px] text-[#555555] ">University</p>
              <p className="text-[#919aa3] text-xs">Baku University</p>
              <p className="text-[#919aa3] text-xs">
                Date of graduation 01/01/2020
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.skillsContainer}>
          <div className="h-[50px] text-base font-semibold  text-[#12171d] flex items-center">
            Skills
          </div>
          <div className="flex gap-4 items-center min-h-[100px] max-h-[150px] overflow-scroll flex-wrap">
            <button>HTML</button>
            <button>CSS</button>
            <button>JS</button>
            <button>REACT</button>
            <button>NODE</button>
            <button>NODE</button>
            <button>EXPRESS</button>
            <button>EXPRESS</button>
            <button>EXPRESS</button>
            <button>EXPRESS</button>
          </div>
        </div>
        <div className={styles.experienceContainer}>
          <div className="h-[50px] text-base font-semibold  text-[#12171d] flex items-center">
            Experience
          </div>
          <ul>
            <li>
              <p className="text-[14px] text-[#555555] ">University</p>
              <p className="text-[#919aa3] text-xs">Baku University</p>
              <p className="text-[#919aa3] text-xs">
                Date of graduation 01/01/2020
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeesDetailsComponent;
