import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";

export default function BlogDetails() {
  const [blog, setBlog] = useState();
  const { id } = useParams();


  // console.log(useParams()) BLOG ID check


  useEffect(() => {
    client
      .getEntry(id)
      .then((response) => {
        // console.log("id 리스폰스", response)
        setBlog(response.fields);
      })
      .catch((err) => console.log(err));
  }, [id]);



  // return (
  //   <>
  //   blog 아이디: {id}
  //   </>
  // )

  return (
    <>
      {blog ? (
        <div className="blogPage">
          
          <p>{blog.author}</p>

          {blog.image && <img src={blog.image.fields.file.url} alt="Blog Image" />}
          

        </div>
      ) : (
        "Loading...."
      )}

{/* 
     <button
        onClick={() => {
          navigate(`/blogs/${??}`);  
        }}
      >
        drinks2
      </button> */}
   

    </>
  );
}
