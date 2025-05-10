import styled from "styled-components";

export const PricingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 130px;

  @media (max-width: 768px) {
    margin-top: 80px;
    padding: 0 16px;
  }
`;

export const PricingTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    letter-spacing: 0%;
    color: #282938;

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 42px;
    }
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: center;
    color: #282938;
    opacity: 0.7;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const PriccingContinerWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  flex-wrap: wrap;

  > div {
    flex: 1;
    max-width: 320px;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 40px 32px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease;
  }

  > div:hover {
    transform: translateY(-5px);
  }

  > div:nth-child(2) {
    background-color: #1c1e53;
    color: #ffffff;

    h2,
    h3,
    p,
    span {
      color: #ffffff;
    }

    button {
      background-color: #fcd980;
      color: #000000;
    }

    ul li {
      color: #ffffff;
    }
  }

  h2 {
    font-size: 32px;
    margin-bottom: 8px;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  h3 {
    font-size: 20px;
    margin-bottom: 8px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  span {
    font-size: 14px;
    color: #2405f2;
    font-weight: 500;
    margin-left: 8px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 24px;
  }

  ul li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    color: #282938;
    font-size: 14px;
  }

  .disabled {
    color: #a1a1a1;
  }

  button {
    align-self: flex-start;
    padding: 12px 32px;
    border-radius: 999px;
    border: none;
    font-size: 16px;
    background-color: #282938;
    color: #ffffff;
    cursor: pointer;
    transition: background 0.3s ease;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }

  button:hover {
    background-color: #1c1c2a;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
