import { axiosInstance } from '../axios/axiosInstance';

export async function dbSaveInstagramToken(data) {
    await axiosInstance
        .post('/instagram-token-db', data)
        .then((response) => {
            console.log('response', response.data);
        })
        .catch((error) => console.error('error', error));
}

export async function getInstagramToken() {
    await axiosInstance
        .get('/instagram-token-db')
        .then((response) => {
            console.log('response', response.data);
        })
        .catch((error) => console.error('error', error));
}
