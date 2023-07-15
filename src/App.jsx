import { Outlet } from "react-router-dom";
import { useState } from "react";

// Components
import { Footer, Header } from "./components";

const App = () => {

  return (
    <div className="app-wrapper flex flex-col items-center h-full w-full bg-slate-800 text-white">
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
  );
};

export default App;
