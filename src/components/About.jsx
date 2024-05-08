import React from 'react'
import image1 from "../assets/about_page.jpg"
function About() {
  return (
      <div className='w-full bg-[#CDEA68] p-20 rounded-tl-3xl rounded-tr-3xl '>
          <h1 className='text-[4vw] font-raleway tracking-tighter leading-[4.25vw] font-medium '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
          <div className='w-full border-t-2 px-10 border-[#8ba433] mt-32  flex items-start '>
              <div className='w-1/2 mt-3 '>
                  <h1 className='text-5xl capitalize font-raleway font-semibold tracking-tighter'>our approach</h1>
                  <button className='px-6 py-2 bg-black text-white rounded-full mt-5 flex items-center gap-5'>
                      <h2 className='uppercase text-xl font-raleway font-semibold'>read more</h2>
                      <div className='w-4 h-4 bg-white rounded-full'></div>
                  </button>
              </div>
              <div className='w-1/2 mt-3 rounded-3xl overflow-hidden h-[70vh] bg-red-500'>
                  <img src={ image1} className='w-full h-full object-cover' alt="" />
              </div>
          </div>
    </div>
  )
}

export default About