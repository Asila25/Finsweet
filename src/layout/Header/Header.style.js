// Header.style.js
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 33px 160px;
  background-color: #1c1e53;

  @media (max-width: 1200px) {
    padding: 33px 80px;
  }

  @media (max-width: 768px) {
    padding: 20px 40px;
  }

  @media (max-width: 576px) {
    padding: 15px 20px;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 44px;

      @media (max-width: 992px) {
        gap: 20px;
      }
    }
  }
`;

export const MainLogo = styled.div`
  width: 122px;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const MobileMenuButton = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  z-index: 1000;

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 44px;

  @media (max-width: 992px) {
    position: fixed;
    flex-direction: column;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background-color: #1c1e53;
    padding: 80px 20px;
    z-index: 999;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
    overflow-y: auto;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 40px;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (max-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const HeaderItem = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0%;

  @media (max-width: 992px) {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
`;

export const HeaderLink = styled(Link)`
  color: #bbbbcb;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 185px;
  border-radius: 41px;
  border: 1px solid #7b7b8e;
  padding: 12px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 992px) {
    margin-top: 20px;
    width: 100%;
  }
`;
