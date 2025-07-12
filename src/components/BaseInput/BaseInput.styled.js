import styled, { css } from "styled-components";

const errorStyle = css`
  border-color: #ff4d4f; 
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  background-color: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  
  color: rgb(0, 0, 0); 
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%; 
  letter-spacing: -2%; 
  text-align: left;

  &::placeholder {
    color: rgb(0, 0, 0); 
    opacity: 0.6; 
  }

  &:focus {
    border-color: #565eef;
  }

  ${({ $error }) => $error && errorStyle}
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  background-color: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;

  color: rgb(0, 0, 0);
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: -2%;
  text-align: left;

  &::placeholder {
    color: rgb(0, 0, 0);
    opacity: 0.6;
  }

  &:focus {
    border-color: #565eef;
  }

  ${({ $error }) => $error && errorStyle}
`;




