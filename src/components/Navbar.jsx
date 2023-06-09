import React, { useState } from "react";
import { Link, NavLink, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Breakfast from './Breakfast';
import Dinner from './Dinner';
import Dessert from './Dessert';

export default function Navbar() {
  const menuList = ["Breakfast", "Dinner", "Dessert"];
  const [posts, setPosts] = useState([]);

  return (
<div>

    <div className="navbar-container">
    <div className="menu-area" style={{ height: "140px" }}>
        <ul className="menu-list">

          {/* Home NavLink */}
          <li className="home-icon">
            <NavLink to="/" activeClassName="active">
              <FontAwesomeIcon icon={faHome} style={{ color: "gray", fontSize: "25px" }} />
            </NavLink>
          </li>

          {menuList.map((menu, index) => (
            <li key={index}>
              <Link
                to={`/${menu.toLowerCase()}`}
                style={{
                  backgroundColor: "white",
                  padding: "50px",
                  margin: "5px",
                  border: "none",
                  color: "black",
                }}
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>


      <Routes>
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/dessert" element={<Dessert />} />
      </Routes>
    </div>
    </div>
  );
}
