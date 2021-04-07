const AccessInstagramHandler = async (req, res) => {
    const url = `${process.env.NEXT_PUBLIC_TOKEN_BASE_URL}/oauth/access_token/client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID}/client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}/grant_type=authorization_code/redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}/code=${req.query.authCode}`;

    if(req.method === 'POST'){
        
    }

};

export default AccessInstagramHandler;
