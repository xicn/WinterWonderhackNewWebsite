import Snowfall from "react-snowfall";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Root = () => {
  const [isClicked, setisClicked] = useState(false);
  let bg_color = isClicked ? 'bg-indigo-400' : 'bg-slate-700';
  return (
    <>
      <div className={`h-screen w-screen ${bg_color} overflow-y-auto`}>
        <Outlet context={[isClicked, setisClicked]} />
        <Snowfall />
        {isClicked && <>
          <div className="pink-gradient absolute top-0 right-0 z-[0] h-[45%] w-[60%] opacity-5=60" />
          <div className="pink-gradient absolute top-0 left-0 z-[0] h-[45%] w-[60%] opacity-60" />
        </>
        }
      </div>
    </>
  );
};

export default Root;
