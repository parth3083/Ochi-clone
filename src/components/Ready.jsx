import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

function Ready() {
  const [roate, setroate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let newX = Math.floor(deltaX / 100) * 2;
      let newY = Math.floor(deltaY / 100) * 2;
      console.log(newX, newY);
      gsap.to(".black", {
        y: newY,
        x: newX,
      });

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setroate(angle - 180);
    });
  }, []);
  return (
    <div className="w-full h-screen rounded-3xl bg-[#CDEA68] relative">
      <div className="flex items-center flex-col justify-center pt-20">
        {["ready", "to start", "the project ?"].map((items, index) => (
          <h1 className=" font-oswald text-[12vw] font-black tracking-tighter uppercase leading-[12vw]">
            {items}
          </h1>
        ))}
      </div>
      <div className=" -mt-16 top-1/2 left-1/2 -translate-x-[50%] flex items-center gap-10 -translate-y-[50%] absolute">
        <div className="w-[10vw] h-[10vw] flex items-center justify-center bg-white rounded-full">
          <div className="relative w-2/3 h-2/3 black bg-black rounded-full ">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${roate}deg)` }}
              className="line w-full h-7 absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="w-7 h-7 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[10vw] h-[10vw] flex items-center justify-center bg-white rounded-full">
          <div className="relative w-2/3 h-2/3 black bg-black rounded-full ">
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${roate}deg)` }}
              className="line w-full h-7 absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="w-7 h-7 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ready;
