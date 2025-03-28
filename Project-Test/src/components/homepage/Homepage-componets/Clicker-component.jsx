import React, { useState, useEffect } from 'react';
import '../Homepage.css';
import ClickerUpgrades from './Clicker-upgrades.jsx';

const ClickerComponent = ({ cookies, setCookies, cps }) => {
    const [clicksPerSecond, setClicksPerSecond] = useState(0);
    const [lastClickTime, setLastClickTime] = useState(null);
    const [clickPower, setClickPower] = useState(1);

    const handleClickInternal = () => {
        const now = Date.now();
        if (lastClickTime) {
            const timeDiff = (now - lastClickTime) / 1000;
            setClicksPerSecond(1 / timeDiff);
        }
        setLastClickTime(now);
        setCookies(cookies + clickPower);
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
            <button className="cookie" onClick={handleClickInternal}></button>
            <ClickerUpgrades cookies={cookies} setCookies={setCookies} clickPower={clickPower} setClickPower={setClickPower} />
        </div>
    );
};

export default ClickerComponent;