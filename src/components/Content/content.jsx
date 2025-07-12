import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 30px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 18px;
  margin-bottom: 20px;
`;

const WordCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const LoadingText = styled.div`
  font-size: 16px;
  color: #888;
`;

const Content = ({ error, loading, words }) => {
  if (error) {
    return (
      <Wrapper>
        <ErrorMessage>Ошибка: {error}</ErrorMessage>
      </Wrapper>
    );
  }

  if (loading) {
    return (
      <Wrapper>
        <LoadingText>Загрузка слов...</LoadingText>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {Array.isArray(words) && words.length > 0 ? (
        words.map((word, index) => (
          <WordCard key={word.id ?? index}>
            <strong>{word.word}</strong> — {word.translation}
          </WordCard>
        ))
      ) : (
        <LoadingText>Слова не найдены.</LoadingText>
      )}
    </Wrapper>
  );
};

export default Content;


