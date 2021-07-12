import { useState, useEffect } from 'react';

export default function useScrollbarState() {
    const [scrolled, setScrolled] = useState(false);

    function handleScroll() {
        const offset = window.scrollY;
        offset > 200 ? setScrolled(true) : setScrolled(false);
    }

    useEffect(() => {
        handleScroll();

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return scrolled;
}
