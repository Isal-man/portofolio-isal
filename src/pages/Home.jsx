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

const Home = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Kpop-Blog",
      icon: "/kpop-blog.png",
      description:
        "Kpop Blog: Your ultimate source for all things K-pop! Get the latest news, reviews, and exclusive insights into the vibrant world of Korean pop music. Discover your favorite idols, explore diverse genres, and join a community of passionate K-pop enthusiasts. Stay connected with the heartbeat of Hallyu!",
      link: "https://github.com/Isal-man/kpop-blog-fe",
    },
    {
      id: 2,
      name: "GeekTech Course",
      icon: "/logo-geektech-course.png",
      description:
        "GeekTech Course: Unlock your inner geek and master the latest in technology. Dive into coding, robotics, AI, and more in this dynamic and hands-on program. Develop your skills, explore cutting-edge innovations, and unleash your potential in just a few weeks. Get ready to geek out!",
      link: "https://github.com/Isal-man/GeekTech-Course-fe",
    },
    {
      id: 3,
      name: "Smartphone-Blog",
      icon: "/logo-smartphone-blog.png",
      description:
        "The Ultimate Smartphone Blog: Unleashing the latest in mobile technology! Stay updated on cutting-edge devices, expert reviews, industry news, and tips for optimizing your smartphone experience. Discover the future of communication in concise and engaging articles, all in one place.",
      link: "https://github.com/Isal-man/smartphone-blog",
    },
  ]);
  const [mail, setMail] = useState("");
  const [textMail, setTextMail] = useState("");

  return (
    <main className="flex flex-col gap-14">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 md:w-4/5">
          <div className="flex gap-2 text-2xl">
            <h1 className="font-bold">Hi there, I'm</h1>
            <h1 className="font-bold text-blue-400">Faisal 👋</h1>
          </div>
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
          <small>(Click if you wanna see my project repo)</small>
        </div>
        <div className="project-content flex flex-col gap-4">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
      <div className="card flex flex-col gap-2">
        <h1 className="font-bold text-2xl">Contact Me</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={() => alert("Thank for you letter😊")}
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
            Letter:
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
              Cancel
            </button>
            <button className="bg-green-500 border border-green-500 p-2 rounded-lg hover:bg-transparent hover:cursor-pointer hover:border">
              Send
            </button>
          </div>
        </form>
      </div>
      {/* <div className="post-wrapper flex flex-col gap-4">
        <div className="title-wrapper flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-2xl">Recent</h1>
            <h1 className="font-bold text-2xl text-blue-400">Posts</h1>
          </div>
          <div>
            <NavLink
              to={"/blogs"}
              className="flex items-center gap-2 text-sm hover:underline"
            >
              View all posts <AiOutlineArrowRight />
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:justify-around">
          {blogs
            .filter(
              (_blog, i) =>
                i < 3 * Math.ceil(blogs.length / 3) &&
                i >= 3 * Math.ceil(blogs.length / 3) - 3
            )
            .map((blog) => (
              <Post key={blog.id} {...blog} />
            ))}
        </div>
      </div> */}
    </main>
  );
};

export default Home;
