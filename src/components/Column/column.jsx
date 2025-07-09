import Card from '../Card/card.jsx';
import { ColumnWrapper, ColumnTitle, CardsWrapper } from './column.styled.js';

const Column = ({ title, tasks, isLoading }) => {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsWrapper>
        {tasks.map((task, index) => (
          <Card
            key={index}
            title={task.title}
            theme={task.theme}
            date={task.date}
            category={task.category}
            loading={isLoading} 
          />
        ))}
      </CardsWrapper>
    </ColumnWrapper>
  );
};

export default Column;






