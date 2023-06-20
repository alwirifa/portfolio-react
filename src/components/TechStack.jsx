import React from "react";
import htmlIcon from "../assets/icon/htmlIcon.svg";
import cssIcon from "../assets/icon/cssIcon.svg";
import javascriptIcon from "../assets/icon/javascriptIcon.svg";
import reactIcon from "../assets/icon/reactIcon.svg";
import nextIcon from "../assets/icon/nextjsIcon.svg";
import tsIcon from "../assets/icon/typeScriptIcon.svg";
import tailwindIcon from "../assets/icon/tailwindIcon.svg";
import reduxIcon from "../assets/icon/reduxIcon.svg";
import materialUiIcon from "../assets/icon/materialUiIcon.svg";
import nodejsIcon from "../assets/icon/nodejsIcon.svg";
import expressIcon from "../assets/icon/expressIcon.svg";
import firebaseIcon from "../assets/icon/firebaseIcon.svg";
import mongodbIcon from "../assets/icon/mongodbIcon.svg";
import mysqlIcon from "../assets/icon/mysqlIcon.svg";
import reactNativeIcon from "../assets/icon/reactNativeIcon.svg";
import expoIcon from "../assets/icon/expoIcon.svg";
import gitIcon from "../assets/icon/gitIcon.svg";
import sassIcon from "../assets/icon/sassIcon.svg";

function TechStack() {
  const icons = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "Sass", icon: sassIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "React", icon: reactIcon },
    { name: "Next.js", icon: nextIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "Material UI", icon: materialUiIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "React Native", icon: reactNativeIcon },
    { name: "Expo", icon: expoIcon },
    { name: "Git", icon: gitIcon },
  ];

  return (
    <div className="h-screen relative flex justify-center dark:bg-slate-900 theme-switch"
      id="tech"
    >
      <h1 className="absolute top-32 font-semibold text-center uppercase tracking-[5px] text-2xl dark:text-white">
        TECH STACK
      </h1>

      <div className="grid md:grid-cols-6 grid-cols-4 py-24 mt-32 dark:text-white gap-x-12 px-8">
        {icons.map((icon) => (
          <div  key={icon.name} className="flex flex-col justify-center items-center">
            <div
              key={icon.name}
              className="flex justify-center items-center sm:w-16 sm:h-16 w-12 h-12 bg-neutral-100 dark:bg-accent rounded-full "
            >
              <img
                src={icon.icon}
                alt={icon.name}
                className="sm:w-8 sm:h-8 w-6 h-6"
              />
            </div>
            <span className="text-xs p-2">{icon.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
