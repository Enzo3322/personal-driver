import { useState, useEffect } from 'react';

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = typeof window.navigator === 'undefined' ? '' : window.navigator.userAgent;
        const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;

        setIsMobile(!!mobileRegex.test(userAgent));
    }, []);

    return { isMobile };
}

export default useIsMobile;
