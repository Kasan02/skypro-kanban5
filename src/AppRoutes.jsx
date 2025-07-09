import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import NewWordPage from "./pages/NewWordPage/NewWordPage";
import WordPage from "./pages/WordPage/WordPage";
import TrainPage from "./pages/TrainPage/TrainPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ExitPage from "./pages/ExitPage/ExitPage"; 
import PrivateRoute from "./components/PrivateRoute";

function AppRoutes({ isAuth, setIsAuth }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Routes>
      {/* Защищённые маршруты */}
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage loading={loading} />} />
        <Route path="/add" element={<NewWordPage />} />
        <Route path="/card/:id" element={<WordPage />} />
        <Route path="/train" element={<TrainPage />} />
        <Route path="/exit" element={<ExitPage setIsAuth={setIsAuth} />} />
      </Route>

      {/* Публичные маршруты */}
      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;







