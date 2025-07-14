import { useState } from "react";
import Calendar from "../../Calendar/calendar.jsx";
import { useTasks } from "../../../context/TasksContext";
import { useAuth } from "../../../context/AuthContext";
import CategorySelector from "../../CategorySelector/CategorySelector";
import { Link } from "react-router-dom";

const PopNewCard = () => {
  const { addTask } = useTasks();
  const { user } = useAuth();
  console.log("user", user);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("Web Design"); 
  // const [status] = useState("Без статуса"); 
  const { tasks, setTasks } = useTasks();
  const [error, setError] = useState("");
  const [task, setTask] = useState({
    title: "",
    description: "",
    category: "Web Design",
    status: "Без статуса",
    date: null,
  });


  // const handleCategoryClick = (selected) => {
  //   setCategory(selected);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!title.trim()) return;

  //   const newTask = {
  //     title,
  //     description,
  //     category,
  //     status,
  //   };

  //   try {
  //     await addTask(newTask);
  //     setTitle("");
  //     setDescription("");
  //     setCategory("Web Design");

  //     // Закрытие попапа
  //     const modal = document.getElementById("popNewCard");
  //     if (modal) modal.style.display = "none";
  //   } catch (err) {
  //     console.error("Ошибка при создании задачи:", err);
  //   }
  // };

  const createTask = (e) => {
    e.preventDefault();
    addTask({ task, token: localStorage.getItem("token") })
      .then((data) => {
        console.log("Создана новая задача:", data);
        setTasks((prev) => [...prev, data]);
        setTask(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to ="/" className="pop-new-card__close _hover01" />

            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" onSubmit={createTask}>
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={task.title}
                    onChange={(e) => setTask({ ...task, title: e.target.value })}
                  />
                </div>

                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={task.description}
                    onChange={(e) => setTask({ ...task, description: e.target.value })}
                  />
                </div>
              </form>

              <Calendar />
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <CategorySelector category={task.category} setCategory={(cat) => setTask({ ...task, category: cat })} />
              </div>
            </div>

            <button
              className="form-new__create _hover01"
              id="btnCreate"
              onClick={createTask}
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;

