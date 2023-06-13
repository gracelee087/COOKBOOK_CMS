import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import Breakfast from "./Breakfast";
import Desserts from "./Desserts";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-between">
        <ul className="flex items-center justify-around gap-10 pl-10 font-navigation text-bermuda text-lg">
          <li>
            <NavLink to="/">Home </NavLink>
          </li>

          <li>
            <NavLink to="/Breakfast">Breakfast </NavLink>
          </li>
          <li>
            <NavLink to="/Desserts">Desserts</NavLink>
          </li>
        </ul>

        <div className="pr-20 py-5">
          <img
            src="https://designcontest.nyc3.digitaloceanspaces.com/data/contests/175866/entries/dafb72af06e6ff8c.jpg"
            alt="Logo"
            className="w-20 h-20 rounded-full border-2 border-bermuda"
          />
        </div>
      </div>

      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/desserts" element={<Desserts />} />
      </Routes>
    </div>
  );
}
