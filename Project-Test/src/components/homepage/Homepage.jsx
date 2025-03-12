import React, { useState, useEffect } from 'react';
import Navbar from './Homepage-componets/Navbar-component.jsx';
import ClickerComponent from './Homepage-componets/Clicker-component.jsx';
import BuyMenu from './Homepage-componets/Buymenu-component.jsx';
import InfoPage from '../infopage/infopage.jsx';
import LegacyPage from '../legacypage/legacypage.jsx';
import './Homepage.css';

const Homepage = () => {
    const [cookies, setCookies] = useState(0);
    const [cps, setCps] = useState(0);
    const [showInfoPage, setShowInfoPage] = useState(false);
    const [showLegacyPage, setShowLegacyPage] = useState(false);
    const [itemCpsMultiplier, setItemCpsMultiplier] = useState(1);

    const handleClick = () => {
        setCookies(cookies + 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCookies((prevCookies) => prevCookies + cps);
        }, 1000);

        return () => clearInterval(interval);
    }, [cps]);

    const handleInfoClick = () => {
        setShowInfoPage(true);
    };

    const handleCloseInfoPage = () => {
        setShowInfoPage(false);
    };

    const handleLegacyClick = () => {
        setShowLegacyPage(true);
    };

    const handleCloseLegacyPage = () => {
        setShowLegacyPage(false);
    };

    return (
        <main>
            <header>
                <h1>Cookie Clicker</h1>
            </header>
            <div>
                <Navbar onInfoClick={handleInfoClick} onLegacyClick={handleLegacyClick} />
            </div>
            <section>
                <div>
                    <ClickerComponent cookies={cookies} handleClick={handleClick} cps={cps} />
                </div>
                <div>
                    <BuyMenu cookies={cookies} setCookies={setCookies} cps={cps} setCps={setCps} itemCpsMultiplier={itemCpsMultiplier} />
                </div>
            </section>
            {showInfoPage && <InfoPage onClose={handleCloseInfoPage} />}
            {showLegacyPage && <LegacyPage onClose={handleCloseLegacyPage} cookies={cookies} setCookies={setCookies} cps={cps} setCps={setCps} setItemCpsMultiplier={setItemCpsMultiplier} />}
        </main>
    );
};

export default Homepage;