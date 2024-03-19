import React from 'react'
import visa from "../assets/visa.jpeg"
import master from "../assets/master.png"
import pay from "../assets/pay.png"
import gpay from "../assets/gpay.png"
import paypal from "../assets/paypal.png"
import stripe from "../assets/stripe.png"
import gurantylogo from "../assets/gurantylogo.png"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import footerimg from "../assets/footerimg.png"
import footerpic from "../assets/footerpic.png"


const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font bg-black">
        <div className="px-5 py-10 md:py-24 mx-auto flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-1/2 md:mr-20">
            <div className="text-center md:text-left">
              <h2 className="text-3xl text-white mb-6">PAYMENT</h2>
              <div className="flex justify-center md:justify-start mb-4">
                <img src={visa} alt="" className="w-16 h-auto mr-2 " />
                <img src={master} alt="" className="w-16 h-auto mr-2 " />
                <img src={pay} alt="" className="w-16 h-auto mr-2 bg-[#D9D9D9]" />
                <img src={gpay} alt="" className="w-16 h-auto mr-2 bg-[#D9D9D9]" />
                <img src={paypal} alt="" className="w-16 h-auto mr-2 bg-[#D9D9D9]" />
                <img src={stripe} alt="" className="w-16 h-auto mr-2 bg-[#D9D9D9]" />
              </div>
              <div className="text-white flex items-center mb-4">
                <img src={gurantylogo} alt="" className="w-20 h-auto mr-4" />
                <div>
                  <h2 className="text-2xl mb-2">OUR WARRANTY</h2>
                  <p>IF YOU ARE NOT 100% SATISFIED WE WILL REFUND YOU 100% OF YOUR ORDER.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div>
                  <h2 className="text-2xl text-white mb-2">ArtsDot.com</h2>
                  <p className="text-lg text-[#858181]">Privacy Policies</p>
                  <p className="text-lg text-[#858181]">Terms of service</p>
                  <p className="text-lg text-[#858181]">Contact@ArtsDot.com</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <h2 className="text-lg text-white mb-2">Copyright 2007-2024</h2>
                  <p className="text-lg text-[#858181]">Return policies</p>
                  <p className="text-lg text-[#858181]">F.A.Q 1/2   F.A.Q 2/2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <nav className="list-none mb-10 md:mb-0">
              <h2 className="text-3xl text-white mb-6 text-center md:text-left">SOCIAL MEDIA</h2>
              <div className="flex justify-center md:justify-start mb-6">
                <FaSquareFacebook className="w-10 h-10 text-blue-300 mr-2" />
                <FaTwitterSquare className="w-10 h-10 text-blue-300 mr-2" />
                <FaPinterestSquare className="w-10 h-10 text-red-300 mr-2" />
                <FaYoutubeSquare className="w-10 h-10 text-red-500 mr-2" />
                <FaInstagramSquare className="w-10 h-10 text-red-400 mr-2" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl text-white mb-6">PARTNERS</h2>
                <img src={footerimg} alt="" className="w-40 mb-4 mx-auto md:mx-0" />
                <img src={footerpic} alt="" className="w-40 mx-auto md:mx-0" />
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer