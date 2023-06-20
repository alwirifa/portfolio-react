import React, { useState, useEffect } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

const Menu = ({ closeMenu }) => (
  <>
    <p>
      <a href="#home" onClick={closeMenu}>
        Home
      </a>
    </p>
    <p>
      <a href="#about" onClick={closeMenu}>
        About
      </a>
    </p>
    <p>
      <a href="#projects" onClick={closeMenu}>
        Project
      </a>
    </p>
    <p>
      <a href="#contact" onClick={closeMenu}>
        Contact 👋
      </a>
    </p>
  </>
);

const Header = ({ handleThemeSwitch }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
    handleThemeSwitch();
  };

  const handleClick = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <motion.header
      className={`fixed w-full py-8 text-sm font-semibold z-40  ${
        isScrolled
          ? "bg-white/80 border-b border-slate-700/20 shadow-md ease-in-out duration-500 dark:border-0 dark:bg-slate-900/80 theme-switch"
          : "ease-in-out duration-500"
      }`}
    >
      <div className="w-5/6 mx-auto flex items-center justify-between relative ">
        <motion.a
          initial={{
            x: -500,
            opacity: 0,
            scale: 1,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          href="#home"
          className="cursor-pointer text-base tracking-tight"
        >
          🔥Alwi Rifa
        </motion.a>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 1,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex items-center gap-x-8"
        >
          <nav>
            <ul className="xl:flex items-center gap-x-8 hidden">
              <li>
                <a
                  href="#home"
                  className="hover:text-indigo-500 dark:hover:text-sky-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-indigo-500 dark:hover:text-sky-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="hover:text-indigo-500 dark:hover:text-sky-400"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-indigo-500 dark:hover:text-sky-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <label className="relative hidden xl:inline-block w-12 h-6 theme-switch cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={toggleSwitch}
              className="opacity-0 w-0 h-0"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full theme-switch">
              <div
                className={`absolute top-0.5 left-auto right-0.5 bottom-auto w-5 h-5 bg-white  dark:bg-slate-900 rounded-full transform transition-transform duration-300 toggle-icon flex items-center justify-center ${
                  isChecked ? "" : "-translate-x-6"
                }`}
              />
              <div
                className={`absolute top-0.5 left-0.5 right-auto bottom-auto w-5 h-5 rounded-full transform transition-transform duration-300 toggle-icon flex items-center justify-center ${
                  isChecked ? "" : "translate-x-6"
                }`}
              >
                {isChecked ? (
                  <HiMoon className="h-4 w-4 m-auto" />
                ) : (
                  <HiSun className=" h-4 w-4 m-auto" />
                )}
              </div>
            </div>
          </label>
          <div
            className="hamburger xl:hidden flex flex-col items-end gap-1 p-4 cursor-pointer z-50"
            onClick={handleClick}
          >
            <span
              className={`w-[25px] h-[3px] bg-black dark:bg-white ease-in-out duration-500 ${
                menu ? "-rotate-45  translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`w-[25px] h-[3px] bg-black dark:bg-white ease-in-out duration-500 ${
                menu
                  ? "rotate-45 w-[25px] -translate-y-[3.5px]"
                  : " sm:w-[15px] burger"
              }`}
            ></span>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
      {menu ? 
        <motion.div
          initial={{
            y: -500,
            opacity: 0,
            scale: 1,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: -1000,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="h-screen w-full bg-white dark:bg-slate-900 dark:text-white absolute top-0 z-40 text-black flex flex-col justify-center items-center text-3xl font-semibold gap-y-6 linear theme-switch"
        >
          <Menu closeMenu={closeMenu} />
          <label className="relative inline-block w-12 h-6 theme-switch cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={toggleSwitch}
              className="opacity-0 w-0 h-0"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full theme-switch">
              <div
                className={`absolute top-0.5 left-auto right-0.5 bottom-auto w-5 h-5 bg-white  dark:bg-slate-900 rounded-full transform transition-transform duration-300 toggle-icon flex items-center justify-center ${
                  isChecked ? "" : "-translate-x-6"
                }`}
              />
              <div
                className={`absolute top-0.5 left-0.5 right-auto bottom-auto w-5 h-5 rounded-full transform transition-transform duration-300 toggle-icon flex items-center justify-center ${
                  isChecked ? "" : "translate-x-6"
                }`}
              >
                {isChecked ? (
                  <HiMoon className="h-4 w-4 m-auto" />
                ) : (
                  <HiSun className=" h-4 w-4 m-auto" />
                )}
              </div>
            </div>
          </label>

          <div className="mt-4 flex flex-row gap-x-4 sm:text-4xl text-xl font-semibold text-slate-400 dark:text-slate-500 absolute bottom-0 p-6">
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
        </motion.div> : ""
      }
       </AnimatePresence>
     
    </motion.header>
  );
};

export default Header;
