import axios from "axios";

export const request = axios.create({
  baseURL: "/",
  timeout: 6000,
  withCredentials: true,
})