import React from "react";

function Headers() {
  return (
    <div className="p-4 rounded bg-slate-100 max-w-[85%]">
      <ul className="flex max-w-full mb-2">
        <li className="w-[50%] text-center">Key</li>
        <li className="w-[50%] text-center">Value</li>
      </ul>
      <form className="flex gap-4 mx-w-full">
        <input
          type="text"
          className="w-[50%] rounded px-3 py-1"
          name=""
          id=""
        />
        <input type="text" className="w-[50%] rounded px-3 py-1" />
      </form>
    </div>
  );
}

export default Headers;
