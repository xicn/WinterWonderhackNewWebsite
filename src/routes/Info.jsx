import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import infoImg from "../assets/info.png";
import { strings, info } from "../constants";
const { forQuestions } = strings;


const Info = () => {
  const navigate = useNavigate();
  return (
    <div className=" m-auto flex flex-col items-center justify-center "

    >
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

        <h1 className="mt-10 font-poppins text-3xl font-semibold tracking-[8px] text-white after:block after:h-[2px] after:w-[100px] after:bg-white after:content-['']">
          INFO
        </h1>
        <img src={infoImg} alt="Image" className="my-10  rounded-md " />

        <p className="mb-10 text-white">{forQuestions.content}</p>

        {info.map(({ title, content }) => (
          <div className="text-white">
            <p className="mb-4 text-xl font-bold leading-6 tracking-[3.2px]">
              {title}
            </p>
            <p className="mb-8 leading-7">{content}</p>
          </div>
        ))}
        {/* <div className="mb-40"></div> */}
      </motion.div>
    </div>
  );
};

export default Info;
