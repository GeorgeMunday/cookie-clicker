import React, { useState } from 'react';
import '../Homepage.css';

const BuyMenu = ({ cookies, setCookies, cps, setCps }) => {
    const [items] = useState([
        { name: 'Cursor', cost: 15, cps: 0.1 },
        { name: 'Grandma', cost: 100, cps: 1 },
        { name: 'Farm', cost: 500, cps: 8 },
    ]);

    const buyItem = (item) => {
        if (cookies >= item.cost) {
            setCookies(cookies - item.cost);
            setCps(cps + item.cps);
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
                        <button onClick={() => buyItem(item)}>
                            {item.name} - Cost: {item.cost} cookies, CPS: {item.cps}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BuyMenu;