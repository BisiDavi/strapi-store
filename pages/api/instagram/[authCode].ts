import qs from 'qs';
import axios from 'axios';

const AccessInstagramHandler = async (req, res) => {
    const { authCode } = req.query;
    console.log('authCode', authCode);
    const shortTokenURL = `${process.env.NEXT_PUBLIC_TOKEN_BASE_URL}/oauth/access_token`;
    const longTokenURL = 'https://graph.instagram.com/access_token';

    const data = {
        client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: 'https://www.jenjensluxury.com/',
        code: authCode,
    };

    const longTokenData = {
        grant_type: 'ig_exchange_token',
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        access_token: authCode,
    };
    if (req.method === 'POST') {
        axios
            .post(shortTokenURL, qs.stringify(data), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            .then((response) => {
                console.log('response AccessInstagramHandler', response.data);
                res.status(200).json(response.data);
            })
            .catch((error) => console.log('error', error));
    }
    if (req.method === 'GET') {
        axios
            .get(longTokenURL, qs.stringify(longTokenData))
            .then((response) => {
                console.log('response longToken ', response.data);
                res.status(200).json(response.data);
            })
            .catch((error) => console.error('error longToken', error));
    }
};

export default AccessInstagramHandler;
