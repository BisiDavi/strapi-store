import React from "react";
import { AlertBanner, Nav, PromoBanner } from "..";

const Header = ({ promoDisplay, promoHandler, productCount }) => {
    return (
        <div className="header">
            {promoDisplay && <AlertBanner displayHandler={promoHandler} />}
            <PromoBanner />
            <Nav productCount={productCount} />
        </div>
    );
};

export default Header;
