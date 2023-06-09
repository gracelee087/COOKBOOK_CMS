import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../client";


function Breakfast() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from Contentful
    client
      .getEntries({
        content_type: "blog",
        "fields.Category": "Breakfast",
      })
      .then((response) => {
        setBlogs(response.items);
      })
      .catch((error) => {
        console.error("Error fetching breakfast content:", error);
      });
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.sys.id}>


          <h2>{blog.fields.title}</h2>


          
          {blog.fields.image && (
            <img
              src={blog.fields.image.fields.file.url}
              alt={blog.fields.image.fields.title}
            />
          )}


          {/* {blog.fields.body && (
            <div>
              {documentToReactComponents(blog.fields.body)}
            </div>
          )} */}



        </div>
      ))}
    </div>
  );
}

export default Breakfast;