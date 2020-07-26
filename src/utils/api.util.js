import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_API_VER}`,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  responseType: "json",
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
