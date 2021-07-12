import React, { useState } from 'react';

export default function useModal() {
    const [modal, setModal] = useState(false);
    const displayModal = (modalState) => setModal(modalState);

    return {
        modal,
        displayModal,
    };
}
