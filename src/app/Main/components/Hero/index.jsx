import React from "react";
import { HeroImage, HeroTitle, Herowropper } from "./Hero.style";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <Herowropper>
      <div className="container wrapper">
        <HeroTitle>
          <h1>Building stellar websites for early startups</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="button">
            <button>View our work</button>
            <Link to={"/pricing"} className="viewprice">
              <p>View Pricing </p> <FaArrowRightLong />
            </Link>
          </div>
        </HeroTitle>
        <HeroImage>
          <img src="/Illustration.png" alt="hero-image" />
        </HeroImage>
      </div>
    </Herowropper>
  );
};

export default HeroSection;
