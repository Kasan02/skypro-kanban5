import { useEffect, useState } from 'react';
import { cards } from '../../data.js';
import Column from '../Column/column.jsx';

const getThemeColor = (category) => {
  switch (category.toLowerCase()) {
    case 'web disign':
      return 'orange';
    case 'research':
      return 'green';
    case 'copywritting':
    case 'copywriting':
      return 'purple';
    default:
      return 'gray';
  }
};

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const statuses = [...new Set(cards.map(card => card.status))];

  const columns = statuses.map(status => {
    const tasks = cards
      .filter(card => card.status === status)
      .map(card => ({
        theme: getThemeColor(card.topic || card.theme || ''),
        category: card.topic || card.theme || '',
        title: card.title,
        date: card.date
      }));

    return {
      title: status,
      tasks
    };
  });

  const skeletonTask = {
    theme: 'gray',
    category: '',
    title: '',
    date: ''
  };

  return (
    <main className="main">
      <div className="main__content">
        {columns.map((column, index) => (
          <Column
            key={index}
            title={column.title}
            tasks={isLoading ? Array(3).fill(skeletonTask) : column.tasks}
            isLoading={isLoading}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;





