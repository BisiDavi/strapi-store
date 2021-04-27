import React, { useState } from "react";

const useModal = () => {
    const [modal, setModal] = useState(false);
    const displayModal = (modalState) => setModal(modalState);

    return {
        modal,
        displayModal,
    };
};

export default useModal;
