import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { HomepageSlider } from "../../components";
import { Pagelayout } from "../../container";
import customWigs from "../../json/customWigs.json";
import styles from "../../styles/customWig.module.css";

const CustomWig = () => {
    const [formState, setFormState] = useState({
        unitType: "",
        circumference: "",
        bundleLength: "",
        texture: "",
        parting: "",
        style: "",
        addBundle: "",
        babyHair: "",
        upgradeClosure: "",
        elasticBand: "",
        RushMyOrder: "",
    });

    const buttonGrp = (input, index) => {
        return (
            <div key={index} className="buttonGroup">
                <p>{input.name} :</p>
                <div className="buttonGrp">
                    <button>Yes</button>
                    <button>No</button>
                </div>
                <style jsx>
                    {`
                        .buttonGroup {
                            display: flex;
                            flex-direction: column;
                            margin: 10px auto;
                        }
                        .buttonGrp button {
                            margin: 0px 10px;
                            padding: 0px 4px;
                            height: 30px;
                        }

                        .buttonGrp {
                            display: flex;
                            align-items: center;
                            padding: 0px 20px;
                            justify-content: space-between;
                        }
                    `}
                </style>
            </div>
        );
    };

    const checkBox = (form, index) => (
        <Form.Group
            key={index}
            className={styles.checkbox}
            controlId={form.name}
        >
            <Form.Label>{form.name} :</Form.Label>
            {form.content.map((item, index) => (
                <Form.Check
                    key={index}
                    name={form.name}
                    id="babyHair"
                    type="checkbox"
                    label={item}
                />
            ))}
        </Form.Group>
    );

    const selectDropdown = (wigs, index) => (
        <Form.Group key={index} controlId={wigs.name}>
            <Form.Label>{wigs.name} :</Form.Label>
            <Form.Control as="select" custom>
                {wigs.content.map((wigOption, index) => (
                    <option key={index} value={wigOption}>
                        {wigOption}
                    </option>
                ))}
            </Form.Control>
        </Form.Group>
    );

    const fieldType = (input, index) => {
        switch (input.type) {
            case "select":
                return selectDropdown(input, index);
            case "button":
                return buttonGrp(input, index);
            case "checkbox":
                return checkBox(input, index);
            default:
                return null;
        }
    };

    const displayWigDropdown = () => {
        return customWigs.map((wig, index) => fieldType(wig, index));
    };

    return (
        <Pagelayout title="Buy your custom wig">
            <HomepageSlider />
            <Container className="py-5">
                <Row className={styles.row}>
                    <Col lg={3} xs={3}>
                        <h4>Build a Custom Wig</h4>
                        <p>$ 160</p>
                        <h5>Tax included.Shipping calculated at checkout</h5>

                        <span className="order-control my-3 p-2">
                            <Form className={styles.form}>
                                {displayWigDropdown()}
                                <button className={styles.addToCart}>
                                    Add to Cart
                                </button>
                            </Form>
                        </span>
                    </Col>
                    <Col lg={8} xs={8}>
                        <h3>Build your own custom unit!</h3>
                        <h6>
                            Any questions or concerns, please contact us via
                            <a href="mailto:info@jenjensluxurywigs.com">
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
            </Container>
        </Pagelayout>
    );
};

export default CustomWig;
