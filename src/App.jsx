import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import './App.css';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { client } from "./client";
import Footer from "./components/Footer";


function App() {
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
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "20%" }}>
        <img src="/logo.jpg" alt="My Image"/>
      </div>

      <div>
        <Navbar handleCategoryClick={handleCategoryClick} />
      </div>

      <Routes>
        <Route path="/" element={<Blogs filteredBlogs={filteredBlogs} />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
<div>

  <Footer />
</div>
    </>
  );
}

export default App;
