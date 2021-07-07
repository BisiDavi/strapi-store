import axios from 'axios';

export default async function GetRefreshToken(req, res) {
    const { accessToken } = req.query;
    console.log('accessToken', accessToken);
    const url = 'https://graph.instagram.com/refresh_access_token';

    if (req.method === 'GET') {
        axios
            .get(url, {
                params: {
                    grant_type: 'ig_refresh_token',
                    access_token: accessToken,
                },
            })
            .then((response) => {
                console.log('response GetRefreshToken', response.data);
                res.status(200).json(response.data);
            })
            .catch((error) => {
                console.error('error GetRefreshToken', error);
                res.status(500).json(error);
            });
    }
}
