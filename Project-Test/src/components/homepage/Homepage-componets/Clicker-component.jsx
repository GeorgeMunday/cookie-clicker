import React, { useState, useEffect } from 'react';
import '../Homepage.css';

const ClickerComponent = ({ cookies, handleClick, cps }) => {
    const [clicksPerSecond, setClicksPerSecond] = useState(0);
    const [lastClickTime, setLastClickTime] = useState(null);

    const handleClickInternal = () => {
        const now = Date.now();
        if (lastClickTime) {
            const timeDiff = (now - lastClickTime) / 1000; // time difference in seconds
            setClicksPerSecond(1 / timeDiff);
        }
        setLastClickTime(now);
        handleClick();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setClicksPerSecond(0);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const totalCps = cps + clicksPerSecond;

    return (
        <div>
            <p>Cookies: {cookies}</p>
            <p> cookies per second: {totalCps.toFixed(2)}</p>
            <button className="cookie" onClick={handleClickInternal}>Click me!</button>
        </div>
    );
};

export default ClickerComponent;