import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api"; // Импортируем твой api.js

const AuthForm = ({ isSignUp, setIsAuth, setUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    login: "",
    password: "",
    name: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        // Регистрация
        const data = await api.register({
          login: formData.login,
          password: formData.password,
          name: formData.name,
        });

        if (data.user?.token) {
          setUser(data.user);
          setIsAuth(true);
          navigate("/");
        }
      } else {
        // Вход
        const data = await api.login({
          login: formData.login,
          password: formData.password,
        });

        if (data.user?.token) {
          setUser(data.user);
          setIsAuth(true);
          navigate("/");
        }
      }
    } catch (err) {
      setError(err.message || "Ошибка авторизации");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {isSignUp && (
        <input
          name="name"
          type="text"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
      )}
      <input
        name="login"
        type="email"
        placeholder="E-mail"
        value={formData.login}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Пароль"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">{isSignUp ? "Зарегистрироваться" : "Войти"}</button>
      {error && <div style={{ color: "red", marginTop: 10 }}>{error}</div>}
    </form>
  );
};

export default AuthForm;



