import React from "react";
import {
  ContactForUser,
  ContactUs,
  FooterWrapper,
  IconsWrapper,
  LogoWrapper,
  SocialWrapper,
} from "./Footer.style";
import { Link } from "react-router-dom";
const mainlogo = "/Logo.svg";
const facebook = "/facebook.svg";
const twetter = "/twetter.svg"
const instagram ="instagram.svg"
const linkEnd = "link.svg";

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <div className="container">
          <ContactUs>
            <LogoWrapper>
              <Link to={"/"}>
                <img src={mainlogo} alt="Main-logo" />
              </Link>
              <h6>
                We are always open to discuss your project and improve your
                online presence.
              </h6>
            </LogoWrapper>
            <ContactForUser>
              <div>
                <h5>Email me at</h5>
                <p>contact@website.com</p>
              </div>

              <div>
                <h5>Call us</h5>
                <a href="tel:0927 6277 28525">0927 6277 28525</a>
              </div>
            </ContactForUser>
          </ContactUs>
          <SocialWrapper>
            <h3>Lets Talk!</h3>
            <p>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <IconsWrapper>
              <img src={facebook} alt="facebook" />
              <img src={twetter} alt="twetter" />
              <img src={instagram} alt="instagram" />
              <img src={linkEnd} alt="linkEnd" />
            </IconsWrapper>
          </SocialWrapper>
        </div>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
