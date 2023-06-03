import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import Breakfast from "./Breakfast";
import Desserts from "./Desserts";


export default function Navbar() {
const menuList = ['Breakfast', 'Lunch', 'Dessert']


  return (

    <div>

<div>캐러셀 넣는곳</div>

<div className='menu-area'>

  <ul className='menu-list'>
    {menuList.map((menu) => (
    <li>{menu}</li>))}
  </ul>


<div className='search-box'>
<FontAwesomeIcon icon={faSearch} />
<input type="text" />
</div>

</div>
















      {/* <div>
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

    </div> */}
    </div>
  )
}
