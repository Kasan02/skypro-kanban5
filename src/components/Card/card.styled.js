import styled, { css, keyframes } from 'styled-components';

const cardAnimation = keyframes`
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
`;

const loadingShimmer = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(150%); }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

export const CardItem = styled.div`
  padding: 5px;
  animation: ${cardAnimation} 500ms linear;
  position: relative; /* важно для позиционирования DropdownMenu */
`;

export const CardContainer = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;

  body.dark & {
    background: rgb(32, 32, 44);
    color: #fff;
    border: 1px solid #444;
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  display: flex;
  align-items: center;

  p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }

  &._orange {
    background-color: #FFE4C2;
    color: #FF6D00;
  }

  &._green {
    background-color: #B4FDD1;
    color: #06B16E;
  }

  &._purple {
    background-color: #E9D4FF;
    color: #9A48F1;
  }
`;

export const CardBtn = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 2;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
  }

  &:hover div {
    background-color: #555;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 28px;
  right: 0;
  background: ${({ theme }) => theme?.colors?.background || '#fff'};
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 6px;
  z-index: 10;
  min-width: 140px;
  user-select: none;

  body.dark & {
    background: #222;
    box-shadow: 0 4px 12px rgba(0,0,0,0.7);
  }
`;

export const DropdownItem = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 10px 15px;
  text-align: left;
  font-size: 14px;
  color: ${({ theme }) => theme?.colors?.text || '#333'};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme?.colors?.primary || '#f0f0f0'};
    color: #000;
  }

  body.dark &:hover {
    background-color: #444;
    color: #fff;
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;

  body.dark & {
    color: #fff;
  }
`;

export const CardContent = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
  }
`;

export const SkeletonCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 16px;
  overflow: hidden;
  position: relative;
  width: 220px;
  height: 130px;

  body.dark & {
    background-color: rgb(32, 32, 44);
    border: 1px solid #444;
  }
`;

export const SkeletonBox = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, rgb(193, 205, 220) -6.316%, rgb(233, 238, 247) 46.754%, rgb(193, 205, 220) 106.458%);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -150px;
    bottom: 0;
    width: 150px;
    background: linear-gradient(90deg, rgb(193, 205, 220) -6.316%, rgb(233, 238, 247) 46.754%, rgb(193, 205, 220) 106.458%);
    animation: ${loadingShimmer} 1.5s infinite;
  }
`;

export const SkeletonDots = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;

  > div {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #3a3a3a;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -20px;
      bottom: 0;
      right: 0;
      width: 20px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent);
      animation: ${loadingShimmer} 1.5s infinite;
    }
  }
`;



