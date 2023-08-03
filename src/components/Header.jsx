import { NavLink } from "react-router-dom";
import { useContext } from "react";

// icons
import { FaBlog } from "react-icons/fa";
import { BsFillSunFill, BsGlobe, BsMoonStarsFill } from "react-icons/bs";

// context
import { ThemeContext } from "../App";
import { useState } from "react";

const Header = ({ scrollRef }) => {
  const { theme, setTheme, language, setLanguage } = useContext(ThemeContext);
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <>
      <header className="flex flex-col gap-8 justify-around w-full p-10 sm:flex-row items-center sm:justify-between" ref={scrollRef}>
        <NavLink className="logo flex gap-3 items-center" to={"/"}>
          <FaBlog className="text-5xl" />
          <h1 className="text-2xl">Isal - Blog</h1>
        </NavLink>
        <div className="pages-wrapper flex items-center gap-4">
          {[
            ["CV", "/cv"],
            ["GitHub", "https://github.com/Isal-man"],
            [
              "LinkedIn",
              "https://www.linkedin.com/in/ahmad-faisal-hidayat-05a909245/",
            ],
          ].map(([title, url], i) => (
            <NavLink key={i} to={url} className="text-md b-animation b-wrapper">
              {title}
            </NavLink>
          ))}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <BsFillSunFill /> : <BsMoonStarsFill />}
          </button>
          <button onClick={() => setShowLanguage(!showLanguage)}>
            <BsGlobe />
          </button>
          {/* <select value={language} className={`${theme === "dark" ? "bg-white text-black" : "bg-slate-800 text-white"} rounded-lg p-2`} onChange={(e) => setLanguage(e.target.value)}>
          
          <option value="id">Indonesia</option>
          <option value="en">English</option>
          <option value="kr">Korea</option>
        </select> */}
        </div>
      </header>
      <section
        className={`${
          showLanguage ? "pop-up" : "pop-down"
        } card absolute right-5 xl:right-24 top-36 md:top-20 flex flex-col justify-center items-center gap-4 md:gap-2 w-2/5 md:w-1/5 lg:w-1/6 xl:w-[13%] h-1/4 md:h-1/6 lg:h-1/4 xl:h-1/5`}
      >
        {[
          ["Indonesia", "id"],
          ["English", "en"],
          ["Korea", "kr"],
        ].map(([country, code], i) => (
          <button
            key={i}
            onClick={() => {
              setLanguage(code);
              setShowLanguage(false);
            }}
            className="text-white p-2 rounded-lg w-full hover:bg-slate-500 hover:bg-opacity-30"
          >
            {country}
          </button>
        ))}
      </section>
      {/* {showLanguage && (
        <div className="h-screen w-screen fixed top-0 left-0" onClick={() => setShowLanguage(false)}>
        </div>
      )} */}
    </>
  );
};

export default Header;
