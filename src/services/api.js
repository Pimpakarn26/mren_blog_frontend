import axios from "axios";
import TokenService from "./token.service"; // ตรวจสอบ path ให้ถูกต้อง

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = TokenService.getLocalAccessToken();
  if(token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});

export default instance;

// Request Interceptor: เพิ่ม Token เข้า Header
// instance.interceptors.request.use(
//   (config) => {
//     const token = TokenService.getLocalAccessToken();
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Response Interceptor: Handle Errors
// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       if (error.response.status === 401) {
//         console.error("Unauthorized! Redirecting to login...");
//         // ทำการ logout หรือ redirect ไปที่ login
//       }
//     }
//     return Promise.reject(error);
//   }
// );
