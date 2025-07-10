// src/pages/NewWordPage/NewWordPage.styled.js
import styled from "styled-components";

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  border: 0.7px solid rgb(212, 219, 229);
  border-radius: 10px;
  background: rgb(255, 255, 255);
  position: absolute;
  width: 630px;
  height: 596px;
  left: 405px;
  top: 152px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 40px 30px 48px 30px;
  border-radius: 10px;
  width: 630px;
  height: 596px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 28px;
  cursor: pointer;
  line-height: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 30px;
  position: relative;
  padding-top: 40px; /* чтобы отступ от заголовка */
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  margin-top: 0;
  gap: 14px;
`;

export const Title = styled.h2`
  color: rgb(0, 0, 0);
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
`;

export const Label = styled.label`
  color: rgb(0, 0, 0);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;
`;

export const Input = styled.input`
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;

  ::placeholder{
    color: rgb(148, 166, 190);
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 150%;
letter-spacing: -1%;
text-align: left;
  }
`;

export const Textarea = styled.textarea`
  width: 370px;
  height: 200px;
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  box-sizing: border-box;
  margin-top: 20px;

  ::placeholder{
    color: rgb(148, 166, 190);
font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: -1%;
text-align: left;
  }
`;

// Добавляем стиль для select
export const Select = styled.select`
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: 14px;
`;

export const DateLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  color: #333;
  margin: 0;
`;

export const DateInputWrapper = styled.div`
  position: relative;
  width: 168px;
  height: 228px;
`;

export const DateInput = styled.input`
  width: 168px;
  height: 228px;
  padding: 10px 38px 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const CalendarButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  color: #666;

  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  bottom: 24px;
  right: 24px;
  padding: 12px 24px;
  font-size: 16px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #45a045;
  }
`;




