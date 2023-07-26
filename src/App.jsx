import { Outlet } from "react-router-dom";
import { useState } from "react";

// Components
import { Footer, Header } from "./components";
import { createContext } from "react";

// context
export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
});

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app-wrapper flex flex-col items-center h-full w-full ${theme === "dark" ? "bg-slate-800 text-white" : "bg-gray-100 text-black"}`}>
        <div className="header-wrapper max-w-screen-lg sm:w-full">
          <Header />
        </div>
        <div className="content-wrapper flex-1 max-w-[1000px] w-full m-auto p-4 lg:h-screen">
          <Outlet />
        </div>
        <div className="footer-wrapper w-11/12 xl:w-[68%] lg:mt-9">
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
