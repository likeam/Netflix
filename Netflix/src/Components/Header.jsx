import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className=" absolute z-10 flex w-[100%] px-6 items-center justify-between bg-gradient-to-b from-black">
      <img
        src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
        alt="netflix logo"
        className="w-56"
      />
      <div className="flex items-center text-white">
        <IoIosArrowDropdown size="24px" />
        <h1 className="text-lg font-medium "> Abdul Rehman</h1>

        <div className="ml-4 ">
          <button className="px-4 py-2 text-white bg-red-800">Logout</button>
          <button className="px-4 py-2 ml-2 text-white bg-red-800">
            Search Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
