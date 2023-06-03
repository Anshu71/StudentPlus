import react from "react";
import Courses from "../components/Courses";

function Hero() {
  return (
        <section class="text-gray-600 body-font bg-[#101828]">
          <div class="w-11/12 mx-auto flex md:py-16 py-5 md:flex-row flex-col pb-5 items-center">

            <div class="absolute z-30 py-0 left-0 w-80 h-96  bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-100 opacity-30 blur-3xl flex-none order-4 rounded-xl transform -rotate-45 pointer-events-none"></div>

            <div class="lg:flex-grow md:w-1/2 lg:pr-0 md:pr-12 flex flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center font-title">
              <h1 class="2xl:text-6xl xl:text-5xl sm:text-4xl text-3xl mb-2 text-white">Customise your computing experience with TCET Linux
              </h1>
              <p class="mb-8 leading-relaxed text-indigo-300 sm:text-sm text-xs">TCET Linux • Powered by FOSS</p>
              <p class="mb-8 leading-relaxed text-[#D0D5DD] sm:text-base text-sm">TCET Open Source is an organization where software is not just a commodity to be bought and sold, but a collaborative effort that brings people together to solve problems and build something greater than themselves.</p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-[#01105F] shadow-base shadow-sky-500 border-sky-500 border-y-2 py-2 px-6 focus:outline-none rounded-3xl text:base md:text-lg hover:bg-blue-700 ">Explore</button>
              </div>
            </div>

            <div class=" flex sm:w-1/2">
              <div class="hidden md:flex absolute z-30 pt-20 m-14 w-48 h-52 xl:w-[400px] xl:h-[300px] bg-[#98A2B3] opacity-30 blur-2xl flex-none order-4 rounded-full pointer-events-none"></div>
              <div class="z-50 flex align-middle rounded-xl m-2">
                <img class="w-full object-contain" src="images/hero.jpg"></img>
              </div>
            </div>

          </div>
        </section>
  )
}

export default Hero