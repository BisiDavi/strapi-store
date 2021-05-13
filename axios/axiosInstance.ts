import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    },
});
