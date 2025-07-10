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
  Input,
  BtnEnter,
  FormGroup,
  ErrorMessage,
} from "../SignInPage/SignInPage.styled";

const SignUpPage = ({ setIsAuth, setUser }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = useState({ email: false, password: false, general: "" });

  const validateEmail = (email) => {
    if (!email.includes("@")) return false;
    if (!(email.endsWith("gmail.com") || email.endsWith("ru.ru"))) return false;
    return true;
  };

  const validatePassword = (password) => {
    return password.length >= 5;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({ email: false, password: false, general: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailError = !validateEmail(formData.email);
    let passwordError = !validatePassword(formData.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
        general:
          "Введенные вами данные некорректны. Чтобы завершить регистрацию, заполните все поля корректно и повторите попытку.",
      });
      return;
    }

    const fakeUser = {
      name: formData.name || "Пользователь",
      email: formData.email,
    };

    setUser(fakeUser);
    setIsAuth(true);
    navigate("/");
  };

  return (
    <Bg>
      <Modal>
        <ContainerSignin>
          <ModalBlock>
            <Wrapper>
              <Title>Регистрация</Title>
              <Form onSubmit={handleSubmit} noValidate>
                <InputWrapper>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </InputWrapper>

                <InputWrapper>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    $hasError={errors.email}
                  />
                  {errors.email && (
                    <ErrorMessage>
                      Введите корректный e-mail (содержит @ и домен gmail.com или ru.ru)
                    </ErrorMessage>
                  )}
                </InputWrapper>

                <InputWrapper>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                    $hasError={errors.password}
                  />
                  {errors.password && (
                    <ErrorMessage>Пароль должен содержать минимум 5 символов</ErrorMessage>
                  )}
                </InputWrapper>

                <BtnEnter type="submit">Зарегистрироваться</BtnEnter>

                {errors.general && <ErrorMessage>{errors.general}</ErrorMessage>}
              </Form>

              <FormGroup>
                <p>
                  Уже есть аккаунт?{" "}
                  <a href="/sign-in" onClick={(e) => { e.preventDefault(); navigate("/sign-in"); }}>
                    Войдите здесь
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

export default SignUpPage;







