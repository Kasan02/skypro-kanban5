import React from "react";
import { Outlet } from "react-router-dom";
import Main from "../../components/Main/Main";
import Notification from "../../components/Notification/Notification";
import { useTasks } from "../../context/TasksContext";

const MainPage = () => {
  const { tasks, loading, error, clearError } = useTasks();

  return (
    <>
      <Main tasks={tasks} loading={loading} error={error} />
      <Notification message={error} type="error" onClose={clearError} />
      <Outlet />
    </>
  );
};

export default MainPage;





















