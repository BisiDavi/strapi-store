import React from "react";
import { Button } from "../components";
import { Pagelayout } from "../container";

const InstagramAccess = () => {
    return (
        <Pagelayout title="link-to-instagram">
            <h1 className="text-center">
                Hello Jennifer, to link you site to instagram and display your
                instagram post on your site, click on the button below
            </h1>

            <Button text="Link to Instagrm" />
        </Pagelayout>
    );
};

export default InstagramAccess;
