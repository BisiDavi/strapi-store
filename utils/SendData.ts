import { axiosInstance } from '../axios/axiosInstance';

const SendData = async (link, data, router, route) => {
    await axiosInstance
        .post(link, { body: JSON.stringify(data) })
        .then((res) => {
            if (res.status === 200) {
                console.log('response received');
                router.push(route);
            }
        })
        .catch((err) => console.error(err));
};

export default SendData;
