import axios from "axios";
import useAuthStore from "../stores/auth";

const api = axios.create({ baseURL: "http://localhost:8000" });

api.interceptors.request.use(
  (requisicao) => {
    const { token } = useAuthStore.getState();

    if (!requisicao.headers.Authorization && token) {
      requisicao.headers.Authorization = `Bearer ${token}`;
    }

    return requisicao;
  },
  (erro) => Promise.reject(erro)
);

export default api;
