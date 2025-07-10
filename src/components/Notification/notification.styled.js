import styled, { css } from "styled-components";

export const NotificationWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 280px;
  padding: 15px 20px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  ${({ type }) => type === "error" && css`
    background-color: #e74c3c; /* красный */
  `}

  ${({ type }) => type === "success" && css`
    background-color: #27ae60; /* зеленый */
  `}

  ${({ type }) => type === "info" && css`
    background-color: #3498db; /* синий */
  `}
`;

export const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 0 5px;
  line-height: 1;
`;
