import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { strings } from "../constants";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="m-auto flex flex-col items-center justify-center pb-10">
      {/* Wrapper Container */}
      <motion.div className="relative z-[5] mx-10 mb-10 w-3/4 py-10 px-4 md:w-[800px]"
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

        <h1 className="mt-10 mb-4 font-poppins text-xl font-semibold tracking-[8px] text-white ">
          {strings.registrationTitle.content}
        </h1>

        <p className="mb-8 text-white">
          Register for free using the form below!
        </p>
        <button
          className="w-[300px] h-[200px]flex-1 border-2 text-white border-white px-5 leading-10 hover:bg-indigo-500 active:bg-indigo-600"
          type="button"
          onClick={() => {
            window.location.href = 'https://forms.gle/73oJ1McusQiihwhcA';
            return null;
          }}
        >
          Register Now!

        </button>


        <div className="relative"> <iframe className=" absolute md:left-[-64px] sm:left-[-32px] left-0  w-full h-[3566px] " align="left" src="https://docs.google.com/forms/d/e/1FAIpQLSdF6WOEZClTVzXNMBFR-hhUadA1_wbSLjoJ_yH4nEWmjeH7hw/viewform?embedded=true" >Loading…</iframe>
        </div>




      </motion.div>

    </div>
  );
};

export default Register;
