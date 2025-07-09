import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px; 
`;

export const ColumnTitle = styled.div`
  padding: 0 0 12px 13px;

  p {
    font-size: 16px;
    font-weight: 600;
    color: #000;

    body.dark & {
      color: #fff;
    }
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px; 
`;
