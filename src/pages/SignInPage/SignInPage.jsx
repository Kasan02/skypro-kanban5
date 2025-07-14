import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Bg,
  Modal,
  ContainerSignin,
  ModalBlock,
  Wrapper,
  Title,
  Form,
  InputWrapper,
  BtnEnter,
  FormGroup,
  ErrorMessage,
} from "./SignInPage.styled";

import BaseInput from "../../components/BaseInput/BaseInput";
import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext"; 

const SignInPage = () => {
  const navigate = useNavigate();
  const { setIsAuth, setUser } = useAuth(); // заменяем пропсы

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: false, password: false, general: "" });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    return email.includes("@") && (email.endsWith("gmail.com") || email.endsWith("ru.ru"));
  };

  const validatePassword = (password) => {
    return password.length >= 5;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({ email: false, password: false, general: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailError = !validateEmail(formData.email);
    const passwordError = !validatePassword(formData.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
        general:
          "Введенные вами данные некорректны. Чтобы завершить вход, заполните все поля корректно и повторите попытку.",
      });
      return;
    }

    setLoading(true);
    setErrors({ email: false, password: false, general: "" });

    try {
      const data = await api.login({ login: formData.email, password: formData.password });

      if (!data.user?.token) throw new Error("Токен не получен");

      localStorage.setItem("token", data.user.token);

      setUser({
        name: data.user.name || "Пользователь",
        email: formData.email,
        imageUrl: data.user.imageUrl || "",
      });

      setIsAuth(true);
      navigate("/"); // или "/main", если используешь защищённый роутинг
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        general: error.message || "Ошибка входа. Попробуйте еще раз.",
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Bg>
      <Modal>
        <ContainerSignin>
          <ModalBlock>
            <Wrapper>
              <Title>Вход</Title>
              <Form onSubmit={handleSubmit} noValidate>
                <InputWrapper>
                  <BaseInput
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    $hasError={errors.email}
                    disabled={loading}
                  />
                  {errors.email && (
                    <ErrorMessage>
                      Введите корректный e-mail (содержит @ и домен gmail.com или ru.ru)
                    </ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <BaseInput
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                    $hasError={errors.password}
                    disabled={loading}
                  />
                  {errors.password && (
                    <ErrorMessage>Пароль должен содержать минимум 5 символов</ErrorMessage>
                  )}
                </InputWrapper>

                <BtnEnter type="submit" disabled={loading}>
                  {loading ? "Вход..." : "Войти"}
                </BtnEnter>

                {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
              </Form>

              <FormGroup>
                <p>
                  Нужно зарегистрироваться?{" "}
                  <a
                    href="/sign-up"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/sign-up");
                    }}
                  >
                    Регистрируйтесь здесь
                  </a>
                </p>
              </FormGroup>
            </Wrapper>
          </ModalBlock>
        </ContainerSignin>
      </Modal>
    </Bg>
  );
};

export default SignInPage;





