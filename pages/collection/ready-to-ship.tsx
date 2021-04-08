import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Pagelayout } from "../../container";
import { READY_TO_SHIP_QUERY, request } from "../../lib";

const ReadyToShip = () => {
    return (
        <Pagelayout title="Ready To Ship">
            <Container fluid>
                <Row>
                    <Col lg={12} xs={12}>
                        <h3>Order for Ready to Ship Wigs</h3>
                        <p>
                            This wig units are in store and are available to be
                            shipped once purchased!
                        </p>
                        <p>
                            Please ensure you read wigs description, to order
                            rightly.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Pagelayout>
    );
};

export async function getStaticProps() {
    const graphqlRequest = await request({
        query: READY_TO_SHIP_QUERY,
        variables: { limit: 4 },
    });

    return {
        props: {
            shipWigs: graphqlRequest,
        },
    };
}

export default ReadyToShip;
