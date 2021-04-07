import axios from "axios";

export const GetInstagramAuthCode = () => {
    const authCode = window.location.search.split("=")[1];
    return authCode;
};

export const GetInstagramShortToken = ({authCode}) =>{
    axios.post(`https://api.instagram.com/oauth/access_token/client_id=710736562936672/client_secret=27cf9ab42fac180bf84d815fd337e46a/grant_type=authorization_code/redirect_uri=https://www.jenjensluxury.com/code=${authCode}`)
}