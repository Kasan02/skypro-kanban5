import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const WordPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTask = async () => {
      try {
        const data = await api.getTaskById(id);
        setTask(data.task || data);
      } catch (err) {
        console.error(err);
        setError("Задача не найдена");
      }
    };

    loadTask();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!task) return <p>Загрузка...</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>Категория: {task.category}</p>
      <p>Дата: {task.date}</p>
      <p>Статус: {task.status}</p>
    </div>
  );
};

export default WordPage;

