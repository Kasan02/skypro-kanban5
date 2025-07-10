import Column from "../Column/column";
import { MainWrapper, Content } from "./main.styled";

const columns = [
  { id: 1, title: "Бэклог", status: "Backlog" },
  { id: 2, title: "В процессе", status: "In Progress" },
  { id: 3, title: "Готово", status: "Done" },
];

const Main = ({ tasks = [], loading = false, error = "" }) => {
  const tasksByStatus = columns.reduce((acc, col) => {
    acc[col.status] = tasks.filter((task) => task.status === col.status);
    return acc;
  }, {});

  return (
    <MainWrapper>
      {error && <p style={{ color: "red", padding: "16px" }}>{error}</p>}

      <Content>
        {columns.map((col) => (
          <Column
            key={col.id}
            title={col.title}
            tasks={tasksByStatus[col.status] || []}
            isLoading={loading}
          />
        ))}
      </Content>
    </MainWrapper>
  );
};

export default Main;










