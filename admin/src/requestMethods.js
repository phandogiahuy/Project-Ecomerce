import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDhkNjljMjFhOTIxMTY0MjhiMmUwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzI2MzUzMywiZXhwIjoxNjgzNTIyNzMzfQ.TpVT5YFWe00NfnPWcCMGGACINx6bs4FlU515gJu-0eU";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
