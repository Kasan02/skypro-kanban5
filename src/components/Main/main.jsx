import { useState, useEffect } from 'react';
import Column from '../Column/column';
import { MainWrapper, Content } from './main.styled';

const mockTasks = [
  { title: 'Создать дизайн главной страницы', theme: 'orange', date: '2025-07-10', category: 'Web Design', status: 'Backlog' },
  { title: 'Написать статью про ИИ', theme: 'purple', date: '2025-07-12', category: 'Copywriting', status: 'In Progress' },
  { title: 'Собрать отчёт по аналитике', theme: 'green', date: '2025-07-15', category: 'Research', status: 'Done' },
];

const columns = [
  { id: 1, title: 'Бэклог', status: 'Backlog' },
  { id: 2, title: 'В процессе', status: 'In Progress' },
  { id: 3, title: 'Готово', status: 'Done' },
];

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tasksByStatus, setTasksByStatus] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const grouped = columns.reduce((acc, col) => {
        acc[col.status] = mockTasks.filter(task => task.status === col.status);
        return acc;
      }, {});
      setTasksByStatus(grouped);
      setIsLoading(false);
    }, 1000); // симулируем загрузку
  }, []);

  return (
    <MainWrapper>
      <Content>
        {columns.map((col) => (
          <Column
            key={col.id}
            title={col.title}
            tasks={tasksByStatus[col.status] || []}
            isLoading={isLoading}
          />
        ))}
      </Content>
    </MainWrapper>
  );
};

export default Main;









