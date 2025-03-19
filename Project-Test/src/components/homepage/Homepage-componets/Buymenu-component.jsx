import React, { useState, useEffect } from 'react';
import items from './items.json';
import upgrades from './upgrades.json'; // Import JSON file
import '../Homepage.css';

const BuyMenu = ({ cookies, setCookies, cps, setCps, itemCpsMultiplier, clickPower, setClickPower }) => {
    const [itemCosts, setItemCosts] = useState(items.map(item => item.cost));
    const [visibleItems, setVisibleItems] = useState(new Array(items.length).fill(false));
    const[visibleupgrades,setVisibleupgrades] = useState(new Array(items.length).fill(false))
    const [upgradeCosts, setUpgradeCosts] = useState(upgrades.map(upgrade => upgrade.cost));

    useEffect(() => {
        const newVisibleItems = visibleItems.map((visible, index) => visible || cookies >= itemCosts[index] / 2);
        if (JSON.stringify(newVisibleItems) !== JSON.stringify(visibleItems)) {
            setVisibleItems(newVisibleItems);
        }
    }, [cookies, upgradeCosts, visibleupgrades]);

    useEffect(() => {
        const newVisibleupgrades = visibleupgrades.map((visible, index) => visible || cookies >= upgradeCosts[index] / 2);
        if (JSON.stringify(newVisibleupgrades) !== JSON.stringify(visibleupgrades)) {
            setVisibleupgrades(newVisibleupgrades);
        }
    }, [cookies, itemCosts, visibleItems]);

    const buyItem = (item, index) => {
        if (cookies >= itemCosts[index]) {
            setCookies(cookies - itemCosts[index]);
            setCps(cps + item.cps * itemCpsMultiplier);
            const newCosts = [...itemCosts];
            newCosts[index] = Math.round(newCosts[index] * 1.05);
            setItemCosts(newCosts);
        } else {
            alert('Not enough cookies!');
        }
    };

    const buyUpgrade = (index) => {
        if (cookies >= upgradeCosts[index]) {
            setCookies(cookies - upgradeCosts[index]);
            setClickPower(clickPower + upgrades[index].clickPowerIncrease); // Use clickPowerIncrease from upgrades.json
            const newCosts = [...upgradeCosts];
            newCosts[index] = Math.round(newCosts[index] * 1.5);
            setUpgradeCosts(newCosts);
        } else {
            alert('Not enough cookies!');
        }
    };

    return (
        <div className="buy-menu">
            <h2 className='sub-header'>Buy Menu</h2>
            <ul className='item-list'>
                {items.map((item, index) => (
                    <li key={index}>
                        {(index === 0 || visibleItems[index]) && (
                            <button 
                                onClick={() => buyItem(item, index)} 
                                disabled={cookies < itemCosts[index]}
                            >
                                {item.name} - Cost: {itemCosts[index]} cookies 
                            </button>
                        )}
                    </li>
                ))}
                {upgradeCosts.map((cost, index) => (
                    <li key={index + items.length}>
                        {(index === 0  || visibleupgrades[index]) && (
                        <button 
                            onClick={() => buyUpgrade(index)} 
                            disabled={cookies < cost}
                        >
                            Upgrade Click Power - Cost: {cost} cookies
                        </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BuyMenu;