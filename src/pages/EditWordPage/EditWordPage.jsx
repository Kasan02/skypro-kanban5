import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
} from "../NewWordPage/NewWordPage.styled";

const EditWordPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [category, setCategory] = useState("Research");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTask = async () => {
      try {
        const data = await api.getTaskById(id);
        const task = data.task || data;

        setWord(task.title || "");
        setTranslation(task.description || "");
        setCategory(task.category || "Research");
        setDate(task.deadline ? task.deadline.split("T")[0] : ""); // формат для input date yyyy-mm-dd
      } catch (err) {
        setError("Ошибка загрузки задачи");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.updateTask(id, {
        title: word || "Задача",
        description: translation || "",
        category: category || "Research",
        deadline: date || null,
      });
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Ошибка при обновлении задачи:", err);
      setError("Не удалось обновить задачу");
    }
  };

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={() => navigate("/", { replace: true })}>×</CloseButton>
        <Title>Редактирование задачи</Title>
        <Form onSubmit={handleSubmit}>
          <LeftSide>
            <div>
              <Label htmlFor="word">Название задачи</Label>
              <Input
                id="word"
                type="text"
                placeholder="Введите название задачи"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="translation">Описание задачи</Label>
              <Textarea
                id="translation"
                placeholder="Введите описание задачи"
                value={translation}
                onChange={(e) => setTranslation(e.target.value)}
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
            <DateLabel htmlFor="deadline">Дата</DateLabel>
            <DateInputWrapper>
              <DateInput
                id="deadline"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <CalendarButton type="button" aria-label="Открыть календарь">
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

            <SubmitButton type="submit">Сохранить изменения</SubmitButton>
          </RightSide>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditWordPage;
