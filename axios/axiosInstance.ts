import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'content-type': 'application/json',
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

export const axiosInstanceFlutterwave = axios.create({
    baseURL: 'https://api.flutterwave.com/v3/',
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLUTTERWAVE_SECRET_KEY}`,
        'content-type': 'application/json',
    },
});
