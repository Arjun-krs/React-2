import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from "../Home/index";
import Contact from "../Contact/index";
import AboutUs from "../AboutUs/index";
import "../Navigation/style.scss";

function Navigation() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul className="Navigation navbar d-flex justify-content-evenly">
            <li>
              <Link
                to="home"
                style={{
                  textDecoration: "none",
                  color: "black",
                  
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  color: "black",
                  
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none",
                  color: "black",
                
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navigation;
