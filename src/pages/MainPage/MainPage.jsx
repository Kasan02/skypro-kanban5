import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Main from "../../components/Main/Main";
import Notification from "../../components/Notification/Notification";
import { api } from "../../services/api";

const MainPage = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const clearError = useCallback(() => setError(""), []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/sign-in");
          return;
        }

        const response = await api.getTasks();
        console.log("Ответ от API:", response); 

        const tasksArray = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response?.tasks)
          ? response.tasks
          : null;

        if (!tasksArray) {
          throw new Error("Некорректный формат задач");
        }

        setTasks(tasksArray);
      } catch (err) {
        console.error("Ошибка загрузки задач:", err);
        setError("Не удалось загрузить задачи. Попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [navigate]);

  return (
    <>
      <Main tasks={tasks} loading={loading} error={error} />
      <Notification message={error} type="error" onClose={clearError} />
      <Outlet />
    </>
  );
};

export default MainPage;


















