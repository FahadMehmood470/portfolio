import React from 'react'
import { ReactTyped } from "react-typed";
function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>GROW WITH DATA</h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'> Fast, Flexible Financing for</p>
          <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold'
            strings={[
              "Search for products",
              "Search for categories",
              "Search for brands",
            ]}
            typeSpeed={40}
            backSpeed={50}

            loop
          >

          </ReactTyped>
        </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero