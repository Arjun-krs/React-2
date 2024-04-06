import React from "react";
import "./style.scss";
import iconLogo from "../../assets/images/Icon.png";
import imageLogo from "../../assets/images/image.png";
import Card from "../Card/index";
import imageIcon from "../../assets/images/influencer.svg";

function Light() {
  return (
    <>
      <div className="container">
        <div className="light-align">
          <div className="col-6">
            <div className="row">
              <h1>Light, Fast & Powerful</h1>
              <p className="fs-6 text-primary">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <img src={iconLogo} className="mb-3" />
                <h4>Title Goes Here</h4>
                <p className="fs-6 text-secondary">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
              <div className="col-6">
                <img src={iconLogo} className="mb-3" />
                <h4>Title Goes Here</h4>
                <p className="fs-6 text-secondary">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src={imageLogo} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Card
              src={imageIcon}
              height={200}
              width={200}
              title="Light, Fast & Powerful"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
            />
          </div>
          <div className="col-4">
            <Card
              src={imageIcon}
              height={200}
              width={200}
              title="Light, Fast & Powerful"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
            />
          </div>
          <div className="col-4">
            <Card
              src={imageIcon}
              height={200}
              width={200}
              title="Light, Fast & Powerful"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Light;
