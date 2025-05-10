import styled from "styled-components";

export const ContactWrapper = styled.div`
  margin-top: 130px;
  margin-bottom: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 64px;
`;

export const ContactTitle = styled.div`
  max-width: 562px;
  h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 64px;
    letter-spacing: 0%;
    text-align: center;
    color: #282938;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0%;
    text-align: center;
    color: #282938;
    opacity: 0.7;
  }
`;

export const ContactForm = styled.div`
  background-color: #f4f6fc;
  padding: 55px 74px;
  form {
    display: flex;
    align-items: center;
    flex-direction: column;

    .form-row {
      display: flex;
      gap: 20px;
    }

    .form-group {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    label {
      margin-bottom: 5px;
      font-weight: 600;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
      letter-spacing: 0%;
    }

    input,
    textarea {
      padding: 18px 32px;
      border: 1px solid #0000001f;
      border-radius: 8px;
      font-size: 14px;
      gap: 10px;
      background-color: #f4f6fc;
    }

    textarea {
      resize: vertical;
      min-height: 100px;
    }

    .full-width {
      width: 100%;
    }

    button {
      margin-top: 32px;
      align-self: flex-start;
      padding: 15px 51px;
      border: none;
      border-radius: 999px;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.3s ease;
      color: #f4f6fc;
      background-color: #282938;
    }

    button:hover {
      background-color: #1c1c2a;
    }
  }
  @media (max-width: 768px) {
    padding: 30px 20px;

    form .form-row {
      flex-direction: column;
    }
  }
`;
