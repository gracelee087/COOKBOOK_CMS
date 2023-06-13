import React from "react";
import { useEffect, useState } from "react";
import { client } from "../client";
import axios from "axios";
import Blogs from "./Blogs";
import Blog from "./Blog";
import { useParams } from "react-router-dom";

export default function Breakfast() {
  const [blog, setBlog] = useState();
  const { id } = useParams();

  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        setBlog(response.fields);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {blog && blog.body && (
        <div className="py-5 font-main text-lg">
          {documentToReactComponents(blog.body).filter((component) => {
            return component.type === "Category";
          })}
        </div>
      )}
    </div>
  );
}
