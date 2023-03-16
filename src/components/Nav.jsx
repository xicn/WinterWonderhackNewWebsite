import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [scheduleAnnounced, setscheduleAnnounced] = useState(true)
  return (
    <motion.div className=" relative z-[5] mb-10 mt-10 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
    >
      <div className="before:absolute before:top-[-40px] before:left-[50%] before:block before:h-10 before:w-[2px] before:bg-white before:content-['']">
        <ul className=" flex w-[100px] select-none flex-col justify-center space-y-[-2px] text-center text-white sm:w-[300px] sm:flex-row sm:-space-x-[2px] sm:space-y-0">
          <Link
            to="info"
            className="flex-1  border-2 border-white px-5 leading-10 hover:bg-indigo-500 active:bg-indigo-600"
          >
            Info
          </Link>
          <Link
            to="schedule"
            className={`  flex-1 border-2 ${scheduleAnnounced && 'text-cyan-300'} text-indigio-700 border-white px-5 leading-10 hover:bg-indigo-500 active:bg-indigo-600`}
          >
            Schedule
          </Link>
          <Link
            to="register"
            className="flex-1 border-2 border-white px-5  leading-10 hover:bg-indigo-500 active:bg-indigo-600"
          >
            Register
          </Link>
          <li className="hidden flex-1 border-2 border-white px-5  leading-10 hover:bg-indigo-500 active:bg-indigo-600">
            Sponsors
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Nav;
