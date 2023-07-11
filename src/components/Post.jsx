import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Post = ({ id, name, icon, description, date }) => {
  const navigate = useNavigate();

  return (
    <NavLink to={`/blog/${id}`} className="post-wrapper card flex flex-col justify-center items-center gap-4 w-full h-full md:w-[352px] md:h-[450px lg:w-[465px] lg:h-[465px]">
      <img
        src={icon}
        alt={name}
        className="object-cover w-full h-full bg-white rounded-tr-2xl rounded-tl-2xl"
      />
      <div className="detail flex flex-col items-center gap-1">
        <h1 className="text-[17px] md:text-xs font-bold">{name}</h1>
        <small>
          {date.toLocaleString("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </small>
        <p className="text-ellipsis line-clamp-6 md:line-clamp-3 overflow-hidden">
          {description}
        </p>
      </div>
    </NavLink>
  );
};

export default Post;
