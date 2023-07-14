import { Outlet } from "react-router-dom";
import { useState } from "react";

// Components
import { Footer, Header } from "./components";

const App = () => {

  const [blogs, setBlogs] = useState([
    {
      id: "LMgVqa",
      name: "EXO Universe: Exploring the Phenomenon of K-Pop Superstars",
      icon: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/07/09/Tuai-sorotan-Knetz-EXO-rilis-teaser-MV-Cream-SodaJPG-3183719535.jpg",
      description:
        "Welcome to 'EXO Universe: Exploring the Phenomenon of K-Pop Superstars.' In this blog, we delve into the captivating world of EXO, one of the most influential and talented K-pop groups. Join us as we uncover their journey, dive into their discography, analyze their mesmerizing performances, and keep you updated on their latest news and achievements. Immerse yourself in the vibrant EXO Universe and discover the magic behind their global success.",
      date: new Date(),
    },
    {
      id: "icCTpQ",
      name: "Spring Boot Unleashed: Harnessing the Power of Java's Premier Framework",
      icon: "https://4.bp.blogspot.com/-ou-a_Aa1t7A/W6IhNc3Q0gI/AAAAAAAAD6Y/pwh44arKiuM_NBqB1H7Pz4-7QhUxAgZkACLcBGAs/s1600/spring-boot-logo.png",
      description:
        "Discover the versatility and efficiency of Spring Boot. Dive into its robust features, seamless integration with popular Java frameworks, and rapid development capabilities. Learn how to build scalable, production-ready applications with ease, empowering you to master the art of Java web development.",
      date: new Date(),
    },
    {
      id: "qHd1nQ",
      name: "Unveiling the Samsung Galaxy S23 Ultra: A Revolution in Mobile Technology!",
      icon: "https://asset-2.tstatic.net/tribunnews/foto/bank/images/samsung-galaxy-s23-ultra.jpg",
      description:
        "Get ready to be blown away by the Samsung Galaxy S23 Ultra! This groundbreaking flagship smartphone boasts an awe-inspiring display, incredible camera capabilities, lightning-fast performance, and innovative features that redefine the mobile experience. Discover the future of smartphone technology in our in-depth review.",
      date: new Date(),
    },
    {
      id: "i1hdgi",
      name: "Aespa Fever: Exploring the Virtual Reality Revolution of K-pop!",
      icon: "https://assets.suaramerdeka.com/crop/0x0:0x0/750x500/webp/photo/2021/12/09/3019197512.jpg",
      description:
        "Dive into the captivating world of aespa, the groundbreaking K-pop sensation fusing reality and virtuality. Discover the innovative concept behind their music, mesmerizing visuals, and the technological marvels that have taken the industry by storm. Get ready to be enchanted by aespa's immersive virtual reality experience like never before!",
      date: new Date(),
    },
    {
      id: "7h5D2S",
      name: "Node.js Chronicles: Unveiling the Power of Server-Side JavaScript",
      icon: "https://belajarnodejs.com/wp-content/uploads/2019/09/node-js-736399_1280.png",
      description:
        "Node.js Chronicles takes you on an exciting journey into the world of server-side JavaScript with Node.js. Explore the limitless possibilities of building fast, scalable, and efficient web applications. Delve into comprehensive tutorials, expert insights, and practical tips to harness the full potential of this revolutionary technology. Get ready to unlock the true power of Node.js!",
      date: new Date(),
    },
    {
      id: "excT86",
      name: "iPhone 14 Pro: Unveiling the Future of Mobile Power and Elegance",
      icon: "https://asset.kompas.com/crops/9fjF5pzqYgZzsOZopAbRlqsEamM=/0x0:3464x2309/750x500/data/photo/2022/09/09/631ae3f796604.jpg",
      description:
        "Dive into the captivating world of the iPhone 14 Pro as we unravel its revolutionary features and stunning design. Explore the pinnacle of mobile technology, from its powerful performance to the breathtaking camera capabilities. Discover how the iPhone 14 Pro redefines excellence and sets new standards in the realm of smartphones.",
      date: new Date(),
    },
  ]);

  return (
    <div className="app-wrapper flex flex-col items-center h-full w-full bg-slate-800 text-white">
      <div className="header-wrapper max-w-screen-lg sm:w-full">
        <Header />
      </div>
      <div className="content-wrapper flex-1 max-w-[1000px] w-full m-auto p-4 lg:h-screen">
        <Outlet context={[blogs, setBlogs]} />
      </div>
      <div className="footer-wrapper w-11/12 xl:w-[68%] lg:mt-9">
        <Footer />
      </div>
    </div>
  );
};

export default App;
