import React from 'react'
import search from "../assets/search.png"

const Events = () => {
  return (
    <div className='bg-[#8F8F8F] text-white px-4 right-0 left-0 
    rounded-full relative flex h-[130px] items-center mt-5' >
      <div className='bg-[#D9D9D9] flex rounded-full w-[99%]' >
      <input
  placeholder="Search For An Event Here"
  className="h-[114px] border-none outline-none w-[80%] rounded-full bg-[#D9D9D9] pl-7 font-[Lexend Deca] text-lg text-[#686868]"
/>
        <div className='bg-[#4AB9E2] flex justify-center items-center  left-[80%] 
        w-[200px] h-[100px] rounded-full mt-2 ml-2' >
        <img src={search} alt="" className='w-[75px] h-[78px]  ' />
        </div>
      </div>
    </div>
  )
}

export default Events