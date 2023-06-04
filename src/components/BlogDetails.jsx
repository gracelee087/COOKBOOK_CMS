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
        <Col>
          {blog ? (
            <div>
              <p>{blog.author}</p>
              {blog.image && <img src={blog.image.fields.file.url} alt="Blog Image" />}
            </div>
          ) : (
            "Loading...."
          )}
        </Col>
        <Col>
          {blog && blog.body && (
            <div>{documentToReactComponents(blog.body)}</div>
          )}
        </Col>
      </Row>
    </Container>
  );
}