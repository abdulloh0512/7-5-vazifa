import { useSelector } from "react-redux";

export const getRequeirs = async () => {
  const URL = useSelector((state) => state.Require.whatIs);
  console.log(URL);
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
