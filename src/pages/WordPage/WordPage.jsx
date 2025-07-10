import { useParams } from 'react-router-dom';

const words = [
  { id: '1', word: 'apple', translation: 'яблоко' },
  { id: '2', word: 'car', translation: 'машина' },
];

const WordPage = () => {
  const { id } = useParams();

  const currentWord = words.find(w => w.id === id);

  if (!currentWord) {
    return <p>Слово не найдено</p>;
  }

  return (
    <div>
      <h2>Слово: {currentWord.word}</h2>
      <p>Перевод: {currentWord.translation}</p>
    </div>
  );
};

export default WordPage;
