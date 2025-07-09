import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signIn, signUp } from "../services/auth";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  // Состояние всех полей формы
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // Состояние ошибок по каждому полю
  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  // Текст общей ошибки для пользователя
  const [error, setError] = useState("");

  // Валидация полей формы
  const validateForm = () => {
    const newErrors = { name: false, login: false, password: false };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }
    if (!formData.login.trim()) {
      newErrors.login = true;
      isValid = false;
    }
    if (!formData.password.trim()) {
      newErrors.password = true;
      isValid = false;
    }

    if (!isValid) {
      setError("Заполните все поля");
    } else {
      setError("");
    }

    setErrors(newErrors);
    return isValid;
  };

  // Обработка изменения в любом поле формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
    setError("");
  };

  // Отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg">
      <div className="modal">
        <div className="logo">SkyWords</div>
        <div className="wrapper">
          <h2 className="title">{isSignUp ? "Регистрация" : "Вход"}</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              {isSignUp && (
                <BaseInput
                  error={errors.name}
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <BaseInput
                error={errors.login}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
              />
              <BaseInput
                error={errors.password}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <BaseButton
              type="secondary"
              fullWidth={true}
              text={isSignUp ? "Зарегистрироваться" : "Войти"}
            />
            {!isSignUp ? (
              <div className="form-group">
                <p>Нужно зарегистрироваться? <Link to="/sign-up">Регистрируйтесь здесь</Link></p>
              </div>
            ) : (
              <div className="form-group">
                <p>Есть аккаунт? <Link to="/sign-in">Войдите здесь</Link></p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
