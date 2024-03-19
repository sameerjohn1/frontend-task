import React from 'react'
import Events from './Events'
import TopList from './TopList'
import Featured from './Featured'

const Hero = () => {
  return (
    <div className='bg-[#13100F] text-white' >
        <div className=' w-full' >
            <p className='font-[Lexend] text-center  pt-3 text-lg' >Hurray! You are in the right place * 100K+ social media followers * We value every custome</p>
            <p className='font-[Lexend] text-center text-4xl' ><span className='text-[#22B3C1]' >Purchase Tickets </span> For A </p>
            <p className='font-[Lexend] text-center  text-4xl' >Semi Final 1 - T20 Cricket World Cup</p>
             <p className='font-[Lexend] text-center ' >15 MAR, 2024</p>
             <p className='font-[Lexend] text-center  text-lg' >Your next best-night-ever is waiting. And we have the tickets.</p>
        </div>
        <Events/>
        <TopList/>
    </div>
  
  )
}

export default Hero