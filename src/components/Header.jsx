import { NavLink } from "react-router-dom";
import { useContext } from "react";

// icons
import { FaBlog } from "react-icons/fa";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

// context
import { ThemeContext } from "../App";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="flex flex-col gap-8 justify-around w-full p-10 sm:flex-row sm:items-center sm:justify-between">
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
        {theme === "dark" ? (
          <button onClick={() => setTheme("light")}>
            <BsFillSunFill />
          </button>
        ) : (
          <button onClick={() => setTheme("dark")}>
            <BsMoonStarsFill />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
