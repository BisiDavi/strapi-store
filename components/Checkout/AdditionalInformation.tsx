import { useRedux } from '@hooks/.';
import { Form } from 'react-bootstrap';
import { AdditionalInformationAction } from '@store/actions/AdditionalInformationAction';
import styles from '@styles/checkout.module.css';

export default function AdditionalInformation() {
    const { dispatch, SelectState } = useRedux();
    const { additionalInformation } = SelectState('information');

    const textAreaValue =
        additionalInformation !== null ? additionalInformation : '';

    const textAreaHandler = (e) => {
        dispatch(AdditionalInformationAction(e.target.value));
    };

    return (
        <div className={styles.form}>
            <div className={styles.title}>
                <span>4</span>ADDITIONAL INFORMATION (Optional)
            </div>
            <Form>
                <Form.Group controlId='textarea'>
                    <Form.Label>If you want to say something to us</Form.Label>
                    <Form.Control
                        onChange={textAreaHandler}
                        value={textAreaValue}
                        as='textarea'
                        rows={3}
                    />
                </Form.Group>
            </Form>
        </div>
    );
}
