import { Container, Row, Col } from 'react-bootstrap';
import { ProductsList } from '@components/.';
import { Pagelayout } from '@containers/.';
import { SIGNATURE_WIGS, request } from '@lib/.';

export default function SignatureWigs({ signatureWigs }) {
    const { allProducts } = signatureWigs;
    return (
        <Pagelayout title='Signature-style-wigs'>
            <Container fluid>
                <Row>
                    <Col lg={12} xs={12} className='py-3'>
                        <h3>Signature Wigs are ready for Grabs, Order now!</h3>
                        <p>
                            Do you want one of the wigs seen on our Instagram
                            page? This collection is for you! We&#39;ve added
                            our popular wigs to this collection!
                        </p>
                        <p>
                            *all wigs in this collection are made to order not
                            ready to ship*
                        </p>
                    </Col>
                    <Col lg={12} xs={12}>
                        <ProductsList products={allProducts} />
                    </Col>
                </Row>
                <style jsx>{`
                    h3 {
                        font-size: 24px;
                        margin-bottom: 15px;
                        font-weight: bold;
                    }
                    p {
                        font-size: 18px;
                        margin-bottom: 5px;
                    }
                    h3,
                    p {
                        text-align: center;
                    }
                `}</style>
            </Container>
        </Pagelayout>
    );
}

export async function getStaticProps() {
    const graphqlRequest = await request({
        query: SIGNATURE_WIGS,
    });

    return {
        props: {
            signatureWigs: graphqlRequest,
        },
    };
}
