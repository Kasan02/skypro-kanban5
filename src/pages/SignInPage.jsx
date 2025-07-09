import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import BaseInput from "../components/BaseInput";   // проверь путь
import BaseButton from "../components/BaseButton"; // проверь путь

const SignInPage = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Простейшая проверка (можно заменить на fetch-запрос)
    if (login.trim() && password.trim()) {
      setIsAuth(true);
      navigate("/");
    } else {
      alert("Введите логин и пароль");
    }
  };

  return (
    <div className="bg">
      <div className="modal">
        <div className="logo">SkyWords</div>
        <div className="wrapper">
          <h2 className="title">{isSignUp ? "Регистрация" : "Вход"}</h2>
          <form className="form" id="form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              {isSignUp && (
                <BaseInput
                  tag="input"
                  className="auth-input"
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <BaseInput
                tag="input"
                className="auth-input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <BaseInput
                tag="input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <BaseButton
              type="submit"
              fullWidth={true}
              className="button-enter"
              text={isSignUp ? "Зарегистрироваться" : "Войти"}
            />

            <div className="form-group">
              {isSignUp ? (
                <p>
                  Есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
                </p>
              ) : (
                <>
                  <p>Нужно зарегистрироваться?</p>
                  <Link to="/sign-up">Регистрируйтесь здесь</Link>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;



