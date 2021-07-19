import Image from 'next/image';
import Link from 'next/link';
import { Pagelayout } from '@containers/.';
import {  request, HOMEPAGE_QUERY } from '@lib/.';
import ProductSlider from '@components/Slider/ProductSlider';

export default function Paymentsuccessful({ otherProducts }) {
    const other_Products = otherProducts?.allProducts;
    return (
        <Pagelayout title='Payment-successful'>
            <div className='paymentSuccessful d-flex flex-column container-fluid'>
                <div className='row d-flex mx-auto'>
                    <Image
                        src='/paymentMade.gif'
                        alt='payment successful'
                        height='250px'
                        width='300px'
                    />
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='text-center'>
                            payment successful{' '}
                        </h3>
                        <h5 className='my-2 text-center'>
                            Thanks for shopping with us
                        </h5>
                        <h3 className='text-center mb-5'>
                            To continue {'  '}
                            <Link href='/collection/all'>
                                <a>shopping</a>
                            </Link>
                        </h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 py-3'>
                        <ProductSlider products={other_Products} />
                    </div>
                </div>
                <style jsx>
                    {`
                        .paymentSuccessful {
                            font: normal normal 22px/24px 'Montserrat',
                                sans-serif;
                        }
                        h3 a {
                            color: #ffa6ca;
                            font-weight: bold;
                            text-decoration: underline;
                        }
                    `}
                </style>
            </div>
        </Pagelayout>
    );
}

export async function getStaticProps({ params }) {
    const otherProducts = await request({
        query: HOMEPAGE_QUERY,
        variables: { limit: 20 },
    });

    return {
        props: {
            otherProducts,
        },
    };
}
