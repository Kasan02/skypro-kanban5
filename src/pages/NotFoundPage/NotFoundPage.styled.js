import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  color: #333;
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #357ab7;
  }
`;
