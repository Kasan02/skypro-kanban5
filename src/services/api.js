const BASE_URL = "https://wedev-api.sky.pro/api/user";

export const api = {
  async register({ login, name, password }) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, name, password }),
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Ошибка регистрации");
    }
    return response.json();
  },

  async login({ login, password }) {
    const response = await fetch(BASE_URL + "/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login, password }),
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Неверный логин или пароль");
    }
    return response.json();
  },

  async getTasks(token) {
    const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message || "Ошибка загрузки задач");
    }
    return response.json();
  },
};




