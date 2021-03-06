import { useEffect, useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { HomepageSlider } from '@components/.';
import { SelectWigs, WigCheckbox } from '@components/Form';
import { CustomWigButtonGrp } from '@components/Form/ButtonGrp';
import { Pagelayout } from '@containers/.';
import customWigs from '@json/customWigs.json';
import { sumTotal } from '@utils/.';
import styles from '@styles/customWig.module.css';

export default function CustomWig() {
    const [formState, setFormState] = useState({
        elasticBand: '',
        babyHair: '',
    });

    useEffect(() => {
        function btnStyle() {
            formState.elasticBand === 'No' && styleBtn('Yes (+$2.50)', 'No');

            formState.elasticBand === 'Yes (+$2.50)' &&
                styleBtn('No', 'Yes (+$2.50)');
        }
    }, [formState.elasticBand]);

    const selectHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const sumbmitHandler = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formState));
    };

    const inputHandler = (e) => {
        setFormState({
            ...formState,
            elasticBand: e.target.value,
        });
    };

    const styleBtn = (id1, id2) => {
        ((document.getElementById(id1).style.backgroundColor = '#f7f7f7'),
        (document.getElementById(id1).style.color = 'black'),
        (document.getElementById(id2).style.backgroundColor = 'blue')),
            (document.getElementById(id2).style.color = 'white');
    };

    const radioHandler = (e) => {
        setFormState({
            ...formState,
            babyHair: e.target.value,
        });
    };

    console.log('formState', formState);

    console.log('total', sumTotal(formState));

    const fieldType = (input, index) => {
        switch (input.type) {
            case 'select':
                return (
                    <SelectWigs
                        wigs={input}
                        key={index}
                        selectHandler={selectHandler}
                    />
                );
            case 'button':
                return (
                    <CustomWigButtonGrp
                        data={input}
                        key={index}
                        inputHandler={inputHandler}
                    />
                );
            case 'checkbox':
                return (
                    <WigCheckbox
                        key={index}
                        form={input}
                        radioHandler={radioHandler}
                    />
                );
            default:
                return null;
        }
    };

    const displayWigDropdown = () => {
        return customWigs.map((wig, index) => fieldType(wig, index));
    };

    return (
        <Pagelayout title='Buy your custom wig'>
            <HomepageSlider />
            <Container className='py-5'>
                <Row className={`{styles.row} px-3`} sm={12} lg={12}>
                    <div className='text'>
                        <h4>Build a Custom Wig</h4>
                        <p>$ 160</p>
                        <h5>Tax included.Shipping calculated at checkout</h5>
                    </div>
                </Row>
                <Row className={styles.row}>
                    <Col lg={4} sm={12}>
                        <span className='order-control my-3 p-2'>
                            <Form
                                onSubmit={sumbmitHandler}
                                className={styles.form}
                            >
                                {displayWigDropdown()}
                                {sumTotal(formState) !== 0 ? (
                                    <div className={styles.selection}>
                                        <h6>
                                            Selection will add{' '}
                                            <span>$ {sumTotal(formState)}</span>
                                            to the price
                                        </h6>
                                    </div>
                                ) : null}
                                <button className={styles.addToCart}>
                                    Add to Cart
                                </button>
                            </Form>
                        </span>
                    </Col>
                    <Col lg={8} sm={12}>
                        <h3>Build your own custom unit!</h3>
                        <h6>
                            Any questions or concerns, please contact us via
                            <a href='mailto:info@jenjensluxurywigs.com'>
                                info@jenjensluxurywigs.com
                            </a>
                        </h6>

                        <h6>
                            Please carefully select everything you want included
                            in your custom order!
                        </h6>
                        <p>Ensure to choose correct cap size!</p>
                        <h6>
                            Ready Shipping Policy for custom order shipping
                            time!
                        </h6>
                    </Col>
                </Row>
                <style jsx>
                    {`
                        .text p {
                            font-size: 24px;
                            font-weight: bold;
                        }
                        @media (max-width: 500px) {
                            .text p {
                                font-size: 18px;
                            }
                        }
                    `}
                </style>
            </Container>
        </Pagelayout>
    );
}
