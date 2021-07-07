import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GetInstagramAuthCode } from '@utils/.';
import { checkExpiryTime } from '@utils/checkExpiryTime';
import useLocalStorage from './useLocalStorage';

export default function useInstagram() {
    const [authCode, setAuthCode] = useState(null);
    const [instagramToken, setInstagramToken] = useState({
        shortTokenDetails: null,
        longTokenDetails: null,
    });
    const [lsToken, setLsToken] = useState(null);
    const [instagramMedia, setInstagramMedia] = useState(null);
    const { setStartTime, checkTime } = checkExpiryTime();
    const { setStorage, getStorage } = useLocalStorage();

    async function getShortLivedToken() {
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

    async function getLongLivedToken() {
        await axios
            .get(
                `/api/get-instagram-token/${instagramToken.shortTokenDetails.access_token}`,
            )
            .then((response) => {
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
                `/api/get-instagram-media/${instagramToken.longTokenDetails?.access_token}`,
            )
            .then((response) => {
                setInstagramMedia(response.data);
            })
            .catch((error) => console.error('error', error));
    }

    async function fetchRefreshToken() {
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
            setStartTime();
            getLongLivedToken();
        }
    }, [instagramToken.shortTokenDetails]);

    useEffect(() => {
        instagramToken.longTokenDetails?.access_token &&
            setStorage(
                'instagramToken',
                instagramToken.longTokenDetails?.access_token,
            );

        getInstagramUserMedia();
    }, [instagramToken]);

    useEffect(() => {
        const longLivedTokenLS = getStorage('instagramToken');
        console.log('from storage', longLivedTokenLS);
        if (longLivedTokenLS !== null && longLivedTokenLS !== undefined) {
            setLsToken(longLivedTokenLS);
        }
    }, []);

    useEffect(() => {
        if (lsToken !== null) {
            console.log('longLivedTokenLS', lsToken);
            setInstagramToken({
                ...instagramToken,
                longTokenDetails: lsToken,
            });
						getInstagramUserMedia();
        }
    }, [lsToken]);

    console.log('instagramMedia', instagramMedia);

    useEffect(() => {
        if (instagramToken.longTokenDetails !== null) {
            const expiresIn = Number(
                instagramToken.longTokenDetails.expires_in,
            );
            const duration = checkTime(expiresIn);
            if (duration < 1000) {
                fetchRefreshToken();
            } else {
                console.log('long access token still valid');
            }
        }
    }, []);

    return {
        instagramMedia,
    };
}
