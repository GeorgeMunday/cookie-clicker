import React, { useState, useEffect } from 'react';
import items from './items.json';
import '../Homepage.css';

const BuyMenu = ({ cookies, setCookies, cps, setCps }) => {
    const [itemCosts, setItemCosts] = useState(items.map(item => item.cost));
    const [visibleItems, setVisibleItems] = useState(new Array(items.length).fill(false));

    useEffect(() => {
        const newVisibleItems = visibleItems.map((visible, index) => visible || cookies >= itemCosts[index] / 2);
        setVisibleItems(newVisibleItems);
    }, [cookies, itemCosts, visibleItems]);

    const buyItem = (item, index) => {
        if (cookies >= itemCosts[index]) {
            setCookies(cookies - itemCosts[index]);
            setCps(cps + item.cps);
            const newCosts = [...itemCosts];
            newCosts[index] = Math.round(newCosts[index] * 1.05);
            setItemCosts(newCosts);
        } else {
            alert('Not enough cookies!');
        }
    };

    return (
        <div>
            <h2>Buy Menu</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {(index === 0 || visibleItems[index]) && (
                            <button 
                                onClick={() => buyItem(item, index)} 
                                disabled={cookies < itemCosts[index]}
                            >
                                {item.name} - Cost: {itemCosts[index]} cookies, CPS: {item.cps}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BuyMenu;