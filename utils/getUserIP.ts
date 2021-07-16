export default function getUserIP() {
    return fetch(
        `https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IP_KEY}`,
    )
        .then((response) => response.json())
}
