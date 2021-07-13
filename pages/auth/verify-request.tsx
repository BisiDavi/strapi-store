import { useState, useEffect } from 'react';
import Pagelayout from '@containers/Pagelayout';
import useLocalStorage from '@hooks/useLocalStorage';

export default function VerifyRequest() {
    const [userEmail, setUserEmail] = useState(null);
    const { getStorage } = useLocalStorage();

    useEffect(() => {
        const email = getStorage('email');
        setUserEmail(email);
    }, [getStorage]);

    return (
        <Pagelayout title='Verify-request'>
            <div className='verifyRequest'>
                {userEmail && (
                    <>
                        <p>
                            Hello we sent you a verification email at{' '}
                            {userEmail}{' '}
                        </p>
                        <p>Please check your mail, thanks.</p>
                    </>
                )}
                <style jsx>{`
                    .verifyRequest {
                        display: flex;
                        margin: auto;
                        height: 50vh;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                    .verifyRequest p {
                        font: bold normal 25px/28px 'Montserrat', sans-serif;
                    }
                `}</style>
            </div>
        </Pagelayout>
    );
}
