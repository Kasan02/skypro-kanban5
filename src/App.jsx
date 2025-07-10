import { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header/header";
import "./App.css";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("userInfo");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      {isAuth && user && (
        <Header
          isAuth={isAuth}
          setIsAuth={setIsAuth}
          user={user}
          setUser={setUser}
        />
      )}

      <AppRoutes
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setUser={setUser}
      />
    </>
  );
};

export default App;











