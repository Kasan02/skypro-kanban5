import Card from '../Card/card.jsx';
import { ColumnWrapper, ColumnTitle, CardsWrapper } from './column.styled';

const themeMap = {
  Research: "green",
  "Web Design": "orange",
  Copywriting: "purple",
};

const Column = ({ title, tasks, isLoading }) => {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsWrapper>
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => <Card key={`loading-${i}`} loading={true} />)
        ) : tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Card
              key={task.id !== undefined ? task.id : `task-${index}`} // надежный ключ
              title={task.title}
              theme={themeMap[task.category?.trim()] || "green"}
              date={task.date}
              category={task.category}
              loading={false}
            />
          ))
        ) : (
          <p style={{ padding: '10px 13px', color: '#94A6BE' }}>Нет задач</p>
        )}
      </CardsWrapper>
    </ColumnWrapper>
  );
};

export default Column;











