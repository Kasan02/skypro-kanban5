import AppRoutes from "./AppRoutes";
import Header from "./components/Header/header";
import { TasksProvider } from "./context/TasksContext";
import { AuthProvider, useAuth } from "./context/AuthContext"; 
import "./App.css";

const AppContent = () => {
  const { isAuth, setIsAuth, user, setUser } = useAuth();

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

const App = () => {
  return (
    <AuthProvider>
      <TasksProvider>
        <AppContent />
      </TasksProvider>
    </AuthProvider>
  );
};

export default App;













