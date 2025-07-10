// src/AppRoutes.jsx
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import MainPage from "./pages/MainPage/MainPage";
import WordPage from "./pages/WordPage/WordPage";
import NewWordPage from "./pages/NewWordPage/NewWordPage";
import TrainPage from "./pages/TrainPage/TrainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const AppRoutes = ({ isAuth, setIsAuth, setUser }) => {
  return (
    <Routes>
      <Route
        path="/sign-in"
        element={<SignInPage setIsAuth={setIsAuth} setUser={setUser} />}
      />
      <Route
        path="/sign-up"
        element={<SignUpPage setIsAuth={setIsAuth} setUser={setUser} />}
      />

      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage />}>
          <Route path="new" element={<NewWordPage />} /> {/* 🧩 Модалка */}
        </Route>
        <Route path="/word/:id" element={<WordPage />} />
        <Route path="/train" element={<TrainPage />} />
        <Route
          path="/exit"
          element={<ExitPage setIsAuth={setIsAuth} setUser={setUser} />}
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;















