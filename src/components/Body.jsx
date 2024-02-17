import React from "react";


function Body() {
  return (
    <div className="mt-2 max-w-[85%] bg-slate-100 p-4 rounded">
      <span className="text-xl mb-2">JSON</span>
      <form>
        <textarea
          name=""
          className="w-full p-2 h-[150px] rounded border border-stone-900"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </form>
      
    </div>
  );
}

export default Body;
