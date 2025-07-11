import { useState } from "react";
import Calendar from "../../Calendar/calendar.jsx";
import { useTasks } from "../../../context/TasksContext";

const PopNewCard = () => {
  const { addTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Web Design"); // По умолчанию
  const [status] = useState("Без статуса"); // Можно потом сделать выбор статуса

  const handleCategoryClick = (selected) => {
    setCategory(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask = {
      title,
      description,
      category,
      status,
    };

    try {
      await addTask(newTask);
      setTitle("");
      setDescription("");
      setCategory("Web Design");

      // Закрытие попапа
      const modal = document.getElementById("popNewCard");
      if (modal) modal.style.display = "none";
    } catch (err) {
      console.error("Ошибка при создании задачи:", err);
    }
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a
              href="#"
              className="pop-new-card__close"
              onClick={(e) => {
                e.preventDefault();
                const modal = document.getElementById("popNewCard");
                if (modal) modal.style.display = "none";
              }}
            >
              &#10006;
            </a>

            <div className="pop-new-card__wrap">
              <form className="pop-new-card__form form-new" onSubmit={handleSubmit}>
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </form>

              <Calendar />
            </div>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                {["Web Design", "Research", "Copywriting"].map((cat) => {
                  const color =
                    cat === "Web Design"
                      ? "_orange"
                      : cat === "Research"
                      ? "_green"
                      : "_purple";
                  return (
                    <div
                      key={cat}
                      className={`categories__theme ${color} ${
                        category === cat ? "_active-category" : ""
                      }`}
                      onClick={() => handleCategoryClick(cat)}
                    >
                      <p className={color}>{cat}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="form-new__create _hover01"
              id="btnCreate"
              onClick={handleSubmit}
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

