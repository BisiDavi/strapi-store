import { AlertBanner, Nav, PromoBanner } from '..';

export default function Header({ promoDisplay, promoHandler }) {
    return (
        <header className='header'>
            {promoDisplay && <AlertBanner displayHandler={promoHandler} />}
            <PromoBanner />
            <Nav />
        </header>
    );
}
