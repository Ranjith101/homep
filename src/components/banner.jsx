import React from "react";
import { Button } from "react-bootstrap";
import "./home.css"; // Import the custom styles
import banner from "../assets/banner.jpg";
const BannerSection = () => {
  return (
    <section className="banner">
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col"> */}
            <div className="banner-content">
              <img
                src={banner}
                alt="Banner"
                className="banner-image "
              />
              <div className="banner-text">
                <h1 className="banner-title">Welcome to Ranjith!</h1>
                <p className="banner-description">
                  Discover a wide range of high-quality products.
                </p>
                <Button variant="primary" className="shop-now-button">
                  Shop Now
                </Button>
              {/* </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
