import React from "react";
import image1 from "../assets/about_page.jpg";
function About() {
  return (
    <div className="w-full bg-[#CDEA68] p-20 rounded-tl-3xl rounded-tr-3xl ">
      <h1 className="text-[4vw] font-raleway tracking-tighter leading-[4.25vw] font-medium ">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full border-t-2 border-[#8ba433] mt-10 px-10 flex items-start">
        <div className="w-1/2">
          <h1 className="font-raleway text-xl mt-3">what you can expect :</h1>
        </div>
        <div className="w-1/2 h-[70vh]  mt-3 flex items-start">
          <div className="w-1/2  flex flex-col gap-20 items-center bg ">
            <p className="font-raleway text-xl font-medium tracking-tight">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="font-raleway text-xl font-medium tracking-tight">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-start pl-28 gap-5">
            <h1 className="font-raleway text-xl font-medium mt-32">S:</h1>
            <div className="flex flex-col gap-1">
              {["Instagram", "Behance", "Facebook", "LinkedIn"].map(
                (items, index) => (
                  <h2 className="font-raleway text-xl font-medium  underline">
                    {items}
                  </h2>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-2 px-10 border-[#8ba433] mt-5  flex items-start ">
        <div className="w-1/2 mt-3 ">
          <h1 className="text-5xl capitalize font-raleway font-semibold tracking-tighter">
            our approach
          </h1>
          <button className="px-6 py-2 bg-black text-white rounded-full mt-5 flex items-center gap-5">
            <h2 className="uppercase text-xl font-raleway font-semibold">
              read more
            </h2>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 mt-3 rounded-3xl overflow-hidden h-[70vh] bg-red-500">
          <img src={image1} className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
