import Card from '../Card/card.jsx';

const Column = ({ title, tasks }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {tasks.map((task, index) => (
          <Card
            key={index}
            title={task.title}
            theme={task.theme}
            date={task.date}
            category={task.category} 
          />
        ))}
      </div>
    </div>
  );
};

export default Column;




