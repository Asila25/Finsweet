import React, { useState } from "react";
import {
  HeaderWrapper,
  MainLogo,
  HeaderList,
  HeaderItem,
  HeaderLink,
  HeaderDiv,
  MobileMenuButton,
  MobileMenu,
} from "./Header.style";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const mainlogo = "/Logo.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderWrapper>
      <div className="wrapper container">
        <MainLogo>
          <Link to={"/"}>
            <img src={mainlogo} alt="Main-logo" />
          </Link>
        </MainLogo>

        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </MobileMenuButton>

        <MobileMenu isOpen={mobileMenuOpen}>
          <HeaderList>
            <HeaderItem>
              <HeaderLink to="/">Home</HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink to="/about">About us</HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink to="/pricing">Pricing</HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink to="/work">Work</HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink to="/blog">Blog</HeaderLink>
            </HeaderItem>
          </HeaderList>
          <HeaderDiv>
            <HeaderLink to="/contact">Contact us</HeaderLink>
          </HeaderDiv>
        </MobileMenu>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
