import axios from "axios";

export const WP_BaseHttp = axios.create({
  baseURL: process.env.WP_HTTP_BASE_ADDRESS,
});

export const WP_RestHttp = axios.create({
  baseURL: process.env.WP_HTTP_REST_ADDRESS,
});
