import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import sched from "../assets/Schedule.png"

const Schedule = () => {
  const navigate = useNavigate();
  return (
    <div className="m-auto flex flex-col items-center justify-center">
      {/* Wrapper Container */}
      <motion.div className="z-[5] mx-10 mb-10 w-3/4 py-10 px-4 md:w-[55%]"
        initial={{ opacity: 0, zIndex: 100 }}
        animate={{
          opacity: 1, transition: { duration: 1, delay: 0.4 },
        }}
      >
        {/* Close button */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="h-10 w-10 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Heading and content */}

        <h1 className="mt-10 mb-4 font-poppins text-2xl font-semibold leading-9 tracking-[8px] text-white after:block after:h-[2px] after:w-[300px] after:bg-white after:content-['']">
          Event Schedule
        </h1>

        {/* <p className="mb-8 text-white">
          To be announced!
        </p> */}
        <img src={sched} alt="" />
      </motion.div>
    </div>
  );
};

export default Schedule;
