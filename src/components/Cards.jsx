import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] flex items-center gap-10 px-10">
      <div className="w-1/2 rounded-xl h-[60vh] flex items-center justify-center relative bg-[#004D43] card_container">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          className="w-32"
          alt=""
        />
        <button className="px-2 py-1 border-2 rounded-full border-[#CDEA68] font-raleway absolute  left-10 bottom-10 text-[#CDEA68]">
          &copy;2019-2023
        </button>
      </div>
      <div className="w-1/2 rounded-xl h-[60vh]  flex items-center gap-5 card_container">
        <div className="w-1/2 h-full relative flex items-center justify-center rounded-xl bg-[#212121]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            className="w-32"
            alt=""
          />
          <button className="px-2 py-1 border-2 rounded-full border-white font-raleway absolute  left-5 bottom-10 uppercase  hover:bg-white font-md  hover:text-black transition-all ease-in duration-300 text-white">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="w-1/2 h-full relative flex items-center justify-center  rounded-xl bg-[#212121]">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            className="w-32"
            alt=""
          />
          <button className="px-2 py-1 border-2 rounded-full border-white font-raleway absolute  left-5 bottom-10 uppercase  hover:bg-white font-md  hover:text-black transition-all ease-in duration-300 text-white">
            business bootcamp alumini
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
