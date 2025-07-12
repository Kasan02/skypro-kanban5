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
  Select,
} from "./NewWordPage.styled";

const NewWordPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Research");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      title: title.trim() || "Новая задача",
      text: text.trim() || "",
      category,
    };

    if (date) {
      payload.date = date; // передаём только если есть дата
    }

    try {
      await api.addTask(payload);
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Ошибка при создании задачи:", err);
      setError("Не удалось создать задачу. Попробуйте ещё раз.");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={() => navigate("/", { replace: true })} aria-label="Закрыть">×</CloseButton>
        <Title>Создание задачи</Title>
        <Form onSubmit={handleSubmit}>
          <LeftSide>
            <div>
              <Label htmlFor="title">Название задачи</Label>
              <Input
                id="title"
                type="text"
                placeholder="Введите название задачи"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div>
              <Label htmlFor="text">Описание задачи</Label>
              <Textarea
                id="text"
                placeholder="Введите описание задачи"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={5}
              />
            </div>

            <div>
              <Label htmlFor="category">Категория</Label>
              <Select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="Research">Research</option>
                <option value="Web Design">Web Design</option>
                <option value="Copywriting">Copywriting</option>
              </Select>
            </div>
          </LeftSide>

          <RightSide>
            <DateLabel htmlFor="date">Дата</DateLabel>
            <DateInputWrapper>
              <DateInput
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <CalendarButton type="button" aria-label="Открыть календарь" disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </CalendarButton>
            </DateInputWrapper>

            <SubmitButton type="submit">Создать задачу</SubmitButton>
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
          </RightSide>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NewWordPage;












