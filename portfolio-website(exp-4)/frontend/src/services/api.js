import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

// Endpoints
export const getBio = () => API.get("/bio");
export const getSkills = () => API.get("/skills");
export const getProjects = () => API.get("/projects");
export const getContacts = () => API.get("/contacts");

export const createContact = (data) => API.post("/contacts", data);
