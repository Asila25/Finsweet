import styled from "styled-components";

export const BlogWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 130px;
  padding-bottom: 130px;
  gap: 30px;

  img {
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const BlogTitle = styled.div`
  h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    letter-spacing: 0%;
    text-align: center;
    color: #282938;

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 44px;
      padding: 0 10px;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 16px;
    h3 {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0%;
      text-align: center;
      color: #282938;
      opacity: 0.87;
    }
    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0%;
      text-align: center;
      color: #282938;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 4px;
    }
  }
`;



export const BlogDescription = styled.div`
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: center;
    color: #282938;
    opacity: 0.7;
    @media (max-width: 768px) {
      padding: 0 16px;
    }
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: center;
    color: #2405f2;
    opacity: 0.7;
  }
`;
