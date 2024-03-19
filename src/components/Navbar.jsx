import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa";


const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  
  return (
    <header className="max-w-screen-2xl w-full bg-black   ">
      <nav className="flex justify-evenly items-center  md:py-4 pt-6 pb-3">
        <div className="ml-3  text-white w-[300.11px]">
         <h4 className='text-2xl font-[Lexend Exa] sm:text-md'>LAST CHANCE TICKET</h4>
          <p className='w-[287px] text-[#22B3C1] text-[12px]'>Y O U R T R U S T E  D T I C K E T S E L L E R</p>
        </div>
      

  <div className="hidden lg:block" >
    <nav className="md:mr-auto flex flex-wrap items-center text-white justify-center ">
       <a className="mr-5 hover:text-gray-900 text-2xl font-Lexend Deca]">100+Social Media Followers </a>
       <a className="mr-5 hover:text-gray-900">Request Event</a>
       <a className="mr-5 hover:text-gray-900">Contact Us</a>
     </nav>
     </div>

        {/* account and shopping btn */}
        <div className="text-lg  text-Black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2">
            <FaPhone className="text-[#22B3C1]"  />
          </a>
          <button className="text-white bg-[#22B3C1] w-[138px] h-[55px] rounded-md" >Sell Tickets</button>
          <button className="text-white bg-[#22B3C1] w-[138px] h-[55px] rounded-md" >Login</button>
        </div>

        {/* navbar for sm devices */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isOpenMenu ? (
              <FaTimes className="w-5 h-5 text-white" />
            ) : (
              <FaBars className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </nav>

      <hr />

    

      {/* only mobile menu items */}
      <div>
        <ul
          className={`font-light text-sm bg-Black text-white px-4 py-2 rounded 
          ${isOpenMenu ? "" : "hidden"} `}
        >
          <nav className="md:mr-auto flex flex-col  items-center text-white justify-center ">
       <a className="mr-2 hover:text-gray-900 text-md font-Lexend Deca]">100+Social Media Followers </a>
       <a className="mr-2 hover:text-gray-900">Request Event</a>
       <a className="mr-2 hover:text-gray-900">Contact Us</a>
       <button className="text-white bg-[#22B3C1] w-[108px] mt-2 h-[40px] rounded-md" >Sell Tickets</button>
          <button className="text-white bg-[#22B3C1] w-[108px] mt-2 h-[40px] rounded-md" >Login</button>
     </nav>

        
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
