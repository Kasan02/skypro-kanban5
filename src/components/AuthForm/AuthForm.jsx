import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signIn, signUp } from "../services/auth";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";
import { ErrorText } from "./AuthForm.styled"; // ✅ стиль ошибки

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const [error, setError] = useState("");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
    setError("");
  };

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
        navigate("/main"); // ✅ корректный путь после входа
      }
    } catch (err) {
      setError(err.message || "Ошибка авторизации");
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

            {/* ✅ Отображение ошибки */}
            {error && <ErrorText>{error}</ErrorText>}

            <BaseButton
              type="secondary"
              fullWidth={true}
              text={isSignUp ? "Зарегистрироваться" : "Войти"}
            />

            <div className="form-group">
              {isSignUp ? (
                <p>Есть аккаунт? <Link to="/sign-in">Войдите здесь</Link></p>
              ) : (
                <p>Нужно зарегистрироваться? <Link to="/sign-up">Регистрируйтесь здесь</Link></p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

