// src/services/kanbanApi.js
const BASE_URL = "https://wedev-api.sky.pro/api/kanban";

// Получить токен из localStorage (предполагается, что он там сохраняется при авторизации)
function getToken() {
  const userInfo = localStorage.getItem("userInfo");
  if (!userInfo) return null;
  try {
    const data = JSON.parse(userInfo);
    return data.token || null;  // Важно: структура данных должна содержать token
  } catch {
    return null;
  }
}

export async function fetchTasks() {
  const token = getToken();
  if (!token) throw new Error("Токен не найден. Пользователь не авторизован.");

  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    throw new Error("Неавторизованный запрос. Пожалуйста, войдите в систему.");
  }

  if (!response.ok) {
    throw new Error(`Ошибка при получении задач: ${response.statusText}`);
  }

  const data = await response.json();
  return data.tasks;
}
