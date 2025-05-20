import axios from "axios";

export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com/"
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
