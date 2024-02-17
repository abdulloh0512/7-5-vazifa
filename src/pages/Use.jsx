import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Use() {
  return (
    <div className="max-w-[90%] container md:max-w-[75%] bg-[#e9edc9] text-lg h-[613px] font-semibold flex gap-6 mx-auto">
      <div className="w-[30%] bg-[#e9edc9] h-full p-4 border border-r-stone-800 rounded ">
        <span className="text-2xl font-bold">Requirements</span>
        <ul className="mt-6 flex flex-col gap-3">
          <li>
            <NavLink className="text-green-700 font-bold " to={"post"}>
              GET
            </NavLink>
          </li>
          <li>
            <NavLink className="text-yellow-600  font-bold " to={"put"}>
              POST
            </NavLink>
          </li>
          <li>
            <NavLink className="text-blue-700 font-bold " to={"update"}>
              PUT
            </NavLink>
          </li>
          <li>
            <NavLink className="text-red-500 font-bold " to={"delate"}>
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
