import axios, { type AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export interface RefreshResponce {
  message: string;
  success: boolean;
}

let refreshPromise: Promise<AxiosResponse<RefreshResponce>> | null = null;

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    console.log(error.response);
    if (!error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;
    if (originalRequest.url.includes("/auth/refresh")) {
      return Promise.reject(error);
    }

    if (!refreshPromise) {
      refreshPromise = api
        .post("/auth/refresh")
        .finally(() => (refreshPromise = null));
    }

    try {
      await refreshPromise;
      return api(originalRequest);
    } catch (error) {
      window.location.href = "/login";
      return Promise.reject(error);
    }
  },
);

// Promise.all
// Promise.allSettled
// Promise.race

// const [contacts, user] = await Promise.all([getContacts, getCurrentUser]);
// const error = await Promise.all([getContacts, getCurrentUser]);
