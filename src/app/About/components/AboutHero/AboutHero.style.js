import styled from "styled-components";

export const AboutHeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  margin-top: 130px;

  & > div {
    width: 640px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;

    & > div {
      width: 100%;
    }
  }
`;

export const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 420px;

  h3 {
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0%;
    color: #282938;
  }
  h4 {
    font-weight: 600;
    font-size: 54px;
    line-height: 74px;
    letter-spacing: 0%;
    color: #282938;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: left;
    color: #282938;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    align-items: center;
    max-width: 100%;

    p {
      text-align: center;
    }
  }
`;