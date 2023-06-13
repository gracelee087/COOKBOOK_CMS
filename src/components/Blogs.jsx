import Blog from "./Blog";
import { React, useState, useEffect } from "react";
import { client } from "../client";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response.items);
        setBlogs(response.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* creation form/ filtration */}
      <div className="grid grid-cols-4 justify-items-center px-64">
        {blogs.map((blog) => {
          return <Blog item={blog} key={blog.sys.id} />;
        })}
      </div>

      {/* pagination */}
    </>
  );
}
