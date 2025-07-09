import { useState } from "react";
import Header from "./components/Header/header.jsx";
import Main from "./components/Main/main.jsx";
import PopBrowse from './components/Popups/popBrowse/popBrowse.jsx';
import PopNewCard from './components/Popups/popNewCard/popNewCard.jsx';
import AppRoutes from "./AppRoutes.jsx";
import "./App.css";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      {isAuth && (
        <>
          <Header isAuth={isAuth} setIsAuth={setIsAuth} />
          <Main />
          <PopBrowse />
          <PopNewCard />
        </>
      )}
      <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
    </>
  );
};

export default App;
