import React from "react";
import "./style.scss";
import Button from "../Button";

function Context() {
  return (
    <>
      <div className="container">
        <div className="main-context-align">
          <div className="main-context">
            <h3>Introduce Your Product Quickly & Effectively</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="select-btn">
            <Button
              text="Purchase UI Kit"
              backgroundColor="skyblue"
              color="white"
              border="1px solid skyblue"
              borderRadius="10px"
              height="50px"
              width="150px"
            />
            <Button
              text="Purchase UI Kit"
              backgroundColor="transparent"
              color="skyblue"
              border="1px solid skyblue"
              borderRadius="10px"
              height="50px"
              width="150px"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Context;
