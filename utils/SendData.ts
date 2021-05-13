const SendData = (link, data, router, route) => {
    fetch(`${link}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            if (res.status === 200) {
                console.log('response received');
                router.push(route);
            }
        })
        .catch((err) => console.error(err));
};

export default SendData;
