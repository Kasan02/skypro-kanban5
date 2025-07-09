import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import BaseInput from "../../components/BaseInput/BaseInput";
import { StyledInput } from "../../components/BaseInput/BaseInput.styled";

import {
  Bg,
  Modal,
  Wrapper,
  Title,
  Form,
  InputWrapper,
  ModalBlock,
  BtnEnter,
  FormGroup,
  ContainerSignin,
} from "../SignInPage/SignInPage.styled";

const SignUpPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
              <Form onSubmit={handleSubmit}>
                <InputWrapper>
                  <BaseInput
                    tag="input"
                    className="auth-input"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    as={StyledInput}
                  />
                  <BaseInput
                    tag="input"
                    className="auth-input"
                    type="text"
                    name="login"
                    placeholder="Эл. почта"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    as={StyledInput}
                  />
                  <BaseInput
                    tag="input"
                    className="auth-input"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    as={StyledInput}
                  />
                </InputWrapper>

                <BtnEnter type="submit">Зарегистрироваться</BtnEnter>

                <FormGroup>
                  <p>
                    Уже есть аккаунт? <Link to="/sign-in">Войдите здесь</Link>
                  </p>
                </FormGroup>
              </Form>
            </Wrapper>
          </ModalBlock>
        </ContainerSignin>
      </Modal>
    </Bg>
  );
};

export default SignUpPage;


