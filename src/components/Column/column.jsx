import Card from '../Card/card.jsx';
import { ColumnWrapper, ColumnTitle, CardsWrapper } from './column.styled';

const Column = ({ title, tasks, isLoading }) => {
  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsWrapper>
        {isLoading
          ? Array.from({ length: 3 }).map((_, i) => <Card key={i} loading={true} />)
          : tasks.length > 0
          ? tasks.map((task, index) => (
              <Card
                key={index}
                title={task.title}
                theme={task.theme}
                date={task.date}
                category={task.category}
                loading={false}
              />
            ))
          : <p style={{ padding: '10px 13px', color: '#94A6BE' }}>Нет задач</p>
        }
      </CardsWrapper>
    </ColumnWrapper>
  );
};

export default Column;







