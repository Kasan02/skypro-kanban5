import { useState } from "react";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header/header"; 
import "./App.css";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      {isAuth && <Header isAuth={isAuth} setIsAuth={setIsAuth} />}
      <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
    </>
  );
};

export default App;




