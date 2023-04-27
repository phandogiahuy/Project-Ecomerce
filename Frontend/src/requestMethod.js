import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDhkNjljMjFhOTIxMTY0MjhiMmUwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjQ5NjA4OSwiZXhwIjoxNjgyNzU1Mjg5fQ.w1qJ_N9wRv-RroAVzNuPFgXfFSsoPYs0Ac1wWFuF4F8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN} ` },
});
