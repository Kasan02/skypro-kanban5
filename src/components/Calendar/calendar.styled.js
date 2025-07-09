import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  &.pop-new-card__calendar {
    /* Основные стили контейнера */
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const CalendarBlock = styled.div`
  /* Добавить стили для блока календаря */
`;

export const CalendarNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const Month = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

export const NavActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavAction = styled.div`
  cursor: pointer;
  svg {
    fill: currentColor;
  }
`;

export const CalendarContent = styled.div`
  /* Общий контейнер дней */
`;

export const DaysNames = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

export const DayName = styled.div`
  width: 28px;
  text-align: center;

  &.weekend {
    color: #f00;
  }
`;

export const CalendarCells = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const Cell = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  &._other-month {
    color: #aaa;
  }
  &._cell-day {
    background: #f5f5f5;
  }
  &._weekend {
    color: #f00;
  }
  &._current {
    font-weight: 700;
    background-color: #d0eaff;
  }
  &._active-day {
    border: 2px solid #007bff;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Period = styled.div`
  margin-top: 10px;
`;

export const PeriodText = styled.p`
  font-size: 14px;

  span {
    font-weight: 600;
  }
`;

