import { Alert } from 'react-bootstrap';

function checkError(signIn) {
    if (signIn.includes('error') && signIn.includes('=Signin')) {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (signIn.includes('error') && signIn.includes('=OAuthSignin')) {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (signIn.includes('error') && signIn.includes('=OAuthCallback')) {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (
        signIn.includes('error') &&
        signIn.includes('=OAuthCreateAccount')
    ) {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (
        signIn.includes('error') &&
        signIn.includes('=EmailCreateAccount')
    ) {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (signIn.includes('error') && signIn.includes('=Callback')) {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (
        signIn.includes('error') &&
        signIn.includes('=OAuthAccountNotLinked')
    ) {
        return 'Oops, an error just occurred,To confirm your identity, sign in with the same account you used originally or try the email option.';
    } else if (signIn.includes('error') && signIn.includes('=EmailSignin')) {
        return 'Oops, an error just occurred,Check your email address or try the email option.';
    } else if (
        signIn.includes('error') &&
        signIn.includes('=CredentialsSignin')
    ) {
        return 'Oops, an error just occurred,Sign in failed. Check the details you provided are correct or try the email option.';
    } else {
        return 'Oops, an error just occurred,Unable to sign in or try the email option.';
    }
}

export default function DisplayError({ signinError }) {
    return <Alert variant='danger'>{checkError(signinError)}</Alert>;
}
