import { Button } from 'react-bootstrap';
import styles from '../../styles/Mailbutton.module.css';

interface MailButtonProps {
    showMail: () => void;
}

export default function MailButton({ showMail }: MailButtonProps): JSX.Element {
    return (
        <div className={styles.mailButton}>
            <div className={styles.btnStyle}>
                <Button
                    variant='dark'
                    className={styles.button}
                    onClick={showMail}
                >
                    <div className={styles.text}>JOIN OUR MAIL LIST</div>
                </Button>
            </div>
        </div>
    );
}
