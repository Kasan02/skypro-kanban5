import React from "react";
import { useNavigate } from "react-router-dom";
import Column from "../Column/column";
import { MainWrapper, Content } from "./main.styled";

const columns = [
  { id: 1, title: "Без статуса", status: "Без статуса" },
  { id: 2, title: "Нужно сделать", status: "Нужно сделать" },
  { id: 3, title: "В работе", status: "В работе" },
  { id: 4, title: "Тестирование", status: "Тестирование" },
  { id: 5, title: "Готово", status: "Готово" },
];

const Main = ({ tasks = [], loading = false, error = "" }) => {
  const navigate = useNavigate();

  const tasksByStatus = columns.reduce((acc, col) => {
    acc[col.status] = tasks.filter((task) => task.status === col.status);
    return acc;
  }, {});

  const handleEditTask = (taskId) => {
    // Здесь укажи актуальный путь редактирования
    navigate(`/edit/${taskId}`);
  };

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
            onEdit={handleEditTask}
          />
        ))}
      </Content>
    </MainWrapper>
  );
};

export default Main;














