import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "../client";
import { Container, Row, Col } from 'react-bootstrap';

function Dinner() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from Contentful
    client
      .getEntries({
        content_type: "blog",
        "fields.Category": "Dinner",
      })
      .then((response) => {
        setBlogs(response.items);
      })
      .catch((error) => {
        console.error("Error fetching dinner content:", error);
      });
  }, []);

  return (
    <Container>
      <Row>
        {blogs.map((blog) => (
          <Col md={4} key={blog.sys.id}>
            <div>
              <h2 style={{ fontSize: '25px' }}>{blog.fields.title}</h2>
              {blog.fields.image && (
                <img
                  src={blog.fields.image.fields.file.url}
                  alt={blog.fields.image.fields.title}
                  style={{ width: '250px', height: '200px' }}
                />
              )}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Dinner;
