import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import logo from '../assets/Logo.png'

const style = {
    width: '30px',
    height: '30px',
    // background: 'red',
    // 'border-radius': '100px'
}

const Sidebar = () => {
  return (
    <div className=" w-1/5 bg-gray-50 h-full shadow-xl flex flex-col justify-center gap-14 pl-10 relative">
        <div className=" w-48 h-12 absolute top-10">
            <img src={logo} alt="" className="w-full h-full object-contain"/>
        </div>
      <span className="flex gap-5 items-center cursor-pointer text-xl font-semibold text-gray-500 hover:text-blue-400">
        <MdSpaceDashboard style={style}/>
        Dashboard
      </span>
      <span className="flex gap-5 items-center cursor-pointer text-xl font-semibold text-gray-500 hover:text-blue-400">
        <HiUsers style={style}/>
        View Kids
      </span>
      <span className="flex gap-5 items-center cursor-pointer text-xl font-semibold text-gray-500 hover:text-blue-400">
        <GiProgression style={style}/>
        View Progress
      </span>
      <span>
        <FiSettings style={style}/>
      </span>
    </div>
  );
};

export default Sidebar;
