import axios from "axios";

const AccessInstagramHandler = async (req, res) => {
    const { authCode } = req.query;
    const url = `${process.env.NEXT_PUBLIC_TOKEN_BASE_URL}/oauth/access_token/client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID}/client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}/grant_type=authorization_code/redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}/code=${authCode}`;

    if (req.method === "POST") {
        axios.post(url,{}).then((response) => console.log("response", response))
        .catch((error) => console.log("error", error));
    }
};

export default AccessInstagramHandler;
