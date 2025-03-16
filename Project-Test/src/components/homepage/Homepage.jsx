import React, { useState, useEffect } from 'react';
import Navbar from './Homepage-componets/Navbar-component.jsx';
import ClickerComponent from './Homepage-componets/Clicker-component.jsx';
import BuyMenu from './Homepage-componets/Buymenu-component.jsx';
import InfoPage from '../infopage/infopage.jsx';
import LegacyPage from '../legacypage/legacypage.jsx';
import OptionPage from '../optionspage/optionspage.jsx';
import './Homepage.css';

const Homepage = () => {
    const [cookies, setCookies] = useState(0);
    const [cps, setCps] = useState(0);
    const [showInfoPage, setShowInfoPage] = useState(false);
    const [showLegacyPage, setShowLegacyPage] = useState(false);
    const [showOptionPage, setShowOptionPage] = useState(false);
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

    const handleCloseOptionPage = () => {
        setShowOptionPage(false); // Corrected to setShowOptionPage
    };

    const handleOptionClick = () => {
        setShowOptionPage(true); // Corrected to setShowOptionPage
    };

    return (
        <main>
            <header>
                <div className='title'>
                    <h1>Digging for Cookies</h1>
                </div>
                <div className="navbar">
                    <Navbar onInfoClick={handleInfoClick} onLegacyClick={handleLegacyClick} />
                </div>
            </header>
            <section>
                <div className="game-container">
                    <ClickerComponent cookies={cookies} setCookies={setCookies} handleClick={handleClick} cps={cps} />
                    <BuyMenu cookies={cookies} setCookies={setCookies} cps={cps} setCps={setCps} itemCpsMultiplier={itemCpsMultiplier} />
                </div>
            </section>
            {showInfoPage && <InfoPage onClose={handleCloseInfoPage} />}
            {showLegacyPage && <LegacyPage onClose={handleCloseLegacyPage} cookies={cookies} setCookies={setCookies} cps={cps} setCps={setCps} setItemCpsMultiplier={setItemCpsMultiplier} />}
            {showOptionPage && <OptionPage onClose={handleCloseOptionPage} />}
        </main>
    );
};

export default Homepage;