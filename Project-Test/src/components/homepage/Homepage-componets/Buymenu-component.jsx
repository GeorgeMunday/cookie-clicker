import React, { useState, useEffect } from 'react';
import items from './items.json';
import '../Homepage.css';

const BuyMenu = ({ cookies, setCookies, cps, setCps, itemCpsMultiplier }) => {
    const [itemCosts, setItemCosts] = useState(items.map(item => item.cost));
    const [visibleItems, setVisibleItems] = useState(new Array(items.length).fill(false));

    useEffect(() => {
        const newVisibleItems = visibleItems.map((visible, index) => visible || cookies >= itemCosts[index] / 2);
        if (JSON.stringify(newVisibleItems) !== JSON.stringify(visibleItems)) {
            setVisibleItems(newVisibleItems);
        }
    }, [cookies, itemCosts]);

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

    return (
        <div className="buy-menu">
            <h2 className = 'sub-header'>Buy Menu</h2>
            <ul className = 'item-list'>
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
            </ul>
        </div>
    );
};

export default BuyMenu;