import React from "react";
import { Container, Row } from "react-bootstrap";
import { Pagelayout } from "../../containers";

const Signup = () => {
    return (
        <Pagelayout title="Create New Customer Account">
            <Container className="px-5">
                <Row>
                    <h1>Registration Page</h1>
                </Row>
            </Container>
        </Pagelayout>
    );
};

export default Signup;
