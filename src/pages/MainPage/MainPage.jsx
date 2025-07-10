// src/pages/MainPage/MainPage.jsx
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

        const data = await api.getTasks();
        if (!data?.tasks || !Array.isArray(data.tasks)) {
          throw new Error("Некорректный формат задач");
        }

        setTasks(data.tasks);
      } catch (err) {
        console.error(err);
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
      <Outlet /> {/* Место для отображения модалки NewWordPage */}
    </>
  );
};

export default MainPage;
















