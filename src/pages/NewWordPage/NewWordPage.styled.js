import styled from "styled-components";

const categoryColors = {
  Research: "#6BD475",       // зелёный
  "Web Design": "#FFA500",   // оранжевый
  Copywriting: "#A259FF",    // фиолетовый
};

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  border: 0.7px solid rgb(212, 219, 229);
  border-radius: 10px;
  background: #fff;
  position: absolute;
  width: 630px;
  height: 596px;
  left: 405px;
  top: 152px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

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
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 23px;

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
  gap: 14px;
`;

export const Label = styled.label`
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 600;

  body.dark & {
    color: #fff;
  }
`;

export const Input = styled.input`
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  margin-top: 8px;

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
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  margin-top: 8px;

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
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  margin-top: 8px;
  cursor: pointer;
  background: ${({ value }) => categoryColors[value] || "#fff"};
  color: #fff;
  font-weight: 600;

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
  border-radius: 4px;
  background: rgb(86, 94, 239);
  cursor: pointer;
  width: 132px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background: rgb(0, 13, 255);
  }
`;

