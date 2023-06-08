import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { client } from "../client";
import Blog from "./Blog";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response.items);
        setBlogs(response.items);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFilteredBlogs(
      blogs.filter((blog) =>
        blog.fields.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [blogs, searchTerm]);

  const handleCategoryClick = (category) => {
    setFilteredBlogs(
      blogs.filter((blog) =>
        blog.fields.category === category
      )
    );
  };

  const getTextValue = (entry) => {
    if (entry.fields && entry.fields.shortText) {
      return entry.fields.shortText;
    }
    return "";
  };

  return (
    <div>
      <div className='search-box' style={{ position: "fixed", top: 0, right: 0 }}>
      <FontAwesomeIcon icon={faSearch} style={{ color: "gray", fontSize: "20px" }} />
       
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Container>
        <Row>
          {filteredBlogs.map((blog) => (
            <Col lg={3} key={blog.sys.id}>
              <Blog item={blog} textValue={getTextValue(blog)} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
