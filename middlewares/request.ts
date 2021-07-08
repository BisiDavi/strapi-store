import { axiosInstance } from '../axios/axiosInstance';

export async function dbSaveInstagramToken(data) {
    await axiosInstance
        .post('/instagram-token-db', data)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}

export async function getInstagramToken() {
    await axiosInstance
        .get('/instagram-token-db')
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
}
