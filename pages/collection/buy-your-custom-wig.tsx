import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { HomepageSlider } from "../../components";
import { SelectWigs } from "../../components/Form";
import { CustomWigButtonGrp } from "../../components/Form/ButtonGrp";
import { Pagelayout } from "../../container";
import customWigs from "../../json/customWigs.json";
import styles from "../../styles/customWig.module.css";

const CustomWig = () => {
    const [formState, setFormState] = useState({
        elasticBand: "",
        babyHair: "",
    });

    useEffect(() => btnStyle(), [formState.elasticBand]);

    const selectHandler = (e) => {
        e.preventDefault();
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
        e.preventDefault();
        setFormState({
            ...formState,
            elasticBand: e.target.value,
        });
    };

    const styleBtn = (id1, id2) => {
        ((document.getElementById(id1).style.backgroundColor = "#f7f7f7"),
        (document.getElementById(id1).style.color = "black"),
        (document.getElementById(id2).style.backgroundColor = "blue")),
            (document.getElementById(id2).style.color = "white");
    };

    const btnStyle = () => {
        formState.elasticBand === "No" && styleBtn("Yes (+$2.50)", "No");

        formState.elasticBand === "Yes (+$2.50)" &&
            styleBtn("No", "Yes (+$2.50)");
    };

    const radioHandler = (e) => {
        setFormState({
            ...formState,
            babyHair: e.target.value,
        });
        console.log("formState", formState);
    };

    console.log("formState", formState);

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
                    value={item}
                    id={`${item} ${form.name}`}
                    onChange={radioHandler}
                    type="radio"
                    label={item}
                />
            ))}
        </Form.Group>
    );

    const fieldType = (input, index) => {
        switch (input.type) {
            case "select":
                return (
                    <SelectWigs
                        wigs={input}
                        key={index}
                        selectHandler={selectHandler}
                    />
                );
            case "button":
                return (
                    <CustomWigButtonGrp
                        data={input}
                        key={index}
                        inputHandler={inputHandler}
                    />
                );
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
                <Row className={`{styles.row} px-3`} sm={12} lg={12}>
                    <div className="text">
                        <h4>Build a Custom Wig</h4>
                        <p>$ 160</p>
                        <h5>Tax included.Shipping calculated at checkout</h5>
                    </div>
                </Row>
                <Row className={styles.row}>
                    <Col lg={3} sm={12}>
                        <span className="order-control my-3 p-2">
                            <Form
                                onSubmit={sumbmitHandler}
                                className={styles.form}
                            >
                                {displayWigDropdown()}
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
