import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductsList } from '@components/.';
import { Pagelayout } from '@containers/.';
import { READY_TO_SHIP_QUERY, request } from '@lib/.';

export default function ReadyToShip({ shipWigs }) {
    const { allProducts } = shipWigs;
    return (
        <Pagelayout title='Ready To Ship'>
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
                    <Col lg={12} xs={12}>
                        <ProductsList products={allProducts} />
                    </Col>
                </Row>
                <style jsx>
                    {`
                        h3,
                        p {
                            text-align: center;
                            margin: 10px;
                        }
                        h3 {
                            font-weight: bold;
                        }
                    `}
                </style>
            </Container>
        </Pagelayout>
    );
}

export async function getStaticProps() {
    const graphqlRequest = await request({
        query: READY_TO_SHIP_QUERY,
    });

    return {
        props: {
            shipWigs: graphqlRequest,
        },
    };
}
