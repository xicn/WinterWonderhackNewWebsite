import { motion } from "framer-motion";
import frame from "../assets/frame.png";
import logo1 from "../assets/logo.svg";
import { useOutletContext } from "react-router-dom";

const Logo = () => {
  const [isClicked, setisClicked] = useOutletContext();
  return (
    <div>
      <motion.img
        src={logo1}
        alt="wwh-icon"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
        className="relative z-[5] my-10 h-[150px]  w-[150px] after:content-['2023'] after:font-poppins after:text-3xl after:w-[20px] after:h-[30px] after:text-white after:absolute after:top-0"
        onClick={() => setisClicked(!isClicked)}
      />
    </div>
  );
};

export default Logo;
