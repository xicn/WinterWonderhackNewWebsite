import { motion } from "framer-motion";
import { strings } from "../constants";
const { title, subTitle, locationInfo } = strings;

const Main = () => {
  return (
    <motion.div className="z-[5] mx-10 mt-10 border-y-2 py-10 px-4 text-center uppercase text-white"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: { duration: 1, delay: 0.4 }
      }}
    >
      <h1 className="mb-4 min-w-full font-poppins text-4xl font-semibold leading-[46px] tracking-[8px]">
        {title.content}
      </h1>
      <h3 className="mb-4 font-poppins font-semibold leading-6 tracking-[3.2px]">
        {subTitle.content}
      </h3>
      <p className="tracking-[3.2px]">{locationInfo.content}</p>
    </motion.div >
  );
};

export default Main;
