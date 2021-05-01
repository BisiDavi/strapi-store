import React from "react";
import { AlertBanner, Nav, PromoBanner } from "..";

const Header = ({ promoDisplay, promoHandler }) => {
    return (
        <header className="header">
            {promoDisplay && <AlertBanner displayHandler={promoHandler} />}
            <PromoBanner />
            <Nav />
        </header>
    );
};

export default Header;
