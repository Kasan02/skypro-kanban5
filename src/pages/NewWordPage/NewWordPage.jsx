import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Title,
  Form,
  Input,
  Button,
} from "./NewWordPage.styled";

const NewWordPage = () => {
  const navigate = useNavigate();

  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

  const handleClose = () => navigate(-1); // Закрыть модалку (назад)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Пользователь не авторизован");
        return;
      }

      // Формируем данные, приводя всё к строкам
      const taskData = {
        text: word.toString(),
        description: translation.toString(),
        topic: category.toString(),
      };

      await api.addTask(taskData);

      // Очистить поля
      setWord("");
      setTranslation("");
      setCategory("");

      // Вернуться назад или на нужную страницу
      navigate(-1);
    } catch (err) {
      console.error("Ошибка при создании задачи:", err);
      setError(err.message || "Ошибка при создании задачи");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={handleClose}>×</CloseButton>
        <Title>Создание новой задачи</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Слово"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Перевод"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="Категория (например: Research)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Button type="submit">Создать</Button>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NewWordPage;





