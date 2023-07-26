// Icons
import { useContext } from "react";
import { MdLocationPin } from "react-icons/md";
import { ThemeContext } from "../App";

const CV = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Ahmad Faisal Hidayat</h1>
        <img
          src="/IMG_20230521_085205_323.jpg"
          className="object-cover h-1/2 w-1/2 rounded-full"
        />
        <p className="flex flex-col items-center text-center">
          <span className={`${theme === "dark" ? "text-white" : "text-black"}`}>
            <MdLocationPin size={48} />
          </span>
          Perum Rajeg Asri, Rajeg, Kab.Tangerang, Banten, Indonesia
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Trainings</h1>
        <hr />
        <div className="card text-white">
          <ul className="p-4 flex flex-col gap-2">
            <li>
              <h3 className="text-xl font-bold">Logic and Algorithms</h3>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                Data Structures and Databases
              </h3>
            </li>
            <li>
              <h3 className="text-xl font-bold">HTML, CSS, & Javascript</h3>
            </li>
            <li>
              <h3 className="text-xl font-bold">Java Fundamental</h3>
            </li>
            <li>
              <h3 className="text-xl font-bold">Java Advance</h3>
            </li>
            <li>
              <h3 className="text-xl font-bold">React</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Educations</h1>
        <hr />
        <div className="card text-white">
          <ul className="p-4 flex flex-col gap-2">
            <li>
              <h3 className="text-xl font-bold">Pasim National University</h3>
              <small>(2021 - now)</small>
            </li>
            <li>
              <h3 className="text-xl font-bold">MAN 3 Tangerang</h3>
              <small>(2018 - 2021)</small>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Organizations</h1>
        <hr />
        <div className="card text-white">
          <ul className="p-4 flex flex-col gap-2">
            <li>
              <h3 className="text-xl font-bold">
                RISMA (Remaja Islam Masjid Al-Ishlahiyyah)
              </h3>
              <small>As Secretary</small>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                PUB (Pemberdayaan Umat Berkelanjutan)
              </h3>
              <small>As Leader</small>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Skills</h1>
        <hr />
        <div className="card text-white">
          <ul className="p-4 flex flex-col gap-2">
            <li>
              <h3 className="text-xl font-bold">Backend Developer</h3>
              <small>
                Java 8, Java 11, JSON Web Token(JWT), Node.Js, C++, RESTful API,
                Spring Security, Spring MVC, Spring Framework, Spring Boot
              </small>
            </li>
            <li>
              <h3 className="text-xl font-bold">Frontend Developer</h3>
              <small>HTML, CSS, React</small>
            </li>
            <li>
              <h3 className="text-xl font-bold">Fullstack Developer</h3>
              <small>MERN Stack, SPR Stack</small>
            </li>
            <li>
              <h3 className="text-xl font-bold">Databases</h3>
              <small>MySQL, PostgreSQL, MongoDB</small>
            </li>
            <li>
              <h3 className="text-xl font-bold">Version Control</h3>
              <small>Git, GitHub</small>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default CV;
