import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../../components/Main/Main";
import { api } from "../../services/api";

const MainPage = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/sign-in");
          return;
        }

        const data = await api.getTasks();
        console.log("Полученные задачи:", data);

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
    <Main
      tasks={tasks}
      loading={loading}
      error={error}
    />
  );
};

export default MainPage; 













