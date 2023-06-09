import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import './App.css';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { client } from "./client";
import { createClient } from 'contentful';
import Breakfast from './components/Breakfast';


function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);


  
  const handleCategoryClick = (category) => {
    client
      .getEntries({
        content_type: "Blog",
        "fields.Category": category,
      })
      .then((response) => {
        console.log(response.items);
        setFilteredBlogs(response.items);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <Navbar handleCategoryClick={handleCategoryClick} />
      </div>

      <Routes>
        <Route path="/" element={<Blogs filteredBlogs={filteredBlogs} />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>

      <h1>Footer</h1>
    </>
  );
}

export default App;
