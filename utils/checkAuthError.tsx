import { Alert } from 'react-bootstrap';

function checkError(error) {
    if (error === 'Signin') {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (error === 'OAuthSignin') {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (error === 'OAuthCallback') {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (error === 'OAuthCreateAccount') {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (error === 'EmailCreateAccount') {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (error === 'Callback') {
        return 'Oops, an error just occurred, or try the email option.';
    } else if (error === 'OAuthAccountNotLinked') {
        return 'Oops, an error just occurred,To confirm your identity, sign in with the same account you used originally or try the email option.';
    } else if (error === 'EmailSignin') {
        return 'Oops, an error just occurred,Check your email address or try the email option.';
    } else if (error === 'CredentialsSignin') {
        return 'Oops, an error just occurred,Sign in failed. Check the details you provided are correct or try the email option.';
    } else {
        return 'Oops, an error just occurred,Unable to sign in or try the email option.';
    }
}

export default function DisplayError({ signinError }) {
    return <Alert variant='danger'>{checkError(signinError)}</Alert>;
}
