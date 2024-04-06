import React from "react";
import "./style.scss";
import Button from "../Button";

function Header() {
  return (
    <>
      <div className="container mt-3 ">
        <div className="Navigation-tool text-center d-flex justify-content-between align-items-center">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <h1>Landing</h1>
          <Button
            text="Buy Now"
            backgroundColor="skyblue"
            color="white"
            border="1px solid skyblue"
            width="150px"
            height="50px"
            borderRadius="10px"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
