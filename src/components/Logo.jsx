import { motion } from "framer-motion";
import frame from "../assets/frame.png";
import { useOutletContext } from "react-router-dom";

const Logo = () => {
  const [isClicked, setisClicked] = useOutletContext();
  return (
    <div>
      <motion.img
        src={frame}
        alt="wwh-icon"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
        className="relative z-[5] my-10 h-[150px]  w-[150px]"
        onClick={() => setisClicked(!isClicked)}
      />
    </div>
  );
};

export default Logo;
