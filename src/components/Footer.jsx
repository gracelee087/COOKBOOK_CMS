import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import Breakfast from "./Breakfast";
import Desserts from "./Desserts";

export default function Footer() {
  return (
    <footer>
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-7 w-screen sticky top-[100vh]">
        <div>
          <input
            type="text"
            placeholder="Subscribe to newsletter"
            className="sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none font-main"
          />
          <button className="px-5 py-2.5 rounded-md md:w-auto w-full bg-white font-main">
            Subscribe
          </button>
        </div>
        <div className="flex justify-around gap-10 font-navigation text-bermuda ">
          <span>Contact Us</span>
          <span>About Us</span>
          <span>Terms & Policy</span>
        </div>
      </div>
    </footer>
  );
}
