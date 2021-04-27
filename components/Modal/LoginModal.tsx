import React from "react";
import { PageModal } from ".";
import styles from "../../styles/loginModal.module.css";

const LoginModal = ({ show, onHide }) => {
    return (
        <PageModal
            onHide={onHide}
            show={show}
            modalstyle={styles.loginModal}
            header="Sign up to proceed with Order"
        >
            <div className="loginModal"></div>
        </PageModal>
    );
};

export default LoginModal;
