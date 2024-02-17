import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getRequir } from "../Redux/requir";
import { getRequeirs } from "../Api/api";

export default () => {
  const inpValue = useRef(null);
  const dispatch = useDispatch();

  const getSubmit = async (e) => {
    e.preventDefault();
    dispatch(getRequir(inpValue.current.value));
    
  };

  return {
    getSubmit,
    inpValue,
  };
};
