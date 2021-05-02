import React from "react";
import Link from "next/link";
import { useScrollbarState } from "../../hooks";

const CatalogTab = () => {
    const scrolled = useScrollbarState();
    const tabPosition = scrolled
        ? { position: "fixed", top: 0 }
        : { position: "relative", top: "unset" };
    const tabLinks = [
        { name: "Home", link: "/" },
        { name: "Catalog", link: "/collection/all" },
    ];
    const displayLink = () =>
        tabLinks.map((tablink, index) => (
            <span className="mx-2" key={index}>
                <Link href={tablink.link} passHref>
                    <a>{tablink.name}</a>
                </Link>
                <style jsx>
                    {`
                        a {
                            color: white;
                            font: 700 normal 20px/22px "Karla";
                        }
                        @media (max-width: 768px) {
                            a {
                                font: 700 normal 16px/20px "Karla";
                            }
                        }
                    `}
                </style>
            </span>
        ));

    return (
        <div className="catalogTab">
            {displayLink()}
            <style jsx>
                {`
                    .catalogTab {
                        position: ${tabPosition.position};
                        top: ${tabPosition.top};
                        background-color: black;
                        height: 45px;
                        width: 100%;
                        display: flex;
                        z-index: 1000;
                        align-items: center;
                        margin: auto;
                        justify-content: center;
                    }
                `}
            </style>
        </div>
    );
};

export default CatalogTab;
