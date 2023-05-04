import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDhkNjljMjFhOTIxMTY0MjhiMmUwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzA5NTQ5NiwiZXhwIjoxNjgzMzU0Njk2fQ.9-nZJm3D82dbLMWuxM5bqfKF4pysSZSawIxxWtjG0ng";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
