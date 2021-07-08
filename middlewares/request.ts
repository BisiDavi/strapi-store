import { axiosInstance } from '../axios/axiosInstance';

export async function dbSaveInstagramToken(data) {
    return await axiosInstance
        .post('/instagram-token-db', data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}

export async function getInstagramToken() {
    return await axiosInstance.get('/instagram-token-db');
}
