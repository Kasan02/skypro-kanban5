import { useCallback, useEffect, useState } from "react";
import { api } from "../../services/api";
import Container from "../../components/Container/container.jsx";
import Main from "../../components/Main/main.jsx";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  // ⛔️ Пока что токен — захардкожен
  const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";

  const fetchTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const data = await api.getTasks(token);
      setTasks(data.tasks || data); // поддержка разных форматов ответа
    } catch (err) {
      setError(err.message || "Ошибка загрузки задач");
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <Container>
      <Main tasks={tasks} loading={loading} error={error} />
      <Outlet />
    </Container>
  );
};

export default MainPage;












