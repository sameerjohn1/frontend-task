import React from 'react'
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"


const Featured = () => {
    let arr=[
        {
            id:1,
            img:img1,
            heading1:"Billy Joel & Stevie Nicks ",
            heading2:"New York, United States",
            price:"from $80"    
        },
        {
            id:2,
            img:img2,
            heading1:"Billy Joel & Stevie Nicks ",
            heading2:"New York, United States",
            price:"from $80"    
        },
        {
            id:3,
            img:img3,
            heading1:"Billy Joel & Stevie Nicks ",
            heading2:"New York, United States",
            price:"from $80"    
        },
        {
            id:4,
            img:img1,
            heading1:"Billy Joel & Stevie Nicks ",
            heading2:"New York, United States",
            price:"from $80"    
        },
        {
            id:5,
            img:img2,
            heading1:"Billy Joel & Stevie Nicks ",
            heading2:"New York, United States",
            price:"from $80"    
        },
        {
            id:6,
            img:img3,
            heading1:"Billy Joel & Stevie Nicks ",
            heading2:"New York, United States",
            price:"from $80"    
        },
        {
            id:7,
            img:img1,
            heading1:"Billy Joel & Stevie Nicks ",
            heading2:"New York, United States",
            price:"from $80"    
        },
        {
            id:8,
            img:img2,
            heading1:"Billy Joel & Stevie Nicks ",
            heading2:"New York, United States",
            price:"from $80"    
        },
        {
            id:9,
            img:img3,
            heading1:"Billy Joel & Stevie Nicks ",
            heading2:"New York, United States",
            price:"from $80"    
        }
    ]
  return (
    <div className='mt-10'>
        <div className='mx-auto pl-12' >
            <p className='text-[Lexend]  text-3xl pl-2' >Featured Events On Sale Today</p>
        </div>

        <div className='ml-5   flex items-center sm:flex-col flex-col md:flex-row' >
            <div className='flex max-w-[700px] justify-around text-xl mt-5 ml-7 sm:w-[400px] xs:w-[300px] ' >
                <h6>Filter By :</h6>
                <h6 className='text-[#22B3C1] border-b border-[#22B3C1] '>All</h6>
                <h6 className='text-[#22B3C1] border-b border-[#22B3C1]'>Sports</h6>
                <h6 className='text-[#22B3C1] border-b border-[#22B3C1]'>Concerts</h6>
                <h6 className='text-[#22B3C1] border-b border-[#22B3C1]'>Theaters</h6>
            </div>
           {/*  */}
            <div className='ml-3' >
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" md:w-[400px] text-black 
              flex justify-between border focus:outline-none  font-medium rounded-lg  px-5 py-2.5  items-center 
              mt-2 text-lg
              " type="button">All Events<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>  
    </div>
        </div>

       
{/* cards */}

<div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">


    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
    {arr?.map((value)=>{
    return(
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6" key={value.id}>
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full " src={value.img}/>
        </div>
        <div className='flex flex-col justify-center items-center' >
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-[Lexend]">{value.heading1}</h2>
        <p className="text-base leading-relaxed mt-2 text-[Lexend]">{value.heading2}</p>
        <p className="text-base leading-relaxed mt-2 text-[Lexend] text-[#22B3C1]">{value.price}</p>
        </div>
      </div>
    )
})}
    </div>
  </div>
</section>
</div>
    </div>
  )
}

export default Featured