import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button, HomepageSlider } from "../../components";
import { Pagelayout } from "../../container";

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
                            <Form></Form>
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
