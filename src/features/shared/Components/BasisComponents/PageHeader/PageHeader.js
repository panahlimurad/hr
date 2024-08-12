import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PageHeader = () => {
  const location = useLocation();

  
  
  const pathSegment =  location.pathname === "/" ? "dashboard" : location.pathname.split("/")[2];
  const pathSegmentFirst = location.pathname.split("/")[1];

  const formattedPathSegment = pathSegment
  .replace(/-/g, ' ') 
  .toLowerCase()      
  .replace(/(?:^|\s)\S/g, a => a.toUpperCase());



  return (
    <div className="w-full h-[30px] flex gap-2">
      <div className="border-r-2 border-[#babdbc] h-full w-auto pr-2 flex justify-center items-center">
        <p className="text-[23px] font-semibold text-color-text">Employees</p>
      </div>
      <div className="flex justify-center items-center">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center ">
              <Link
                to="/"
                className="inline-flex items-center text-[15px] font-medium text-color-text hover:text-[#f89308]"
              >
                <svg
                  className="w-5 h-4 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <p
                  className="ms-1 inline-flex items-center text-[15px] font-medium text-color-text"
                >
                  {location.pathname === "/" ? "Dashboard" : pathSegmentFirst.charAt(0).toUpperCase()+pathSegmentFirst.slice(1)}
                </p>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <p
                  className="ms-1 inline-flex items-center text-[15px] font-medium text-color-text"
                >
                  {location.pathname === "/" ? null : formattedPathSegment}
                </p>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
