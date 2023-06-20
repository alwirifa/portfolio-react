import React from "react";
import aboutbg2 from "../assets/aboutbg2.png";
import darkBg from "../assets/darkBg.png";
import alwiAbout from "../assets/alwiAbout.jpg";

function About({ theme }) {
  const backgroundImage = theme === "dark" ? darkBg : aboutbg2;

  return (
    <div
      className="h-screen text-slate-900 dark:text-white dark:bg-slate-900 relative theme-switch"
     
      id="about"
    >
      <div className="w-5/6 mx-auto h-full  flex items-end pb-12 sm:pb-36 xl:items-center justify-center ">
        <h1 className="absolute top-32 font-semibold tracking-[5px] text-2xl text-black dark:text-white">
          ABOUT ME
        </h1>
        <div className="flex xl:flex-row flex-col xl:justify-between items-center gap-6 ">
          <img
            src={alwiAbout}
            alt="alwi"
            className="rounded-xl xl:w-[600px] w-[500px] shadow-xl"
          />
          <div className="flex flex-col sm:gap-4 gap-1 w-full">
            <h2 className="sm:text-2xl text-lg font-semibold">Hi there 👋, my name is Alwi</h2>
            <p className="sm:text-lg text-sm text-black dark:text-white text-justify sm:leading-normal leading-loose mt-4">
              I am a Full-Stack developer based in Bandung, Indonesia. I am an
              undergraduate student of Electrical Engineering at Indonesia
              University of Education, and my journey in web development began
              during my first year of college in 2019. I am deeply passionate
              about creating beautiful, functional, and user-friendly websites.
              I constantly challenge myself to learn and grow as a developer.
              Additionally, I enjoy building full-stack clones and working on
              side projects.
            </p>
            <div className="flex flex-row gap-4">
              <a className=" rounded-md px-4 py-3 font-semibold bg-indigo-500  hover:bg-indigo-400  dark:bg-sky-500  dark:hover:bg-sky-400 text-white cursor-pointer">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
