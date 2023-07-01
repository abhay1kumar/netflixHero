import Image from "next/image";
import React from "react";
import arrowAngle from "../public/assets/right-arrow-angle.png";
import globe from "../public/assets/globe.png";
import Netflix_Logo_PMS from "../public/assets/Netflix_Logo_PMS.png";
import triangular from "../public/assets/down-filled-triangular-arrow.png";

const HeroSection = () => {
  return (
    <div className="h-[65vh] sm:h-[90vh] xl:h-[95vh] bg-cover bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/f7eb3bc2-2867-4c7e-94f8-e62ec11175cd/IN-en-20230626-popsignuptwoweeks-perspective_alpha_website_small.jpg')] border-b-8 border-gray-800  ">
      <div className="bg-black bg-opacity-70 h-[100vh]">
        <div className="flex items-center justify-between ">
          <Image
           src={Netflix_Logo_PMS}
            className="w-28 sm:w-36 lg:w-52 ml-4 sm:ml-8 pt-4"
            alt="logo_red"
          />
          <div className="flex mr-4 sm:mr-10">
            <button className="flex justify-center items-center text-white h-8 sm:rounded-none m-2 mr-6 border rounded">
              <Image
               src={globe}
                className="w-4 mx-1"
                alt="globe"
              />
              English
              <Image
               src={triangular}
                className="w-3 mx-1 pt-1"
                alt="drop-down"
              />
            </button>
            <button
              className="h-8 px-1 sm:px-4 m-2 text-white bg-[#e50914] rounded hover:bg-[#e50914]"
              onClick={() => console.log("SignIN")}
            >
              Sign in
            </button>
          </div>
        </div>
        <div className="h-[55vh] sm:h-[80vh] w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl  md:px-[15%] lg:mx-14 lg:px-[7%] xl:px-[15%] font-bold">
            Unlimited movies, TV shows, and more..
          </h1>
          <h2 className="text-lg sm:text-1xl lg:text-2xl font-medium m-2 sm:m-4">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-lg lg:text-base font-medium sm:px-[26%] md:px-[10%] m-2 sm:m-3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-col md:flex-row justify-center">
            <input
              className=" pl-2 bg-transparent border border-gray-300 rounded-md h-12 md:h-14 xl:h-16 w-[70vw] sm:w-[28rem]  md:w-[28rem] lg:w-[34rem] sm:my-2 text-gray-900 font-medium"
              type="email"
              name="email"
              placeholder="Email address"
            />
            <button className="flex self-center w-35 mt-5 md:w-52 items-center bg-red-600 hover:bg-[#e50914] pl-4 md:pl-7 h-10 md:h-14 xl:h-16 m-2 md:m-0 md:text-2xl rounded">
              Get Started
              <Image
                src={arrowAngle}
                className="w-4 md:w-7 pt-1 text-white"
                alt="right-angle"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
