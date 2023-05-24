import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import logo from '../assets/Logo.png'
import { Link } from "react-router-dom";
import {open} from '../feature/settingsSlice'
import { useDispatch } from "react-redux";

const style = {
    width: '30px',
    height: '30px',
}

const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <div className=" w-1/5 bg-gray-50 h-full shadow-xl flex flex-col justify-center gap-14 pl-10 relative">
        <div className=" w-48 h-12 absolute top-10 cursor-pointer">
            <img src={logo} alt="" className="w-full h-full object-contain"/>
        </div>
      <Link to='/home' className="flex gap-5 items-center cursor-pointer text-xl font-semibold text-gray-500 hover:text-blue-400">
        <MdSpaceDashboard style={style}/>
        Dashboard
      </Link>
      <Link to='/home/viewkids' className="flex gap-5 items-center cursor-pointer text-xl font-semibold text-gray-500 hover:text-blue-400">
        <HiUsers style={style}/>
        View Kids
      </Link>
      <Link to='/home/progress' className="flex gap-5 items-center cursor-pointer text-xl font-semibold text-gray-500 hover:text-blue-400">
        <GiProgression style={style}/>
        View Progress
      </Link>
      <div onClick={() => dispatch(open())} className="absolute bottom-10 text-gray-500 hover:text-blue-400 cursor-pointer">
        <FiSettings style={style}/>
      </div>
    </div>
  );
};

export default Sidebar;
