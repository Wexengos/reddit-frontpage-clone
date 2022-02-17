import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.mocky.io/v2/5a6bc16631000078341b8b77",
  headers: {
    "content-type": "application/json",
  },
});
