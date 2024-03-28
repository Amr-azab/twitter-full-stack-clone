import axios from "axios";

const instance = axios.create({
  baseURL: "https://twitter-full-stack.onrender.com/api/twitter",
  withCredentials: true,
});

export default instance;
