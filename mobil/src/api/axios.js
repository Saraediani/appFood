import axios from "axios";

export const API_BASE_URL = "http://10.0.2.2:5000";

export const axiosPrivate = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default axios.create({ baseURL: API_BASE_URL });
