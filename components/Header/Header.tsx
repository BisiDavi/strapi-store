import React from "react";
import { AlertBanner, Nav, PromoBanner } from "..";

const Header = ({ promoDisplay, promoHandler }) => {
    return (
        <div className="header">
            {promoDisplay && <AlertBanner displayHandler={promoHandler} />}
            <PromoBanner />
            <Nav />
        </div>
    );
};

export default Header;
