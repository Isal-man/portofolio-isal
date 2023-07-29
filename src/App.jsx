import { Outlet } from "react-router-dom";
import { useState } from "react";

// Components
import { Footer, Header } from "./components";
import { createContext } from "react";

// context
export const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
  language: null,
  setLanguage: () => {}
});

export const translate = {
  id: {
    hello: "Halo guys, saya",
    click: "Tekan jika ingin melihat repo projek saya",
    contact: "Hubungi Saya",
    letter: "Surat",
    cancel: "Batal",
    send: "Kirim",
    message: "Terima kasih atas suratnya",
    trainings: "Pelatihan",
    educations: "Pendidikan",
    organizations: "Organisasi",
    skills: "Keahlian"
  },
  en: {
    hello: "Hello there, I'm",
    click: "Click if you wanna see my project repo",
    contact: "Contact Me",
    letter: "Letter",
    cancel: "Cancel",
    send: "Send",
    message: "Thank you for letter",
    trainings: "Trainings",
    educations: "Educations",
    organizations: "Organizations",
    skills: "Skills"
  },
  kr: {
    hello: "안녕하세요, 저는",
    click: "내 프로젝트 저장소를 보려면 클릭하세요.",
    contact: "저에게 연락",
    letter: "편지",
    cancel: "취소",
    send: "보내다",
    message: "편지 감사합니다",
    trainings: "교육",
    educations: "교육",
    organizations: "조직",
    skills: "기술"
  }
}

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
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
