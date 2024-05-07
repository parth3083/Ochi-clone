import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import image1 from "../assets/landing_page.jpg"
function LandingPage() {
  return (
      <div className='w-full h-screen bg-[#F1F1F1] pt-1'>
           
          <div className="main mt-36 px-16">
          {["we create", "eye-opening", "presentations"].map((items, index) => (
              <div className="markers  flex items-center gap-5">
                  {index == 1 && (
                      <div className='w-[9vw] rounded-md h-[5.5vw] mt-1 overflow-hidden '>
                          <img src={image1} className='w-full h-full object-cover ' alt="" />
                      </div>
                  )}
                  <h1 className='text-[7vw] font-oswald font-bold uppercase tracking-tighter  leading-[6.25vw]'>{items}</h1>
                  </div>
              ))}
              
          </div>
          <div className="down border-t-2 px-16 flex items-center justify-between border-zinc-300 mt-32">
              {["for public and private companies", "From first pitch to IPO"].map((items, index) => {
                 return  <p className=' font-medium mt-1 text-md capitalize font-raleway '>{ items}</p>
              })}
              <div className="start mt-1 flex items-center gap-3">
                  <div className="text1 px-3 py-1 text-md  rounded-full hover:bg-black hover:border-black cursor-pointer hover:text-white transition-all ease-in-out duration-500 overflow-hidden hover: border-[2px] border-zinc-500">START THE PROJECT</div>
                  <div className="circle w-[2.5vw] h-[2.5vw] rounded-full hover:bg-black hover:border-black cursor-pointer hover:text-white transition-all ease-in-out duration-500 border-[2px] flex items-center justify-center border-zinc-500">
                      <div className=' rotate-[45deg]'><FaArrowUpLong />
</div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default LandingPage