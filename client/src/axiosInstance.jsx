import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";


const instance = axios.create(
  {
    baseURL: 'http://localhost:3001',
  });
  instance.interceptors.request.use(function (config) {
    const { user, isAuthenticated } = useAuth0();
    // const token = localStorage.getItem('token');
    if (isAuthenticated) {
      config.headers.Authorization = "user";
    }
    return config;
  });
  
  export default instance;