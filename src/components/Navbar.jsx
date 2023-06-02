import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "../App.css"
import Home from "./Home";
import Breakfast from "./Breakfast";
import Desserts from "./Desserts";


export default function Navbar() {

  return (

    <div>
      <div>
      <ul className="links-section">
        <li>
          <NavLink  to="/Home">
            Home{" "}
          </NavLink>
        </li>

  
          <li>
            <NavLink  to="/Breakfast">
              Breakfast{" "}
            </NavLink>
          </li>
          <li>
            <NavLink  to="/Desserts">
              Desserts
            </NavLink>
          </li>
     
      </ul>


      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/desserts" element={<Desserts />} />
      </Routes>

    </div>
    </div>
  )
}
