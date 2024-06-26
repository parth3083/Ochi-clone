import React from "react";
import { motion } from "framer-motion";
function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-speed="0.1"
      data-scroll-section
      className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden"
    >
      <div className="mar border-t-2 flex whitespace-nowrap  border-b-2 border-zinc-300  text-[#F1F1F1]">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
          className="text-[20vw] pr-20 uppercase tracking-tighter font-oswald font-semibold leading-none"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
          className="text-[20vw] pr-20 uppercase tracking-tighter font-oswald font-semibold leading-none"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
