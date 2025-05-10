import styled from "styled-components";


export const FooterWrapper = styled.div`
  background-color: #1c1e53;

  & > div {
    display: flex;
    padding-top: 100px;
    padding-bottom: 90px;
    gap: 140px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 40px;
      padding: 60px 20px;
    }
  }
`;

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 86px;
  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > h6 {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
    color: #ffffff;
    opacity: 80%;
  }

  & > img {
    width: 160px;
  }
`;

export const ContactForUser = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 16px 37px;
  background-color: #fcd980;

  h5 {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0%;
    color: #282938;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
    color: #282938;
  }
  a {
    font-family: Poppins;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
    color: #282938;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h3 {
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    letter-spacing: 0%;
    color: #ffffff;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
    color: #ffffff;
    opacity: 80%;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 32px;
      line-height: 44px;
    }
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 30px;

  img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 768px) {
    gap: 20px;
  }
`;