import axios from "axios";

export const api = axios.create({
  baseURL: "https://media-chat-api.onrender.com/",
  timeout: 5000,
});
