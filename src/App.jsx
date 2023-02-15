import { Logo, Main, Nav, Footer } from "./components";
import Snowfall from "react-snowfall";
import { motion } from "framer-motion";
import { useState } from "react";
import Coming from "./components/Coming";

const App = () => {

  const [coming, setComing] = useState(true);
  return (
    <div className="m-auto flex flex-1 flex-col items-center justify-center py-5"

    >

      {!coming &&
        <>
          {/* Header */}
          <Logo />
          {/* Main */}
          <Main />
          {/* Naviation links */}
          <Nav /> </>

      }

      {
        coming &&
        <Coming />
      }
      {/* Footer */}
      <Footer className="z-[5]" />



      {/* <div className="white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full" /> */}
      {/* <div className="blue__gradient absolute right-20 bottom-20 z-[0] h-[50%] w-[50%]" /> */}
      {/* BG */}
      {/* <Snowfall /> */}
    </div>
  );
};

export default App;
