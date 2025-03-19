import React, { useState, useEffect } from 'react';
import Navbar from './Homepage-componets/Navbar-component.jsx';
import ClickerComponent from './Homepage-componets/Clicker-component.jsx';
import BuyMenu from './Homepage-componets/Buymenu-component.jsx';
import InfoPage from '../infopage/infopage.jsx';
import LegacyPage from '../legacypage/legacypage.jsx';
import items from './Homepage-componets/items.json'; // Import items data
import upgrades from './Homepage-componets/upgrades.json'; // Import upgrades data
import './Homepage.css';

const Homepage = () => {
    const [cookies, setCookies] = useState(0);
    const [cps, setCps] = useState(0);
    const [totalCookies, setTotalCookies] = useState(0);
    const [showInfoPage, setShowInfoPage] = useState(false);
    const [showLegacyPage, setShowLegacyPage] = useState(false);
    const [itemCpsMultiplier, setItemCpsMultiplier] = useState(1);
    const [clickPower, setClickPower] = useState(1); 
    const [itemsBought, setItemsBought] = useState(new Array(items.length).fill(0));
    const [upgradesBought, setUpgradesBought] = useState(new Array(upgrades.length).fill(0));

    const handleClick = () => {
        setCookies(cookies + clickPower);
        setTotalCookies(totalCookies + clickPower);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCookies((prevCookies) => {
                const newCookies = prevCookies + cps;
                setTotalCookies(totalCookies + cps);
                return newCookies;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [cps, totalCookies]);

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

    const handleItemBought = (index) => {
        const newItemsBought = [...itemsBought];
        newItemsBought[index] += 1;
        setItemsBought(newItemsBought);
    };

    const handleUpgradeBought = (index) => {
        const newUpgradesBought = [...upgradesBought];
        newUpgradesBought[index] += 1;
        setUpgradesBought(newUpgradesBought);
    };

    return (
        <main>
            <section>
                <div className="game-container">
                    <ClickerComponent cookies={cookies} handleClick={handleClick} cps={cps} clickPower={clickPower} />
                    <BuyMenu 
                        cookies={cookies} 
                        setCookies={setCookies} 
                        cps={cps} 
                        setCps={setCps} 
                        itemCpsMultiplier={itemCpsMultiplier} 
                        clickPower={clickPower} 
                        setClickPower={setClickPower} 
                        onItemBought={handleItemBought}
                        onUpgradeBought={handleUpgradeBought}
                    />
                </div>
                <div className="navbar">
                    <Navbar onInfoClick={handleInfoClick} onLegacyClick={handleLegacyClick} />
                </div>
            </section>
            {showInfoPage && <InfoPage onClose={handleCloseInfoPage} totalCookies={totalCookies} itemsBought={itemsBought} upgradesBought={upgradesBought} />}
            {showLegacyPage && <LegacyPage onClose={handleCloseLegacyPage} cookies={cookies} setCookies={setCookies} cps={cps} setCps={setCps} setItemCpsMultiplier={setItemCpsMultiplier} />}
        </main>
    );
};

export default Homepage;