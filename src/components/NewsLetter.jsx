import React from 'react';
import promp from "../assets/promp.jpeg";

const NewsLetter = () => {
  return (
    <div className="w-full bg-white">
      <section className="text-gray-600 body-font bg-[#D9D9D9] mt-[80px] relative">
        <div className="container mx-auto flex flex-col-reverse px-5 py-12 md:flex-row items-center ">
          <div className="lg:max-w-lg lg:w-full md:w-full  flex flex-col items-center text-center">
            <h1 className=" sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
              Join The Newsletter To Learn About Future Events
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="text-md mb-4">
              Join The Newsletter And Get 10% Discount On Your First Ticket Purchase
            </p>
            <div className="flex flex-col items-center w-full">
              <input
                placeholder="Enter Email Address"
                className="w-full md:w-[547px] h-[60px] rounded-lg pl-5 bg-[#EEEEEE] mb-3 ml-5"
              />
              <button className="w-full md:w-[135px] h-[42px] text-white bg-[#FF4D00] border-0  rounded-lg text-center">
                Subscribe
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-full mx-auto mt-10 md:mt-0">
            <img
              className="object-cover object-center rounded-2xl w-full h-auto mt-[-190px]"
              alt="hero"
              src={promp}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;