import React, { useState, useEffect } from 'react';
import '../Homepage.css';

const ClickerComponent = ({ cookies, handleClick, cps, clickPower }) => {
    const [clicksPerSecond, setClicksPerSecond] = useState(0);
    const [lastClickTime, setLastClickTime] = useState(null);

    const handleClickInternal = () => {
        const now = Date.now();
        if (lastClickTime) {
            const timeDiff = (now - lastClickTime) / 1000;
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
        <div className="clicker">
            <p className='sub-header'>cookies: {cookies.toFixed(1)}</p>
            <p className='sub-header'>cookies per second: {totalCps.toFixed(1)}</p>
            <p className='sub-header'>click power: {clickPower}</p> {/* Display click power */}
            <button className="cookie" onClick={handleClickInternal}></button>
        </div>
    );
};

export default ClickerComponent;