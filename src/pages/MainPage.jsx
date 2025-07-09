import { Outlet } from "react-router-dom";

const MainPage = ({ loading }) => {
  return (
    <div>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <h1>Добро пожаловать на главную!</h1>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MainPage;

