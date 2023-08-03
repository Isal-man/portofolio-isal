// icons
import { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowRight,
  AiOutlineWhatsApp,
} from "react-icons/ai";

// Components
import { Project } from "../components";
import { useOutletContext } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext, translate } from "../App";

const Home = () => {
  const projects = [
    {
      id: 1,
      name: "Football Lovers",
      icon: "/football-lovers.png",
      description:
        "Football-lovers is a web application that provides the latest information about football, including news, scores, statistics and fixtures.",
      link: "https://github.com/Isal-man/Web-Football-Lovers",
    },
    {
      id: 2,
      name: "Sistem Informasi Pesantren As-Shofa",
      icon: "/pesantren.png",
      description:
        "Islamic boarding school information system desktop applications are applications that help manage data and processes in Islamic boarding schools, such as data on students, parents of students, and teachers.",
      link: "https://github.com/Isal-man/sistem-informasi-pesantren",
    },
    {
      id: 3,
      name: "Bookpedia (in the manufacturing stage)",
      icon: "/logo-library.png",
      description:
        "Bookpedia is a web application that provides information about books, authors, and publishers. As well as displaying members and bookshelves.",
      link: "",
    },
  ];
  const [mail, setMail] = useState("");
  const [textMail, setTextMail] = useState("");
  const { language } = useContext(ThemeContext);

  return (
    <main className="flex flex-col gap-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 md:w-4/5">
          <h1 className="font-bold text-3xl text-center">
            {translate[language].hello}{" "}
            <span className="text-blue-400">Faisal 👋</span>
          </h1>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-lg">
              Full stack developer: Builds both front-end and back-end of web
              applications.
            </h1>
            <p>
              This is a brief but accurate description of what a full stack
              developer does. It highlights the two main areas of responsibility
              for a full stack developer, which are the front end and the back
              end of a web application. The front end is what users see and
              interact with, while the back end is what powers the application
              and stores its data.
            </p>
          </div>
          <div className="flex gap-4 justify-center md:justify-normal">
            {[
              [
                <AiOutlineWhatsApp size={40} color="green" />,
                "https://wa.me/+6281287968635",
              ],
              [<AiFillGithub size={40} />, "https://github.com/Isal-man"],
              [
                <AiFillLinkedin size={40} color="blue" />,
                "https://www.linkedin.com/in/ahmad-faisal-hidayat-05a909245/",
              ],
            ].map(([icons, url], i) => (
              <a key={i} href={url}>
                {icons}
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/boy.png"
            alt="Isal-Man"
            className="object-cover w-56 h-56"
          />
        </div>
      </div>
      <div className="project-wrapper flex flex-col gap-4">
        <div className="title-wrapper flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-2">
            <h1 className="font-bold text-2xl">Recent</h1>
            <h1 className="font-bold text-2xl text-blue-400">Projects</h1>
          </div>
          <small>({translate[language].click})</small>
        </div>
        <div className="project-content flex flex-col gap-4">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
      <div className="card flex flex-col gap-2 text-white">
        <h1 className="font-bold text-2xl">{translate[language].contact}</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={() => alert(`${translate[language].message}😊`)}
        >
          <label>
            Email:
            <input
              type="email"
              className="h-10 p-4"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </label>
          <label>
            {translate[language].letter}:
            <textarea
              cols="2"
              rows="2"
              className="p-2"
              style={{ resize: "none" }}
              value={textMail}
              onChange={(e) => setTextMail(e.target.value)}
            ></textarea>
          </label>
          <div className="flex gap-4">
            <button
              type="reset"
              className="bg-red-500 border border-red-500 p-2 rounded-lg hover:bg-transparent hover:cursor-pointer hover:border"
            >
              {translate[language].cancel}
            </button>
            <button className="bg-green-500 border border-green-500 p-2 rounded-lg hover:bg-transparent hover:cursor-pointer hover:border">
              {translate[language].send}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Home;
