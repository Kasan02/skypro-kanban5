const BASE_URL = "https://wedev-api.sky.pro/api";

async function request(path, options = {}) {
  const url = BASE_URL + path;

  const headers = options.headers ? { ...options.headers } : {};

  // Важно! Не ставим Content-Type для /user/login и /user (регистрация), так как сервер не принимает его
  const noContentTypePaths = ["/user/login", "/user"];
  if (options.body && !headers["Content-Type"] && !noContentTypePaths.includes(path)) {
    headers["Content-Type"] = "application/json";
  }

  const token = localStorage.getItem("token");
  if (token && !headers["Authorization"] && !noContentTypePaths.includes(path)) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  // Преобразуем тело в JSON, если не FormData
  if (options.body && typeof options.body === "object" && !(options.body instanceof FormData)) {
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
    return request("/user/login", {
      method: "POST",
      body: { login, password },
    }).then((data) => {
      if (data.user?.token) {
        localStorage.setItem("token", data.user.token);
      }
      return data;
    });
  },

  register: async ({ login, password, name }) => {
    return request("/user", {
      method: "POST",
      body: { login, password, name },
    }).then((data) => {
      if (data.user?.token) {
        localStorage.setItem("token", data.user.token);
      }
      return data;
    });
  },

  getTasks: () => request("/kanban", { method: "GET" }),

  getTaskById: (id) => request(`/kanban/${id}`, { method: "GET" }),

  addTask: (taskData) =>
    request("/kanban", {
      method: "POST",
      body: taskData,
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













