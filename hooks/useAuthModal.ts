import React, { useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useModal } from '.';

const useAuthModal = () => {
    const { modal, displayModal } = useModal();
    const [session, loading] = useSession();

    useEffect(() => {
        session === null || session === undefined
            ? displayModal(true)
            : displayModal(false);
    }, [session]);

    return {
        modal,
        loading,
        displayModal,
    };
};

export default useAuthModal;
