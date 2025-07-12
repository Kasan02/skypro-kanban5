import styled from "styled-components";

// Основные обертки модалки (центрирование, фон, тень и т.д.)
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  width: 630px;
  max-width: 90vw;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  position: relative;

  body.dark & {
    background: #1e1e1e;
    border-color: #444;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 24px;
  color: #94A6BE;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #000;
  }
  
  body.dark & {
    color: #ccc;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #000;

  body.dark & {
    color: #fff;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 30px;
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RightSide = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const FieldBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;

  body.dark & {
    color: #fff;
  }
`;

export const Input = styled.input`
  padding: 14px;
  font-size: 14px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  width: 100%;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #94A6BE;
  }

  body.dark & {
    border-color: #444;
    background: #1e1e1e;
    color: #fff;
  }
`;

export const Textarea = styled.textarea`
  padding: 14px;
  font-size: 14px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  width: 100%;
  height: 200px;
  resize: none;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #94A6BE;
  }

  body.dark & {
    border-color: #444;
    background: #1e1e1e;
    color: #fff;
  }
`;

export const Categories = styled.div`
  margin-top: 14px;
`;

export const CategoryThemes = styled.div`
  display: flex;
  gap: 7px;
`;

export const CategoryTheme = styled.div`
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.4;
  display: inline-block;

  &._orange {
    background: #FFE4C2;
    color: #FF6D00;
  }
  &._green {
    background: #B4FDD1;
    color: #06B16E;
  }
  &._purple {
    background: #E9D4FF;
    color: #9A48F1;
  }
  &._active-category {
    opacity: 1 !important;
  }

  body.dark & {
    &._orange { background: #5a2c00; }
    &._green { background: #0f4f2a; }
    &._purple { background: #4b267e; }
  }
`;

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  width: 132px;
  height: 30px;
  background: #565EEF;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: #33399b;
  }
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
`;



