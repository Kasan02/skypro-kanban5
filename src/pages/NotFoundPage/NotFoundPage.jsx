import { useNavigate } from 'react-router-dom';
import { Wrapper, Title, Message, Button } from './NotFoundPage.styled';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title>404</Title>
      <Message>Страница не найдена</Message>
      <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
    </Wrapper>
  );
};

export default NotFoundPage;

