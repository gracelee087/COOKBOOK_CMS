import Blog from "./Blog";
import { useState, useEffect } from "react";
import { client } from "../client";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response.items)
        setBlogs(response.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* creation form/ filtration */}
      {blogs.map((blog) => {
        return <Blog blog={blog} key={blog.sys.id} />;
      })}
      {/* pagination */}
    </>
  );
}
