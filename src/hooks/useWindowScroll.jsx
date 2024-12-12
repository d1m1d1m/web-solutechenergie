import { useState } from "react";
import { useEffect } from "react";

const useWindowScroll = () => {
    const [scrollYPosition, setScrollYPosition] = useState({ y: 0, lastY: 0 });

    useEffect(() => {
        const onScroll = (e) => {
            setScrollYPosition((prevState) => {
                return {
                    y: window.scrollY,
                    lastY: prevState.y,
                };
            });
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return {
        currentY: scrollYPosition.y,
        setScrollPosition: (num) => window.scrollTo({ top: num }),
        scrollDirection:
            scrollYPosition.y <= scrollYPosition.lastY ? "up" : "down",
    };
};

export default useWindowScroll;
