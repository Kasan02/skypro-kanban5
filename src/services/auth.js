// src/services/auth.js
import axios from 'axios';

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn(userData) {
   try {
      const response = await axios.post(API_URL + "/login", userData, {
         headers: {
            "Content-Type": "application/json",
         },
      });
      return response.data.user;
   } catch (error) {
      // Обработка ошибки с учетом возможной структуры error.response.data.error
      throw new Error(error.response?.data?.error || error.message);
   }
}

export async function signUp({ name, login, password }) {
   try {
      const response = await axios.post(
         API_URL,
         { login, name, password },
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );
      return response.data.user;
   } catch (error) {
      console.error(error);
      throw new Error(error.response?.data?.error || error.message);
   }
}
