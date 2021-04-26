import { useSession, getSession } from "next-auth/client";

export default function ServerRenderedPage() {
    const [session, loading] = useSession();

    return (
        <div>
            <h1>Server side Rendering</h1>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context),
        },
    };
}
