import styled from "styled-components";

export const WorkHeroWrapper = styled.div`
  background-color: #f4f6fc;

  & > div {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding-top: 96px;
    padding-bottom: 96px;
    max-width: 733px;
    gap: 30px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0%;
      text-align: center;
      color: #282938;
      opacity: 0.7;
    }
    h3 {
      font-weight: 600;
      font-size: 48px;
      line-height: 64px;
      letter-spacing: 0%;
      text-align: center;
      color: #282938;
    }
    h4 {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0%;
      text-align: center;
      color: #282938;
      opacity: 0.7;
    }
  }
`;

export const IconWrapper = styled.div`
display: flex;
gap: 30px;
`
