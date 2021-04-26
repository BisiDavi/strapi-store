import { getSession } from "next-auth/client";

export default async (req, res) => {
    const session = await getSession({ req });

    if (session) {
        res.send({
            content:
                "This is a protected content. You can access this content because you're signed in.",
        });
    } else {
        res.send({
            error:
                "You must be signed in to view the protected content on this page.",
        });
    }
};
