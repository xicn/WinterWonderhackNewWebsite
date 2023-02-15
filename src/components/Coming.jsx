import React from 'react'
import { motion } from "framer-motion";
import frame from "../assets/frame.png";
import logo1 from "../assets/logo.svg";
import { useOutletContext } from "react-router-dom";
import Typed from "react-typed"

const Coming = () => {
    const [isClicked, setisClicked] = useOutletContext();
    return (
        <>
            <div className='z-[5] m-auto px-10'>
                <motion.img
                    src={logo1}
                    alt="wwh-icon"
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    whileHover={{ scale: 1.1 }}
                    // initial={{ opacity: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ ease: "linear", duration: 7, repeat: Infinity }}
                    className="z-[5] my-10 h-[350px]  w-[350px]"
                    onClick={() => setisClicked(!isClicked)}
                />

            </div >
            <div className='z-[5] m-auto px-10'>
                <h1 className="mb-4 min-w-full max-w-[600px] font-poppins text-4xl font-semibold leading-[46px] tracking-[8px] text-white">
                    Stay tuned with us. <br />
                    <h1 className=' text-cyan-200'><Typed
                        strings={[
                            "We will be back soon!",
                            "Winter Wonderhack 2023 will be back...",
                            "In March 2023❤...",
                        ]}
                        typeSpeed={150}
                        backSpeed={50}
                        loop
                    /></h1>
                </h1>

            </div >

        </>
    )
}

export default Coming