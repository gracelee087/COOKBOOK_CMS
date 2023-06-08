import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../client";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    <Container>
      <Row>

      {/* food image */}
        <Col >
          {blog ? (
            <div>
              <p>{blog.author}</p>
              {blog.image && <img src={blog.image.fields.file.url} alt="Blog Image" />}
            </div>
          ) : (
            "Loading...."
          )}
        </Col>

{/* BLOG TITLE */}
        <Col>
  {blog && blog.title && (
    <h1>{blog.title}</h1>
  )}


{/* H1 Element */}
<Col>
  {blog && blog.body && (
    <div>
      {documentToReactComponents(blog.body).filter((component) => {
        // H1 요소만 필터링
        return component.type === "h1";
      })}
    </div>
  )}
</Col>

{/* Normal text */}
<Col>
  {blog && blog.body && (
    <div>
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
</Col>



{/* table */}
<Col style={{ border: "1px solid black", padding: "5px" }}>
  {blog && blog.body && (
    <div>
      {blog.body.content.map((node, index) => {
        if (node.nodeType === "table") {
          return (
            <table key={index} style={{ borderCollapse: "collapse", width: "100%" }}>
              <tbody>
                {node.content.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.content.map((cell, cellIndex) => (
                      <td key={cellIndex} style={{ border: "1px solid black", padding: "5px" }}>
                        {documentToReactComponents({
                          nodeType: "document",
                          content: [cell]
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
</Col>



{/* 
<Col>
{blog && blog.body && (
<div>{documentToReactComponents(blog.body)}</div>
 )}
</Col>  */}
</Col>

       

       
       
      </Row>
    </Container>
  );
}