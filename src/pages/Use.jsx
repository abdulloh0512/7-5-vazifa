import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Use() {
  return (
    <div className="w-[1000px]  md:max-w-[75%] bg-[#a9b261] text-lg h-[613px] font-semibold flex gap-6 mx-auto">
      <div className="w-[200px] bg-[#9ea759] h-full p-4 border border-r-stone-800 rounded ">
        <span className="text-2xl font-bold">Requirements</span>
        <ul className="mt-6 flex flex-col gap-3">
          <li>
            <NavLink
              className="text-white hover:text-gray-500 font-bold "
              to={"post"}
            >
              GET
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white hover:text-gray-500  font-bold "
              to={"put"}
            >
              POST
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white hover:text-gray-500 font-bold "
              to={"update"}
            >
              PUT
            </NavLink>
          </li>
          <li>
            <NavLink className="text-white font-bold " to={"delate"}>
              DEL
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="p-6 w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Use;
