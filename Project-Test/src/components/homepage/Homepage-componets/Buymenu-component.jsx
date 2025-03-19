import React, { useState, useEffect } from 'react';
import items from './items.json';
import upgrades from './upgrades.json'; 
import '../Homepage.css';

const BuyMenu = ({ cookies, setCookies, cps, setCps, itemCpsMultiplier, clickPower, setClickPower }) => {
    const [itemCosts, setItemCosts] = useState(items.map(item => item.cost));
    const [visibleItems, setVisibleItems] = useState(new Array(items.length).fill(false));
    const [visibleUpgrades, setVisibleUpgrades] = useState(new Array(upgrades.length).fill(false));
    const [upgradeCosts, setUpgradeCosts] = useState(upgrades.map(upgrade => upgrade.cost));

    useEffect(() => {
        const newVisibleItems = visibleItems.map((visible, index) => visible || cookies >= itemCosts[index] / 2);
        const lowestCostItemIndex = itemCosts.indexOf(Math.min(...itemCosts));
        newVisibleItems[lowestCostItemIndex] = true;
        if (JSON.stringify(newVisibleItems) !== JSON.stringify(visibleItems)) {
            setVisibleItems(newVisibleItems);
        }
    }, [cookies, itemCosts, visibleItems]);

    useEffect(() => {
        const newVisibleUpgrades = visibleUpgrades.map((visible, index) => visible || cookies >= upgradeCosts[index] / 2);
        const lowestCostUpgradeIndex = upgradeCosts.indexOf(Math.min(...upgradeCosts));
        newVisibleUpgrades[lowestCostUpgradeIndex] = true;
        if (JSON.stringify(newVisibleUpgrades) !== JSON.stringify(visibleUpgrades)) {
            setVisibleUpgrades(newVisibleUpgrades);
        }
    }, [cookies, upgradeCosts, visibleUpgrades]);

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
            setClickPower(clickPower + upgrades[index].clickPowerIncrease); 
            const newCosts = [...upgradeCosts];
            newCosts[index] = Math.round(newCosts[index] * 3);
            setUpgradeCosts(newCosts);
        } else {
            alert('Not enough cookies!');
        }
    };

    const getVisibleItemsAndUpgrades = () => {
        const visibleItemsList = items
            .map((item, index) => ({ ...item, cost: itemCosts[index], index }))
            .filter((item, index) => visibleItems[index]);

        const visibleUpgradesList = upgrades
            .map((upgrade, index) => ({ ...upgrade, cost: upgradeCosts[index], index }))
            .filter((upgrade, index) => visibleUpgrades[index]);

        return [...visibleItemsList, ...visibleUpgradesList].sort((a, b) => a.cost - b.cost);
    };

    const visibleItemsAndUpgrades = getVisibleItemsAndUpgrades();

    return (
        <div className="buy-menu">
            <h2 className='sub-header'>Buy Menu</h2>
            <ul className='item-list'>
                {visibleItemsAndUpgrades.map((item, index) => (
                    <li key={index}>
                        {item.cps !== undefined ? (
                            <button 
                                onClick={() => buyItem(item, item.index)} 
                                disabled={cookies < item.cost}
                            >
                                {item.name} - Cost: {item.cost} cookies 
                            </button>
                        ) : (
                            <button 
                                onClick={() => buyUpgrade(item.index)} 
                                disabled={cookies < item.cost}
                            >
                                Upgrade Click Power - Cost: {item.cost} cookies
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BuyMenu;