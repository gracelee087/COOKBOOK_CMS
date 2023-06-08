import { Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import './App.css';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { client } from './client';
// console.log(import.meta.env)
function App() {

  return (
    <>
     
     <div>

     <Navbar />
     </div>
    
     
     
      <Routes>
        <Route path="/" element={<Blogs />} />  
        {/* 전체상품페이지 */}

        <Route path="/blogs/:id" element={<BlogDetails />} /> 
      </Routes>
``




      <h1> Footer</h1>
    </>
  );
}

export default App;
