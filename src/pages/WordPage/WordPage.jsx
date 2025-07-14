import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useTasks } from "../../context/TasksContext";

const formatDate = (isoDate) => {
  if (!isoDate) return "Без даты";
  const date = new Date(isoDate);
  return date.toLocaleDateString("ru-RU");
};

const WordPage = () => {
  const { id } = useParams();
  const { tasks, setTasks } = useTasks();
  const [task, setTask] = useState(null);
  const [error, setError] = useState("");


  useEffect(() => {
    const loadTask = async () => {
      try {
        const data = await api.getTaskById(id);
        if (!data || (!data.task && !data.title)) {
          setError("Задача не найдена");
        } else {
          setTask(data.task || data);
        }
      } catch (err) {
        console.error(err);
        setError("Ошибка при загрузке задачи");
      }
    };

    loadTask();
  }, [id]);

  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
  if (!task) return <p style={{ padding: "20px" }}>Загрузка...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{task.title || "Без названия"}</h2>
      <p><strong>Категория:</strong> {task.category || "Не указана"}</p>
      <p><strong>Дата:</strong> {formatDate(task.date)}</p>
      <p><strong>Статус:</strong> {task.status || "неизвестно"}</p>
      <p><strong>Описание:</strong> {task.text || "Описание отсутствует"}</p>
    </div>
  );
};

export default WordPage;




