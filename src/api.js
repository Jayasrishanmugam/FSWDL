// src/api.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/portfolio";

// Fetch portfolio data
export const getPortfolio = () => axios.get(API_URL);

// Create portfolio
export const createPortfolio = (data) => axios.post(API_URL, data);

// Update portfolio
export const updatePortfolio = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

// Delete portfolio
export const deletePortfolio = (id) => axios.delete(`${API_URL}/${id}`);
