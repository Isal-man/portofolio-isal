// icon
import { useContext } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { ThemeContext } from "../App";

export const ButtonToTop = ({ scrollRef }) => {
  const { theme } = useContext(ThemeContext);
  const scrollToTop = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-10 right-8 md:bottom-16 md:right-10 flex justify-center items-center text-xl p-1 border ${
        theme === "dark"
          ? "border-white text-white hover:bg-white hover:text-black"
          : "border-black text-black hover:bg-black hover:text-white"
      } rounded-full hover:cursor-pointer`}
      onClick={() => {
        scrollToTop(scrollRef.current);
      }}
    >
      <BiArrowToTop />
    </button>
  );
};
