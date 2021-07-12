import  { useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useModal } from '.';

export default function useAuthModal() {
    const { modal, displayModal } = useModal();
    const [session, loading] = useSession();

    useEffect(() => {
        session === null || session === undefined
            ? displayModal(true)
            : displayModal(false);
    }, [session, displayModal]);

    return {
        modal,
        loading,
        displayModal,
    };
}
