import React, { useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import useGetSubmit from "../hooks/useGetSubmit";
import { useDispatch, useSelector } from "react-redux";
import { getRequir } from "../Redux/requir";

function Post() {
  const { getSubmit } = useGetSubmit();
  const inp = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    useDispatch(getRequir(inp.current.value));
    const url = useSelector((state) => state.Require.whatIs);
    
  };

  return (
    <div>
      <span className="text-3xl font-bold ">You can get api products</span>
      <form className="mt-10" onSubmit={submit}>
        <span className="text-green-700 bg-slate-300 py-[10px] rounded-l-lg px-3 font-bold ">
          Get
        </span>
        <input
          className="py-2 w-[70%] px-4 "
          placeholder="Write api url in this place"
          type="text"
          ref={inp}
        />
        <button className="text-[#fff] py-2 px-4 bg-green-700 rounded-r-lg">
          send
        </button>
      </form>
      <div className="mt-2">
        <ul className="flex max-w-[84%] rounded mb-4 bg-[#fff] justify-between items-center">
          <li className="w-[50%] border  border-r-stone-800 b text-center">
            <Link to={"headers"} className="text-xl font-bold">
              Headers
            </Link>
          </li>
          <li className="w-[50%] text-center">
            <Link to={"body"} className=" text-xl font-bold">
              Body
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
      <div className="p-6 max-w-[85%] rounded bg-amber-100 mt-6  h-[160px]  overflow-y-auto">
        <span className="text-xl mb-4">Response</span>
      </div>
    </div>
  );
}

export default Post;
