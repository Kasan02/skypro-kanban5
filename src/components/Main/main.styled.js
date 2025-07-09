import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;

  body.dark & {
    background-color: #1f1f2f;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 19px; 
  flex-wrap: nowrap;
  overflow-x: auto;
`;
