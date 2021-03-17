import React, { FC } from "react";
import { Modal } from "react-bootstrap";
import styles from "./Pagemodal.module.css";

interface PageModalProps {
    show: boolean;
    onHide: () => void;
    modalstyle: string;
    header: string;
}

const PageModal: FC<PageModalProps> = (props): JSX.Element => {
    return (
        <Modal
            size="lg"
            aria-labelledby="pagemodal"
            {...props}
            centered
            contentClassName={props.modalstyle}
        >
            <Modal.Header className={styles.modalHeader} closeButton>
                <h1 className="header">{props.header}</h1>
            </Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>
            <style jsx>{`
                h1.header {
                    color: rgb(255, 166, 202);
                    font-family: Anton, Helvetica, Arial, "Sans Serif", serif;
                    display: flex;
                    justify-content: center;
                    text-align: center;
                    margin: auto;
                    font-weight: 1000;
                }
            `}</style>
        </Modal>
    );
};

export default PageModal;
