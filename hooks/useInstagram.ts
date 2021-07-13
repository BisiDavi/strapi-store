import { useState, useEffect } from 'react';
import axios from 'axios';
import { GetInstagramAuthCode } from '@utils/.';
import { checkExpiryTime } from '@utils/checkExpiryTime';
import { dbSaveInstagramToken, getInstagramToken } from '@middlewares/request';

export default function useInstagram() {
    const [authCode, setAuthCode] = useState(null);
    const [instagramToken, setInstagramToken] = useState({
        shortTokenDetails: null,
        longTokenDetails: null,
    });
    const [instagramMedia, setInstagramMedia] = useState(null);
    const { setStartTime, checkTime } = checkExpiryTime();

    async function getInstagramUserMedia(token) {
        await axios
            .get(`/api/get-instagram-media/${token}`)
            .then((response) => {
                setInstagramMedia(response.data);
            })
            .catch((error) => console.error('error', error));
    }

    useEffect(() => {
        if (window.location.search.includes('code')) {
            const authCode = GetInstagramAuthCode();
            setAuthCode(authCode);
        }
    }, []);

    useEffect(() => {
        async function getShortToken() {
            await axios
                .post(`/api/get-instagram-token/${authCode}`)
                .then((response) => {
                    setInstagramToken({
                        ...instagramToken,
                        shortTokenDetails: response.data,
                    });
                })
                .catch((error) => console.error('error', error));
        }
        authCode !== null && getShortToken();
    }, [instagramToken, authCode]);

    useEffect(() => {
        async function getLongTimeCode() {
            await axios
                .get(
                    `/api/get-instagram-token/${instagramToken.shortTokenDetails.access_token}`,
                )
                .then((response) => {
                    setInstagramToken({
                        ...instagramToken,
                        longTokenDetails: response.data,
                    });
                    dbSaveInstagramToken(JSON.stringify(response.data));
                })
                .catch((error) => console.error('error', error));
        }
        if (instagramToken.shortTokenDetails !== null) {
            setStartTime();
            getLongTimeCode();
        }
    }, [instagramToken, setStartTime]);

    useEffect(() => {
        if (instagramToken.longTokenDetails !== null) {
            getInstagramUserMedia(
                instagramToken.longTokenDetails?.access_token,
            );
        }
    }, [instagramToken]);

    useEffect(() => {
        async function getToken() {
            return await getInstagramToken().then((response) => {
                const responseArray = response.data.data;
                const getLastItem = responseArray[responseArray.length - 1];
                getInstagramUserMedia(getLastItem.access_token);
            });
        }
        getToken();
    }, []);

    useEffect(() => {
        async function refreshToken() {
            await axios
                .get(
                    `/api/get-refresh-token/${instagramToken.longTokenDetails.access_token}`,
                )
                .then((response) => {
                    setInstagramToken({
                        ...instagramToken,
                        longTokenDetails: response.data,
                    });
                })
                .catch((error) => console.error('error', error));
        }

        if (instagramToken.longTokenDetails !== null) {
            const expiresIn = Number(
                instagramToken.longTokenDetails.expires_in,
            );
            const duration = checkTime(expiresIn);

            if (duration < 1000) {
                refreshToken();
            } else {
                console.log('long access token still valid');
            }
        }
    }, [checkTime, instagramToken]);

    return {
        instagramMedia,
    };
}
