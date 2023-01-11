import Snowfall from "react-snowfall";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="h-screen w-screen  bg-indigo-400 overflow-y-auto">
        <Outlet />
        <Snowfall />

        <div className="pink-gradient absolute top-0 right-0 z-[0] h-[45%] w-[60%] opacity-5=60" />
        <div className="pink-gradient absolute top-0 left-0 z-[0] h-[45%] w-[60%] opacity-60" />
      </div>
    </>
  );
};

export default Root;
