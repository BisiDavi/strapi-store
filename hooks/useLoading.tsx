import  { useState } from 'react';

export default function useLoading() {
    const [loading, setLoading] = useState(false);

    function startLoading() {
        return setLoading(true);
    }

    function stopLoading() {
        return setLoading(false);
    }

    return {
        startLoading,
        stopLoading,
        loading,
    };
}
