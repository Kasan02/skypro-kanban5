import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
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
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
