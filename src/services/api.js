const BASE_URL = "https://wedev-api.sky.pro/api";

async function request(url, options = {}) {
  try {
    const response = await fetch(BASE_URL + url, options);

    let data;
    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok) {
      const errorMessage = data.message || data.error || `Ошибка: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export const api = {
  async register({ login, name, password }) {
    return request("/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, name, password }),
    });
  },

  async login({ login, password }) {
    return request("/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, password }),
    });
  },

  async getTasks(token) {
    if (!token) throw new Error("Токен не передан");

    return request("/kanban", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },

  async createTask(token, taskData) {
    if (!token) throw new Error("Токен не передан");

    return request("/kanban", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(taskData),
    });
  },

  async updateTask(token, taskId, taskData) {
    if (!token) throw new Error("Токен не передан");

    return request(`/kanban/${taskId}`, {
      method: "PUT",  // изменено с PATCH на PUT для соответствия документации
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(taskData),
    });
  },

  async deleteTask(token, taskId) {
    if (!token) throw new Error("Токен не передан");

    return request(`/kanban/${taskId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};







