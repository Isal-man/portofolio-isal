import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";

const Project = ({ id, name, description, icon, link}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <NavLink className="project-wrapper card flex flex-col justify-center items-center gap-4 md:flex-row" to={link} >
      <img
        src={icon}
        alt={name}
        className="object-cover w-24 h-24 md:w-28 md:h-28"
      />
      <div className={`detail flex flex-col items-center gap-1 md:items-start text-white`}>
        <h1 className="text-xl font-bold">{name}</h1>
        <p>{description}</p>
      </div>
    </NavLink>
  );
};

export default Project;
