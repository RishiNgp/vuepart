import axios from "axios";

export const HTTP = axios.create({
  baseURL: `http://127.0.0.1:3333`,
  headers: {
    Authorization:
      "Bearer ",
    appkey: "BNBtpC4R3HYHqxwbYjpe6t1lCAo6Dso3",
  },
});