import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
    },
});

export const axiosInstagramGraphInstance = axios.create({
    baseURL: 'https://graph.instagram.com',
    headers: {
        'content-type': 'application/json',
    },
});

export const axiosInstagramAPIInstance = axios.create({
    baseURL: 'https://api.instagram.com',
    headers: {
        'content-type': 'application/json',
    },
});
