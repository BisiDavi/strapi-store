import qs from 'qs';
import axios from 'axios';

export default async function AccessInstagramHandler(req, res) {
    const { authCode } = req.query;
    const shortTokenURL = `${process.env.NEXT_PUBLIC_TOKEN_BASE_URL}/oauth/access_token`;
    const longTokenURL = 'https://graph.instagram.com/access_token';

    const data = {
        client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: 'https://www.jenjensluxury.com/',
        code: authCode,
    };

    if (req.method === 'POST') {
        axios
            .post(shortTokenURL, qs.stringify(data), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => console.log('error', error));
    }
    if (req.method === 'GET') {
        axios
            .get(longTokenURL, {
                params: {
                    grant_type: 'ig_exchange_token',
                    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
                    access_token: authCode,
                },
            })
            .then((response) => {
                res.status(200).json(response.data);
            })
            .catch((error) => console.error('error longToken', error));
    }
}
