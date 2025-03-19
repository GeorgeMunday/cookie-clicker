import React from 'react';
import './infopage.css';

const InfoPage = ({ onClose, totalCookies, itemsBought, upgradesBought }) => {
    return (
        <div className="info-page">
            <button className="close-btn" onClick={onClose}>Close</button>
            <h1>Information Page</h1>
            <p>Total Cookies Made: {Math.round(totalCookies)}</p>
            <h2>Items Bought:</h2>
            <ul>
                {itemsBought.map((count, index) => (
                    <li key={index}>Item {index + 1}: {count}</li>
                ))}
            </ul>
            <h2>Upgrades Bought:</h2>
            <ul>
                {upgradesBought.map((count, index) => (
                    <li key={index}>Upgrade {index + 1}: {count}</li>
                ))}
            </ul>
        </div>
    );
};

export default InfoPage;