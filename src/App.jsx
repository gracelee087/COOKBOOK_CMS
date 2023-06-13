import { Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import "./App.css";
import Navbar from "./components/Navbar";
import "./index.css";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";
import { client } from "./client";
// import FoodDetail from './components/FoodDetail';

// console.log(import.meta.env)
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        {/* <Route path="/blogs/:id" element={<FoodDetail />} />  */}
      </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
