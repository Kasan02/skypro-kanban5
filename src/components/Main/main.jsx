
import Column from '../Column/column.jsx';

const Main = () => {
  const columns = [
    {
      title: 'Без статуса',
      tasks: [
        { theme: 'orange', category: 'Web Disign', date: '30.10.23', title: 'Название задачи' },
        { theme: 'green', category: 'Research', date: '30.10.23', title: 'Название задачи' },
        { theme: 'orange', category: 'Web Disign', date: '30.10.23', title: 'Название задачи' },
        { theme: 'purple', category: 'Copywriting', date: '30.10.23', title: 'Название задачи' },
        { theme: 'green', category: 'Research', date: '30.10.23', title: 'Название задачи' }
      ]
    },
    {
      title: 'Нужно сделать',
      tasks: [
        { theme: 'green', category: 'Research', date: '30.10.23', title: 'Название задачи' }
      ]
    },
    {
      title: 'В работе',
      tasks: [
        { theme: 'green', category: 'Research', date: '30.10.23', title: 'Название задачи' },
        { theme: 'purple', category: 'Copywriting', date: '30.10.23', title: 'Название задачи' },
        { theme: 'orange', category: 'Web Disign', date: '30.10.23', title: 'Название задачи' }
      ]
    },
    {
      title: 'Тестирование',
      tasks: [
        { theme: 'green', category: 'Research', date: '30.10.23', title: 'Название задачи' }
      ]
    },
    {
      title: 'Готово',
      tasks: [
        { theme: 'green', category: 'Research', date: '30.10.23', title: 'Название задачи' }
      ]
    }
  ];

  return (
    <main className="main">
      <div className="main__content">
        {columns.map((column, index) => (
          <Column key={index} title={column.title} tasks={column.tasks} />
        ))}
      </div>
    </main>
  );
};

export default Main;


