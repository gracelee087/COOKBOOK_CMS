import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { createClient } from 'contentful';

export default function Navbar({ handleCategoryClick }) {
  const menuList = ["Breakfast", "Lunch", "Dessert"];
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (category) => {
    setSelectedCategory(category);
    handleCategoryClick(category);
  };

  return (
    <div>
      <div>
        {/* Home NavLink */}
        <NavLink to="/" activeClassName="active">
          <FontAwesomeIcon icon={faHome} style={{ color: "gray", fontSize: "50px" }} />
        </NavLink>
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <button
              key={index}
              onClick={() => handleClick(menu)}
              style={{
                backgroundColor: "white",
                padding: "50px",
                margin: "5px",
                border: "none",
                color: "black",
              }}
            >
              {menu}
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
}
