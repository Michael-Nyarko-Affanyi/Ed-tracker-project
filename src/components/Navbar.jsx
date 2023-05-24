import React from "react";
import woman from "../assets/woman.png";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBellFill } from "react-icons/bs";

const style = {
  width: "30px",
  height: "30px",
};

const Navbar = () => {
  return (
    <div className=" p-10 shadow-md flex justify-between">
      <div className=" w-2/5 h-10 flex items-center bg-white rounded-md px-4 text-gray-500">
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full bg-transparent outline-none px-2"
        />
      </div>
      <div className="flex gap-5 items-center text-gray-500">
        <div className="relative cursor-pointer">
            <span className=" absolute right-0 -top-1 bg-red-400 border-2 border-blue-50 px-1 rounded-full text-xs text-white font-semibold">6</span>
          <BsBellFill style={style} />
        </div>
        <div className=" w-12 h-12 rounded-full cursor-pointer">
          <img src={woman} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
