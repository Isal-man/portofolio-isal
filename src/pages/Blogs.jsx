import { useOutletContext } from "react-router-dom";

// Components
import { Post } from "../components";

const Blogs = () => {
  const [blogs, setBlogs] = useOutletContext();

  return (
    <main className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:justify-around ">
      {blogs.map((blog) => (
        <Post key={blog.id} {...blog} />
      ))}
    </main>
  );
};

export default Blogs;
