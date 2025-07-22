import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const clearError = useCallback(() => setError(""), []);

  const fetchTasks = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/sign-in");
        return;
      }

      const response = await api.getTasks();
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
  }, [navigate]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTask = async (taskData) => {
    try {
      const newTask = await addTask(taskData);
      setTasks((prev) => [...prev, newTask]);
    } catch (err) {
      console.error("Ошибка при добавлении задачи:", err);
      setError("Не удалось добавить задачу.");
    }
  };

  const updateTask = async (id, taskData) => {
    try {
      const updatedTask = await api.updateTask(id, taskData);
      setTasks((prev) =>
        prev.map((task) => (task._id === id ? updatedTask : task))
      );
    } catch (err) {
      console.error("Ошибка при обновлении задачи:", err);
      setError("Не удалось обновить задачу.");
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.deleteTask(id);
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Ошибка при удалении задачи:", err);
      setError("Не удалось удалить задачу.");
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        loading,
        error,
        clearError,
        fetchTasks,
        addTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

