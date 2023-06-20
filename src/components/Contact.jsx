import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contactDark from "../assets/contactdark.png";
import aboutbg2 from '../assets/aboutbg2.png';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

function Contact({ theme }) {
  const { register, handleSubmit } = useForm();
  const backgroundImage = theme === "dark" ? contactDark: aboutbg2 ;

  const onSubmit = (formData) => {
    const mailtoLink = `mailto:alwirifa7@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hi, my name is ${formData.name}. ${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      className="h-screen bg-white dark:bg-slate-900 relative theme-switch"
      id="contact"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: -1,
      }}
    >
      <div className="w-5/6 h-full mx-auto flex justify-center items-center">
        <h1 className="absolute top-32 font-semibold uppercase tracking-[5px] text-2xl dark:text-white">
          CONTACT
        </h1>
        <div className="flex flex-col items-center gap-2 h-72  dark:text-white w-full max-w-md">
          <h1 className="md:text-4xl text-xl font-semibold">
            Like what you’ve seen?
          </h1>
          <p className="md:text-lg text-sm font-semibold">
            Then don’t be shy – get in touch 🎉
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-full  text-sm mt-4 bg-white border border-slate-700/20 rounded-xl shadow-xl p-8 "
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className=" p-2 w-full bg-white border-slate-700/20 border text-slate-500 shadow-sm rounded-md"
                type="text"
              />{" "}
              <input
                {...register("email")}
                placeholder="Email"
                className="p-2 w-full  bg-white border-slate-700/20 border text-slate-500 shadow-sm rounded-md"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="p-2 w-full  bg-white border-slate-700/20 border text-slate-500 shadow-sm rounded-md"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="p-2 h-24 w-full  bg-white border-slate-700/20 border text-slate-500 shadow-sm rounded-md"
            />
            <button className="bg-indigo-500 hover:bg-indigo-400 dark:bg-sky-500 dark:hover:bg-sky-400  text-white py-2 rounded-md w-full text-md font-semibold ">
              {" "}
              Submit
            </button>
          </form>
        </div>
        {/* footer */}
        <div className="border-t border-slate-700/20 w-5/6 py-4 absolute bottom-0 flex justify-between items-center">
          <p className="font-semibold text-base text-slate-500">Copyright © 2023 Alwi Rifa.</p>
          <div className="flex sm:flex-row flex-col gap-x-4 text-2xl font-semibold text-slate-400 dark:text-slate-500">
            <a
              href="https://github.com/AlwiRifa"
              target="_blank"
              className="hover:text-slate-500 dark:hover:text-slate-400 flex items-center gap-x-2 cursor-pointer"
            >
              <AiOutlineGithub />
              <span className="text-base">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ilham-alwi/"
              target="_blank"
              className="hover:text-slate-500 dark:hover:text-slate-400 flex items-center gap-x-2 cursor-pointer"
            >
              <AiFillLinkedin />
              <span className="text-base">Linkedin</span>
            </a>
            <a
              href=" https://www.instagram.com/alwirifa_/"
              target="_blank"
              className="hover:text-slate-500 dark:hover:text-slate-400 flex items-center gap-x-2 cursor-pointer"
            >
              <AiOutlineInstagram />
              <span className="text-base">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
