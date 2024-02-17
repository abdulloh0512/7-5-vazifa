import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="py-6 px-4 bg-green-700 text-[#fff] flex justify-between items-center">
      <span className=" text-2xl font-bold">N.postman</span>
      <ul className="flex gap-4">
        <li>
          <NavLink className="font-semibold text-xl" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="font-semibold text-xl" to="use">
            Use
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
