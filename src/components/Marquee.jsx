import React from 'react'
import {motion} from 'framer-motion'
function Marquee() {

  return (
      <div className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden'>
          <div className="mar border-t-2 flex whitespace-nowrap gap-20 border-b-2 border-zinc-300  text-[#F1F1F1]">
              <h1  className='text-[20vw] uppercase tracking-tighter font-oswald font-semibold leading-none'>we are ochi</h1>
              <h1 className='text-[20vw] uppercase tracking-tighter font-oswald font-semibold leading-none'>we are ochi</h1>
              
          </div>
    </div>
  )
}

export default Marquee