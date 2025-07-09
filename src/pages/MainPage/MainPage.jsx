import { useCallback, useEffect, useState } from "react";
import { fetchWords } from '../../services/api';
import Container from "../../components/Container/container.jsx";
// import Header from "../../components/Header/header.jsx"; // Убрал, чтобы не дублировать
import Main from "../../components/Main/main.jsx";
// import Content from "../../components/Content/content.jsx"; // Закомментировал, оставляем только Main
import { Outlet } from "react-router-dom";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [words, setWords] = useState([]);
  const [error, setError] = useState("");

  const getWords = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchWords({
        token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
      });
      console.log("WORDS:", data);
      if (data) setWords(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getWords();
  }, [getWords]);

  return (
    <Container>
      {/* Хедер рендерится в App.jsx — тут не нужен */}
      <Main words={words} loading={loading} error={error} />
      {/* Лишний Content убран, чтобы не дублировать */}
      <Outlet />
    </Container>
  );
};

export default MainPage;






