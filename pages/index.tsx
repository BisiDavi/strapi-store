import dynamic from 'next/dynamic';
import { Pagelayout } from '@containers/.';
import { useInstagram } from '@hooks/.';
import {
    HomepageSlider,
    Collections,
    ProductsList,
    Newsletter,
} from '@components/.';
import { HOMEPAGE_QUERY, HOMEPAGE_SEO_QUERY, request } from '@lib/.';
import { Viewmore } from '@components/Button';
import { HomeProps } from '../types';

const InstaSlider = dynamic(() => import('../components/Slider/instaSlider'));

export default function Home({
    productData,
    seoData,
    isConnected,
}: HomeProps): JSX.Element {
    const { allProducts } = productData;
    const { instagramMedia } = useInstagram();


    isConnected && console.log('You are connected to mongoDB!');

    return (
        <>
            <Pagelayout metaTags={seoData} title='Welcome'>
                <div className='homepage position-relative'>
                    <HomepageSlider />
                    <Collections />
                    <ProductsList products={allProducts} />
                    <Viewmore />
                    <Newsletter />
                    {instagramMedia !== null ? (
                        <InstaSlider InstagramMedia={instagramMedia.data} />
                    ) : (
                        'loading'
                    )}
                </div>
            </Pagelayout>
        </>
    );
}

export async function getServerSideProps() {
    const graphqlRequest = await request({
        query: HOMEPAGE_QUERY,
        variables: { limit: 12 },
    });
    const seoRequest = await request({
        query: HOMEPAGE_SEO_QUERY,
    });

    if (!graphqlRequest) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            productData: graphqlRequest,
            seoData: seoRequest,
        },
    };
}
