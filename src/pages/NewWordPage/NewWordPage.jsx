import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../../components/Calendar/calendar.jsx";
import { api } from "../../services/api";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Title,
  Form,
  LeftSide,
  RightSide,
  FieldBlock,
  Label,
  Input,
  Textarea,
  Categories,
  CategoryThemes,
  CategoryTheme,
  CalendarWrapper,
  SubmitButton,
  ErrorText
} from "./NewWordPage.styled";

const categories = [
  { key: 'Web Design', colorClass: '_orange' },
  { key: 'Research', colorClass: '_green' },
  { key: 'Copywriting', colorClass: '_purple' }
];

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

    if (!title.trim()) {
      setError("Введите название задачи");
      return;
    }

    const payload = {
      title: title.trim(),
      text: text.trim(),
      category,
    };
    if (date) payload.date = date;

    try {
      await api.addTask(payload);
      navigate("/", { replace: true });
    } catch (err) {
      console.error(err);
      setError("Не удалось создать задачу. Попробуйте ещё раз.");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={() => navigate('/', { replace: true })}>&times;</CloseButton>
        <Title>Создание задачи</Title>
        <Form onSubmit={handleSubmit}>
          <LeftSide>
            <FieldBlock>
              <Label htmlFor="title">Название задачи</Label>
              <Input
                id="title"
                value={title}
                placeholder="Введите название задачи..."
                onChange={e => setTitle(e.target.value)}
                autoFocus
              />
            </FieldBlock>
            <FieldBlock>
              <Label htmlFor="description">Описание задачи</Label>
              <Textarea
                id="description"
                value={text}
                placeholder="Введите описание задачи..."
                onChange={e => setText(e.target.value)}
                rows={5}
              />
            </FieldBlock>
            <Categories>
              <Label>Категория</Label>
              <CategoryThemes>
                {categories.map(cat => (
                  <CategoryTheme
                    key={cat.key}
                    className={`${cat.colorClass} ${category === cat.key ? '_active-category' : ''}`}
                    onClick={() => setCategory(cat.key)}
                  >
                    {cat.key}
                  </CategoryTheme>
                ))}
              </CategoryThemes>
            </Categories>
          </LeftSide>
          <RightSide>
            <FieldBlock>
              <Label>Срок исполнения</Label>
              <CalendarWrapper>
                <Calendar onSelect={setDate} selectedDate={date} />
              </CalendarWrapper>
            </FieldBlock>
            <SubmitButton type="submit">Создать задачу</SubmitButton>
            {error && <ErrorText>{error}</ErrorText>}
          </RightSide>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default NewWordPage;












