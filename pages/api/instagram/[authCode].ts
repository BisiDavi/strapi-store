import nc from 'next-connect';
import axios from 'axios';

const AccessInstagramHandler = async (req, res) => {
    const { authCode } = req.query;
    console.log('authCode', authCode);
    const url = `${process.env.NEXT_PUBLIC_TOKEN_BASE_URL}/oauth/access_token`;

    const data = {
        client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: 'https://www.jenjensluxury.com/',
        code: authCode,
    };
    if (req.method === 'POST') {
        axios
            .post(url, JSON.stringify(data))
            .then((response) => {
                console.log('response AccessInstagramHandler', response.data);
                res.status(200).json(response.data);
            })
            .catch((error) => console.log('error', error));
    }
};

export default AccessInstagramHandler;
