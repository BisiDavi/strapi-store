import useLocalStorage from '@hooks/useLocalStorage';

export function checkExpiryTime() {
    const { setStorage, getStorage } = useLocalStorage();
    let start = Date.now();

    function setStartTime() {
        return setStorage('startTime', start);
    }

    function checkTime(time): number {
        const tokenSetTime = Number(getStorage('startTime'));
        console.log('tokenSetTime', tokenSetTime);
        const secondsSpent = Math.floor((Date.now() - tokenSetTime) / 1000);
        const duration = time - secondsSpent;
        return duration;
    }

    return {
        setStartTime,
        checkTime,
    };
}
