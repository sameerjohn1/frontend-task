import React from 'react'
import images1 from "../assets/images1.png"
import images2 from "../assets/images2.png"
import images3 from "../assets/images3.png"


const TopList = () => {
  return (
    <div className='mt-12' >
            <h4 className='text-5xl text-[Lexend] text-[#FFFFFF] pl-3 ' >Top Event Lists</h4>
            <div className='mt-5 grid grid-cols-3  '>
                <img src={images1} alt="" className='border border-[#4AB9E2]' />
                <img src={images2} alt="" />
                <img src={images3} alt="" />
        </div>       
    </div>
  )
}

export default TopList