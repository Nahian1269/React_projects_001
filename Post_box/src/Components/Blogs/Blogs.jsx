
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBook,handleClick}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <button className="flex font-serif mb-2 text-md pl-4 pr-4 text-white bg-orange-500 rounded-3xl p-2 hover:bg-slate-600">Total Blogs: {blogs.length} </button>
      {
        blogs.map( blog => <Blog key={blog.id_no} handleClick={handleClick} handleBook={handleBook} blog={blog}></Blog>)
      }
    </div>
  );
};

export default Blogs;
