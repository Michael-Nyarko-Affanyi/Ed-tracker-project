import React from "react";
import thomas from "../assets/thomas.jpg";

const ViewKids = () => {
  return (
    <>
      <div className="text-center text-3xl font-semibold text-blue-950 my-7">
        Student Profile
      </div>
      <div className=" flex items-center justify-between mx-10 rounded-xl">
        <div className="w-3/5 p-5 grid grid-cols-2 gap-y-7 shadow-lg">
          <div className=" font-bold text-xl text-blue-900">
            Fullname:{" "}
            <span className=" font-medium">Thomas Mikaelson Shelby</span>
          </div>
          <div className=" font-bold text-xl text-blue-900">
            Date of Birth: <span className=" font-medium">17th July, 2009</span>
          </div>
          <div className=" font-bold text-xl text-blue-900">
            Class/Form: <span className=" font-medium">JHS three(3)</span>
          </div>
          <div className=" font-bold text-xl text-blue-900">
            Position: <span className=" font-medium">4/63</span>
          </div>
          <div className=" font-bold text-xl text-blue-900">
            Average mark: <span className=" font-medium">87%</span>
          </div>
          <div className=" font-bold text-xl text-blue-900">
            Attendance: <span className=" font-medium">58/60</span>
          </div>
        </div>
        <div className=" w-96 h-96 rounded-full">
          <img
            src={thomas}
            alt="Thomas"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className=" w-3/5 shadow-xl ml-10 text-center">
        <div className="grid grid-cols-2 gap-14 bg-blue-200">
        <span className=" text-blue-900 font-bold text-xl">Class Teacher's Remarks</span>
        <span className=" text-blue-900 font-bold text-xl">Principal/Head Teacher's Remarks</span>
        </div>
        <div className="grid grid-cols-2 gap-14 bg-blue-100 pt-4">
        <span className=" text-blue-800 font-medium text-lg">Excellent Kid, has a bright future ahead of him. He needs more attention though.</span>
        <span className=" text-blue-800 font-medium text-lg">Great Kid, has a bright future ahead of him. He needs more attention though.</span>
        </div>
      </div>
    </>
  );
};

export default ViewKids;
