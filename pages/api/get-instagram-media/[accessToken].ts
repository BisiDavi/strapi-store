import axios from 'axios';

export default async function GetInstagramMediaHandler(req, res) {
    const { accessToken } = req.query;
    console.log('accessToken', accessToken);
    const url = 'https://graph.instagram.com/me/media';

    if (req.method === 'GET') {
        axios
            .get(url, {
                params: {
                    fields: 'id,media_type,media_url,thumbnail_url,permalink',
                    access_token: accessToken,
                },
            })
            .then((response) => {
                console.log('response GetInstagramMediaHandler', response.data);
                res.status(200).json(response.data);
            })
            .catch((error) => {
                console.error('error GetInstagramMediaHandler', error);
                res.status(500).json(error);
            });
    }
}
