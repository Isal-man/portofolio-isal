import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";

const BlogPage = () => {
  const { blogId } = useParams();
  const [blogs, setBlogs] = useOutletContext();

  return (
    <div>
      {blogs.map(
        (blog, i) =>
          blog.id === blogId && (
            <main key={i} className="flex flex-col justify-center items-center gap-4 sm:px-6 md:py-20 lg:px-12 lg:py-32 xl:py-48">
              <h1 className="font-bold text-lg text-center md:w-3/4">
                {blog.name}
              </h1>
              <small className="font-thin text-gray-400">
                {blog.date.toLocaleString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </small>
              <img
                src={blog.icon}
                alt={blog.name}
                className="bg-white rounded-tr-lg rounded-tl-lg object-cover w-full h-full"
              />
              <p>{blog.description}</p>
            </main>
          )
      )}
    </div>
  );
};

export default BlogPage;
