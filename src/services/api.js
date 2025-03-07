// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
    baseURL: API_URL,
});

export const login = (email, contrasena) => api.post('/auth/login', { email, contrasena });