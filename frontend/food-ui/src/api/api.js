import axios from "axios";

/**
 * User + Restaurant Service
 * PORT 5000
 */
export const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json"
  }
});

/**
 * Order Service
 * PORT 5001
 */
export const orderApi = axios.create({
  baseURL: "http://localhost:5001",
  headers: {
    "Content-Type": "application/json"
  }
});
