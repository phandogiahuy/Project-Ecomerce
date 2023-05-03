import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDhkNjljMjFhOTIxMTY0MjhiMmUwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzA0NTE4OCwiZXhwIjoxNjgzMzA0Mzg4fQ.gCNgxvAXKvHCR2IMOQRvhzJ9S66dT2HPVtkH1xK81tM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN} ` },
});
