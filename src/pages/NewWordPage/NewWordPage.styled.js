import styled from "styled-components";

const categoryColors = {
  Research: "#6BD475",
  "Web Design": "#FFA500",
  Copywriting: "#A259FF",
};

export const ModalOverlay = styled.div`
  position: fixed; /* Центрирование и фиксированное положение */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 630px;
  max-width: 90vw;
  height: 596px;
  max-height: 90vh;
  background: #fff;
  border: 0.7px solid rgb(212, 219, 229);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  body.dark & {
    background: #1e1e1e;
    border-color: #444;
  }
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

  body.dark & {
    background: #2a2a2a;
  }
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
  color: #000;

  body.dark & {
    color: #fff;
  }
`;

export const Title = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 23px;
  color: #000;

  body.dark & {
    color: #fff;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 30px;
  padding-top: 40px;
  box-sizing: border-box;
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

export const Label = styled.label`
  font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #000;

  body.dark & {
    color: #fff;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 8px;
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;

  ::placeholder {
    color: rgb(148, 166, 190);
    font-size: 14px;
  }

  body.dark & {
    background: #1e1e1e;
    color: #fff;
    border-color: #444;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  margin-top: 8px;
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  box-sizing: border-box;

  ::placeholder {
    color: rgb(148, 166, 190);
    font-size: 14px;
  }

  body.dark & {
    background: #1e1e1e;
    color: #fff;
    border-color: #444;
  }
`;

export const Select = styled.select`
  width: 100%;
  margin-top: 8px;
  padding: 10px 14px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background-color: ${({ value }) => categoryColors[value] || "#fff"};
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;

  body.dark & {
    border-color: #444;
  }
`;

export const DateLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  color: #333;

  body.dark & {
    color: #fff;
  }
`;

export const DateInputWrapper = styled.div`
  position: relative;
  width: 168px;
`;

export const DateInput = styled.input`
  width: 168px;
  height: 38px;
  padding: 10px 38px 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;

  body.dark & {
    background: #1e1e1e;
    color: #fff;
    border-color: #444;
  }
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
  }

  body.dark & {
    color: #ccc;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 14px;
  width: 132px;
  height: 38px;
  background: rgb(86, 94, 239);
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgb(0, 13, 255);
  }
`;


