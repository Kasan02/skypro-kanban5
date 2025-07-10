// src/pages/NewWordPage/NewWordPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Title,
  Form,
  Label,
  Input,
  Textarea,
  DateLabel,
  DateInputWrapper,
  DateInput,
  CalendarButton,
  SubmitButton,
  LeftSide,
  RightSide,
  Select, // добавляем Select, его надо определить в styled
} from "./NewWordPage.styled";

const NewWordPage = () => {
  const navigate = useNavigate();

  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [category, setCategory] = useState("Research");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.addTask({
        title: word || "Новая задача",
        description: translation || "",
        topic: category || "Research",
        deadline: date || null,
      });
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Ошибка при создании задачи:", err);
      // Можно добавить уведомление об ошибке
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={() => navigate("/", { replace: true })}>
          ×
        </CloseButton>
        <Title>Создание задачи</Title>
        <Form onSubmit={handleSubmit}>
          <LeftSide>
            <div>
              <Label>Название задачи</Label>
              <Input
                type="text"
                placeholder="Введите название задачи"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                required
              />
            </div>

            <div>
              <Label>Описание задачи</Label>
              <Textarea
                placeholder="Введите описание задачи"
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
              />
            </div>

            <div>
              <Label>Категория</Label>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="Web Design">Веб-дизайн</option>
                <option value="Research">Research</option>
                <option value="Copywriting">Copywriting</option>
              </Select>
            </div>
          </LeftSide>

          <RightSide>
            <DateLabel>Дата</DateLabel>
            <DateInputWrapper>
              <DateInput
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <CalendarButton
                type="button"
                aria-label="Toggle calendar"
                onClick={() => {
                  // Тут можно добавить логику открытия кастомного календаря,
                  // если нужна дополнительная UI-логика
                  // Сейчас просто стандартный input date, так что можно оставить пустым
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </CalendarButton>
            </DateInputWrapper>
          </RightSide>

          <SubmitButton type="submit">Создать задачу</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NewWordPage;








