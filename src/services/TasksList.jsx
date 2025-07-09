import { useEffect, useState } from "react";
import { fetchTasks } from "../services/kanbanApi";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadTasks() {
      setLoading(true);
      setError("");
      try {
        const tasksData = await fetchTasks();
        setTasks(tasksData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadTasks();
  }, []);

  if (loading) return <p>Загрузка задач...</p>;
  if (error) return <p style={{ color: "red" }}>Ошибка: {error}</p>;

  return (
    <div>
      <h3>Список задач</h3>
      {tasks.length === 0 ? (
        <p>Задачи не найдены</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task._id}>
              <strong>{task.title}</strong> — {task.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TasksList;
