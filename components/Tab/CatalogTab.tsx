import React from "react";
import Link from "next/link";

const CatalogTab = () => {
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
                        background-color: black;
                        height: 45px;
                        width: 100%;
                        display: flex;
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
