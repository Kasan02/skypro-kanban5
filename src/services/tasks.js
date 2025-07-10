// src/services/tasks.js
const API_BASE = "https://wedev-api.sky.pro/api/kanban";

export const getTasks = async ({ token }) => {
  try {
    const response = await fetch(`${API_BASE}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Ошибка при загрузке задач");
    }

    const data = await response.json();
    return data.tasks; 
  } catch (error) {
    throw error;
  }
};
