import styled from "styled-components";

export const Herowropper = styled.div`
  background-color: #1c1e53;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    padding-top: 120px;
    padding-bottom: 120px;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      text-align: center;
      gap: 40px;
    }
  }
`;

export const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
  h1 {
    font-weight: 600;
    font-size: 54px;
    line-height: 74px;
    letter-spacing: 0%;
    color: #ffffff;
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
    color: #ffffff;
    opacity: 70%;
  }
  .button {
    display: flex;
    align-items: center;
    gap: 40px;
    button {
      padding: 16px 56px;
      border: 1px;
      border-radius: 41px;
      cursor: pointer;
      background-color: #fcd980;
      &:hover {
        background-color: rgba(244, 191, 59, 0.56);
      }
      @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
      }
    }

    .viewprice {
      align-items: center;
      display: flex;
      gap: 16px;
      text-decoration: none;
      color: #ffffff;
    }
  }
`;

export const HeroImage = styled.div`
  width: 638px;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }
`;
