import axios from "axios";

export const Request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})