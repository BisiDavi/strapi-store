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

    const buttonGrp = (input, index) => {
        return (
            <div key={index} className="buttonGroup">
                <p>{input.name}</p>
                <div className="buttonGrp">
                    <Button text="Yes" />
                    <Button text="No" />
                </div>
            </div>
        );
    };

    const checkBox = (form) => (
        <Form.Group controlId={form.name}>
            {form.content.map((item, index) => (
                <Form.Check key={index} type="checkbox" label={item} />
            ))}
        </Form.Group>
    );

    const selectDropdown = (wigs, index) => (
        <Form.Group key={index} controlId={wigs.name}>
            <Form.Label>{wigs.name}</Form.Label>
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
                return checkBox(input);
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
            <Container>
                <Row>
                    <Col lg={3} xs={3}>
                        <h4>Build a Custom Wig</h4>
                        <p>$ 160</p>
                        <p>Tax included.Shipping calculated at checkout</p>

                        <span className="order-control my-3 p-2">
                            <Form>
                                {displayWigDropdown()}
                                <Button bgColor="black" text="Add to Cart" />
                            </Form>
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
