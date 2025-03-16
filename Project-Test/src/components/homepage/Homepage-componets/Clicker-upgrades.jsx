import React, { useState } from 'react';

const ClickerUpgrades = ({ cookies, setCookies, clickPower, setClickPower }) => {
    const upgrades = [
        { name: 'Double Click Power', cost: 100, multiplier: 2 },
        { name: 'Triple Click Power', cost: 500, multiplier: 3 },
        { name: 'Quadruple Click Power', cost: 1000, multiplier: 4 },
    ];

    const buyUpgrade = (upgrade) => {
        if (cookies >= upgrade.cost) {
            setCookies(cookies - upgrade.cost);
            setClickPower(clickPower * upgrade.multiplier);
        } else {
            alert('Not enough cookies!');
        }
    };

    return (
        <div>
            <h1 className='sub-header'>Clicker Upgrades</h1>
            <ul className='item-list'>
                {upgrades.map((upgrade, index) => (
                    <li key={index}>
                        <button 
                            onClick={() => buyUpgrade(upgrade)} 
                            disabled={cookies < upgrade.cost}
                        >
                            {upgrade.name} - Cost: {upgrade.cost} cookies
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClickerUpgrades;