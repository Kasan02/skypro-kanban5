import Card from '../Card/card';

const Column = ({ title, children }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {children || (
          <>
            <Card title="Название задачи" theme="purple" date="30.10.23" />
            <Card title="Название задачи" theme="orange" date="30.10.23" />
            <Card title="Название задачи" theme="green" date="30.10.23" />
          </>
        )}
      </div>
    </div>
  );
};

export default Column;



