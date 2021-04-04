import { useState, useEffect } from "react";

const useScrollbarState = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        offset > 200 ? setScrolled(true) : setScrolled(false);
    };

    useEffect(() => {
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return scrolled;
};

export default useScrollbarState;
