const BASE_URL = "https://wedev-api.sky.pro/api";

// Проверка, нужно ли исключить Content-Type
function isPathWithoutContentType(path) {
  const noContentTypePatterns = [
    /^\/user\/login$/,
    /^\/user$/,
    /^\/kanban$/,
    /^\/kanban\/[^/]+$/, // путь вида /kanban/:id
  ];
  return noContentTypePatterns.some((pattern) => pattern.test(path));
}

async function request(path, options = {}) {
  const url = BASE_URL + path;
  const headers = options.headers ? { ...options.headers } : {};

  if (options.body && !headers["Content-Type"] && !isPathWithoutContentType(path)) {
    headers["Content-Type"] = "application/json";
  }

  const token = localStorage.getItem("token");
  if (token && !headers["Authorization"]) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = { ...options, headers };

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

  // addTask: (taskData) =>
  //   request("/kanban", {
  //     method: "POST",
  //     body: taskData,
  //   }),

  updateTask: (id, taskData) =>
    request(`/kanban/${id}`, {
      method: "PUT",
      body: taskData,
    }),

  deleteTask: (id) =>
    request(`/kanban/${id}`, {
      method: "DELETE",
    }),

  logout: () => {
    localStorage.removeItem("token");
  },
};
const addTask = async ({task, token}) => {
  const response = await fetch(`${BASE_URL}/kanban`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Ошибка при добавлении задачи: ${errorText}`);
  }

  return response.json();
}























