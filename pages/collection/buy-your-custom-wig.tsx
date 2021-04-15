import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button, HomepageSlider } from "../../components";
import { Pagelayout } from "../../container";
import customWigs from "../../json/customWigs.json";

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
    const selectDropdown = () =>
        customWigs.map((customWig) => (
            <Form.Group controlId={customWig.name}>
                <Form.Label>{customWig.name}</Form.Label>
                <Form.Control as="select" custom>
                    {customWig.content.map((wig) => (
                        <option value={wig}>{wig}</option>
                    ))}
                </Form.Control>
            </Form.Group>
        ));

    const buttonGrp = () => {
        return (
            <div className="buttonGrp">
                <Button text="Yes" />
                <Button text="No" />
            </div>
        );
    };

    const inputType = (type) => {
        switch (type) {
            case "select":
                return selectDropdown();
            case "boolean":
                return buttonGrp();
            default:
                break;
        }
    };
    return (
        <Pagelayout title="Ready To Ship">
            <HomepageSlider />
            <Container>
                <Row>
                    <Col lg={3} xs={3}>
                        <h4>Build a Custom Wig</h4>
                        <p>$ 160</p>
                        <p>Tax included.Shipping calculated at checkout</p>

                        <span className="order-control my-3 p-2">
                            <Form>
                                {customWigs.map((wig) => inputType(wig.type))}
                            </Form>
                            <Button bgColor="black" text="Add to Cart" />
                        </span>
                    </Col>
                    <Col lg={9} xs={9}>
                        <p>Build your own custom unit!</p>
                        <p>
                            Any questions or concerns, please contact us via
                            info@jenjensluxurywigs.com
                        </p>

                        <h4>
                            Please carefully select everything you want included
                            in your custom order!
                        </h4>
                        <p>Ensure to choose correct cap size!</p>
                        <h4>
                            Ready Shipping Policy for custom order shipping
                            time!
                        </h4>
                    </Col>
                </Row>
            </Container>
        </Pagelayout>
    );
};

export default CustomWig;
