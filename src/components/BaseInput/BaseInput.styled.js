import styled, { css } from "styled-components";

const errorStyle = css`
  border-color: #ff4d4f; /* красный цвет ошибки */
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 8px;
  background-color: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;

  &::placeholder {
    color: #94a6be;
  }

  &:focus {
    border-color: #565eef;
  }

  /* Если $error true — подсвечиваем рамку красным */
  ${({ $error }) => $error && errorStyle}
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  border-radius: 8px;
  background-color: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  resize: vertical;

  &::placeholder {
    color: #94a6be;
  }

  &:focus {
    border-color: #565eef;
  }

  ${({ $error }) => $error && errorStyle}
`;



