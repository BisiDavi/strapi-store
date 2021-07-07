import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GetInstagramAuthCode } from '@utils/.';

export default function useInstagram() {
    const [authCode, setAuthCode] = useState(null);
    const [instagramToken, setInstagramToken] = useState({
        shortTokenDetails: null,
        longTokenDetails: null,
    });
    const [instagramMedia, setInstagramMedia] = useState(null);

    console.log('authCode', authCode);

    async function getShortLivedToken() {
        await axios
            .post(`/api/instagram/${authCode}`)
            .then((response) => {
                console.log('response getShortLivedToken', response.data);
                setInstagramToken({
                    ...instagramToken,
                    shortTokenDetails: response.data,
                });
            })
            .catch((error) => console.error('error', error));
    }

    async function getLongLivedToken() {
        console.log(
            'instagramToken?.shortTokenDetails?.access_token',
            instagramToken?.shortTokenDetails?.access_token,
        );
        await axios
            .get(
                `/api/instagram/${instagramToken.shortTokenDetails.access_token}`,
            )
            .then((response) => {
                console.log('response getLongLivedToken', response.data);
                setInstagramToken({
                    ...instagramToken,
                    longTokenDetails: response.data,
                });
            })
            .catch((error) => console.error('error', error));
    }

    async function getInstagramUserMedia() {
        await axios
            .get(
                `/api/get-instagram-media/${instagramToken.longTokenDetails.access_token}`,
            )
            .then((response) => {
                console.log('response getInstagramUserMedia', response.data);
                setInstagramMedia(response.data);
            })
            .catch((error) => console.error('error', error));
    }

    console.log('longTokenDetails', instagramToken);

    console.log('instagramMedia', instagramMedia);

    useEffect(() => {
        if (window.location.search.includes('code')) {
            const authCode = GetInstagramAuthCode();
            setAuthCode(authCode);
        }
    }, []);

    useEffect(() => {
        if (authCode !== null) {
            getShortLivedToken();
        }
    }, [authCode]);

    useEffect(() => {
        if (instagramToken.shortTokenDetails !== null) {
            getLongLivedToken();
        }
    }, [instagramToken.shortTokenDetails]);

    useEffect(() => {
        if (instagramToken.longTokenDetails !== null) {
            getInstagramUserMedia();
        }
    }, [instagramToken.longTokenDetails]);

    return {
        instagramMedia,
    };
}
