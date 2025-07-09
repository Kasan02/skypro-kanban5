const KANBAN_BASE_URL = 'https://wedev-api.sky.pro/api/kanban';
const WORDS_BASE_URL = 'https://wedev-api.sky.pro/api/words';

export async function getTasks(token) {
  const res = await fetch(KANBAN_BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
  }
  return res.json(); // { tasks: [...] }
}

export async function getTaskById(id, token) {
  const res = await fetch(`${KANBAN_BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    if (res.status === 404) throw new Error('Задача не найдена');
    throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
  }
  return res.json(); // { task: {...} }
}

export async function createTask(taskData, token) {
  const res = await fetch(KANBAN_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
  if (!res.ok) {
    throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
  }
  return res.json(); // { tasks: [...] }
}

export async function updateTask(id, taskData, token) {
  const res = await fetch(`${KANBAN_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
  if (!res.ok) {
    throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
  }
  return res.json(); // { tasks: [...] }
}

export async function deleteTask(id, token) {
  const res = await fetch(`${KANBAN_BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
  }
  return res.json(); // { tasks: [...] }
}

// === Добавляем функцию для загрузки слов ===
export async function fetchWords({ token }) {
  if (!token) throw new Error("Токен не передан");

  const res = await fetch(WORDS_BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
  }

  const data = await res.json();
  return data.words || data; // Возвращаем слова
}



