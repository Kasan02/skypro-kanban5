import { Outlet } from "react-router-dom";

const MainPage = ({ loading }) => {
  return (
    <div>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MainPage;

