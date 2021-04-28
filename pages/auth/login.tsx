import { providers, signin, getSession, csrfToken } from "next-auth";

export default function SigIn({ providers, csrfToken }) {
    return <div></div>;
}

// SignIn.getInitialProps = async (context) => {
//     const { req, res } = context;

//     const session = await getSession({ req });

//     if(session && res && session.accessToken){
//         res.writeHead(302,{
//             location: '/'
//         })
//         res.end()
//         return;
//     }
//     return{
//         session:undefined,
//         providers: await providers(context)
//     }
// };
