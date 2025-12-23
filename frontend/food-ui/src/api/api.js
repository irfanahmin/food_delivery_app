import axios from "axios";

/**
 * User + Restaurant Service (Render)
 */
export const api = axios.create({
  baseURL: "https://backend-user-service-xd8r.onrender.com",
  headers: {
    "Content-Type": "application/json"
  }
});

/**
 * Order Service (Render)
 */
export const orderApi = axios.create({
  baseURL: "https://backend-order-service.onrender.com",
  headers: {
    "Content-Type": "application/json"
  }
});
