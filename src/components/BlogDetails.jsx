import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Footer from "./Footer";

export default function BlogDetails() {
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
    <>
      {blog ? (
        <>
          <div className="px-10">
            <div className="blogPage">
              <h2 className="font-main text-4xl">{blog.title}</h2>
              <h3 className="font-main blogauthor">{blog.author}</h3>
            </div>
            <div>
              {blog.image && (
                <img
                  src={blog.image.fields.file.url}
                  alt="Blog Image"
                  className="h-60
                w-30"
                />
              )}
            </div>

            <div>
              {blog && blog.body && (
                <div className="py-5 font-main text-lg">
                  {documentToReactComponents(blog.body).filter((component) => {
                    return component.type === "h1";
                  })}
                </div>
              )}
            </div>

            <div>
              {blog && blog.body && (
                <div className="pb-5 font-main text-lg">
                  {blog.body.content.map((node, index) => {
                    if (node.nodeType === "paragraph") {
                      return (
                        <p key={index}>
                          {node.content.map((textNode, textIndex) => {
                            return textNode.value;
                          })}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>

            <div>
              {blog && blog.body && (
                <div className="font-main text-lg">
                  {blog.body.content.map((node, index) => {
                    if (node.nodeType === "table") {
                      return (
                        <table
                          key={index}
                          style={{ borderCollapse: "collapse", width: "100%" }}
                        >
                          <tbody>
                            {node.content.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                {row.content.map((cell, cellIndex) => (
                                  <td
                                    key={cellIndex}
                                    style={{
                                      border: "1px solid black",
                                      padding: "5px",
                                    }}
                                  >
                                    {documentToReactComponents({
                                      nodeType: "document",
                                      content: [cell],
                                    })}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        "Loading...."
      )}
    </>
  );
}

{
  /* <div>
            {blog && blog.body && (
              <div>{documentToReactComponents(blog.body)}</div>
            )}
          </div> */
}
