// src/services/api.js
const BASE_URL = "https://wedev-api.sky.pro/api";

async function request(path, options = {}) {
  const url = BASE_URL + path;

  // Скопируем заголовки из options
  const headers = options.headers ? { ...options.headers } : {};

  // Пути, для которых НЕ нужно ставить Content-Type
  // Добавили "/kanban"
  const noContentTypePaths = ["/user/login", "/user", "/kanban"];

  // Если есть body и заголовок не указан и путь не в списке — ставим JSON
  if (
    options.body &&
    !headers["Content-Type"] &&
    !noContentTypePaths.includes(path)
  ) {
    headers["Content-Type"] = "application/json";
  }

  // Добавляем Authorization для всех запросов, кроме логина/регистрации
  const token = localStorage.getItem("token");
  if (token && !headers["Authorization"]) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = { ...options, headers };

  // Преобразуем object -> JSON, но не для FormData
  if (
    options.body &&
    typeof options.body === "object" &&
    !(options.body instanceof FormData)
  ) {
    config.body = JSON.stringify(options.body);
  }

  const response = await fetch(url, config);
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Ошибка ${response.status}: ${errorText}`);
  }
  if (response.status === 204) return null;
  return response.json();
}

export const api = {
  login: async ({ login, password }) => {
    const data = await request("/user/login", {
      method: "POST",
      body: { login, password },
    });
    if (data.user?.token) localStorage.setItem("token", data.user.token);
    return data;
  },

  register: async ({ login, password, name }) => {
    const data = await request("/user", {
      method: "POST",
      body: { login, password, name },
    });
    if (data.user?.token) localStorage.setItem("token", data.user.token);
    return data;
  },

  getTasks: () => request("/kanban", { method: "GET" }),

  getTaskById: (id) => request(`/kanban/${id}`, { method: "GET" }),

  addTask: (taskData) =>
    request("/kanban", {
      method: "POST",
      body: taskData, // отправляем JS-объект
    }),

  updateTask: (id, taskData) =>
    request(`/kanban/${id}`, {
      method: "PUT",
      body: taskData,
    }),

  deleteTask: (id) =>
    request(`/kanban/${id}`, {
      method: "DELETE",
    }),

  getUsers: () => request("/user", { method: "GET" }),

  logout: () => {
    localStorage.removeItem("token");
  },
};



















