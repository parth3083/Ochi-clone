import React from "react";
import image1 from "../assets/f_!.png";
import image2 from "../assets/f_2.jpg";
import image3 from "../assets/f_3.jpg";
import image4 from "../assets/f_4.png";
import { motion, useAnimation } from "framer-motion";

function Feature() {
  const all = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  const handleHover = (index) => {
    all[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    all[index].start({ y: "100%" });
  };
  return (
    <div
      data-scroll
      data-scroll-speed="-0.1"
      className="w-full py-10 px-10 bg-[#F1F1F1]"
    >
      <div className="w-full px-10 border-b-2 border-zinc-400 pb-8">
        <h1 className=" font-raleway text-[4vw] font-md">Featured Projects</h1>
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="cards  flex items-center gap-10 mt-5">
          <div className="card_1 w-1/2 h-[90vh]  flex flex-col gap-4">
            <div className=" heading flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <h1 className="text-[1.325vw] font-raleway font-semibold uppercase">
                fyde
              </h1>
            </div>
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="w-full  relative h-[85%] rounded-3xl"
            >
              <motion.div className="w-fit flex overflow-hidden absolute z-[999] top-1/2 -translate-x-1/2 left-full -translate-y-1/2  font-oswald font-bold uppercase text-[5vw] text-[#CDEA68] tracking-tighter">
                {"fyde".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={all[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                      duration: 0.3,
                    }}
                    className="inline-block"
                  >
                    {items}
                  </motion.span>
                ))}
              </motion.div>
              <div className="image_container transition-all ease-linear duration-100 w-full h-full rounded-3xl overflow-hidden hover:scale-[90%]  ">
                <img
                  src={image1}
                  className="w-full  h-full object-cover "
                  alt=""
                />
              </div>
            </motion.div>
            <div className="w-full h-[7vh]  flex items gap-5">
              <button className="text-[1.1vw] uppercase font-raleway px-4 py-[0.25vw] border-2 border-zinc-900 text-black rounded-full">
                audit
              </button>
              <button className="text-[1.1vw] uppercase font-raleway px-4 py-[0.25vw] border-2 border-zinc-900 text-black rounded-full">
                copy writing
              </button>
              <button className="text-[1.1vw] uppercase font-raleway px-4 py-[0.25vw] border-2 border-zinc-900 text-black rounded-full">
                sales deck
              </button>
              <button className="text-[1.1vw] uppercase font-raleway px-4 py-[0.25vw] border-2 border-zinc-900 text-black rounded-full">
                slides design
              </button>
            </div>
          </div>
          <div className="card_1 w-1/2 h-[90vh]  flex flex-col gap-4">
            <div className=" heading flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <h1 className="text-[1.325vw] font-raleway font-semibold uppercase">
                vise
              </h1>
            </div>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="w-full relative  h-[85%] rounded-3xl"
            >
              <motion.div className="w-fit flex overflow-hidden absolute z-[999] top-1/2 translate-x-1/2 right-full -translate-y-1/2  font-oswald font-bold uppercase text-[5vw] text-[#CDEA68] tracking-tighter">
                {"vise".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={all[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                      duration: 0.3,
                    }}
                    className="inline-block"
                  >
                    {items}
                  </motion.span>
                ))}
              </motion.div>
              <div className="image_container transition-all ease-linear duration-100 w-full h-full rounded-3xl overflow-hidden hover:scale-[90%]  ">
                <img
                  src={image2}
                  className="w-full  h-full object-cover "
                  alt=""
                />
              </div>
            </motion.div>
            <div className="w-full h-[7vh]  flex items gap-5">
              <button className="text-[1.1vw] uppercase font-raleway px-4 py-[0.25vw] border-2 border-zinc-900 text-black rounded-full">
                agency
              </button>
              <button className="text-[1.1vw] uppercase font-raleway px-4 py-[0.25vw] border-2 border-zinc-900 text-black rounded-full">
                company presentation
              </button>
            </div>
          </div>
        </div>
        <div className="cards  flex items-center gap-10 mt-5">
          <div className="card_1 w-1/2 h-[90vh]  flex flex-col gap-4">
            <div className=" heading flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <h1 className="text-[1.325vw] font-raleway font-semibold uppercase">
                trawa
              </h1>
            </div>
            <motion.div
              onHoverStart={() => handleHover(2)}
              onHoverEnd={() => handleHoverEnd(2)}
              className="w-full  relative h-[85%] rounded-3xl"
            >
              <motion.div className="w-fit flex overflow-hidden absolute z-[999] top-1/2 -translate-x-1/2 left-full -translate-y-1/2  font-oswald font-bold uppercase text-[5vw] text-[#CDEA68] tracking-tighter">
                {"trawa".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={all[2]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                      duration: 0.3,
                    }}
                    className="inline-block"
                  >
                    {items}
                  </motion.span>
                ))}
              </motion.div>
              <div className="image_container transition-all ease-linear duration-100 w-full h-full rounded-3xl overflow-hidden hover:scale-[90%]  ">
                <img
                  src={image3}
                  className="w-full  h-full object-cover "
                  alt=""
                />
              </div>
            </motion.div>
            <div className="w-full h-[7vh]  flex items gap-5">
              <button className="text-[1.1vw] uppercase font-raleway px-4 py-[0.25vw] border-2 border-zinc-900 text-black rounded-full">
                brand identity
              </button>
              <button className="text-[1.1vw] uppercase font-raleway px-4 py-[0.25vw] border-2 border-zinc-900 text-black rounded-full">
                design research
              </button>
              <button className="text-[1.1vw] uppercase font-raleway px-4 py-[0.25vw] border-2 border-zinc-900 text-black rounded-full">
                investor deck
              </button>
            </div>
          </div>
          <div className="card_1 w-1/2 h-[90vh]  flex flex-col gap-4">
            <div className=" heading flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <h1 className="text-[1.325vw] font-raleway font-semibold uppercase">
                premium blend
              </h1>
            </div>
            <motion.div
              onHoverStart={() => handleHover(3)}
              onHoverEnd={() => handleHoverEnd(3)}
              className="w-full relative  h-[85%] rounded-3xl"
            >
              <motion.div className="w-fit flex overflow-hidden absolute z-[999] top-1/2 translate-x-1/2 right-full -translate-y-1/2  font-oswald font-bold uppercase text-[5vw] text-[#CDEA68] tracking-tighter">
                {"premiumblend".split("").map((items, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={all[3]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                      duration: 0.3,
                    }}
                    className="inline-block"
                  >
                    {items}
                  </motion.span>
                ))}
              </motion.div>
              <div className="image_container transition-all ease-linear duration-100 w-full h-full rounded-3xl overflow-hidden hover:scale-[90%]  ">
                <img
                  src={image4}
                  className="w-full  h-full object-cover "
                  alt=""
                />
              </div>
            </motion.div>
            <div className="w-full h-[7vh]  flex items gap-5">
              <button className="text-[1.1vw] uppercase font-raleway px-4 py-[0.25vw] border-2 border-zinc-900 text-black rounded-full">
                barnded template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
