import React from "react";
import { AboutHeroWrapper, HeroTitle } from "./AboutHero.style";
import aboutHeroImage  from '../../../../assets/about-hero.png'
const AboutHeroSection = () => {
  return (
    <AboutHeroWrapper className="container">
      <HeroTitle>
        <h3>About us</h3>
        <h4>Our designs solve problems</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </HeroTitle>
      <div>
        <img src={aboutHeroImage} alt="image " />
      </div>
    </AboutHeroWrapper>
  );
};

export default AboutHeroSection;
