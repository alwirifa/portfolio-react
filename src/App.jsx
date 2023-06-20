import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";

function App() {
  const [theme, setTheme] = useState("null");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen text-slate-900 dark:text-slate-400 bg-white dark:bg-slate-900 theme-switch ">
      <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <Hero theme={theme}/>
      <About theme={theme}/>
      <TechStack/>
      <Contact theme={theme}/>
    </div>
  );
}

export default App;
