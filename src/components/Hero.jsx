import React, { useState, useEffect } from "react";
import herobg from "../assets/docs@30.8b9a76a2.avif";
import herobgDark from "../assets/docs-dark@30.1a9f8cbf.avif";
import { BsArrowRightShort } from "react-icons/bs";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import alwi2 from '../assets/alwiIndigo2.png'

import alwiBlue2 from "../assets/alwiBlue2.png";

const Hero = ({ theme }) => {
  const backgroundImage = theme === "dark" ? herobgDark : herobg;
  const profileImage = theme === "dark" ? alwiBlue2 : alwi2;

  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const opacity = 1 - scrollTop / 600; // Sesuaikan nilai berdasarkan kebutuhan Anda
      setScrollOpacity(opacity < 0 ? 0 : opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="h-screen text-slate-900 dark:text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      }}
      id="home"
    >
      <div className="w-5/6 h-full mx-auto flex  lg:flex-row flex-col-reverse items-center  lg:justify-around justify-center relative">
        <div className="">
          <h2 className="text-indigo-500 dark:text-sky-500 font-semibold text-lg">
            Hey There! 👋
          </h2>
          <h1 className="mt-4 text-slate-900 font-extrabold lg:text-5xl text-3xl tracking-[-0.04em] sm:leading-[3.5rem] dark:text-white">
            I'm Alwi Rifa <br />
            Fullstack developer
          </h1>
          <div className="mt-4 flex flex-row gap-x-4 sm:text-4xl text-xl font-semibold text-slate-400 dark:text-slate-500">
            <a
              href="https://github.com/AlwiRifa"
              target="_blank"
              className="hover:text-slate-500 dark:hover:text-slate-400 flex items-center gap-x-2 cursor-pointer"
            >
              <AiOutlineGithub />
              <span className="sm:text-lg text-sm">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ilham-alwi/"
              target="_blank"
              className="hover:text-slate-500 dark:hover:text-slate-400 flex items-center gap-x-2 cursor-pointer"
            >
              <AiFillLinkedin />
              <span className="sm:text-lg text-sm">Linkedin</span>
            </a>
            <a
              href=" https://www.instagram.com/alwirifa_/"
              target="_blank"
              className="hover:text-slate-500 dark:hover:text-slate-400 flex items-center gap-x-2 cursor-pointer"
            >
              <AiOutlineInstagram />
              <span className="sm:text-lg text-sm">Instagram</span>
            </a>
          </div>
          <p className="mt-4 lg:text-lg text-base leading-7 text-slate-600 font-semibold dark:text-slate-400">
            I create user-friendly{" "}
            <span className="font-mono font-semibold text-indigo-500 dark:text-sky-500">
              websites
            </span>{" "}
            that meet your requirements.
          </p>
          <div className="mt-4 lg:mt-8 flex text-sm gap-x-4">
            <a
              href=""
              className="bg-slate-900 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center dark:bg-sky-500 dark:hover:bg-sky-400"
            >
              Hire Me{" "}
              <BsArrowRightShort className="text-[24px] translate-y-[1.5px] text-slate-400 dark:text-white " />
            </a>

            <a
              href="#contact"
              className="border border-slate-900/20 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white dark:border-sky-500  dark:hover:border-slate-500 dark:hover:bg-slate-500 dark:hover:text-white text-slate-900 dark:text-sky-500 font-semibold py-3 px-4 rounded-lg flex justify-center items-center "
            >
              Let's Talk{""}
              <BsArrowRightShort className="text-2xl translate-y-[1.5px]" />
            </a>
          </div>
        </div>
        <img
            src={profileImage}
            alt="my-profile"
            className="lg:w-[500px] w-[300px] lg:h-[500px] h-[300px]"
          />
      

        {/* mouse icon */}
        <div
          className={`hidden sm:flex flex-col items-center justify-center gap-y-6 absolute bottom-0 left-0 py-12`}
          style={{
            opacity: scrollOpacity,
            transition: "opacity 0.5s ease", // Menambahkan efek transisi
          }}
        >
          <span className="text-xs font-semibold -rotate-90 text-slate-900 dark:text-white">
            SCROLL
          </span>
          <div className="h-[50px] w-[30px] border-2 border-solid border-slate-500 dark:border-white rounded-full flex justify-center pt-3">
            <div className="scroll h-[6px] w-[6px] ease-linear bg-slate-900 dark:bg-white rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
