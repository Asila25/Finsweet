import React from 'react'
import { IconWrapper, WorkHeroWrapper } from './WorkHeroSeection.style'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { RiLinkedinBoxFill } from 'react-icons/ri';
const facebook = "/facebook.svg";
const twetter = "/twetter.svg";
const instagram = "instagram.svg";
const linkEnd = "link.svg";
const WorkHeroSection = () => {
  return (
    <WorkHeroWrapper>
      <div className="container wrapper">
        <h2>What we created</h2>
        <h3>Our Work Portfolio</h3>
        <h4>
          We help teams create great digital products by providing them with
          tools and technology to make the design-to-code process universally
          accessible.
        </h4>
        <IconWrapper>
          <FaFacebook color="#282938" />
          <FaTwitter color="#282938" />
          <FaInstagram color="#282938" />
          <RiLinkedinBoxFill color="#282938" />
        </IconWrapper>
      </div>
    </WorkHeroWrapper>
  );
}

export default WorkHeroSection